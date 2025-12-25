import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { z } from "zod";

const eventTypes = [
  "Luxury Wedding",
  "Palace/Heritage Wedding",
  "Destination Wedding",
  "Engagement",
  "Reception",
  "Anniversary Celebration",
  "Private Event",
  "Other",
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  event_type: z.string().min(1, "Please select an event type"),
  preferred_date: z.string().max(50, "Date must be less than 50 characters").optional(),
  message: z.string().trim().max(2000, "Message must be less than 2000 characters").optional(),
});

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event_type: "",
    preferred_date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);

      // Save to Supabase
      const { error } = await supabase.from("inquiries").insert([{
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        event_type: validatedData.event_type,
        preferred_date: validatedData.preferred_date || null,
        message: validatedData.message || null,
      }]);

      if (error) throw error;

      // Submit to Google Sheets via Apps Script Web App
      // To set this up: Create a Google Apps Script with a doPost function
      // and deploy it as a web app. Replace the URL below with your deployed URL.
      const GOOGLE_SHEETS_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
      
      if (GOOGLE_SHEETS_URL !== "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
        await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone || "",
            event_type: validatedData.event_type,
            preferred_date: validatedData.preferred_date || "",
            message: validatedData.message || "",
            timestamp: new Date().toISOString(),
          }),
        });
      }

      toast({
        title: "Inquiry Submitted",
        description: "Thank you for your interest. We'll be in touch within 24-48 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        event_type: "",
        preferred_date: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gradient-gold mb-6">
            Begin Your Evonique Journey
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 bg-primary rotate-45" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <p className="text-base font-body text-muted-foreground max-w-xl mx-auto">
            We accept a limited number of weddings each season. 
            Connect with us for a private consultation and curated proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-card border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-sm font-body text-foreground">
                      hello@evonique.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <p className="text-sm font-body text-foreground">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-sm font-body text-foreground">
                      New Delhi, India
                    </p>
                    <p className="text-xs font-body text-muted-foreground mt-1">
                      (Serving nationwide & international destinations)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="border-l-2 border-primary/40 pl-4">
              <p className="text-sm font-body text-muted-foreground italic">
                All inquiries are treated with complete confidentiality.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gradient-card border border-primary/20 rounded-lg p-6 md:p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    required
                    className="bg-input border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="bg-input border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-input border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">
                    Event Type *
                  </label>
                  <Select
                    value={formData.event_type}
                    onValueChange={(value) => setFormData({ ...formData, event_type: value })}
                    required
                  >
                    <SelectTrigger className="bg-input border-primary/20 focus:border-primary text-foreground">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-primary/20">
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type} className="text-foreground hover:bg-primary/10">
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">
                  Preferred Date / Timeline
                </label>
                <Input
                  value={formData.preferred_date}
                  onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                  placeholder="e.g., December 2025, Winter 2025-26"
                  className="bg-input border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label className="block text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">
                  Tell Us About Your Vision
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your dreams, preferences, and any special requirements..."
                  rows={4}
                  className="bg-input border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-[0.2em] uppercase text-sm py-6 glow-gold transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Request Consultation
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
