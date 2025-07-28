import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Crown, ArrowLeft, Shield, Eye, Lock, UserCheck, Database, Globe } from "lucide-react";

export default function Privacy() {
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
              <Shield className="w-4 h-4 mr-2 bounce-gentle text-primary" />
              <span className="hologram">Data Protection Protocol</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-bold mb-8 slide-up">
              <span className="hologram">Privacy Policy</span>
            </h2>
            <p className="text-xl text-muted-foreground/80 mb-12 max-w-4xl mx-auto slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Neural data protection matrix ensuring quantum-level security for your consciousness interactions 
              with our domain synthesis platform.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-12 neon-border space-y-12">
            
            {/* Information Collection */}
            <div className="slide-in-left">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold hologram">Information Collection Matrix</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">Personal Data Synthesis:</strong> We collect minimal data points necessary for domain generation optimization including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Product descriptions submitted for neural processing</li>
                  <li>Domain preference matrices and style configurations</li>
                  <li>Session interaction patterns for algorithm enhancement</li>
                  <li>Device specifications for optimal user experience delivery</li>
                </ul>
                <p>
                  <strong className="text-foreground">Automatic Collection:</strong> Our neural networks automatically process technical metadata including IP addresses, browser specifications, and interaction timestamps to optimize synthesis performance.
                </p>
              </div>
            </div>

            {/* Usage of Information */}
            <div className="slide-in-right">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <Eye className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold hologram">Data Utilization Protocol</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>Your consciousness data is processed exclusively for:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Generating personalized domain matrices using Gemini AI consciousness</li>
                  <li>Optimizing neural framework performance and suggestion quality</li>
                  <li>Providing domain availability scanning services</li>
                  <li>Enhancing user experience through interface optimization</li>
                  <li>Preventing system abuse and maintaining platform integrity</li>
                </ul>
                <p>
                  <strong className="text-foreground">Commercial Use:</strong> Your data will never be sold, rented, or transferred to third-party consciousness networks for commercial exploitation.
                </p>
              </div>
            </div>

            {/* Data Protection */}
            <div className="slide-in-left">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <Lock className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold hologram">Security Architecture</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">Quantum Encryption:</strong> All data transmissions utilize industry-standard encryption protocols ensuring your consciousness interactions remain secure during neural processing.
                </p>
                <p>
                  <strong className="text-foreground">Storage Security:</strong> Data is stored in secure cloud infrastructure with automated backup systems and restricted access controls. Personal information is purged automatically after 90 days unless explicitly retained for service improvement.
                </p>
                <p>
                  <strong className="text-foreground">Access Control:</strong> Only authorized neural network administrators have access to aggregated, anonymized data for system optimization purposes.
                </p>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="slide-in-right">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <Globe className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold hologram">External Neural Networks</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>Our platform interfaces with the following external consciousness networks:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li><strong className="text-foreground">Google Gemini AI:</strong> For advanced domain name synthesis and natural language processing</li>
                  <li><strong className="text-foreground">Domain Registrars:</strong> For real-time availability checking (no personal data transmitted)</li>
                  <li><strong className="text-foreground">Analytics Platforms:</strong> For anonymized usage pattern analysis</li>
                </ul>
                <p>These services operate under their respective privacy policies and data protection standards.</p>
              </div>
            </div>

            {/* User Rights */}
            <div className="slide-in-left">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <UserCheck className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold hologram">Consciousness Rights Matrix</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">Pakistan Data Protection Compliance:</strong> As a Karachi-based neural platform, we comply with Pakistani data protection regulations and international privacy standards.
                </p>
                <p>Your consciousness rights include:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Access to your stored data patterns and processing history</li>
                  <li>Correction of inaccurate personal information matrices</li>
                  <li>Deletion of your data from our neural networks</li>
                  <li>Portability of your domain generation history</li>
                  <li>Opt-out from data processing for service improvements</li>
                </ul>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="slide-in-right">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <Eye className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold hologram">Neural Tracking Protocols</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">Essential Cookies:</strong> We use minimal tracking technologies to maintain session states and optimize platform performance. These include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Session management for continuous neural interaction</li>
                  <li>User preference storage for enhanced experience</li>
                  <li>Performance monitoring for system optimization</li>
                </ul>
                <p>
                  <strong className="text-foreground">Analytics:</strong> Anonymized usage patterns help us enhance the neural framework's effectiveness while protecting individual consciousness privacy.
                </p>
              </div>
            </div>

            {/* Contact and Updates */}
            <div className="slide-in-left">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold hologram">Policy Updates & Contact</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">Policy Evolution:</strong> This privacy matrix may be updated to reflect neural framework enhancements or regulatory changes. Updates will be communicated through platform notifications.
                </p>
                <p>
                  <strong className="text-foreground">Contact Matrix:</strong> For privacy-related consciousness inquiries, data access requests, or security concerns, contact our neural administrators through the <Link href="/contact" className="text-primary hover:underline">contact portal</Link>.
                </p>
                <p className="text-sm text-muted-foreground/60">
                  Last Updated: January 2025<br />
                  Governing Law: Islamic Republic of Pakistan<br />
                  Jurisdiction: Karachi, Sindh
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-2xl p-12 neon-border hover-lift transition-all duration-500">
            <h3 className="text-3xl font-bold hologram mb-6">Questions About Data Protection?</h3>
            <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
              Our neural administrators are available to clarify any privacy protocol concerns.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-500 hover:scale-105 neon-border px-8 py-3 font-semibold rounded-xl">
                <span className="hologram">Contact Neural Support</span>
              </Button>
            </Link>
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
              Quantum-secured neural domain architecture with consciousness-level privacy protection
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}