import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateDomainSuggestions } from "./services/gemini";

import { checkDomainWithAIAlternatives } from "./services/domainAvailability";
import { domainGenerationRequestSchema, domainAvailabilityRequestSchema, type DomainSuggestion } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Domain generation endpoint
  app.post("/api/generate-domains", async (req, res) => {
    try {
      // Validate request body
      const { productDescription, tonePreference, stylePreference } = domainGenerationRequestSchema.parse(req.body);

      // Generate domains using Gemini AI
      const domains = await generateDomainSuggestions(productDescription, tonePreference, stylePreference);

      // Store generation in memory (optional)
      await storage.createDomainGeneration({
        productDescription,
        generatedDomains: JSON.stringify(domains),
      });

      res.json({ domains });
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
