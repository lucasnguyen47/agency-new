import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 bg-white border-t border-border/50">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="text-2xl font-serif font-bold tracking-tighter mb-6">
              STUDIO<span className="text-terracotta">FORMA</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              A boutique branding agency crafting soulful identities for visionary businesses worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link href="/services">
                  <span className="hover:text-terracotta transition-colors cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/work">
                  <span className="hover:text-terracotta transition-colors cursor-pointer">Work</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-terracotta transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-terracotta" />
                <a href="mailto:hello@studioforma.com" className="hover:text-terracotta transition-colors">
                  hello@studioforma.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-terracotta" />
                <a href="tel:+15551234567" className="hover:text-terracotta transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Studio Forma. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-terracotta transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-terracotta transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
