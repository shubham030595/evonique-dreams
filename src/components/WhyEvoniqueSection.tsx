import { Crown, Heart, Palette, Lock } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Indian Weddings Only",
    description: "Deep understanding of rituals, traditions & cultural nuances",
  },
  {
    icon: Heart,
    title: "Bespoke Approach",
    description: "Personalised design & planning tailored to your vision",
  },
  {
    icon: Palette,
    title: "Aesthetic Excellence",
    description: "Refined, artistic styling for unforgettable celebrations",
  },
  {
    icon: Lock,
    title: "Absolute Discretion",
    description: "Exclusivity and privacy for discerning clientele",
  },
];

export const WhyEvoniqueSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gradient-gold mb-6">
            Why Evonique
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 bg-primary rotate-45" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-lg bg-gradient-card border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:glow-gold opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Signature Statement */}
        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-xl md:text-2xl font-heading italic text-primary">
            "We don't do packages. We do perfection."
          </p>
        </div>
      </div>
    </section>
  );
};
