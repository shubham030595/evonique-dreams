import { Flower, Gem, Crown } from "lucide-react";

const refinements = [
  { icon: Gem, text: "Sophisticated design" },
  { icon: Flower, text: "Seamless flow" },
  { icon: Crown, text: "Contemporary elegance" },
];

export const IndianWeddingsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase mb-4">
              Our Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gradient-gold mb-6">
              Indian Weddings, Refined
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-primary/40" />
              <div className="w-1.5 h-1.5 bg-primary rotate-45" />
              <div className="w-12 h-px bg-primary/40" />
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-gradient-card border border-primary/20 rounded-lg p-8 md:p-12 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-base md:text-lg font-body text-foreground/90 leading-relaxed mb-8">
              India's weddings are rich with meaning, emotion, and tradition.
              At Evonique, we honour every ritual — while elevating it with:
            </p>

            {/* Refinements */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
              {refinements.map((item, index) => (
                <div 
                  key={item.text} 
                  className="flex items-center gap-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.6 + index * 0.15}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-body text-foreground/80">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8" />

            {/* Closing */}
            <p className="text-lg md:text-xl font-heading italic text-primary">
              Your wedding remains deeply Indian, yet unmistakably luxury.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
