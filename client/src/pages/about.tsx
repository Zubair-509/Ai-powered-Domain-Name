import { Link } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, ArrowLeft, Target, Lightbulb, Users, Zap, Star, Brain, Rocket, Quote, Smile } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background fade-in">
      {/* Enhanced Futuristic Header */}
      <header className="glass-card border-b border-white/10 sticky top-0 z-50 slide-up backdrop-blur-xl bg-background/80">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-6">
            {/* Enhanced Brand Section */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 neon-border rounded-xl flex items-center justify-center float hover-glow transition-all duration-300 bg-gradient-to-br from-primary/20 to-primary-dark/20 backdrop-blur-sm">
                  <Crown className="text-primary w-5 h-5 lg:w-6 lg:h-6 pulse-gentle" />
                </div>
                <div>
                  <Link href="/">
                    <h1 className="text-xl lg:text-2xl font-bold hologram cursor-pointer tracking-wide">MillionaireDomains</h1>
                  </Link>
                  <p className="text-sm text-muted-foreground/80 font-medium tracking-wider">NEURAL DOMAIN ARCHITECTURE</p>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Pills */}
            <nav className="hidden sm:flex items-center space-x-1 lg:space-x-2">
              <div className="flex items-center space-x-1 lg:space-x-2 glass-card rounded-full px-2 py-1 neon-border-subtle bg-gradient-to-r from-primary/5 to-primary-dark/5 backdrop-blur-sm">
                <Link href="/" className="px-3 py-2 lg:px-4 lg:py-2 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 relative group text-xs lg:text-sm font-medium">
                  <span className="hologram">Home</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </Link>
                <a href="/#features" className="px-3 py-2 lg:px-4 lg:py-2 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 relative group text-xs lg:text-sm font-medium">
                  <span className="hologram">Features</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </a>
                <div className="px-3 py-2 lg:px-4 lg:py-2 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-xs lg:text-sm hover-glow transition-all duration-300 shadow-lg">
                  <span className="hologram">About</span>
                </div>
                <Link href="/contact" className="px-3 py-2 lg:px-4 lg:py-2 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 relative group text-xs lg:text-sm font-medium">
                  <span className="hologram">Contact</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 slide-in-left">
        <Link href="/">
          <Button variant="ghost" className="mb-6 hover-lift transition-all duration-300 hover:scale-105 glass-card neon-border">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            Return to Neural Core
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative cyber-grid py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 neural-network">
          <div className="absolute top-0 left-0 w-full h-full plasma-bg"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 glass-card rounded-full font-medium text-sm mb-8 pulse-gentle hover-lift transition-all duration-300 neon-border">
              <Star className="w-4 h-4 mr-2 bounce-gentle text-primary" />
              <span className="hologram">Neural Framework Intelligence</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-bold mb-8 slide-up">
              <span className="hologram">About MillionaireDomains</span>
            </h2>
            <p className="text-xl text-muted-foreground/80 mb-12 max-w-4xl mx-auto slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Advanced neural framework synthesis leveraging proven millionaire naming architectures to construct 
              scroll-stopping domain matrices that crystallize million-dollar brand potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h3 className="text-4xl font-bold hologram mb-8">Neural Mission Protocol</h3>
              <p className="text-lg text-muted-foreground/80 mb-8 slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
                Every digital empire begins with a quantum-level naming decision. Our neural architecture eliminates 
                randomness through systematic application of millionaire-validated naming matrices, ensuring optimal 
                brand synthesis probability.
              </p>
              <p className="text-lg text-muted-foreground/80 slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
                We democratize access to billion-dollar naming frameworks, enabling any consciousness to access 
                premium domain genesis protocols previously reserved for elite entrepreneurs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 slide-in-right">
              <Card className="text-center p-8 hover-lift transition-all duration-500 scale-in glass-card neon-border" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center mx-auto mb-6 pulse-gentle neon-border">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold hologram mb-3">Quantum Precision</h4>
                <p className="text-sm text-muted-foreground/80">Targeted neural pathways calibrated to your specific business matrix</p>
              </Card>
              <Card className="text-center p-8 hover-lift transition-all duration-500 scale-in glass-card neon-border" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center mx-auto mb-6 pulse-gentle neon-border">
                  <Brain className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="font-bold hologram mb-3">Neural Intelligence</h4>
                <p className="text-sm text-muted-foreground/80">Advanced AI consciousness powered by quantum language models</p>
              </Card>
              <Card className="text-center p-8 hover-lift transition-all duration-500 scale-in glass-card neon-border" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center mx-auto mb-6 pulse-gentle neon-border">
                  <Rocket className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="font-bold hologram mb-3">Hyperspeed</h4>
                <p className="text-sm text-muted-foreground/80">Instant synthesis of quantum naming matrices in real-time</p>
              </Card>
              <Card className="text-center p-8 hover-lift transition-all duration-500 scale-in glass-card neon-border" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center mx-auto mb-6 pulse-gentle neon-border">
                  <Zap className="w-8 h-8 text-orange-400" />
                </div>
                <h4 className="font-bold hologram mb-3">Neural Power</h4>
                <p className="text-sm text-muted-foreground/80">Frameworks extracted from million-dollar neural networks</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Architecture Section */}
      <section className="py-20 relative cyber-grid">
        <div className="absolute inset-0 neural-network opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold hologram mb-6">Greg Isenberg's Neural Framework</h3>
            <p className="text-xl text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Our quantum AI implements proven naming strategies from successful entrepreneurs, synthesizing 
              three distinct domain architecture patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Card className="glass-card neon-border hover-lift transition-all duration-500">
              <CardHeader className="text-center p-8">
                <div className="w-20 h-20 glass-card rounded-xl flex items-center justify-center mx-auto mb-6 neon-border pulse-gentle">
                  <Lightbulb className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl hologram mb-4">Direct-Access Protocol</CardTitle>
                <CardDescription className="text-muted-foreground/80 leading-relaxed">
                  Ultra-clear neural pathways that instantly transmit business value to target consciousness nodes.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="glass-card rounded-xl p-4 neon-border">
                    <p className="text-sm font-medium hologram">Neural Example</p>
                    <p className="text-sm text-primary">ProjectTracker.com</p>
                  </div>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    Optimal for B2B neural networks and professional tools where clarity establishes trust matrices.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card neon-border hover-lift transition-all duration-500">
              <CardHeader className="text-center p-8">
                <div className="w-20 h-20 glass-card rounded-xl flex items-center justify-center mx-auto mb-6 neon-border pulse-gentle">
                  <Quote className="w-10 h-10 text-purple-400" />
                </div>
                <CardTitle className="text-2xl hologram mb-4">Cultural-Sync Framework</CardTitle>
                <CardDescription className="text-muted-foreground/80 leading-relaxed">
                  Quantum-entangled cultural resonance patterns that trigger viral amplification cascades.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="glass-card rounded-xl p-4 neon-border">
                    <p className="text-sm font-medium hologram">Neural Example</p>
                    <p className="text-sm text-purple-400">GetOnTheSamePage.com</p>
                  </div>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    Perfect for consumer brand consciousness and viral products requiring shareability matrices.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card neon-border hover-lift transition-all duration-500">
              <CardHeader className="text-center p-8">
                <div className="w-20 h-20 glass-card rounded-xl flex items-center justify-center mx-auto mb-6 neon-border pulse-gentle">
                  <Smile className="w-10 h-10 text-green-400" />
                </div>
                <CardTitle className="text-2xl hologram mb-4">Humor-Viral Architecture</CardTitle>
                <CardDescription className="text-muted-foreground/80 leading-relaxed">
                  Meme-optimized neural networks engineered for maximum shareability and viral penetration.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="glass-card rounded-xl p-4 neon-border">
                    <p className="text-sm font-medium hologram">Neural Example</p>
                    <p className="text-sm text-green-400">NoMoreChaos.io</p>
                  </div>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    Ideal for startup consciousness and products targeting trend-aware neural demographics.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold hologram mb-8">Powered by Neural Consciousness</h3>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-12 neon-border hover-lift transition-all duration-500">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-20 h-20 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                    <Brain className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold hologram mb-6">Gemini Neural Integration</h4>
                <p className="text-muted-foreground/80 mb-8 text-lg leading-relaxed">
                  Our quantum platform interfaces with Google's most advanced neural consciousness to decode 
                  business context matrices and synthesize contextually optimal, brandable domain architectures 
                  following proven millionaire naming patterns.
                </p>
                <div className="flex items-center justify-center space-x-3 glass-card rounded-full px-6 py-3 neon-border">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full pulse-gentle"></div>
                  <span className="text-sm hologram">Real-time domain availability neural scanning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-16 neon-border hover-lift transition-all duration-500 scale-in relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold hologram mb-6 slide-up">Ready to Access Million-Dollar Neural Patterns?</h3>
              <p className="text-xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
                Join thousands of entrepreneurial consciousness nodes who've crystallized their perfect brand identity 
                through our neural-powered domain synthesis platform.
              </p>
              <Link href="/">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-500 hover:scale-110 neon-border px-12 py-4 text-lg font-semibold rounded-xl scale-in" style={{ animationDelay: '0.4s' }}>
                  <span className="hologram">Initialize Domain Genesis</span>
                  <Crown className="w-6 h-6 ml-3 bounce-gentle" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 slide-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 neon-border rounded-xl flex items-center justify-center hover-glow transition-all duration-300">
                <Crown className="text-primary w-6 h-6" />
              </div>
              <span className="text-2xl font-bold hologram">MillionaireDomains</span>
            </div>
            <p className="text-muted-foreground text-lg">
              Premium domain synthesis powered by millionaire neural frameworks and quantum AI consciousness
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}