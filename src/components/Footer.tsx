import { Instagram, Facebook, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="py-12 bg-maroon-deep border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-semibold tracking-[0.3em] text-gradient-gold mb-2">
              EVONIQUE
            </h3>
            <p className="text-xs font-body text-muted-foreground tracking-wider uppercase">
              Luxury Indian Weddings & Celebrations
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary/70 hover:text-primary hover:bg-primary/20 transition-colors duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs font-body text-muted-foreground">
              © {new Date().getFullYear()} Evonique Events.
            </p>
            <p className="text-xs font-body text-muted-foreground/60 mt-1">
              All rights reserved.
            </p>
          </div>
        </div>

        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="w-16 h-px bg-primary/20" />
          <div className="w-1.5 h-1.5 bg-primary/30 rotate-45" />
          <div className="w-16 h-px bg-primary/20" />
        </div>
      </div>
    </footer>
  );
};
