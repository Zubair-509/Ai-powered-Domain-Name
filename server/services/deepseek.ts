import { type DomainSuggestion } from "@shared/schema";

export async function generateDomainSuggestionsWithDeepSeek(
  productDescription: string, 
  tonePreference?: string, 
  stylePreference?: string
): Promise<DomainSuggestion[]> {
  try {
    // Build dynamic prompt based on user preferences and Greg Isenberg's framework
    let toneGuidance = "";
    if (tonePreference) {
      const toneInstructions = {
        "Funny": "Focus on humorous, witty, and meme-worthy names that make people smile and are highly shareable.",
        "Trendy": "Use current slang, pop culture references, and trending phrases that resonate with today's culture.",
        "Minimalist": "Keep names clean, simple, and elegant with minimal words that pass the telephone test easily.",
        "Straightforward": "Create clear, direct names that immediately convey the purpose without confusion.",
        "Edgy": "Use bold, provocative, or unconventional names that stand out and grab attention."
      };
      toneGuidance = `\n**Tone Preference**: ${tonePreference} - ${toneInstructions[tonePreference as keyof typeof toneInstructions]}`;
    }

    let styleGuidance = "";
    if (stylePreference && stylePreference !== "Open to All") {
      const styleInstructions = {
        "One word": "Generate single-word domain names only that are memorable and brandable.",
        "Phrase": "Create phrase-based names with multiple words that form complete thoughts or culturally relevant expressions.",
        "Two Word Combo": "Combine exactly two words to create compound domain names that are easy to remember."
      };
      styleGuidance = `\n**Style Preference**: ${stylePreference} - ${styleInstructions[stylePreference as keyof typeof styleInstructions]}`;
    }

    const prompt = `You are a creative AI trained in branding and viral marketing based on Greg Isenberg's proven naming frameworks used by successful millionaires. Greg emphasizes that startup names need to be "scroll-stopping" in today's attention economy.

Based on Greg Isenberg's framework from his viral naming tutorial, follow these three proven approaches:

**Greg's Three Naming Frameworks:**
1. **Descriptive** – Names that clearly describe what the product does or what the user wants (like "Somewhere I Would Live" which got 838k followers because it immediately tells you what you'll get - beautiful photos of places you'd want to live)
2. **Phrase-Based** – Names using trending or culturally relevant phrases that evoke emotion or identity (like "Boss Babe" which captured a cultural zeitgeist and built millions of followers, or "Main Character" which taps into Gen Z's mindset)
3. **Humorous/Quirky** – Funny or meme-worthy names that are highly shareable and viral (like "You Probably Need a Haircut" which got millions of visits during COVID by making people laugh)

**Greg's Key Principles:**
- Names must "pass the telephone test" (easy to say and spell when telling a friend)
- Avoid "tofu names" that are bland and forgettable (don't take on the flavor of what's around them)
- Pick names that make people want to DO the action, not avoid it (bad example: GameStop makes you want to stop playing games)
- If possible, choose the verb/action you want users to take (like "Bump" for a location sharing app)
- Names should be scroll-stopping and memorable in today's attention economy
${toneGuidance}${styleGuidance}

**Guidelines:**
- Generate 5–10 creative name options using a **mix** of the three Greg Isenberg styles
- Keep names short, memorable, and pass the telephone test (easy to say/spell)
- Avoid generic or "tofu" names (bland, forgettable, hard to associate with emotion)
- Suggest appropriate domain extensions (.com, .ai, .co, .xyz) based on the name's tone
- Highlight the style/framework used for each name

**Input:** ${productDescription}

**Output format (respond with valid JSON only):**
[
  {
    "name": "Generated Name",
    "style": "Descriptive" | "Phrase-Based" | "Humorous",
    "domain": "example.ai",
    "rationale": "Why this works based on Greg Isenberg's framework - be specific about the psychological/cultural appeal"
  }
]`;

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN || process.env.DEEPSEEK_API_KEY || process.env.DEEPSEEK_R1_API}`
      },
      body: JSON.stringify({
        model: 'deepseek-reasoner',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000,
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response structure from DeepSeek API');
    }

    const content = data.choices[0].message.content;
    let suggestions: DomainSuggestion[];
    
    try {
      // Try to parse as array first
      suggestions = JSON.parse(content);
    } catch (parseError) {
      // If that fails, try to extract JSON array from response
      const jsonMatch = content.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        suggestions = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Could not parse JSON from DeepSeek response');
      }
    }
    
    // Validate that we have an array of suggestions
    if (!Array.isArray(suggestions) || suggestions.length === 0) {
      throw new Error("No domain suggestions generated by DeepSeek");
    }

    // Validate each suggestion has the required fields
    const validatedSuggestions = suggestions.filter(suggestion => {
      return suggestion.name && 
             suggestion.style && 
             ["Descriptive", "Phrase-Based", "Humorous"].includes(suggestion.style) &&
             suggestion.domain && 
             suggestion.rationale;
    });

    if (validatedSuggestions.length === 0) {
      throw new Error("No valid domain suggestions generated by DeepSeek");
    }

    return validatedSuggestions;

  } catch (error) {
    console.error("DeepSeek API Error:", error);
    
    if (error instanceof Error) {
      if (error.message.includes('401') || error.message.includes('unauthorized')) {
        throw new Error("Invalid DeepSeek API key. Please check your API key configuration.");
      }
      if (error.message.includes('429') || error.message.includes('quota')) {
        throw new Error("DeepSeek API quota exceeded. Please try again later.");
      }
      throw new Error(`DeepSeek domain generation failed: ${error.message}`);
    }
    
    throw new Error("Unknown error occurred during DeepSeek domain generation");
  }
}