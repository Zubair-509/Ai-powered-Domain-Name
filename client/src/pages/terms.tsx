import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Crown, ArrowLeft, Scale, FileText, AlertTriangle, CheckCircle, Users, Shield } from "lucide-react";

export default function Terms() {
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
              <Scale className="w-4 h-4 mr-2 bounce-gentle text-primary" />
              <span className="hologram">Legal Framework Protocol</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-bold mb-8 slide-up">
              <span className="hologram">Terms of Service</span>
            </h2>
            <p className="text-xl text-muted-foreground/80 mb-12 max-w-4xl mx-auto slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Neural service agreement governing consciousness interactions with our domain synthesis platform 
              under Pakistani legal framework.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-12 neon-border space-y-12">
            
            {/* Acceptance of Terms */}
            <div className="slide-in-left">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold hologram">Neural Agreement Acceptance</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  By accessing MillionaireDomains neural platform, you enter into a binding agreement with our consciousness network. These terms constitute the complete agreement between your entity and our neural architecture, governed by the laws of the Islamic Republic of Pakistan.
                </p>
                <p>
                  <strong className="text-foreground">Capacity Requirement:</strong> You must be 18 years or older or have proper legal guardian authorization to engage with our neural framework.
                </p>
                <p>
                  <strong className="text-foreground">Modification Rights:</strong> We reserve the right to update these terms as our neural architecture evolves. Continued usage constitutes acceptance of updated protocols.
                </p>
              </div>
            </div>

            {/* Service Description */}
            <div className="slide-in-right">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <FileText className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold hologram">Neural Service Matrix</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">Core Functionality:</strong> MillionaireDomains provides AI-powered domain name generation using proven millionaire frameworks through advanced neural synthesis.
                </p>
                <p>Our neural services include:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Domain name synthesis using Gemini AI consciousness</li>
                  <li>Real-time domain availability scanning</li>
                  <li>Three distinct naming framework implementations</li>
                  <li>Style preference customization matrices</li>
                  <li>Export functionality for generated suggestions</li>
                </ul>
                <p>
                  <strong className="text-foreground">Service Availability:</strong> We strive for 99.9% neural network uptime but cannot guarantee uninterrupted service due to maintenance, updates, or external dependencies.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="slide-in-left">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold hologram">Consciousness Responsibilities</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">Acceptable Use:</strong> You agree to use our neural platform responsibly and in compliance with applicable laws.
                </p>
                <p>Prohibited activities include:</p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li>Attempting to reverse-engineer our neural algorithms</li>
                  <li>Submitting malicious or harmful content for processing</li>
                  <li>Overloading our systems through automated requests</li>
                  <li>Violating intellectual property rights</li>
                  <li>Using generated names for illegal or unethical purposes</li>
                  <li>Creating accounts using false information</li>
                </ul>
                <p>
                  <strong className="text-foreground">Content Responsibility:</strong> You retain ownership of submitted business descriptions but grant us limited rights to process them for service delivery.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="slide-in-right">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <Shield className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold hologram">Neural Property Rights</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">Platform Ownership:</strong> MillionaireDomains, its neural architecture, algorithms, and user interface remain our exclusive intellectual property.
                </p>
                <p>
                  <strong className="text-foreground">Generated Suggestions:</strong> Domain names generated by our neural framework are provided for your consideration and potential registration. We claim no ownership over domain names you choose to register.
                </p>
                <p>
                  <strong className="text-foreground">Framework Rights:</strong> The underlying neural frameworks, naming methodologies, and AI implementation techniques are proprietary and protected by applicable intellectual property laws.
                </p>
                <p>
                  <strong className="text-foreground">Usage Rights:</strong> You may use generated suggestions for legitimate business purposes but cannot resell access to our neural generation capabilities.
                </p>
              </div>
            </div>

            {/* Disclaimers and Limitations */}
            <div className="slide-in-left">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold hologram">Neural Liability Matrix</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">Service Disclaimer:</strong> Our neural platform is provided "as-is" without warranties of any kind. We do not guarantee the availability, uniqueness, or commercial viability of generated domain suggestions.
                </p>
                <p>
                  <strong className="text-foreground">Domain Availability:</strong> Domain availability information is provided for convenience only. Actual registration must be completed through authorized domain registrars.
                </p>
                <p>
                  <strong className="text-foreground">Business Outcome:</strong> We make no representations about the commercial success of businesses using our generated domain suggestions.
                </p>
                <p>
                  <strong className="text-foreground">Limitation of Liability:</strong> Our total liability for any claims arising from service usage shall not exceed the amount paid for services in the preceding 12 months.
                </p>
              </div>
            </div>

            {/* Payment and Billing */}
            <div className="slide-in-right">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold hologram">Economic Exchange Protocol</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">Free Access:</strong> Basic neural domain generation is currently provided without charge during our platform development phase.
                </p>
                <p>
                  <strong className="text-foreground">Future Pricing:</strong> We reserve the right to implement pricing for premium features or increased usage limits with 30 days advance notice.
                </p>
                <p>
                  <strong className="text-foreground">Payment Terms:</strong> When implemented, all payments shall be processed in Pakistani Rupees (PKR) through authorized payment gateways compliant with State Bank of Pakistan regulations.
                </p>
                <p>
                  <strong className="text-foreground">Refund Policy:</strong> Refund policies for future paid services will be clearly communicated upon implementation.
                </p>
              </div>
            </div>

            {/* Privacy and Data */}
            <div className="slide-in-left">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold hologram">Data Protection Interface</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  Data handling practices are governed by our comprehensive <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which forms an integral part of these terms.
                </p>
                <p>
                  <strong className="text-foreground">Data Processing:</strong> By using our neural platform, you consent to data processing as described in our Privacy Policy and applicable Pakistani data protection regulations.
                </p>
                <p>
                  <strong className="text-foreground">International Transfers:</strong> Some neural processing may involve servers outside Pakistan. We ensure appropriate safeguards for international data transfers.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="slide-in-right">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold hologram">Neural Disconnection Protocol</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">User Termination:</strong> You may discontinue using our neural platform at any time without prior notice.
                </p>
                <p>
                  <strong className="text-foreground">Service Termination:</strong> We reserve the right to suspend or terminate access for violations of these terms, illegal activities, or system abuse.
                </p>
                <p>
                  <strong className="text-foreground">Data Retention:</strong> Upon termination, your data will be handled according to our Privacy Policy retention schedules.
                </p>
                <p>
                  <strong className="text-foreground">Survival:</strong> Certain provisions including intellectual property rights, disclaimers, and limitation of liability shall survive termination.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="slide-in-left">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center neon-border pulse-gentle">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold hologram">Legal Jurisdiction Matrix</h3>
              </div>
              <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">Governing Law:</strong> These terms are governed by the laws of the Islamic Republic of Pakistan without regard to conflict of law principles.
                </p>
                <p>
                  <strong className="text-foreground">Jurisdiction:</strong> Any disputes shall be subject to the exclusive jurisdiction of courts in Karachi, Sindh, Pakistan.
                </p>
                <p>
                  <strong className="text-foreground">Dispute Resolution:</strong> We encourage good faith resolution of disputes through direct communication before pursuing legal remedies.
                </p>
                <p className="text-sm text-muted-foreground/60">
                  Last Updated: January 2025<br />
                  Effective Date: January 2025<br />
                  Document Version: 1.0
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
            <h3 className="text-3xl font-bold hologram mb-6">Questions About Terms?</h3>
            <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
              Our neural legal framework administrators are available for clarification.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-500 hover:scale-105 neon-border px-8 py-3 font-semibold rounded-xl">
                <span className="hologram">Contact Legal Support</span>
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
              Legal framework protecting neural domain synthesis under Pakistani jurisdiction
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}