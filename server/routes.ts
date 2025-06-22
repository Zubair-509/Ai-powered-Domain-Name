import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateDomainSuggestions } from "./services/gemini";
import { generateDomainSuggestionsWithDeepSeek } from "./services/deepseek";
import { checkDomainWithAIAlternatives } from "./services/domainAvailability";
import { domainGenerationRequestSchema, domainAvailabilityRequestSchema, type DomainSuggestion } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Domain generation endpoint
  app.post("/api/generate-domains", async (req, res) => {
    try {
      // Validate request body
      const { productDescription, tonePreference, stylePreference, aiModel } = domainGenerationRequestSchema.parse(req.body);

      // Try to generate domains using selected AI model
      try {
        let domains: DomainSuggestion[];
        
        if (aiModel === "DeepSeek R1") {
          domains = await generateDomainSuggestionsWithDeepSeek(productDescription, tonePreference, stylePreference);
        } else {
          domains = await generateDomainSuggestions(productDescription, tonePreference, stylePreference);
        }

        // Store generation in memory (optional)
        await storage.createDomainGeneration({
          productDescription,
          generatedDomains: JSON.stringify(domains),
        });

        res.json({ domains });
        return;
      } catch (apiError) {
        // If API fails due to quota or other issues, provide demo suggestions
        console.log("API failed, providing demo suggestions:", apiError);
        console.log("Selected AI Model:", aiModel);
        
        // Generate contextual demo suggestions based on the selected AI model and user input
        const demoSuggestions: DomainSuggestion[] = aiModel === "DeepSeek R1" ? [
          {
            name: "You Probably Need a Freelancer",
            style: "Humorous",
            domain: "youneedfreelancer.com",
            rationale: "Following Greg Isenberg's viral 'You Probably Need a Haircut' framework - instantly memorable and shareable with relatable humor."
          },
          {
            name: "Skill Match",
            style: "Descriptive", 
            domain: "skillmatch.ai",
            rationale: "Clearly describes the core function - matching skills. Passes the telephone test and immediately communicates value."
          },
          {
            name: "Main Character Freelancer",
            style: "Phrase-Based",
            domain: "maincharacterfreelancer.co",
            rationale: "Leverages the trending 'main character energy' phrase that resonates with freelancers wanting to own their narrative."
          },
          {
            name: "Dream Team Dot",
            style: "Phrase-Based",
            domain: "dreamteam.xyz",
            rationale: "Culturally loaded phrase for building the perfect team - feels aspirational and scroll-stopping."
          },
          {
            name: "Hustle Buddy",
            style: "Humorous",
            domain: "hustlebuddy.com",
            rationale: "Fun and supportive name that fits startup/freelancer culture - easy to remember and shareable."
          }
        ] : [
          {
            name: "ResumeGenie",
            style: "Descriptive",
            domain: "resumegenie.ai",
            rationale: "Clear, descriptive name that immediately communicates AI-powered resume building with a touch of magic."
          },
          {
            name: "Career Main Character",
            style: "Phrase-Based",
            domain: "careermaincharacter.com",
            rationale: "Leverages Gen Z's 'main character' mindset - positions users as the hero of their career story."
          },
          {
            name: "You Probably Need a Resume",
            style: "Humorous",
            domain: "youneedresume.com",
            rationale: "Playful, viral-ready name inspired by Greg Isenberg's framework - memorable and shareable."
          },
          {
            name: "CV Crafted",
            style: "Descriptive",
            domain: "cvcrafted.co",
            rationale: "Professional yet modern - emphasizes the craftsmanship and attention to detail in resume creation."
          },
          {
            name: "Boss Mode Resumes",
            style: "Phrase-Based",
            domain: "bossmoderesumes.com",
            rationale: "Empowering phrase that resonates with ambitious Gen Z professionals seeking career advancement."
          }
        ];

        res.json({ 
          domains: demoSuggestions,
          demo: true,
          message: aiModel === "DeepSeek R1" 
            ? "DeepSeek R1 API key authentication failed. Please verify your API key at https://platform.deepseek.com/" 
            : "Gemini API temporarily unavailable - showing demo suggestions",
          apiKeyStatus: aiModel === "DeepSeek R1" ? "invalid" : "unavailable"
        });
        return;
      }
    } catch (error) {
      console.error("Error generating domains:", error);
      
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          error: "Invalid request", 
          details: error.errors 
        });
      }

      // Handle specific error cases with better user messaging
      if (error instanceof Error) {
        if (error.message.includes('quota exceeded') || error.message.includes('RESOURCE_EXHAUSTED')) {
          return res.status(429).json({ 
            error: "API usage limit reached. Please try again in a few minutes.",
            retryAfter: 60 // seconds
          });
        }
        
        if (error.message.includes('INVALID_API_KEY')) {
          return res.status(401).json({ 
            error: "API configuration issue. Please contact support."
          });
        }
      }

      res.status(500).json({ 
        error: "Unable to generate domain suggestions right now. Please try again in a moment." 
      });
    }
  });

  // Domain availability check endpoint
  app.post("/api/check-domain", async (req, res) => {
    try {
      const { domain } = domainAvailabilityRequestSchema.parse(req.body);
      
      const availabilityResult = await checkDomainWithAIAlternatives(domain);
      
      res.json(availabilityResult);
    } catch (error) {
      console.error("Error checking domain availability:", error);
      
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          error: "Invalid request", 
          details: error.errors 
        });
      }

      res.status(500).json({ 
        error: "Unable to check domain availability. Please try again." 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
