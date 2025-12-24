import { Clock, Eye, Heart, Sparkles } from "lucide-react";

const experiencePoints = [
  {
    icon: Eye,
    title: "Full Creative Attention",
    description: "Your celebration receives our complete focus and artistic vision",
  },
  {
    icon: Clock,
    title: "Detailed Planning",
    description: "Every moment meticulously orchestrated for seamless elegance",
  },
  {
    icon: Heart,
    title: "Stress-Free Execution",
    description: "Enjoy every moment while we handle every detail",
  },
];

export const ExperienceSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-accent/5 to-background pattern-mandala">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase mb-4">
              The White-Glove Service
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gradient-gold mb-6">
              The Evonique Experience
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-primary/40" />
              <div className="w-1.5 h-1.5 bg-primary rotate-45" />
              <div className="w-12 h-px bg-primary/40" />
            </div>
          </div>

          {/* Main Description */}
          <div className="mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-base md:text-lg font-body text-foreground/90 leading-relaxed mb-6">
              Evonique offers a white-glove, concierge-style experience that transforms 
              your wedding journey into a cherished memory itself.
            </p>
            <p className="text-lg font-heading italic text-primary">
              We intentionally take on a limited number of weddings each year to ensure:
            </p>
          </div>

          {/* Experience Points */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {experiencePoints.map((point, index) => (
              <div
                key={point.title}
                className="p-6 rounded-lg bg-gradient-card border border-primary/10 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.15}s` }}
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="border border-primary/20 rounded-lg p-8 bg-gradient-card opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-base md:text-lg font-body text-foreground/90 leading-relaxed">
              From your first meeting to the final vidaai, we stand by you — 
              <span className="text-primary font-semibold"> quietly, gracefully, flawlessly.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
