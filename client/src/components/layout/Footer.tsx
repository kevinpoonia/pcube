import { Shield, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Pcube<span className="text-primary">Solution</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Automated reputation infrastructure for the modern enterprise. 
              Control your brand, build trust, and scale with AI.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">Monitoring</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">Response AI</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">Reputation Growth</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">Legal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@pcubesolution.com" className="text-white/60 hover:text-primary text-sm transition-colors">
                  info@pcubesolution.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Gaur City Noida, Uttar Pradesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Pcube Solution. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
