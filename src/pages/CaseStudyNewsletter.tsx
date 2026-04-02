import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CaseStudyConversionFooter from "@/components/CaseStudyConversionFooter";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const CaseStudyNewsletter = () => (
  <>
    <Helmet>
      <title>Archive AI Newsletter: Output Marketing</title>
      <meta name="description" content="3-tier customer segmentation, recurring revenue stream. Retention marketing for Archive's B2B customer base." />
    </Helmet>

    <StickyMobileCTA />

    <SectionWrapper>
      <div className="container-default" id="hero-section">
        <p className="overline mb-2">Archive</p>
        <h1 className="text-display mb-4">AI Insider Newsletter</h1>
        <div className="flex flex-wrap gap-4 text-caption mb-8">
          <span>Product Launch & Customer Retention</span><span>·</span><span>2025</span>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-narrow">
        <h2 className="text-h2 mb-4">The challenge</h2>
        <p className="text-body text-muted-foreground mb-8">B2B SaaS retention runs on perceived value between purchase and renewal. Archive needed a content program that gave customers a reason to stay engaged, one that spoke differently to each tier.</p>

        <h2 className="text-h2 mb-4">What we did</h2>
        <ul className="space-y-3 text-body text-muted-foreground mb-8">
          <li>• Built a 3-tier segmentation model: premium, standard, and lower tier</li>
          <li>• Multi-channel coordination: email per tier, LinkedIn posts, Slack announcements, creator partnerships, and blog</li>
          <li>• Established recurring newsletter cadence with AI-specific content</li>
          <li>• Created a platform for ongoing thought leadership</li>
        </ul>

        <h2 className="text-h2 mb-4">The outcomes</h2>
        <ul className="space-y-2 text-body text-muted-foreground mb-8">
          <li>• 1 new recurring revenue stream established</li>
          <li>• 3 customer tiers segmented and activated</li>
          <li>• Multi-channel coordination across email, LinkedIn, Slack, creators, and blog</li>
          <li>• Retention improved through value-driven content</li>
        </ul>

        <h2 className="text-h2 mb-4">What worked and why</h2>
        <div className="space-y-4 text-body text-muted-foreground">
          <p><strong>The segmentation model was the most important decision.</strong> A single newsletter to all tiers would have underperformed.</p>
          <p>No single channel reaches the whole customer base reliably. Running them in coordination is what made the program work.</p>
        </div>
      </div>
    </SectionWrapper>

    <CaseStudyConversionFooter />
    <Footer />
  </>
);

export default CaseStudyNewsletter;
