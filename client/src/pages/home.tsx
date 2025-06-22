import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { domainGenerationRequestSchema, type DomainSuggestion } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Copy, Crown, Lightbulb, Quote, Smile, Wand2, Globe, RefreshCw, Shield, Star, CheckCircle, XCircle, ExternalLink } from "lucide-react";

const frameworkIcons = {
  "Descriptive": Lightbulb,
  "Phrase-Based": Quote,
  "Humorous": Smile,
};

const frameworkColors = {
  "Descriptive": "bg-blue-100 text-blue-800 border-blue-200",
  "Phrase-Based": "bg-purple-100 text-purple-800 border-purple-200", 
  "Humorous": "bg-green-100 text-green-800 border-green-200",
};

export default function Home() {
  const [domains, setDomains] = useState<DomainSuggestion[]>([]);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [checkingDomains, setCheckingDomains] = useState<Set<string>>(new Set());

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(domainGenerationRequestSchema),
    defaultValues: {
      productDescription: "",
      tonePreference: undefined,
      stylePreference: undefined,
    },
  });

  const generateMutation = useMutation({
    mutationFn: async (data: { productDescription: string; tonePreference?: string; stylePreference?: string }) => {
      const response = await apiRequest("POST", "/api/generate-domains", data);
      return response.json();
    },
    onSuccess: (data) => {
      setDomains(data.domains);
      setIsDemoMode(data.demo || false);

      toast({
        title: "Domains Generated!",
        description: `Generated ${data.domains.length} premium domain suggestions.`,
      });
    },
    onError: (error: any) => {
      console.error("Generation error:", error);
      
      // Handle specific error cases
      if (error?.response?.status === 429) {
        toast({
          title: "Rate Limited",
          description: "API usage limit reached. Please try again in a few minutes.",
          variant: "destructive",
        });
      } else if (error?.response?.status === 401) {
        toast({
          title: "Configuration Issue",
          description: "API key needs to be updated. Please contact support.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Generation Failed",
          description: "Unable to generate domains right now. Please try again in a moment.",
          variant: "destructive",
        });
      }
    },
  });

  const onSubmit = (data: { productDescription: string; tonePreference?: string; stylePreference?: string }) => {
    generateMutation.mutate(data);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: `"${text}" copied to clipboard.`,
      });
    });
  };

  const regenerate = () => {
    const formValues = form.getValues();
    if (formValues.productDescription) {
      generateMutation.mutate(formValues);
    }
  };

  const checkDomainAvailability = async (domain: string, index: number) => {
    setCheckingDomains(prev => new Set(prev.add(domain)));
    
    try {
      const response = await apiRequest("POST", "/api/check-domain", { domain });
      const result = await response.json();
      
      // Update the domain in the list with availability info
      setDomains(prevDomains => 
        prevDomains.map((d, i) => 
          i === index 
            ? { ...d, isAvailable: result.isAvailable, alternatives: result.alternatives }
            : d
        )
      );
      
      if (!result.isAvailable) {
        toast({
          title: "Domain Unavailable",
          description: `${domain} is taken. Check the alternatives below.`,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Domain Available!",
          description: `${domain} appears to be available for registration.`,
        });
      }
    } catch (error) {
      console.error("Domain check error:", error);
      toast({
        title: "Check Failed",
        description: "Unable to check domain availability. Please try again.",
        variant: "destructive",
      });
    } finally {
      setCheckingDomains(prev => {
        const newSet = new Set(prev);
        newSet.delete(domain);
        return newSet;
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
                  <Crown className="text-white w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">MillionaireDomains</h1>
                  <p className="text-sm text-gray-500">Premium Domain Generator</p>
                </div>
              </div>
            </div>
            <nav className="hidden sm:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Features</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <Star className="w-4 h-4 mr-2" />
              Based on Millionaire Frameworks
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Generate Domain Names Like a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Millionaire
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover powerful domain names using proven naming frameworks from successful entrepreneurs.
              Get descriptive, phrase-based, and humorous suggestions powered by AI.
            </p>
          </div>
        </div>
      </section>

      {/* Main Generator Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Generator Form */}
          <Card className="mb-12 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary to-primary-dark text-white">
              <CardTitle className="text-2xl">AI Domain Generator</CardTitle>
              <CardDescription className="text-primary-100">
                Describe your product or service to get premium domain suggestions
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="productDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product/Service Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., AI-powered resume builder for Gen Z professionals"
                            className="min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Be specific about your target audience and unique value proposition
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Tone Preferences Dropdown */}
                  <FormField
                    control={form.control}
                    name="tonePreference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tone Preferences</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select tone preference (optional)" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Funny">Funny</SelectItem>
                            <SelectItem value="Trendy">Trendy</SelectItem>
                            <SelectItem value="Minimalist">Minimalist</SelectItem>
                            <SelectItem value="Straightforward">Straightforward</SelectItem>
                            <SelectItem value="Edgy">Edgy</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose the overall tone for your domain suggestions
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Style Preferences Dropdown */}
                  <FormField
                    control={form.control}
                    name="stylePreference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Style Preferences</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select style preference (optional)" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Open to All">Open to All</SelectItem>
                            <SelectItem value="One word">One word</SelectItem>
                            <SelectItem value="Phrase">Phrase</SelectItem>
                            <SelectItem value="Two Word Combo">Two Word Combo</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose the naming style structure you prefer
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />


                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>Powered by Gemini AI</span>
                    </div>
                    <Button
                      type="submit"
                      disabled={generateMutation.isPending}
                      className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {generateMutation.isPending ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-4 h-4 mr-2" />
                          Generate Domains
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Loading State */}
          {generateMutation.isPending && (
            <Card className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <RefreshCw className="w-8 h-8 text-primary animate-spin" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Generating Your Domains...</h3>
              <p className="text-gray-600">Our AI is crafting premium domain suggestions using millionaire frameworks</p>
            </Card>
          )}

          {/* Results Section */}
          {domains.length > 0 && !generateMutation.isPending && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Your Premium Domain Suggestions</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                      Gemini AI (Greg's Framework)
                    </Badge>
                    {isDemoMode && (
                      <p className="text-sm text-amber-600 flex items-center">
                        <Shield className="w-4 h-4 mr-1" />
                        Demo suggestions shown - API temporarily at capacity
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={regenerate}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
              </div>
              
              <div className="space-y-6">
                {domains.map((domain, index) => {
                  const IconComponent = frameworkIcons[domain.style];
                  const colorClass = frameworkColors[domain.style];
                  
                  return (
                    <Card key={index} className="hover:shadow-xl transition-shadow duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <Badge variant="secondary" className={`${colorClass} border`}>
                            <IconComponent className="w-3 h-3 mr-1" />
                            {domain.style}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(domain.name)}
                            className="text-gray-400 hover:text-primary"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">{domain.name}</h4>
                          <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-lg">
                            <Globe className="w-4 h-4 mr-2 text-gray-500" />
                            <span className="text-sm font-medium text-gray-700">{domain.domain}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">{domain.rationale}</p>
                        
                        <Separator className="mb-4" />
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">Domain Suggestion</span>
                            {domain.isAvailable === true && (
                              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Available
                              </Badge>
                            )}
                            {domain.isAvailable === false && (
                              <Badge variant="secondary" className="bg-red-100 text-red-800 border-red-200">
                                <XCircle className="w-3 h-3 mr-1" />
                                Taken
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(domain.domain)}
                              className="text-primary hover:text-primary-dark"
                            >
                              Copy Domain
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => checkDomainAvailability(domain.domain, index)}
                              disabled={checkingDomains.has(domain.domain)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              {checkingDomains.has(domain.domain) ? (
                                <>
                                  <RefreshCw className="w-4 h-4 mr-1 animate-spin" />
                                  Checking...
                                </>
                              ) : (
                                <>
                                  <ExternalLink className="w-4 h-4 mr-1" />
                                  Check Availability
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                        
                        {/* Alternatives Section */}
                        {domain.isAvailable === false && domain.alternatives && domain.alternatives.length > 0 && (
                          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <h5 className="text-sm font-semibold text-yellow-800 mb-2">Alternative Domains Available:</h5>
                            <div className="grid grid-cols-2 gap-2">
                              {domain.alternatives.map((alternative, altIndex) => (
                                <div key={altIndex} className="flex items-center justify-between p-2 bg-white rounded border">
                                  <span className="text-sm text-gray-700">{alternative}</span>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => copyToClipboard(alternative)}
                                    className="text-xs text-primary hover:text-primary-dark"
                                  >
                                    <Copy className="w-3 h-3" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MillionaireDomains?</h3>
            <p className="text-xl text-gray-600">Built on proven frameworks used by successful entrepreneurs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Descriptive Names</h4>
              <p className="text-gray-600">Clear, memorable names that instantly communicate your value proposition</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Quote className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Phrase-Based</h4>
              <p className="text-gray-600">Trendy, culturally relevant phrases that evoke emotion and identity</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Smile className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Humorous & Quirky</h4>
              <p className="text-gray-600">Funny, memorable names that are highly shareable and viral-ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <Crown className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold">MillionaireDomains</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 MillionaireDomains. Powered by Gemini AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
