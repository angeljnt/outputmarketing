import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import MetricDisplay from "@/components/MetricDisplay";
import CaseStudyConversionFooter from "@/components/CaseStudyConversionFooter";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const CaseStudyLinkedIn = () => (
  <>
    <Helmet>
      <title>Archive LinkedIn Strategy: Output Marketing</title>
      <meta name="description" content="1.21% engagement rate maintained. 7,363 impressions. LinkedIn content strategy for Archive." />
    </Helmet>

    <StickyMobileCTA />

    <SectionWrapper>
      <div className="container-default" id="hero-section">
        <p className="overline mb-2">Archive</p>
        <h1 className="text-display mb-4">LinkedIn Content Strategy</h1>
        <div className="flex flex-wrap gap-4 text-caption mb-8">
          <span>Thought Leadership & Content Marketing</span><span>·</span><span>Ongoing</span>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-narrow">
        <h2 className="text-h2 mb-4">Context</h2>
        <p className="text-body text-muted-foreground mb-8">Archive sells to DTC brands. Its ICP: brand managers, CMOs, and founders at DTC companies. A credible LinkedIn presence was the organic channel with the highest concentration of their buyers.</p>

        <h2 className="text-h2 mb-4">The challenge</h2>
        <p className="text-body text-muted-foreground mb-8">Thought leadership content is <strong>easy to produce and easy to ignore</strong>. Archive needed content that generated engagement from the right people: <strong>real positions, backed with data</strong>.</p>

        <h2 className="text-h2 mb-4">What we did</h2>
        <ul className="space-y-3 text-body text-muted-foreground mb-8">
          <li>• Built content pillars: creator economy insights, AI in influencer marketing, micro-influencer strategy</li>
          <li>• Wrote from Archive's brand voice: data-backed, direct, and opinionated</li>
          <li>• Consistent publishing cadence for algorithm momentum</li>
          <li>• Tracked performance at the post level</li>
        </ul>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-8 text-center">The numbers (featured post)</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <MetricDisplay value="7,363" label="impressions" />
          <MetricDisplay value="114" label="reactions" />
          <MetricDisplay value="68" label="comments" />
          <MetricDisplay value="12" label="reposts" />
          <MetricDisplay value="1.21%" label="engagement rate maintained" />
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-narrow">
        <h2 className="text-h2 mb-4">What worked and why</h2>
        <div className="space-y-4 text-body text-muted-foreground">
          <p>The posts that drove the most engagement weren't trend reports. They were contrarian takes.</p>
          <p>1.21% on B2B LinkedIn content is above benchmark. The difference comes from posting less often but making each post worth reading.</p>
        </div>
      </div>
    </SectionWrapper>

    <CaseStudyConversionFooter />
    <Footer />
  </>
);

export default CaseStudyLinkedIn;
