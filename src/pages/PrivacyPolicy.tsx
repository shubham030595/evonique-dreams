import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-6 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-body tracking-wider uppercase">Back to Home</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-gradient-gold mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-gradient-card border border-primary/20 rounded-lg p-6 md:p-8">
              <p className="text-muted-foreground font-body mb-6">
                Last updated: December 2024
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  At Evonique Events, we collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground font-body mt-3 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Event details and preferences</li>
                  <li>Preferred dates and venue requirements</li>
                  <li>Any other information you choose to share with us</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground font-body mt-3 space-y-2">
                  <li>Respond to your inquiries and consultation requests</li>
                  <li>Provide and personalize our wedding planning services</li>
                  <li>Communicate with you about your event</li>
                  <li>Send updates and promotional materials (with your consent)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services (such as sharing details with vendors you've approved).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  We implement appropriate security measures to protect your personal information. All inquiries are treated with complete confidentiality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  5. Your Rights
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  You have the right to access, correct, or delete your personal information. Contact us at hello@evonique.in for any privacy-related requests.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  6. Contact Us
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  For questions about this Privacy Policy, please contact us at:
                  <br />
                  <span className="text-primary">hello@evonique.in</span>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
