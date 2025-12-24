import { Sparkles, Star, Users, Award } from "lucide-react";

const values = [
  { icon: Sparkles, text: "Personalised planning" },
  { icon: Star, text: "Aesthetic excellence" },
  { icon: Users, text: "Seamless coordination" },
  { icon: Award, text: "Legacy-worthy celebrations" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/10 pattern-mandala">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase mb-4">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gradient-gold mb-8">
              About Evonique
            </h2>

            <p className="text-base md:text-lg font-body text-foreground/90 leading-relaxed mb-6">
              Evonique is a boutique luxury event management house dedicated exclusively 
              to Indian weddings and high-end celebrations.
            </p>

            <p className="text-base font-body text-muted-foreground leading-relaxed mb-8">
              We work with a select clientele who seek unparalleled elegance, 
              cultural authenticity, and celebrations that become cherished legacies 
              for generations to come.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {values.map((value, index) => (
                <div 
                  key={value.text} 
                  className="flex items-center gap-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <value.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-body text-foreground/80">
                    {value.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="border-l-2 border-primary/40 pl-6">
              <p className="text-lg font-heading italic text-primary">
                "At Evonique, we believe luxury lies in intention, not excess."
              </p>
            </div>
          </div>

          {/* Right - Decorative Visual */}
          <div className="relative opacity-0 animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="aspect-[4/5] rounded-lg bg-gradient-card border border-primary/20 overflow-hidden relative">
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 pattern-mandala opacity-30" />
              
              {/* Central decorative element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto border-2 border-primary/30 rounded-full flex items-center justify-center mb-6">
                    <div className="w-24 h-24 border border-primary/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <p className="text-3xl font-heading font-semibold text-gradient-gold tracking-widest">
                    EVONIQUE
                  </p>
                  <p className="text-xs font-body tracking-[0.3em] text-muted-foreground uppercase mt-2">
                    Est. Excellence
                  </p>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/30" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary/30" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/30" />
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
