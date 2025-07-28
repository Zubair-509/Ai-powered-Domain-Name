import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "wouter";
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
import { Copy, Crown, Lightbulb, Quote, Smile, Wand2, Globe, RefreshCw, Shield, Star, CheckCircle, XCircle, ExternalLink, Heart, Zap, Users, TrendingUp } from "lucide-react";

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
    <div className="min-h-screen bg-background fade-in">
      {/* Enhanced Futuristic Header */}
      <header className="glass-card border-b border-white/10 sticky top-0 z-50 slide-up backdrop-blur-xl bg-background/80">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
        <div className="relative max-w-7xl mx-auto container-responsive">
          <div className="flex justify-between items-center py-4 sm:py-6">
            {/* Enhanced Brand Section */}
            <div className="flex items-center min-w-0 flex-1">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 neon-border rounded-xl flex items-center justify-center float hover-glow transition-all duration-300 bg-gradient-to-br from-primary/20 to-primary-dark/20 backdrop-blur-sm">
                  <Crown className="text-primary w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 pulse-gentle" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold hologram truncate tracking-wide">MillionaireDomains</h1>
                  <p className="text-xs sm:text-sm text-muted-foreground/80 font-medium tracking-wider hidden sm:block">NEURAL DOMAIN ARCHITECTURE</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced Navigation Pills */}
            <nav className="hidden sm:flex items-center space-x-1 lg:space-x-2">
              <div className="flex items-center space-x-1 lg:space-x-2 glass-card rounded-full px-2 py-1 neon-border-subtle bg-gradient-to-r from-primary/5 to-primary-dark/5 backdrop-blur-sm">
                <div className="px-3 py-2 lg:px-4 lg:py-2 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-xs lg:text-sm hover-glow transition-all duration-300 shadow-lg">
                  <span className="hologram">Home</span>
                </div>
                <a href="#features" className="px-3 py-2 lg:px-4 lg:py-2 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 relative group text-xs lg:text-sm font-medium">
                  <span className="hologram">Features</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </a>
                <Link href="/about" className="px-3 py-2 lg:px-4 lg:py-2 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 relative group text-xs lg:text-sm font-medium">
                  <span className="hologram">About</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </Link>
                <Link href="/contact" className="px-3 py-2 lg:px-4 lg:py-2 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 relative group text-xs lg:text-sm font-medium">
                  <span className="hologram">Contact</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </Link>
              </div>
            </nav>

            {/* Enhanced Mobile Menu Button */}
            <div className="sm:hidden">
              <div className="w-8 h-8 neon-border rounded-lg flex items-center justify-center hover-glow transition-all duration-300 bg-gradient-to-br from-primary/20 to-primary-dark/20 backdrop-blur-sm cursor-pointer">
                <div className="space-y-1">
                  <div className="w-4 h-0.5 bg-primary hologram transition-all duration-300"></div>
                  <div className="w-4 h-0.5 bg-primary hologram transition-all duration-300"></div>
                  <div className="w-4 h-0.5 bg-primary hologram transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative cyber-grid py-12 sm:py-20 lg:py-32 overflow-hidden">
        {/* Neural Network Background */}
        <div className="absolute inset-0 neural-network">
          <div className="absolute top-0 left-0 w-full h-full plasma-bg"></div>
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full filter blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-responsive">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 glass-card rounded-full font-medium text-xs sm:text-sm mb-6 sm:mb-8 pulse-gentle hover-lift transition-all duration-300 neon-border">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 bounce-gentle text-primary" />
              <span className="hologram">Neural Framework Architecture</span>
            </div>
            <h2 className="hero-heading font-bold mb-6 sm:mb-8 slide-up">
              <span className="hologram block">Domain Genesis</span>
              <span className="text-lg sm:text-2xl md:text-3xl font-normal text-muted-foreground block mt-2">
                AI-Powered Brand Evolution
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground/80 mb-8 sm:mb-12 max-w-4xl mx-auto slide-up leading-relaxed px-4" style={{ animationDelay: '0.2s' }}>
              Harness quantum-level naming algorithms powered by proven millionaire frameworks.
              <span className="hidden sm:inline"> Transform concepts into digital empires through neural domain synthesis.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Generator Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Generator Form */}
          <Card className="mb-12 overflow-hidden hover-lift transition-all duration-500 scale-in glass-card neon-border">
            <CardHeader className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20"></div>
              <div className="relative z-10">
                <CardTitle className="text-3xl font-bold slide-in-left hologram">Neural Generator</CardTitle>
                <CardDescription className="text-muted-foreground mt-2 slide-in-right" style={{ animationDelay: '0.2s' }}>
                  Initialize your brand concept for quantum domain synthesis
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-8 slide-up bg-card/50" style={{ animationDelay: '0.3s' }}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="productDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-foreground">Concept Input</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Neural network-powered productivity platform for digital nomads..."
                            className="min-h-[140px] resize-none transition-all duration-300 glass-card border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-muted-foreground">
                          Define your digital empire with precision - target matrix and value synthesis required
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
                        <FormLabel className="text-lg font-semibold text-foreground">Neural Tone Matrix</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="glass-card border-primary/30 hover:border-primary/50 focus:border-primary transition-all duration-300">
                              <SelectValue placeholder="Initialize tone parameters (optional)" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="glass-card border-primary/30">
                            <SelectItem value="Funny">Quantum Humor</SelectItem>
                            <SelectItem value="Trendy">Neo-Viral</SelectItem>
                            <SelectItem value="Minimalist">Ultra-Clean</SelectItem>
                            <SelectItem value="Straightforward">Direct-Access</SelectItem>
                            <SelectItem value="Edgy">Cyber-Edge</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-muted-foreground">
                          Configure brand personality neural pathways
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
                        <FormLabel className="text-lg font-semibold text-foreground">Architectural Pattern</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="glass-card border-primary/30 hover:border-primary/50 focus:border-primary transition-all duration-300">
                              <SelectValue placeholder="Select synthesis architecture (optional)" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="glass-card border-primary/30">
                            <SelectItem value="Open to All">Omni-Architecture</SelectItem>
                            <SelectItem value="One word">Mono-Core</SelectItem>
                            <SelectItem value="Phrase">Multi-Phrase</SelectItem>
                            <SelectItem value="Two Word Combo">Dual-Link</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-muted-foreground">
                          Define domain structural composition patterns
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />


                  
                  <div className="flex flex-col items-center space-y-6">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground glass-card px-4 py-2 rounded-full neon-border">
                      <Shield className="w-4 h-4 text-primary pulse-gentle" />
                      <span className="hologram">Powered by Gemini Neural Network</span>
                    </div>
                    <Button
                      type="submit"
                      disabled={generateMutation.isPending}
                      className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-500 hover:scale-105 neon-border px-12 py-4 text-lg font-semibold rounded-xl"
                    >
                      {generateMutation.isPending ? (
                        <>
                          <RefreshCw className="w-5 h-5 mr-3 animate-spin" />
                          <span className="hologram">Synthesizing...</span>
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-5 h-5 mr-3" />
                          <span className="hologram">Initialize Genesis</span>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Neural Processing State */}
          {generateMutation.isPending && (
            <Card className="p-12 text-center scale-in hover-lift glass-card neon-border">
              <div className="inline-flex items-center justify-center w-20 h-20 glass-card rounded-full mb-6 neon-border pulse-gentle">
                <RefreshCw className="w-10 h-10 text-primary animate-spin" />
              </div>
              <h3 className="text-2xl font-bold hologram mb-4 slide-up">Neural Synthesis Active</h3>
              <p className="text-muted-foreground text-lg slide-up shimmer" style={{ animationDelay: '0.2s' }}>
                Quantum algorithms processing millionaire framework matrices
              </p>
              <div className="mt-8 flex justify-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-primary rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </Card>
          )}

          {/* Neural Output Matrix */}
          {domains.length > 0 && !generateMutation.isPending && (
            <div className="slide-up">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h3 className="text-3xl font-bold hologram slide-in-left">Domain Genesis Complete</h3>
                  <div className="flex items-center space-x-3 mt-2 slide-in-right" style={{ animationDelay: '0.2s' }}>
                    <Badge variant="secondary" className="glass-card neon-border text-primary hover-lift transition-all duration-300">
                      Neural Framework Synthesis
                    </Badge>
                    {isDemoMode && (
                      <p className="text-sm text-muted-foreground flex items-center glass-card px-3 py-1 rounded-full">
                        <Shield className="w-4 h-4 mr-2 text-primary" />
                        Demo mode active - Full neural capacity pending
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={regenerate}
                  className="glass-card neon-border hover:bg-primary/20 transition-all duration-300 hover:scale-105"
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
                    <Card 
                      key={index} 
                      className="glass-card neon-border hover:shadow-xl transition-all duration-500 hover-lift hover-scale scale-in hover-glow"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <Badge variant="secondary" className={`${colorClass} border glass-card neon-border`}>
                            <IconComponent className="w-3 h-3 mr-1" />
                            {domain.style}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(domain.name)}
                            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-12"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-xl sm:text-2xl font-bold hologram mb-2 break-words">{domain.name}</h4>
                          <div className="inline-flex items-center px-3 py-1 glass-card rounded-lg neon-border">
                            <Globe className="w-4 h-4 mr-2 text-primary" />
                            <span className="text-sm font-medium text-foreground break-all">{domain.domain}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">{domain.rationale}</p>
                        
                        <Separator className="mb-4" />
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-muted-foreground/60 hologram">Neural Suggestion</span>
                            {domain.isAvailable === true && (
                              <Badge variant="secondary" className="glass-card border-green-400 text-green-400 neon-border">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Available
                              </Badge>
                            )}
                            {domain.isAvailable === false && (
                              <Badge variant="secondary" className="glass-card border-red-400 text-red-400 neon-border">
                                <XCircle className="w-3 h-3 mr-1" />
                                Taken
                              </Badge>
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(domain.domain)}
                              className="text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 hover-lift text-xs sm:text-sm w-full sm:w-auto"
                            >
                              <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              Copy Domain
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => checkDomainAvailability(domain.domain, index)}
                              disabled={checkingDomains.has(domain.domain)}
                              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 hover-lift text-xs sm:text-sm w-full sm:w-auto"
                            >
                              {checkingDomains.has(domain.domain) ? (
                                <>
                                  <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 mr-1 animate-spin" />
                                  Scanning...
                                </>
                              ) : (
                                <>
                                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                  Check Availability
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                        
                        {/* Alternative Neural Suggestions */}
                        {domain.isAvailable === false && domain.alternatives && domain.alternatives.length > 0 && (
                          <div className="mt-4 p-4 glass-card border border-orange-400/30 rounded-lg">
                            <h5 className="text-sm font-semibold text-orange-400 mb-2 hologram">Alternative Neural Domains:</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {domain.alternatives.map((alternative, altIndex) => (
                                <div key={altIndex} className="flex items-center justify-between p-2 glass-card rounded neon-border">
                                  <span className="text-xs sm:text-sm text-foreground break-all flex-1 mr-2">{alternative}</span>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => copyToClipboard(alternative)}
                                    className="text-xs text-primary hover:text-primary/80 flex-shrink-0"
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

      {/* Neural Framework Matrix */}
      <section id="features" className="py-12 sm:py-20 relative cyber-grid">
        <div className="absolute inset-0 neural-network opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto container-responsive">
          <div className="text-center mb-12 sm:mb-16 slide-up">
            <h3 className="heading-responsive font-bold hologram mb-4 sm:mb-6">Neural Architecture Protocols</h3>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground/80 max-w-3xl mx-auto px-4" style={{ animationDelay: '0.2s' }}>
              Advanced millionaire framework matrices implemented through quantum-level brand synthesis algorithms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="text-center hover-lift transition-all duration-500 scale-in glass-card card-responsive rounded-xl neon-border" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 glass-card rounded-xl mb-4 sm:mb-6 hover:scale-110 transition-all duration-300 pulse-gentle neon-border">
                <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold hologram mb-3 sm:mb-4">Direct-Access Protocol</h4>
              <p className="text-muted-foreground/80 leading-relaxed text-sm sm:text-base">Ultra-clear neural pathways that instantly transmit value matrices to target consciousness nodes</p>
            </div>
            
            <div className="text-center hover-lift transition-all duration-500 scale-in glass-card card-responsive rounded-xl neon-border" style={{ animationDelay: '0.3s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 glass-card rounded-xl mb-4 sm:mb-6 hover:scale-110 transition-all duration-300 pulse-gentle neon-border">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold hologram mb-3 sm:mb-4">Cultural-Sync Framework</h4>
              <p className="text-muted-foreground/80 leading-relaxed text-sm sm:text-base">Quantum-entangled cultural resonance patterns that trigger viral amplification cascades</p>
            </div>
            
            <div className="text-center hover-lift transition-all duration-500 scale-in glass-card card-responsive rounded-xl neon-border" style={{ animationDelay: '0.5s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 glass-card rounded-xl mb-4 sm:mb-6 hover:scale-110 transition-all duration-300 pulse-gentle neon-border">
                <Smile className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold hologram mb-3 sm:mb-4">Humor-Viral Architecture</h4>
              <p className="text-muted-foreground/80 leading-relaxed text-sm sm:text-base">Meme-optimized neural networks engineered for maximum shareability and viral penetration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 slide-up">
        <div className="max-w-7xl mx-auto container-responsive">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 md:col-span-2 slide-in-left">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center float hover-glow transition-all duration-300">
                  <Crown className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">MillionaireDomains</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Premium Domain Generator</p>
                </div>
              </div>
              <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 max-w-md">
                Discover powerful domain names using proven naming frameworks from successful entrepreneurs. 
                Turn your ideas into million-dollar brands.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 pulse-gentle" />
                  <span>Powered by Gemini AI</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 pulse-gentle" />
                  <span>Made with passion</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="slide-in-right" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#features" className="text-gray-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base">
                    Features
                  </a>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Stats Section */}
            <div className="slide-in-right" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Success Metrics</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">10,000+</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Domains Generated</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">2,500+</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Happy Entrepreneurs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">98%</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Framework Highlight */}
          <div className="border-t border-gray-700 pt-6 sm:pt-8 mb-6 sm:mb-8 scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Built on Greg Isenberg's Proven Framework</h4>
              <div className="flex justify-center items-center space-x-4 sm:space-x-8 flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  </div>
                  <span className="text-xs sm:text-sm">Descriptive</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  </div>
                  <span className="text-xs sm:text-sm">Phrase-Based</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Smile className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-xs sm:text-sm">Humorous</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-6 sm:pt-8 fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                © 2025 MillionaireDomains. All rights reserved. Transforming ideas into million-dollar brands.
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm hover:scale-105 transform">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm hover:scale-105 transform">
                  Terms of Service
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm hover:scale-105 transform">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
