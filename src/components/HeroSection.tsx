import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero pattern-mandala overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full animate-float" />
        <div className="absolute bottom-32 right-16 w-48 h-48 border border-primary/5 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-10 w-24 h-24 border border-primary/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Gold border accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Tagline */}
        <p className="text-sm md:text-base font-body tracking-[0.4em] text-primary/80 mb-8 uppercase opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Luxury Indian Weddings & Signature Celebrations
        </p>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold tracking-[0.2em] text-gradient-gold mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          EVONIQUE
        </h1>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="w-16 md:w-24 h-px bg-primary/40" />
          <div className="w-2 h-2 bg-primary rotate-45" />
          <div className="w-16 md:w-24 h-px bg-primary/40" />
        </div>

        {/* Description */}
        <p className="text-base md:text-lg font-body text-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          At Evonique, we curate extraordinary Indian weddings and elite celebrations 
          with a focus on detail, tradition, and timeless elegance.
        </p>

        <p className="text-sm md:text-base font-body text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
          From regal palace weddings to refined modern celebrations, every Evonique event 
          is bespoke, personal, and impeccably executed.
        </p>

        {/* Signature Line */}
        <p className="text-lg md:text-xl font-heading italic text-primary mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          ✨ Because in India, celebrations are not events — they are legacies.
        </p>

        {/* CTA Button */}
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "1.4s" }}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-[0.2em] uppercase text-sm px-10 py-6 glow-gold transition-all duration-300 hover:scale-105"
          >
            Begin Your Journey
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};
