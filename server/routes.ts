import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateDomainSuggestions } from "./services/gemini";
import { domainGenerationRequestSchema, type DomainSuggestion } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Domain generation endpoint
  app.post("/api/generate-domains", async (req, res) => {
    try {
      // Validate request body
      const { productDescription } = domainGenerationRequestSchema.parse(req.body);

      // Try to generate domains using Gemini API
      try {
        const domains = await generateDomainSuggestions(productDescription);

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
        
        const demoSuggestions: DomainSuggestion[] = [
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
          message: "Demo suggestions provided - API temporarily unavailable"
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

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
