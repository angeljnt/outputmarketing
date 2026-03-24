import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CaseStudyProductMarketing = () => (
  <>
    <Helmet>
      <title>Archive Product Marketing: Output Marketing</title>
      <meta name="description" content="2 simultaneous product campaigns managed. Full campaign dashboard built. Product marketing for Archive." />
    </Helmet>

    <SectionWrapper>
      <div className="container-default">
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
        <p className="text-body text-muted-foreground mb-8">Archive builds tools for DTC brands to manage influencer marketing. Their product line expanded to include an AI Assistant and a Gifting campaign feature. Both needed product marketing: not just an announcement, but a full-funnel program that moved DTC brand prospects from awareness to trial.</p>

        <h2 className="text-h2 mb-4">The challenge</h2>
        <p className="text-body text-muted-foreground mb-8">Product marketing for a SaaS platform is different from campaign marketing. The goal isn't a spike in impressions. It's a system that generates pipeline. Running two product campaigns simultaneously while keeping the messaging distinct for each required coordination that most agencies can't execute cleanly.</p>

        <h2 className="text-h2 mb-4">What we did</h2>
        <ul className="space-y-3 text-body text-muted-foreground mb-8">
          <li>• Built a full campaign dashboard giving Archive visibility into both campaigns in one place</li>
          <li>• Ran AI Assistant campaign: positioned Archive's AI as a practical tool, anchored to the DTC buyer's workflow</li>
          <li>• Gifting campaign: designed for brands already using product gifting who hadn't built a repeatable system</li>
          <li>• Tracked pipeline end-to-end from content impression to sales conversation</li>
        </ul>

        <h2 className="text-h2 mb-4">The results</h2>
        <ul className="space-y-2 text-body text-muted-foreground mb-8">
          <li>• 2 simultaneous product campaigns managed</li>
          <li>• 1 full campaign dashboard built from scratch</li>
          <li>• End-to-end DTC brand pipeline tracking implemented</li>
          <li>• 0 dropped balls: both campaigns ran on schedule, on brief, and within budget</li>
        </ul>

        <h2 className="text-h2 mb-4">What worked and why</h2>
        <div className="space-y-4 text-body text-muted-foreground">
          <p><strong>The most valuable output wasn't the content. It was the dashboard.</strong> Archive's team went <strong>from running campaigns by feel to having one place where everything tracked</strong>.</p>
          <p>Running two product campaigns simultaneously with distinct messaging required strict content separation at the brief level. The AI Assistant audience and the Gifting audience overlap but aren't the same people.</p>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-narrow text-center">
        <p className="text-body text-muted-foreground mb-2">Running multiple campaigns and losing track?</p>
        <h2 className="text-h2 mb-6">Need a system that tracks? Start with a pilot.</h2>
        <CTAButton to="/contact">Start my <strong>30-day pilot</strong> →</CTAButton>
        <p className="mt-4"><Link to="/work" className="text-sm text-muted-foreground hover:text-accent transition-colors">See all case studies →</Link></p>
      </div>
    </SectionWrapper>

    <Footer />
  </>
);

export default CaseStudyProductMarketing;