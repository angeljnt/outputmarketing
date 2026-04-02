import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const faqs: { q: string; a: React.ReactNode }[] = [
  { q: "How long until we see results?", a: "New content typically takes 3 to 6 months to rank in competitive categories. Technical fixes and optimizing existing content can show movement faster. We set expectations on your specific targets in the strategy phase." },
  { q: "Do you write the content too?", a: "Yes. SEO at Output Marketing is never separated from content. The research, writing, and optimization are one process, not two separate services." },
  { q: "What's GEO and why does it matter?", a: "GEO is structuring your content to get cited by AI tools. When your buyer asks ChatGPT \"what's the best tool for X,\" the results include citations from sources the AI deems authoritative. Getting into those citations is the new first-page ranking. We build original research assets and structured content specifically for this." },
  { q: "Do you work on existing content or only new content?", a: "Both. Some of the fastest wins come from optimizing content that's already ranking on page two. We audit first and tell you where the leverage is." },
  { q: "Can I do SEO on its own or does it have to be bundled?", a: "We offer it standalone, but the best results come when SEO and content run together. The Engine and Full Stack tiers bundle both for that reason." },
];

const ServiceOrganicSEO = () => (
  <>
    <Helmet>
      <title>Organic SEO — Output Marketing</title>
      <meta name="description" content="SEO for B2B SaaS companies that need qualified pipeline, not just traffic. Pain-Point SEO: rank for the terms buyers search the day before they book a demo." />
    </Helmet>

    {/* HERO */}
    <SectionWrapper>
      <div className="container-default">
        <h1 className="text-display mb-4">Traffic is not the goal. Pipeline is.</h1>
        <p className="text-body-lg text-muted-foreground mb-6">We target the keywords your buyers use when they're ready to buy, not when they're just looking around. B2B SaaS SEO built for lead quality.</p>
        <CTAButton to="/contact">Start my <strong>30-day pilot</strong> →</CTAButton>
        <p className="text-caption mt-3"><strong>No retainer. No long contract.</strong> <strong>$1,500 to $2,000</strong> for <strong>30 days</strong>.</p>
      </div>
    </SectionWrapper>

    {/* THE PROBLEM */}
    <section className="bg-dark text-dark-text section-padding">
      <div className="container-narrow">
        <h2 className="text-h2 mb-8">Most B2B SaaS SEO is optimized for <strong>rankings, not revenue</strong>.</h2>
        <div className="space-y-6 text-body-lg text-dark-muted">
          <p>The agency publishes 8 articles a month. Traffic goes up. <strong>Demo requests don't.</strong> The client renews anyway because the traffic chart looks good.</p>
          <p>The problem is the keyword strategy. Top-of-funnel informational content ranks easily and converts almost nothing. Bottom-of-funnel content, the posts buyers find when they're actively evaluating options, <strong>converts 10 to 25 times more</strong>. Most agencies avoid it because it's harder to rank and harder to measure.</p>
          <p><strong>That's what we focus on.</strong></p>
        </div>
      </div>
    </section>

    {/* WHO IT'S FOR */}
    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-8">Is this for you?</h2>
        <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300 max-w-2xl">
          <h3 className="text-h3 mb-3 group-hover:text-[#111111]">B2B SaaS, Series A to B</h3>
          <ul className="space-y-2 text-body text-muted-foreground">
            <li className="group-hover:text-[#111111] transition-colors duration-300">• You have content but it's not generating pipeline</li>
            <li className="group-hover:text-[#111111] transition-colors duration-300">• You're ranking for terms your ICP isn't actually searching</li>
            <li className="group-hover:text-[#111111] transition-colors duration-300">• You want to rank in traditional search AND get cited in ChatGPT, Perplexity, and Google AI Overviews</li>
            <li className="group-hover:text-[#111111] transition-colors duration-300">• You need to show your board that content is generating demos, not just impressions</li>
          </ul>
        </div>
        <p className="text-body text-muted-foreground mt-8">Sound like you? That's who we built this for.</p>
      </div>
    </SectionWrapper>

    {/* WHAT WE DO */}
    <SectionWrapper className="bg-surface-alt">
      <div className="container-default">
        <h2 className="text-h2 mb-8">What the work covers.</h2>
        <ul className="space-y-4 text-body text-muted-foreground">
          <li><strong className="text-foreground">Pain-Point SEO:</strong> We target high-intent keywords, the terms buyers search when they're comparing tools, looking for alternatives, or trying to solve a specific problem. Not broad informational queries.</li>
          <li><strong className="text-foreground">Technical audit:</strong> We find and fix what's holding your existing content back. Crawl issues, page speed, structured data, internal linking.</li>
          <li><strong className="text-foreground">Content strategy:</strong> Topic clusters built around buying-intent stages. Every piece has a purpose in the pipeline.</li>
          <li><strong className="text-foreground">GEO (Generative Engine Optimization):</strong> We structure content so it gets cited by AI tools. ChatGPT, Perplexity, and Google AI Overviews are now part of the B2B buyer research process.</li>
          <li><strong className="text-foreground">Attribution:</strong> Monthly report tracking rankings, organic traffic, and leads attributed to organic search. You see which content is driving demos.</li>
        </ul>
      </div>
    </SectionWrapper>

    {/* EVIDENCE */}
    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-10">What organic SEO produces for B2B SaaS.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300 text-center">
            <p className="text-display mb-2 group-hover:text-[#111111]">702%</p>
            <p className="text-body font-semibold mb-1 group-hover:text-[#111111]">Average SEO ROI for B2B SaaS companies</p>
            <p className="text-caption group-hover:text-[#111111] transition-colors duration-300">First Page Sage, 2025</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300 text-center">
            <p className="text-display mb-2 group-hover:text-[#111111]">7 months</p>
            <p className="text-body font-semibold mb-1 group-hover:text-[#111111]">Average break-even point for B2B SaaS SEO investment</p>
            <p className="text-caption group-hover:text-[#111111] transition-colors duration-300">&nbsp;</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300 text-center">
            <p className="text-display mb-2 group-hover:text-[#111111]"><strong>$290</strong></p>
            <p className="text-body font-semibold mb-1 group-hover:text-[#111111]">Long-term organic CAC as content compounds vs <strong>$802</strong> for paid search</p>
            <p className="text-caption group-hover:text-[#111111] transition-colors duration-300">&nbsp;</p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* CASE STUDY PREVIEWS */}
    <SectionWrapper>
      <div className="container-default">
        <p className="overline mb-6">From the work</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group bg-surface p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-2 group-hover:text-[#111111]">Archive LinkedIn Content Strategy</h3>
            <p className="text-caption mb-3 group-hover:text-[#111111] transition-colors duration-300">7,363 impressions · 1.21% engagement rate maintained</p>
            <Link to="/work/archive-linkedin-strategy" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors">Read case study →</Link>
          </div>
          <div className="group bg-surface p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-2 group-hover:text-[#111111]">Archive Radar Feature Launch</h3>
            <p className="text-caption mb-3 group-hover:text-[#111111] transition-colors duration-300">2.45% engagement rate · 7 brands to waitlist</p>
            <Link to="/work/archive-radar-launch" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors">Read case study →</Link>
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
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Pilot (<strong>30 days</strong>)</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Technical audit. Keyword gap analysis. We identify the 3 to 5 highest-priority opportunities and begin execution.</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 2</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Strategy</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Full keyword architecture, topic clusters, and content calendar. You approve before we write anything.</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 3</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Publish and measure</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Monthly report covering rankings, organic traffic, and leads attributed. We optimize based on what's moving.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* TRANSFERABILITY + PRICING */}
    <SectionWrapper className="bg-surface-alt">
      <div className="container-narrow text-center">
        <p className="text-body text-muted-foreground mb-4">Most detailed public examples are from Archive. The operating system behind them is what we apply to every engagement.</p>
        <p className="text-body text-muted-foreground mb-2">Pilot: <strong>$1,500 to $2,000</strong> for <strong>30 days</strong>.</p>
        <p className="text-body text-muted-foreground mb-6">Full Stack tier (includes technical SEO + GEO): $6,000/month.</p>
        <CTAButton to="/contact">Start my <strong>30-day pilot</strong> →</CTAButton>
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

export default ServiceOrganicSEO;