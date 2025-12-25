import { Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import evoniqueLogo from "@/assets/evonique-logo.png";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/evoniqueevents?igsh=eDR4dm13bWE0a2Nl&utm_source=qr", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund & Cancellation Policy", href: "/refund-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

export const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-b from-card to-background border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo & Tagline */}
          <div className="text-center">
            <img 
              src={evoniqueLogo} 
              alt="Evonique" 
              className="w-24 h-24 mx-auto mb-4 object-contain"
            />
            <p className="text-xs font-body text-muted-foreground tracking-wider uppercase">
              Luxury Indian Weddings & Celebrations
            </p>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {policyLinks.map((link, index) => (
              <div key={link.label} className="flex items-center gap-6">
                <Link
                  to={link.href}
                  className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
                {index < policyLinks.length - 1 && (
                  <span className="text-primary/30">|</span>
                )}
              </div>
            ))}
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

          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-primary/20" />
            <div className="w-1.5 h-1.5 bg-primary/30 rotate-45" />
            <div className="w-16 h-px bg-primary/20" />
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs font-body text-muted-foreground">
              © {new Date().getFullYear()} Evonique Events. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};