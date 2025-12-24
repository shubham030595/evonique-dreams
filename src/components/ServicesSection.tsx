import { Gem, Castle, Wine, Palette } from "lucide-react";

const services = [
  {
    icon: Gem,
    title: "Luxury Indian Weddings",
    features: [
      "Complete wedding planning & management",
      "Multi-day wedding celebrations",
      "Traditional, modern & fusion weddings",
      "Palace, heritage & luxury hotel weddings",
    ],
  },
  {
    icon: Castle,
    title: "Palace & Heritage Weddings",
    features: [
      "Royal venue coordination",
      "Heritage décor & traditional aesthetics",
      "Cultural styling & ceremonial planning",
      "Regal experience curation",
    ],
  },
  {
    icon: Wine,
    title: "Elite Celebrations",
    features: [
      "Engagements, receptions & anniversaries",
      "High-society private parties",
      "Milestone celebrations",
      "Intimate luxury gatherings",
    ],
  },
  {
    icon: Palette,
    title: "Wedding Design & Styling",
    features: [
      "Concept & theme creation",
      "Décor, floral & ambience design",
      "Lighting & spatial aesthetics",
      "Complete visual storytelling",
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-secondary/10 via-background to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gradient-gold mb-6">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 bg-primary rotate-45" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <p className="text-base font-body text-muted-foreground max-w-2xl mx-auto">
            Each service is tailored to reflect your unique story, 
            cultural heritage, and vision of perfection.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg bg-gradient-card border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:glow-gold opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <div className="w-12 h-px bg-primary/30" />
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 ml-[74px]">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm font-body text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
