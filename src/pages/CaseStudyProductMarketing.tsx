import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CaseStudyConversionFooter from "@/components/CaseStudyConversionFooter";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const CaseStudyProductMarketing = () => (
  <>
    <Helmet>
      <title>Archive Product Marketing: Output Marketing</title>
      <meta name="description" content="2 simultaneous product campaigns managed. Full campaign dashboard built. Product marketing for Archive." />
    </Helmet>

    <StickyMobileCTA />

    <SectionWrapper>
      <div className="container-default" id="hero-section">
        <p className="overline mb-2">Archive</p>
        <h1 className="text-display mb-4">Product Marketing Campaign</h1>
        <div className="flex flex-wrap gap-4 text-caption mb-8">
          <span>Product Marketing</span><span>·</span><span>Ongoing</span>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-narrow">
        <h2 className="text-h2 mb-4">Context</h2>
        <p className="text-body text-muted-foreground mb-8">Archive builds tools for DTC brands to manage influencer marketing. Their product line expanded to include an AI Assistant and a Gifting campaign feature. Both needed product marketing that moved DTC brand prospects from awareness to trial.</p>

        <h2 className="text-h2 mb-4">The challenge</h2>
        <p className="text-body text-muted-foreground mb-8">Running two product campaigns simultaneously while keeping the messaging distinct required coordination that most agencies can't execute cleanly.</p>

        <h2 className="text-h2 mb-4">What we did</h2>
        <ul className="space-y-3 text-body text-muted-foreground mb-8">
          <li>• Built a full campaign dashboard for both campaigns in one place</li>
          <li>• Ran AI Assistant campaign: positioned as a practical tool for DTC workflows</li>
          <li>• Gifting campaign: designed for brands without a repeatable gifting system</li>
          <li>• Tracked pipeline end-to-end from content impression to sales conversation</li>
        </ul>

        <h2 className="text-h2 mb-4">The results</h2>
        <ul className="space-y-2 text-body text-muted-foreground mb-8">
          <li>• 2 simultaneous product campaigns managed</li>
          <li>• 1 full campaign dashboard built from scratch</li>
          <li>• End-to-end DTC brand pipeline tracking implemented</li>
          <li>• 0 dropped balls: both campaigns ran on schedule</li>
        </ul>

        <h2 className="text-h2 mb-4">What worked and why</h2>
        <div className="space-y-4 text-body text-muted-foreground">
          <p><strong>The most valuable output wasn't the content. It was the dashboard.</strong></p>
          <p>Running two product campaigns with distinct messaging required strict content separation at the brief level.</p>
        </div>
      </div>
    </SectionWrapper>

    <CaseStudyConversionFooter />
    <Footer />
  </>
);

export default CaseStudyProductMarketing;
