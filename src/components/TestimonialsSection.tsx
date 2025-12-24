import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya & Arjun Mehta",
    event: "Palace Wedding, Udaipur",
    quote: "Evonique transformed our wedding into a fairy tale. Every ritual was honoured, every detail was exquisite, and we felt like royalty throughout. They didn't just plan our wedding — they created a legacy.",
  },
  {
    id: 2,
    name: "Kavitha & Vikram Sharma",
    event: "Heritage Wedding, Jaipur",
    quote: "Working with Evonique was a privilege. Their understanding of our traditions combined with their refined aesthetic sense gave us a celebration that our families will talk about for generations.",
  },
  {
    id: 3,
    name: "Ananya & Rohan Kapoor",
    event: "Destination Wedding, Goa",
    quote: "From our first meeting, we knew we were in extraordinary hands. The Evonique team's attention to detail, discretion, and creativity made our wedding week absolutely seamless and magical.",
  },
  {
    id: 4,
    name: "Meera & Sanjay Reddy",
    event: "Grand Wedding, Hyderabad",
    quote: "Evonique exceeded every expectation. They understood our vision, respected our traditions, and delivered an experience that was both deeply personal and breathtakingly beautiful.",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = (direction: "prev" | "next") => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    if (direction === "prev") {
      setCurrentIndex(prev => prev > 0 ? prev - 1 : testimonials.length - 1);
    } else {
      setCurrentIndex(prev => prev < testimonials.length - 1 ? prev + 1 : 0);
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      navigate("next");
    }, 6000);
    
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background via-accent/5 to-background pattern-mandala">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase mb-4">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gradient-gold mb-6">
            Testimonials
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 bg-primary rotate-45" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main Content */}
          <div className="bg-gradient-card border border-primary/20 rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
            
            {/* Testimonial */}
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
              <p className="text-base md:text-lg font-body text-foreground/90 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              
              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="text-lg font-heading text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-base font-heading font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm font-body text-primary/80">
                    {testimonials[currentIndex].event}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/20" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/20" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-primary/20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/20" />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate("prev")}
              className="p-3 rounded-full bg-secondary/50 text-foreground/70 hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-6 bg-primary' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => navigate("next")}
              className="p-3 rounded-full bg-secondary/50 text-foreground/70 hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
