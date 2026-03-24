import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import MetricDisplay from "@/components/MetricDisplay";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CaseStudyRadar = () => (
  <>
    <Helmet>
      <title>Archive Radar Launch: Output Marketing</title>
      <meta name="description" content="2.45% engagement rate. 7 brands to waitlist. Product launch marketing for Archive's Radar feature." />
    </Helmet>

    <SectionWrapper>
      <div className="container-default">
        <p className="overline mb-2">Archive</p>
        <h1 className="text-display mb-4">Radar Feature Launch</h1>
        <div className="flex flex-wrap gap-4 text-caption mb-8">
          <span>Product Launch Marketing</span>
          <span>·</span>
          <span>February 2025</span>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-narrow">
        <h2 className="text-h2 mb-4">The company</h2>
        <p className="text-body text-muted-foreground mb-8">Archive is a B2B SaaS platform for DTC brands. Creator discovery, analytics, and influencer campaign tracking, all in one place.</p>

        <h2 className="text-h2 mb-4">The challenge</h2>
        <p className="text-body text-muted-foreground mb-8">In early 2025, Archive launched Radar: a new feature for brands to get early visibility on emerging creators before they break out. The challenge was making that launch land with the right people, not just make noise.</p>

        <h2 className="text-h2 mb-4">The problem</h2>
        <p className="text-body text-muted-foreground mb-4">A new feature inside an existing product is one of the hardest things to market. Existing customers already have a mental model of what the product does. New prospects don't know it exists. The window for early-adoption energy is short.</p>
        <p className="text-body text-muted-foreground mb-8">Archive needed real waitlist demand, not just impressions. And it needed to prime the top-tier DTC brands on that list for an upsell conversation.</p>

        <h2 className="text-h2 mb-4">The execution</h2>
        <ul className="space-y-3 text-body text-muted-foreground mb-8">
          <li>• Value-first positioning: Radar was framed as early access with VIP advantage, not just another feature announcement.</li>
          <li>• Tiered customer messaging: different content for existing customers (Slack community), prospects (LinkedIn), and investors.</li>
          <li>• Community activation: announced in Archive's existing Slack community to warm the list before going broader.</li>
          <li>• Lead generation mechanic: $250 early-access investment as a qualifying signal.</li>
          <li>• Multi-channel coordination: LinkedIn content, email, Slack, and direct outreach running in sequence.</li>
        </ul>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-8 text-center">The numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <MetricDisplay value="7,363" label="impressions" />
          <MetricDisplay value="4,757" label="members reached" />
          <MetricDisplay value="2.45%" label="engagement rate" />
          <MetricDisplay value="7" label="brands added to waitlist" />
          <MetricDisplay value="68" label="comments" />
          <MetricDisplay value="12" label="reposts" />
          <MetricDisplay value="1" label="upsell opportunity identified" className="md:col-span-2" />
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-narrow">
        <h2 className="text-h2 mb-4">What worked and why</h2>
        <div className="space-y-4 text-body text-muted-foreground">
          <p>The <strong>2.45%</strong> engagement rate on a product launch post is strong. The industry average for B2B LinkedIn content sits around <strong>0.5 to 1%</strong>. That gap came from specificity.</p>
          <p>The <strong>Slack community activation</strong> drove the first wave of waitlist signups. Identifying Midori Bikinis as a potential upsell came from tracking <strong>engagement quality, not just volume</strong>.</p>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-narrow text-center">
        <p className="text-body text-muted-foreground mb-2">If your next product launch matters, this is the playbook.</p>
        <h2 className="text-h2 mb-6">Building a product launch? Start with a pilot.</h2>
        <CTAButton to="/contact">Start my <strong>30-day pilot</strong> →</CTAButton>
        <p className="text-caption mt-3"><strong>No retainer.</strong></p>
        <p className="mt-4">
          <Link to="/work" className="text-sm text-muted-foreground hover:text-accent transition-colors">See all case studies →</Link>
        </p>
      </div>
    </SectionWrapper>

    <Footer />
  </>
);

export default CaseStudyRadar;