import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RefundPolicy = () => {
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
            Refund & Cancellation Policy
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-gradient-card border border-primary/20 rounded-lg p-6 md:p-8">
              <p className="text-muted-foreground font-body mb-6">
                Last updated: December 2024
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  1. Booking & Deposits
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  A non-refundable booking fee of 25% is required to secure your event date. This covers initial consultation, planning, and vendor coordination that begins immediately upon confirmation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  2. Cancellation by Client
                </h2>
                <ul className="list-disc list-inside text-muted-foreground font-body space-y-3">
                  <li><strong className="text-foreground">More than 180 days before event:</strong> 50% refund of payments made (excluding booking fee)</li>
                  <li><strong className="text-foreground">90-180 days before event:</strong> 25% refund of payments made (excluding booking fee)</li>
                  <li><strong className="text-foreground">Less than 90 days before event:</strong> No refund available</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  3. Postponement
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  We understand that circumstances may change. Event postponements are accommodated subject to date availability and vendor confirmations. Additional charges may apply based on new arrangements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  4. Force Majeure
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  In cases of natural disasters, government restrictions, or other circumstances beyond our control, we will work with you to reschedule your event or provide partial refunds as appropriate.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  5. Vendor Cancellations
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  If a vendor cancels, we will find a suitable replacement or refund the vendor-specific payment. Evonique Events is not responsible for vendor cancellations but will assist in every way possible.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  6. Refund Process
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Approved refunds will be processed within 15-30 business days via the original payment method. For any questions, contact us at:
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

export default RefundPolicy;
