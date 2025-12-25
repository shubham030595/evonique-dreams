import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsConditions = () => {
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
            Terms & Conditions
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-gradient-card border border-primary/20 rounded-lg p-6 md:p-8">
              <p className="text-muted-foreground font-body mb-6">
                Last updated: December 2024
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  1. Services
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Evonique Events provides luxury wedding planning and event management services. Our services are customized based on individual client requirements and are subject to the terms outlined in your specific service agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  2. Client Responsibilities
                </h2>
                <ul className="list-disc list-inside text-muted-foreground font-body space-y-2">
                  <li>Provide accurate and timely information required for event planning</li>
                  <li>Make payments according to the agreed schedule</li>
                  <li>Attend scheduled meetings and respond to communications promptly</li>
                  <li>Obtain necessary approvals for venue, vendors, and other arrangements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  3. Payment Terms
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Payment schedules are outlined in your service agreement. Late payments may result in service delays or additional charges. All payments are due as per the agreed timeline.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  4. Intellectual Property
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  All creative concepts, designs, and materials developed by Evonique Events remain our intellectual property until full payment is received. We reserve the right to use event photographs for portfolio and marketing purposes unless otherwise agreed.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  5. Liability
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  While we take utmost care in planning and executing events, Evonique Events shall not be liable for any damages caused by third-party vendors, force majeure events, or circumstances beyond our reasonable control.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  6. Confidentiality
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  We maintain strict confidentiality regarding all client information, event details, and personal preferences. Your privacy is of utmost importance to us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  7. Dispute Resolution
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Any disputes shall be resolved through mutual discussion. If unresolved, disputes shall be subject to arbitration in New Delhi, India, in accordance with applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  8. Contact
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  For questions about these Terms & Conditions, please contact us at:
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

export default TermsConditions;
