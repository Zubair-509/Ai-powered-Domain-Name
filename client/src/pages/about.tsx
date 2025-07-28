import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, ArrowLeft, Target, Lightbulb, Users, Zap, Star, Brain, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 fade-in">
      {/* Header */}
      <header className="bg-white shadow-sm border-b backdrop-blur-sm bg-white/90 sticky top-0 z-50 slide-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center float hover-glow transition-all duration-300">
                  <Crown className="text-white w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 hover:text-primary transition-colors duration-300">MillionaireDomains</h1>
                  <p className="text-sm text-gray-500">Premium Domain Generator</p>
                </div>
              </div>
            </div>
            <nav className="hidden sm:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a href="#features" className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link href="/about" className="text-primary font-medium transition-all duration-300 hover:scale-105 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 slide-in-left">
        <Link href="/">
          <Button variant="ghost" className="mb-6 hover-lift transition-all duration-300 hover:scale-105">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Generator
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-purple-50 py-16 gradient-shift overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 pulse-gentle hover-lift transition-all duration-300">
              <Star className="w-4 h-4 mr-2 bounce-gentle" />
              Built for Entrepreneurs
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 slide-up">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 gradient-shift">
                MillionaireDomains
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto slide-up" style={{ animationDelay: '0.2s' }}>
              We leverage proven naming frameworks from successful entrepreneurs to help you create 
              memorable, scroll-stopping domain names that build brands worth millions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6 slide-up" style={{ animationDelay: '0.2s' }}>
                Every great business starts with a great name. We believe that powerful domain names 
                shouldn't be left to chance or guesswork. That's why we've built an AI-powered platform 
                that applies millionaire-proven naming strategies to generate premium domain suggestions.
              </p>
              <p className="text-lg text-gray-600 slide-up" style={{ animationDelay: '0.4s' }}>
                Our goal is to democratize access to the same naming frameworks that have helped create 
                billion-dollar brands, making it possible for any entrepreneur to find their perfect domain.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 slide-in-right">
              <Card className="text-center p-6 hover-lift transition-all duration-500 scale-in hover-glow" style={{ animationDelay: '0.1s' }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 pulse-gentle">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Precision</h4>
                <p className="text-sm text-gray-600">Targeted suggestions based on your specific business</p>
              </Card>
              <Card className="text-center p-6 hover-lift transition-all duration-500 scale-in hover-glow" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 pulse-gentle">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Intelligence</h4>
                <p className="text-sm text-gray-600">AI-powered by advanced language models</p>
              </Card>
              <Card className="text-center p-6 hover-lift transition-all duration-500 scale-in hover-glow" style={{ animationDelay: '0.3s' }}>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 pulse-gentle">
                  <Rocket className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Speed</h4>
                <p className="text-sm text-gray-600">Get dozens of options in seconds</p>
              </Card>
              <Card className="text-center p-6 hover-lift transition-all duration-500 scale-in hover-glow" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 pulse-gentle">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Power</h4>
                <p className="text-sm text-gray-600">Frameworks from million-dollar businesses</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Greg Isenberg's Naming Framework</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI applies proven naming strategies used by successful entrepreneurs to create three distinct types of domain suggestions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Descriptive Names</CardTitle>
                <CardDescription>
                  Clear, straightforward names that immediately communicate what your business does.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-blue-900">Example</p>
                    <p className="text-sm text-blue-700">ProjectTracker.com</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Perfect for B2B services and professional tools where clarity builds trust.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Phrase-Based Names</CardTitle>
                <CardDescription>
                  Memorable phrases and expressions that create emotional connection and virality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-purple-900">Example</p>
                    <p className="text-sm text-purple-700">GetOnTheSamePage.com</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Great for consumer brands and viral products that need to be shareable.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Humorous Names</CardTitle>
                <CardDescription>
                  Playful, memorable names that grab attention and create buzz through humor.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-green-900">Example</p>
                    <p className="text-sm text-green-700">NoMoreChaos.io</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ideal for startups and products targeting younger, trend-aware audiences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Powered by Advanced AI</h3>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Gemini AI Integration</h4>
                <p className="text-gray-600 mb-6">
                  Our platform leverages Google's most advanced language model to understand your business context 
                  and generate contextually relevant, brandable domain suggestions that follow proven naming patterns.
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-500">Real-time domain availability checking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-white gradient-shift hover-lift transition-all duration-500 scale-in">
            <h3 className="text-3xl font-bold mb-4 slide-up">Ready to Find Your Million-Dollar Domain?</h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto slide-up" style={{ animationDelay: '0.2s' }}>
              Join thousands of entrepreneurs who've discovered their perfect brand name using our AI-powered generator.
            </p>
            <Link href="/">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 hover:scale-110 transition-all duration-300 hover-glow scale-in" style={{ animationDelay: '0.4s' }}>
                Start Generating Domains
                <Crown className="w-5 h-5 ml-2 bounce-gentle" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <Crown className="text-white w-4 h-4" />
              </div>
              <span className="font-bold text-gray-900">MillionaireDomains</span>
            </div>
            <p className="text-gray-500">
              Premium domain generation powered by millionaire frameworks and AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}