import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const domainGenerations = pgTable("domain_generations", {
  id: serial("id").primaryKey(),
  productDescription: text("product_description").notNull(),
  generatedDomains: text("generated_domains").notNull(), // JSON string
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDomainGenerationSchema = createInsertSchema(domainGenerations).pick({
  productDescription: true,
  generatedDomains: true,
});

export const domainGenerationRequestSchema = z.object({
  productDescription: z.string().min(10, "Product description must be at least 10 characters").max(1000, "Product description too long"),
});

export interface DomainSuggestion {
  name: string;
  style: "Descriptive" | "Phrase-Based" | "Humorous";
  domain: string;
  rationale: string;
}

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertDomainGeneration = z.infer<typeof insertDomainGenerationSchema>;
export type DomainGeneration = typeof domainGenerations.$inferSelect;
export type DomainGenerationRequest = z.infer<typeof domainGenerationRequestSchema>;
