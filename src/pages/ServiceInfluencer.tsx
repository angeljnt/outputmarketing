import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const faqs = [
  { q: "Do you only work with B2B brands?", a: "No. The creator programs we run work for both B2B SaaS and DTC brands. The creator pool and briefing strategy are different for each. The rigor is the same." },
  { q: "How do you find the right creators?", a: "We start with your ICP. We map who they follow, what content they engage with, and which creators actually influence their buying decisions. Not just the ones with large followings." },
  { q: "What's the minimum creator budget on top of the retainer?", a: "It depends on your ICP and creator tier. Micro-influencers in most B2B categories can be activated for $200 to $800 per post. We'll give you a realistic number in the pilot debrief." },
  { q: "How long until we see pipeline results?", a: "Most programs start generating measurable activity in month two. Month one is setup. Month two is when posts go live. Month three is when patterns emerge." },
  { q: "Do we own the creator relationships after we stop working with you?", a: "Yes. Everything we build belongs to you. Creator contacts, briefs, relationships, reporting templates. We don't hold any of it hostage." },
];

const ServiceInfluencer = () => (
  <>
    <Helmet>
      <title>Influencer Marketing: Output Marketing</title>
      <meta name="description" content="Influencer programs that build pipeline, not just awareness. For B2B SaaS and DTC brands." />
    </Helmet>

    {/* HERO */}
    <SectionWrapper>
      <div className="container-default">
        <h1 className="text-display mb-4">Influencer programs that build pipeline, not just awareness.</h1>
        <p className="text-body-lg text-muted-foreground mb-6">For B2B SaaS companies and DTC brands that are done paying for impressions with no ROI to show for it.</p>
        <CTAButton to="/contact">Start my 30-day pilot →</CTAButton>
        <p className="text-caption mt-3">No retainer. No long contract. $1,500 to $2,000 for 30 days.</p>
      </div>
    </SectionWrapper>

    {/* WHO IT'S FOR */}
    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-8">Is this for you?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">B2B SaaS (Seed to Series A)</h3>
            <ul className="space-y-2 text-body text-muted-foreground">
              <li className="group-hover:text-[#111111] transition-colors duration-300">• ARR between $300K and $5M</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• No influencer program yet, or one that didn't produce pipeline</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• ICP is on LinkedIn and follows creators in your category</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• You want creator-driven pipeline, not just brand lift</li>
            </ul>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">DTC Brands ($500K to $5M revenue)</h3>
            <ul className="space-y-2 text-body text-muted-foreground">
              <li className="group-hover:text-[#111111] transition-colors duration-300">• Found product-market fit</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• Burning too much on paid social</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• Need organic and creator-led growth to reduce CAC</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• Your buyers follow creators but you haven't activated that channel</li>
            </ul>
          </div>
        </div>
        <p className="text-body text-muted-foreground mt-8">Sound like you? That's who we built this for.</p>
      </div>
    </SectionWrapper>

    {/* WHAT WE DO */}
    <SectionWrapper className="bg-surface-alt">
      <div className="container-default">
        <h2 className="text-h2 mb-8">What the program looks like.</h2>
        <ul className="space-y-4 text-body text-muted-foreground">
          <li><strong className="text-foreground">Creator sourcing:</strong> We find creators your ICP actually follows. Not the biggest names. The right ones.</li>
          <li><strong className="text-foreground">Strategy and briefing:</strong> Every creator gets a clear brief. No guessing on messaging.</li>
          <li><strong className="text-foreground">Campaign execution:</strong> We manage the timeline, deliverables, approval process. You review.</li>
          <li><strong className="text-foreground">ROI measurement:</strong> We track from content impression to pipeline. Pipeline is the deliverable.</li>
          <li><strong className="text-foreground">Monthly reporting:</strong> An executive-level report. Numbers, analysis, and next steps.</li>
        </ul>
      </div>
    </SectionWrapper>

    {/* CREDENTIALS */}
    <SectionWrapper>
      <div className="container-narrow">
        <h2 className="text-h2 mb-4">We've done this at scale.</h2>
        <p className="text-body text-muted-foreground">Before Output Marketing, Vanessa ran influencer programs at Fireflies.ai. She managed a B2B fintech Series G announcement: 39 creators, 855,958 impressions, 3.40% engagement on a B2B campaign. The four Archive campaigns that followed were built on the same playbook.</p>
      </div>
    </SectionWrapper>

    {/* CASE STUDY PREVIEWS */}
    <SectionWrapper>
      <div className="container-default">
        <p className="overline mb-6">From the work</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group bg-surface p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-2 group-hover:text-[#111111]">Archive Radar Feature Launch</h3>
            <p className="text-caption mb-3 group-hover:text-[#111111] transition-colors duration-300">7 brands to waitlist · 2.45% engagement rate</p>
            <Link to="/work/archive-radar-launch" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors">Read case study →</Link>
          </div>
          <div className="group bg-surface p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-2 group-hover:text-[#111111]">Archive AI Insider Newsletter</h3>
            <p className="text-caption mb-3 group-hover:text-[#111111] transition-colors duration-300">Recurring revenue stream · 3-tier segmentation</p>
            <Link to="/work/archive-ai-newsletter" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors">Read case study →</Link>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* PROCESS */}
    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-8">How it works.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 1</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Pilot (30 days)</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">We audit your current presence, map which creators your ICP actually follows, and run a small-scale test.</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 2</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Program Build</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">We build the creator roster, brief strategy, and campaign calendar. You approve everything before it goes live.</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 3</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Execution and Measurement</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">We run the program, track the pipeline, and report monthly. You own all the creator relationships and content.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* PRICING */}
    <SectionWrapper className="bg-surface-alt">
      <div className="container-narrow text-center">
        <h3 className="text-h3 mb-1">Program tier</h3>
        <p className="text-h2 mb-4">$5,000 / month</p>
        <p className="text-body text-muted-foreground mb-6">5 to 10 qualified creators per month, strategy, execution, ROI measurement, executive monthly report.</p>
        <p className="text-body text-muted-foreground mb-6">Or start with the pilot: $1,500 to $2,000 for 30 days.</p>
        <CTAButton to="/contact">Start my 30-day pilot →</CTAButton>
        <p className="mt-3"><Link to="/pricing" className="text-sm text-muted-foreground hover:text-accent transition-colors">See full pricing →</Link></p>
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

    <Footer />
  </>
);

export default ServiceInfluencer;
