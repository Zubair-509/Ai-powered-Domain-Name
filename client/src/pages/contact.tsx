import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Crown, ArrowLeft, Mail, MapPin, Clock, MessageSquare, Send, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Neural Message Transmitted",
        description: "Your consciousness transmission has been received by our neural administrators.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background fade-in">
      {/* Header */}
      <header className="glass-card border-b border-white/10 sticky top-0 z-50 slide-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 neon-border rounded-xl flex items-center justify-center float hover-glow transition-all duration-300">
                  <Crown className="text-primary w-5 h-5" />
                </div>
                <div>
                  <Link href="/">
                    <h1 className="text-xl font-bold hologram cursor-pointer">MillionaireDomains</h1>
                  </Link>
                  <p className="text-sm text-muted-foreground">Neural Domain Architecture</p>
                </div>
              </div>
            </div>
            <nav className="hidden sm:flex space-x-8">
              <Link href="/" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a href="/#features" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link href="/about" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark transition-all duration-300 group-hover:w-full"></span>
              </Link>
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
              <MessageSquare className="w-4 h-4 mr-2 bounce-gentle text-primary" />
              <span className="hologram">Neural Communication Channel</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-bold mb-8 slide-up">
              <span className="hologram">Contact Neural Support</span>
            </h2>
            <p className="text-xl text-muted-foreground/80 mb-12 max-w-4xl mx-auto slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Establish direct consciousness connection with our neural administrators for technical support, 
              feedback, or business inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="glass-card neon-border hover-lift transition-all duration-500 p-8">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center mx-auto mb-4 neon-border pulse-gentle">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl hologram">Neural Communication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <h4 className="font-semibold hologram mb-2">Primary Neural Channel</h4>
                    <p className="text-muted-foreground/80">contact@millionairedomains.com</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold hologram mb-2">Technical Support Matrix</h4>
                    <p className="text-muted-foreground/80">support@millionairedomains.com</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold hologram mb-2">Business Consciousness</h4>
                    <p className="text-muted-foreground/80">business@millionairedomains.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card neon-border hover-lift transition-all duration-500 p-8">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center mx-auto mb-4 neon-border pulse-gentle">
                    <MapPin className="w-8 h-8 text-green-400" />
                  </div>
                  <CardTitle className="text-2xl hologram">Neural Headquarters</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <h4 className="font-semibold hologram mb-2">Physical Location Matrix</h4>
                    <p className="text-muted-foreground/80 leading-relaxed">
                      Karachi Technology Hub<br />
                      Sindh Province<br />
                      Islamic Republic of Pakistan
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold hologram mb-2">Temporal Zone</h4>
                    <p className="text-muted-foreground/80">Pakistan Standard Time (PST)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card neon-border hover-lift transition-all duration-500 p-8">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center mx-auto mb-4 neon-border pulse-gentle">
                    <Clock className="w-8 h-8 text-orange-400" />
                  </div>
                  <CardTitle className="text-2xl hologram">Response Matrix</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <h4 className="font-semibold hologram mb-2">Standard Queries</h4>
                    <p className="text-muted-foreground/80">24-48 hours neural processing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold hologram mb-2">Technical Issues</h4>
                    <p className="text-muted-foreground/80">4-8 hours priority processing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold hologram mb-2">Business Consciousness</h4>
                    <p className="text-muted-foreground/80">48-72 hours strategic processing</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card neon-border hover-lift transition-all duration-500">
                <CardHeader className="text-center p-8">
                  <div className="w-20 h-20 glass-card rounded-xl flex items-center justify-center mx-auto mb-6 neon-border pulse-gentle">
                    <Send className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-3xl hologram mb-4">Neural Transmission Portal</CardTitle>
                  <p className="text-muted-foreground/80 text-lg">
                    Transmit your consciousness inquiry through our quantum communication matrix
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium hologram mb-2">
                          Neural Identity
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="glass-card neon-border bg-background/50 border-white/20 focus:border-primary"
                          placeholder="Your consciousness designation"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium hologram mb-2">
                          Communication Vector
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="glass-card neon-border bg-background/50 border-white/20 focus:border-primary"
                          placeholder="neural@consciousness.domain"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium hologram mb-2">
                        Transmission Subject Matrix
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="glass-card neon-border bg-background/50 border-white/20 focus:border-primary"
                        placeholder="Neural inquiry classification"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium hologram mb-2">
                        Consciousness Message Payload
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="glass-card neon-border bg-background/50 border-white/20 focus:border-primary resize-none"
                        placeholder="Encode your neural transmission here... Describe your inquiry, feedback, or technical issues in detail."
                      />
                    </div>
                    
                    <div className="text-center">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-500 hover:scale-105 neon-border px-12 py-4 text-lg font-semibold rounded-xl disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                            Processing Neural Transmission...
                          </span>
                        ) : (
                          <span className="hologram flex items-center">
                            Transmit to Neural Core
                            <Send className="w-5 h-5 ml-3" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <Card className="glass-card neon-border hover-lift transition-all duration-500 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center neon-border pulse-gentle">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold hologram mb-2">Privacy Protection</h4>
                      <p className="text-sm text-muted-foreground/80">
                        All neural transmissions are encrypted and processed according to our 
                        <Link href="/privacy" className="text-primary hover:underline ml-1">Privacy Policy</Link>.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="glass-card neon-border hover-lift transition-all duration-500 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center neon-border pulse-gentle">
                      <MessageSquare className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold hologram mb-2">Response Guarantee</h4>
                      <p className="text-sm text-muted-foreground/80">
                        Our neural administrators commit to responding to all consciousness transmissions 
                        within our stated timeframes.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
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
              Neural communication network for consciousness-level domain support
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}