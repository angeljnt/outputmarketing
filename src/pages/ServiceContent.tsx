import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";
import TrustMicroRow from "@/components/TrustMicroRow";
import TransferabilityProof from "@/components/TransferabilityProof";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";

const faqs: { q: string; a: React.ReactNode }[] = [
  { q: "Who writes the content?", a: "We write it. You review and approve before anything goes live. Most clients do a light edit pass." },
  { q: "How long until content starts ranking?", a: "Realistically, 3 to 6 months for new content to rank in competitive categories. We'll set expectations on your specific targets in the strategy phase." },
  { q: "Is LinkedIn ghostwriting included?", a: "The Engine tier includes founder LinkedIn ghostwriting. Foundation-tier clients can add it as a standalone service at +$1,500/month." },
  { q: "Do we own the content?", a: "Yes. Every article, post, strategy doc, and content calendar belongs to you." },
  { q: "Can we use you alongside an internal team?", a: "Yes. Some clients use us to add capacity to an existing team. Others use us to build the system their team works from." },
];

const ServiceContent = () => (
  <>
    <Helmet>
      <title>Content Marketing: Output Marketing</title>
      <meta name="description" content="SEO articles, content strategy, and LinkedIn ghostwriting for B2B SaaS companies that need organic pipeline, not just word count." />
    </Helmet>

    <StickyMobileCTA />

    {/* HERO */}
    <SectionWrapper>
      <div className="container-default" id="hero-section">
        <h1 className="text-display mb-4">Content that sounds like a person wrote it. Because one did.</h1>
        <p className="text-body-lg text-muted-foreground mb-6">SEO articles, LinkedIn ghostwriting, and content strategy for B2B SaaS teams that need organic pipeline, not just word count.</p>
        <CTAButton to="/contact" onClick={() => trackEvent("cta_primary_click", { page: "/services/content-marketing", location: "hero" })}>
          Start my{"\u00A0"}<strong>30-day pilot</strong> →
        </CTAButton>
        <TrustMicroRow className="mt-4 justify-start" />
        <p className="mt-3">
          <Link to="/pricing" className="text-sm text-muted-foreground hover:text-accent transition-colors">See full pricing →</Link>
        </p>
      </div>
    </SectionWrapper>

    {/* WHO IT'S FOR */}
    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-8">Is this for you?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">SaaS founders without a content team</h3>
            <ul className="space-y-2 text-body text-muted-foreground">
              <li className="group-hover:text-[#111111] transition-colors duration-300">• Seed to Series A</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• You know content matters but haven't prioritized it</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• Your LinkedIn is inconsistent. Your blog is empty or outdated.</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• You want a system that runs without you writing everything yourself</li>
            </ul>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">SaaS companies with content but no pipeline</h3>
            <ul className="space-y-2 text-body text-muted-foreground">
              <li className="group-hover:text-[#111111] transition-colors duration-300">• You have a blog. You post on LinkedIn. Nothing is converting.</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• You're ranking for informational keywords but not for buyer-intent terms</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• Your content sounds like everyone else's</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• You need content that earns trust before a sales call</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* WHAT SHIPS */}
    <SectionWrapper className="bg-surface-alt">
      <div className="container-default">
        <h2 className="text-h2 mb-8">What ships.</h2>
        <ul className="space-y-3 text-body text-muted-foreground">
          <li>• <strong className="text-foreground">4 to 6 SEO articles/month</strong> optimized for search and buyer intent</li>
          <li>• <strong className="text-foreground">LinkedIn ghostwriting:</strong> Founder or brand voice</li>
          <li>• <strong className="text-foreground">Content strategy document:</strong> what to write, why, for whom, in what order</li>
          <li>• <strong className="text-foreground">AEO:</strong> Content structured for ChatGPT, Perplexity, and AI Overviews</li>
          <li>• <strong className="text-foreground">Monthly KPI report:</strong> traffic, rankings, engagement rate, leads attributed</li>
        </ul>
      </div>
    </SectionWrapper>

    {/* WHAT THIS SHOULD CHANGE */}
    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-6">What this should change.</h2>
        <ul className="space-y-2 text-body text-muted-foreground">
          <li>• Organic traffic from buyer-intent keywords, not just informational queries</li>
          <li>• Inbound demo requests attributed to content</li>
          <li>• A content system that runs on a calendar, not inspiration</li>
          <li>• Trust signals established before the first sales conversation</li>
          <li>• Visibility in AI search results alongside traditional rankings</li>
        </ul>
      </div>
    </SectionWrapper>

    {/* PROOF */}
    <SectionWrapper>
      <div className="container-default">
        <p className="overline mb-6">From the work</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group bg-surface p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-2 group-hover:text-[#111111]">Archive LinkedIn Content Strategy</h3>
            <p className="text-caption mb-3 group-hover:text-[#111111] transition-colors duration-300">7,363 impressions · 114 reactions · 1.21% engagement rate</p>
            <Link to="/work/archive-linkedin-strategy" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors">Read case study →</Link>
          </div>
          <div className="group bg-surface p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-2 group-hover:text-[#111111]">Archive Product Marketing Campaign</h3>
            <p className="text-caption mb-3 group-hover:text-[#111111] transition-colors duration-300">2 campaigns managed simultaneously · Full dashboard built</p>
            <Link to="/work/archive-product-marketing" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors">Read case study →</Link>
          </div>
        </div>
        <p className="text-body text-muted-foreground mt-6">Public examples are concentrated in one account, but the operating model is channel-agnostic and repeatable.</p>
      </div>
    </SectionWrapper>

    {/* PROCESS */}
    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-8">How it works.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 1</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Audit</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">We look at what you have, find the gaps, and identify the openings.</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 2</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Strategy</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Content calendar, keyword targets, topic clusters, voice guide. You approve. Then we execute.</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 3</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Publish and Measure</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Monthly report on what moved: rankings, traffic, engagement, leads.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* FAQ */}
    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-10">Questions you probably have.</h2>
        <div className="max-w-3xl">
          {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
        </div>
      </div>
    </SectionWrapper>

    {/* TRANSFERABILITY */}
    <SectionWrapper>
      <div className="container-default">
        <TransferabilityProof />
      </div>
    </SectionWrapper>

    {/* FINAL CTA */}
    <SectionWrapper className="bg-surface-alt">
      <div className="container-narrow text-center">
        <h3 className="text-h3 mb-1">Engine tier</h3>
        <p className="text-h2 mb-4">$3,500 to $5,000 / month</p>
        <p className="text-body text-muted-foreground mb-6">Or start with the pilot: <strong>$1,500 to $2,000</strong> for <strong>30 days</strong>.</p>
        <CTAButton to="/contact" onClick={() => trackEvent("cta_primary_click", { page: "/services/content-marketing", location: "footer_cta" })}>
          Start my{"\u00A0"}<strong>30-day pilot</strong> →
        </CTAButton>
        <p className="mt-3"><Link to="/pricing" className="text-sm text-muted-foreground hover:text-accent transition-colors">See full pricing →</Link></p>
        <TrustMicroRow className="mt-4" />
      </div>
    </SectionWrapper>

    <Footer />
  </>
);

export default ServiceContent;
