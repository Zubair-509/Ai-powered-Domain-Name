import { GoogleGenAI } from "@google/genai";
import { type DomainSuggestion } from "@shared/schema";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || "AIzaSyBLsUv0NUeG_d8XmkfdRi5NUsHFLcQal4Y" 
});

export async function generateDomainSuggestions(productDescription: string): Promise<DomainSuggestion[]> {
  try {
    const prompt = `You are a creative AI trained in branding and viral marketing. Your task is to generate unique and scroll-stopping domain name ideas based on proven naming frameworks used by successful millionaires like Greg Isenberg.

Frameworks to follow:
1. **Descriptive** – Clearly describes what the product does or what the user wants (e.g., "Somewhere I Would Live").
2. **Phrase-Based** – Uses trending or culturally relevant phrases that evoke emotion or identity (e.g., "Boss Babe", "Main Character").
3. **Humorous/Quirky** – Funny or meme-worthy names that are highly shareable (e.g., "You Probably Need a Haircut").

Guidelines:
- Generate 5–10 creative name options using a **mix** of the three styles.
- Keep the names short, memorable, and **pass the telephone test** (easy to say/spell).
- Avoid generic or "tofu" names (bland, forgettable, hard to associate with a specific emotion).
- Optionally suggest a **domain handle** (e.g., .com, .ai, .co, .xyz) next to each name if it fits the tone.
- Highlight the **style/framework** used for each name (e.g., Descriptive, Phrase-Based, Humorous).

Input: ${productDescription}

Output format:
- Name: [Generated Name]
- Style: [Descriptive / Phrase-Based / Humorous]
- Domain Suggestion: [example.ai]
- Short Rationale: [Why this works based on the framework]

Please respond with valid JSON in the following format:
[
  {
    "name": "Example Name",
    "style": "Descriptive",
    "domain": "example.com",
    "rationale": "Why this works explanation"
  }
]`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              style: { 
                type: "string",
                enum: ["Descriptive", "Phrase-Based", "Humorous"]
              },
              domain: { type: "string" },
              rationale: { type: "string" }
            },
            required: ["name", "style", "domain", "rationale"]
          }
        }
      },
      contents: prompt,
    });

    const rawJson = response.text;
    
    if (!rawJson) {
      throw new Error("Empty response from Gemini API");
    }

    const suggestions: DomainSuggestion[] = JSON.parse(rawJson);
    
    // Validate that we have at least some suggestions
    if (!Array.isArray(suggestions) || suggestions.length === 0) {
      throw new Error("No domain suggestions generated");
    }

    // Validate each suggestion has the required fields and correct types
    const validatedSuggestions = suggestions.filter(suggestion => {
      return suggestion.name && 
             suggestion.style && 
             ["Descriptive", "Phrase-Based", "Humorous"].includes(suggestion.style) &&
             suggestion.domain && 
             suggestion.rationale;
    });

    if (validatedSuggestions.length === 0) {
      throw new Error("No valid domain suggestions generated");
    }

    return validatedSuggestions;

  } catch (error) {
    console.error("Gemini API Error:", error);
    
    // Check if it's a quota exceeded error
    if (error && typeof error === 'object' && 'status' in error && error.status === 429) {
      throw new Error("API quota exceeded. Please try again in a few minutes or upgrade your API plan for higher limits.");
    }
    
    if (error instanceof SyntaxError) {
      throw new Error("Failed to parse domain suggestions from AI response");
    }
    
    if (error instanceof Error) {
      // Extract meaningful error messages from Gemini API errors
      if (error.message.includes('RESOURCE_EXHAUSTED')) {
        throw new Error("API quota exceeded. Please try again later or check your API billing settings.");
      }
      if (error.message.includes('INVALID_API_KEY')) {
        throw new Error("Invalid API key. Please check your Gemini API key configuration.");
      }
      throw new Error(`Domain generation failed: ${error.message}`);
    }
    
    throw new Error("Unknown error occurred during domain generation");
  }
}
