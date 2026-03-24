import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CaseStudyNewsletter = () => (
  <>
    <Helmet>
      <title>Archive AI Newsletter: Output Marketing</title>
      <meta name="description" content="3-tier customer segmentation, recurring revenue stream. Retention marketing for Archive's B2B customer base." />
    </Helmet>

    <SectionWrapper>
      <div className="container-default">
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
        <p className="text-body text-muted-foreground mb-8">B2B SaaS retention runs on perceived value between purchase and renewal. Customers who only hear from you when something breaks or when renewal is due don't renew. Archive needed a content program that gave customers a reason to stay engaged, one that spoke differently to each tier.</p>

        <h2 className="text-h2 mb-4">What we did</h2>
        <ul className="space-y-3 text-body text-muted-foreground mb-8">
          <li>• Built a 3-tier segmentation model: premium tier (VIP positioning), standard tier (value emphasis), lower tier (exclusive content to drive upsell)</li>
          <li>• Multi-channel coordination: email per tier, LinkedIn posts, Slack announcements, creator partnerships, and blog content</li>
          <li>• Established recurring newsletter cadence with AI-specific content relevant to the ICP</li>
          <li>• Created a platform for ongoing thought leadership</li>
        </ul>

        <h2 className="text-h2 mb-4">The outcomes</h2>
        <ul className="space-y-2 text-body text-muted-foreground mb-8">
          <li>• 1 new recurring revenue stream established</li>
          <li>• 3 customer tiers segmented and activated</li>
          <li>• Multi-channel coordination across email, LinkedIn, Slack, creators, and blog</li>
          <li>• Retention improved through value-driven content between product touchpoints</li>
        </ul>

        <h2 className="text-h2 mb-4">What worked and why</h2>
        <div className="space-y-4 text-body text-muted-foreground">
          <p><strong>The segmentation model was the most important decision.</strong> A single newsletter to all tiers would have underperformed for everyone.</p>
          <p>No single channel reaches the whole customer base reliably. Email has the highest intent. LinkedIn has the highest visibility. Slack has the highest trust. Running them in coordination is what made the program work.</p>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-narrow text-center">
        <p className="text-body text-muted-foreground mb-2">If your customers go quiet between purchases, this is where to start.</p>
        <h2 className="text-h2 mb-6">Building a retention program? Start with a pilot.</h2>
        <CTAButton to="/contact">Start my <strong>30-day pilot</strong> →</CTAButton>
        <p className="mt-4"><Link to="/work" className="text-sm text-muted-foreground hover:text-accent transition-colors">See all case studies →</Link></p>
      </div>
    </SectionWrapper>

    <Footer />
  </>
);

export default CaseStudyNewsletter;