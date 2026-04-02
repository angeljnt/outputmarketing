import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";
import TrustMicroRow from "@/components/TrustMicroRow";
import TransferabilityProof from "@/components/TransferabilityProof";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Link } from "react-router-dom";
import logoFireflies from "@/assets/logo-fireflies.png";
import logoArchive from "@/assets/logo-archive.svg";
import badgeWebby from "@/assets/badge-webby.png";
import badgeCannes from "@/assets/badge-cannes.png";
import { trackEvent } from "@/lib/analytics";

const faqs: { q: string; a: React.ReactNode }[] = [
  { q: "Will it actually sound like me?", a: <>Yes. That's the whole job. If it doesn't sound like you, you don't post it. <strong>The first month is the calibration period.</strong> Most clients say <strong>month two is when it clicks</strong>.</> },
  { q: "Do I have to write anything?", a: "No. You do the voice capture conversations. After that, we handle everything. You review and approve. That's it." },
  { q: "What if I want to write some posts myself?", a: "That's fine. Most clients do a mix. We fill the calendar. You swap in something you wrote when you have it." },
  { q: "How long until LinkedIn starts working?", a: "Most clients see meaningful engagement improvement in month two. Inbound attribution usually shows up in month four or five." },
  { q: "Do you post on my behalf or do I post myself?", a: "Either. Most clients prefer to post themselves so it feels personal. We can also manage posting if you'd rather hand it off." },
];

const ServiceFounderLinkedIn = () => (
  <>
    <Helmet>
      <title>Founder LinkedIn Ghostwriting — Output Marketing</title>
      <meta name="description" content="LinkedIn ghostwriting for B2B SaaS founders. We write in your voice. You post. Your buyers find you before they find your competitor." />
    </Helmet>

    <StickyMobileCTA />

    {/* HERO */}
    <SectionWrapper>
      <div className="container-default" id="hero-section">
        <h1 className="text-display mb-4">Your buyers are on LinkedIn. You're not showing up.</h1>
        <p className="text-body-lg text-muted-foreground mb-6">We write in your voice. Three posts a week. Carousels that get read. LinkedIn that builds pipeline, not just followers.</p>
        <CTAButton to="/contact" onClick={() => trackEvent("cta_primary_click", { page: "/services/founder-linkedin", location: "hero" })}>
          Start my{"\u00A0"}<strong>30-day pilot</strong> →
        </CTAButton>
        <TrustMicroRow className="mt-4 justify-start" />
        <p className="mt-3">
          <Link to="/pricing" className="text-sm text-muted-foreground hover:text-accent transition-colors">See full pricing →</Link>
        </p>
      </div>
    </SectionWrapper>

    {/* THE PROBLEM */}
    <section className="bg-dark text-dark-text section-padding">
      <div className="container-narrow">
        <h2 className="text-h2 mb-8"><strong>90%</strong> of SaaS companies post only from their company page.</h2>
        <div className="space-y-4 text-body-lg text-dark-muted">
          <p>LinkedIn's own data says personal profiles get <strong>8 times more engagement</strong> than company pages.</p>
          <p>The founders who show up consistently are generating inbound. Not because they got lucky. Because LinkedIn rewards personal content from people, not brands.</p>
          <p>The gap between <strong>what most companies do and what works</strong> is where we operate.</p>
        </div>
      </div>
    </section>

    {/* WHO IT'S FOR */}
    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-8">Is this for you?</h2>
        <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300 max-w-2xl">
          <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Founder, Seed to Series B</h3>
          <ul className="space-y-2 text-body text-muted-foreground">
            <li className="group-hover:text-[#111111] transition-colors duration-300">• Your LinkedIn is inconsistent or empty</li>
            <li className="group-hover:text-[#111111] transition-colors duration-300">• Your ICP is on LinkedIn. Your competitors are showing up there.</li>
            <li className="group-hover:text-[#111111] transition-colors duration-300">• You have opinions about your space. You just don't have time to write.</li>
            <li className="group-hover:text-[#111111] transition-colors duration-300">• You've thought about ghostwriting but weren't sure if the voice would sound like you.</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>

    {/* WHAT SHIPS */}
    <SectionWrapper className="bg-surface-alt">
      <div className="container-default">
        <h2 className="text-h2 mb-8">What ships.</h2>
        <ul className="space-y-3 text-body text-muted-foreground">
          <li>• <strong className="text-foreground">3 LinkedIn posts per week</strong></li>
          <li>• <strong className="text-foreground">2 carousels per month</strong></li>
          <li>• <strong className="text-foreground">Monthly content calendar</strong> mapped to your ICP</li>
          <li>• <strong className="text-foreground">Voice capture process</strong> in the first two weeks</li>
          <li>• <strong className="text-foreground">Monthly performance report:</strong> reach, engagement rate, profile views, inbound attributed</li>
        </ul>
      </div>
    </SectionWrapper>

    {/* WHAT THIS SHOULD CHANGE */}
    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-6">What this should change.</h2>
        <ul className="space-y-2 text-body text-muted-foreground">
          <li>• Consistent founder presence that compounds over time</li>
          <li>• Inbound conversations from your ICP who saw your posts</li>
          <li>• Higher profile views and connection requests from target buyers</li>
          <li>• A content system that runs without you writing everything</li>
        </ul>
      </div>
    </SectionWrapper>

    {/* EVIDENCE */}
    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-10">What it produces.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300 text-center">
            <p className="text-display mb-2 group-hover:text-[#111111]">8x</p>
            <p className="text-body font-semibold mb-1 group-hover:text-[#111111]">Engagement: personal profile vs company page</p>
            <p className="text-caption group-hover:text-[#111111] transition-colors duration-300">LinkedIn 2025 B2B Benchmark Report</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300 text-center">
            <p className="text-display mb-2 group-hover:text-[#111111]">1/3</p>
            <p className="text-body font-semibold mb-1 group-hover:text-[#111111]">Of Pylon's total pipeline came from founder LinkedIn in 2024</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300 text-center">
            <p className="text-display mb-2 group-hover:text-[#111111]">277%</p>
            <p className="text-body font-semibold mb-1 group-hover:text-[#111111]">More B2B leads from LinkedIn than any other social platform</p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* PROOF SNIPPETS */}
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
            <h3 className="text-h3 mb-2 group-hover:text-[#111111]">Archive Radar Feature Launch</h3>
            <p className="text-caption mb-3 group-hover:text-[#111111] transition-colors duration-300">7 brands to waitlist · 2.45% engagement rate</p>
            <Link to="/work/archive-radar-launch" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors">Read case study →</Link>
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
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Pilot (<strong>30 days</strong>)</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Voice capture, first content calendar, first batch of posts. You see the quality before committing.</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 2</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Monthly cadence</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Content calendar approved. Posts written. You review. Monthly report delivered.</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 3</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Compound</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">By month three, the voice is locked. By month six, the inbound is real.</p>
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
        <h3 className="text-h3 mb-1">Foundation tier</h3>
        <p className="text-h2 mb-4">$1,800 / month</p>
        <p className="text-body text-muted-foreground mb-6">Or start with the pilot: <strong>$1,500 to $2,000</strong> for <strong>30 days</strong>.</p>
        <CTAButton to="/contact" onClick={() => trackEvent("cta_primary_click", { page: "/services/founder-linkedin", location: "footer_cta" })}>
          Start my{"\u00A0"}<strong>30-day pilot</strong> →
        </CTAButton>
        <p className="mt-3"><Link to="/pricing" className="text-sm text-muted-foreground hover:text-accent transition-colors">See full pricing →</Link></p>
        <TrustMicroRow className="mt-4" />
      </div>
    </SectionWrapper>

    <Footer />
  </>
);

export default ServiceFounderLinkedIn;
