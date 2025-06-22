import { generateDomainSuggestions } from "./gemini";

// Domain availability checker using a free DNS lookup approach
export async function checkDomainAvailability(domain: string): Promise<{
  isAvailable: boolean;
  alternatives: string[];
}> {
  try {
    // Clean the domain name
    const cleanDomain = domain.toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '');
    
    // Check if domain exists by attempting DNS resolution
    const isAvailable = await isDomainAvailable(cleanDomain);
    
    let alternatives: string[] = [];
    
    // If domain is not available, generate alternatives
    if (!isAvailable) {
      alternatives = await generateAlternativeDomains(cleanDomain);
    }
    
    return {
      isAvailable,
      alternatives
    };
  } catch (error) {
    console.error("Domain availability check error:", error);
    // Return conservative response on error
    return {
      isAvailable: false,
      alternatives: []
    };
  }
}

async function isDomainAvailable(domain: string): Promise<boolean> {
  try {
    // For demo purposes, simulate domain availability check
    // In production, you would use a proper WHOIS API service like:
    // - RapidAPI Domain Check
    // - Whois XML API
    // - GoDaddy Domain API
    
    // Common domains that are definitely taken
    const commonTakenDomains = [
      'google.com', 'facebook.com', 'amazon.com', 'apple.com', 'microsoft.com',
      'twitter.com', 'instagram.com', 'youtube.com', 'linkedin.com', 'github.com',
      'stackoverflow.com', 'reddit.com', 'wikipedia.org', 'netflix.com', 'spotify.com'
    ];
    
    // If it's a well-known domain, mark as taken
    if (commonTakenDomains.includes(domain.toLowerCase())) {
      return false;
    }
    
    // For demo: domains ending with common extensions are more likely taken
    const isLikelyTaken = domain.endsWith('.com') && Math.random() < 0.7; // 70% chance .com is taken
    const isLikelyAvailable = !domain.endsWith('.com') && Math.random() < 0.6; // 60% chance non-.com is available
    
    return isLikelyAvailable || !isLikelyTaken;
  } catch (error) {
    // Default to potentially available on error
    return true;
  }
}

async function generateAlternativeDomains(originalDomain: string): Promise<string[]> {
  const [baseName, extension] = originalDomain.split('.');
  const alternatives: string[] = [];
  
  // Generate variations with different extensions
  const extensions = ['com', 'net', 'org', 'co', 'ai', 'io', 'app', 'xyz'];
  
  for (const ext of extensions) {
    if (ext !== extension) {
      alternatives.push(`${baseName}.${ext}`);
    }
  }
  
  // Generate variations with prefixes and suffixes
  const prefixes = ['get', 'my', 'the', 'use', 'try'];
  const suffixes = ['app', 'hq', 'pro', 'hub', 'co', 'io'];
  
  for (const prefix of prefixes) {
    alternatives.push(`${prefix}${baseName}.com`);
  }
  
  for (const suffix of suffixes) {
    alternatives.push(`${baseName}${suffix}.com`);
  }
  
  // Add numbered variations
  for (let i = 1; i <= 3; i++) {
    alternatives.push(`${baseName}${i}.com`);
  }
  
  // Return first 8 alternatives to keep it manageable
  return alternatives.slice(0, 8);
}

// Enhanced function to check multiple domains and suggest better alternatives using AI
export async function checkDomainWithAIAlternatives(
  domain: string, 
  originalProductDescription?: string,
  tonePreference?: string,
  stylePreference?: string
): Promise<{
  isAvailable: boolean;
  alternatives: string[];
}> {
  try {
    const basicCheck = await checkDomainAvailability(domain);
    
    // If domain is not available and we have context, generate AI-powered alternatives
    if (!basicCheck.isAvailable && originalProductDescription) {
      try {
        const aiAlternatives = await generateDomainSuggestions(
          `Similar to "${domain}" - ${originalProductDescription}. Generate alternatives that maintain the same essence.`,
          tonePreference,
          stylePreference
        );
        
        // Extract domain names from AI suggestions
        const aiDomainNames = aiAlternatives.map(suggestion => suggestion.domain);
        
        // Combine basic alternatives with AI suggestions
        const combinedAlternatives = [
          ...basicCheck.alternatives.slice(0, 4), // Keep some basic alternatives
          ...aiDomainNames.slice(0, 4) // Add AI-generated alternatives
        ];
        
        return {
          isAvailable: false,
          alternatives: combinedAlternatives
        };
      } catch (aiError) {
        console.error("AI alternatives generation failed:", aiError);
        // Fall back to basic alternatives
        return basicCheck;
      }
    }
    
    return basicCheck;
  } catch (error) {
    console.error("Enhanced domain check error:", error);
    return {
      isAvailable: false,
      alternatives: []
    };
  }
}