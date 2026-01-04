import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-off-white/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-20">
        <Link href="/">
          <div className="text-2xl font-serif font-bold tracking-tighter cursor-pointer hover:opacity-80 transition-opacity">
            STUDIO<span className="text-terracotta">FORMA</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/services"
            className="hover:text-terracotta transition-colors"
          >
            Services
          </Link>
          <Link
            href="/work"
            className="hover:text-terracotta transition-colors"
          >
            Work
          </Link>
          <Link
            href="/contact"
            className="hover:text-terracotta transition-colors"
          >
            Contact
          </Link>
          <Button className="rounded-full bg-terracotta hover:bg-terracotta/90 text-white px-8 h-auto py-4">
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
}
