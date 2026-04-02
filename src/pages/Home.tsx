import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import GhostButton from "@/components/GhostButton";
import FAQItem from "@/components/FAQItem";
import CaseStudyCard from "@/components/CaseStudyCard";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import vanessaHero from "@/assets/vanessa-hero.jpeg";
import logoFireflies from "@/assets/logo-fireflies.svg";
import logoZeniq from "@/assets/logo-zeniq.svg";
import logoArchive from "@/assets/logo-archive.svg";
import badgeWebby from "@/assets/badge-webby.svg";
import badgeCannes from "@/assets/badge-cannes.svg";
import badgeIE from "@/assets/badge-ie.svg";


const caseStudies = [
  {
    title: "Archive: Radar Feature Launch",
    client: "Archive",
    type: "Product Launch Marketing",
    date: "Feb 2025",
    metrics: [<><strong>7 brands</strong> added to waitlist</>, <><strong>2.45%</strong> engagement rate</>, <><strong>1</strong> upsell opportunity identified</>],
    link: "/work/archive-radar-launch",
  },
  {
    title: "Archive: AI Insider Newsletter",
    client: "Archive",
    type: "Product Launch & Customer Retention",
    date: "2025",
    metrics: [<>Recurring revenue stream established</>, <><strong>3</strong>-tier customer segmentation executed</>, <>Retention improved through value-driven content</>],
    link: "/work/archive-ai-newsletter",
  },
  {
    title: "Archive: LinkedIn Content Strategy",
    client: "Archive",
    type: "Thought Leadership",
    date: "Ongoing",
    metrics: [<><strong>114</strong> reactions + <strong>68</strong> comments on featured post</>, <><strong>7,363</strong> impressions</>, <><strong>1.21%</strong> engagement rate maintained</>],
    link: "/work/archive-linkedin-strategy",
  },
  {
    title: "Archive: Product Marketing Campaign",
    client: "Archive",
    type: "Product Marketing",
    date: "Ongoing",
    metrics: [<>Full campaign dashboard built</>, <>AI Assistant + Gifting campaigns managed</>, <>DTC brand pipeline tracked</>],
    link: "/work/archive-product-marketing",
  },
];

const faqs: { q: string; a: React.ReactNode }[] = [
  { q: "Do you work with early-stage startups?", a: "Yes. Most of our clients are Seed to Series A, with ARR between $300K and $5M. That's exactly the stage where getting the marketing right compounds the most." },
  { q: "We've never done LinkedIn ghostwriting before. Where do we start?", a: "We start with a conversation. We listen to how you talk about your work, your product, and your buyers. We read your existing content, your emails, your Slack messages if you'll share them. Then we write three posts. You tell us what sounds like you and what doesn't. That's the voice capture process. Most clients feel comfortable with the output by week two." },
  { q: "Do you run paid social or Google ads?", a: "No. We don't run paid. If that's what you need, we'll tell you who does it well. What we do: LinkedIn ghostwriting, content, SEO. We do it without the waste that comes from spreading across everything." },
  { q: "What happens if the pilot doesn't work out?", a: <>We part ways. <strong>No pressure, no awkward conversation.</strong> The pilot exists precisely so neither of us has to make a long-term commitment before we know it's the right fit.</> },
  { q: "How fast can we start?", a: "Usually within a week of the first call. We don't have an onboarding queue." },
  { q: "Who actually does the work?", a: <>Vanessa and Angel. <strong>Not a team of juniors supervised by someone you met once.</strong> <strong>You'll have both of our contact info from day one.</strong></> },
  { q: "Do you only work with SaaS companies?", a: <>Yes. <strong>B2B SaaS is the whole focus.</strong> Every piece of copy we write, every SEO keyword we target, every LinkedIn post we ghost assumes a B2B SaaS buyer. That specificity is the reason it works.</> },
  { q: "All your case studies are from Archive. Should I be concerned?", a: "No. We chose to go deep with one client rather than shallow with ten. Four different campaigns, different channels, different goals, all from the same relationship. That's what it looks like when an agency actually commits to a client's growth. You'll get the same." },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Output Marketing — B2B SaaS Marketing Agency</title>
        <meta name="description" content="Pipeline from content. Founder LinkedIn ghostwriting, content marketing, and SEO for B2B SaaS companies. 30-day pilot, no retainer." />
      </Helmet>

      {/* HERO */}
      <section className="section-padding">
        <div className="container-default">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h1 className="text-display mb-4">
                Pipeline from content.{" "}
                <span className="block">Built for B2B SaaS founders and their teams.</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-6">
                Founder LinkedIn ghostwriting, content marketing, and SEO. No paid ads. No retainer.
              </p>
              <CTAButton to="/contact" className="mb-3">Start my <strong>30-day pilot</strong> →</CTAButton>
              <p className="text-caption"><strong>No retainer commitment. No long contracts.</strong> <strong>$1,500 to $2,000</strong> for <strong>30 days</strong>.</p>
              <Link to="/work" className="text-sm text-muted-foreground hover:text-accent transition-colors mt-2 inline-block">
                See what the output looks like →
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden">
                <img src={vanessaHero} alt="Vanessa Semprun, founder of Output Marketing" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO BAR */}
      <SectionWrapper className="!py-8 border-y border-border">
        <div className="container-default">
          <p className="overline text-center mb-6">B2B SaaS companies we've worked with</p>
          <div className="flex items-center justify-center gap-10 md:gap-16 overflow-x-auto">
            <div className="shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <img src={logoArchive} alt="Archive" className="h-8 w-auto object-contain" />
            </div>
            <div className="shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <img src={logoFireflies} alt="Fireflies.ai" className="h-16 w-auto object-contain" />
            </div>
            <div className="shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <img src={logoZeniq} alt="Zeniq" className="h-16 w-auto object-contain" />
            </div>
          </div>
          <div className="mt-6 text-center space-y-1">
            <p className="text-small text-muted-foreground">Archive Radar launch: <strong>2.45%</strong> engagement rate · <strong>7 brands</strong> to waitlist</p>
            <p className="text-small text-muted-foreground">B2B SaaS influencer campaign: <strong>855,000 impressions</strong> · <strong>3.40%</strong> engagement</p>
          </div>
        </div>
      </SectionWrapper>

      {/* PROBLEM */}
      <section className="bg-dark text-dark-text section-padding">
        <div className="container-narrow">
          <h2 className="text-h2 mb-8">The real problem isn't your product.</h2>
          <div className="space-y-6 text-body-lg text-dark-muted">
            <p>You're spending on content. You're spending on influencers. But when you pull the metrics, the investment doesn't justify the return. If there's even any return.</p>
            <p>Meanwhile your competitor, the one with the worse product and half your budget, is getting all the engagement. Their content is everywhere. Their name comes up in every conversation.</p>
            <p>That's not a product problem. That's a marketing problem.</p>
          </div>
        </div>
      </section>

      {/* AGITATE */}
      <SectionWrapper>
        <div className="container-default">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Budget spent. <strong>No pipeline.</strong></h3>
              <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">You've paid for posts, campaigns, and creator fees. The CAC math doesn't work.</p>
            </div>
            <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Better product. <strong>Less visibility.</strong></h3>
              <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Your roadmap is stronger. Your pricing is tighter. But no one outside your current users knows you exist.</p>
            </div>
            <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <h3 className="text-h3 mb-3 group-hover:text-[#111111]"><strong>Their name. Not yours.</strong></h3>
              <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Every time your ICP searches, reads, or asks around, your competitor's name is the one that comes up.</p>
            </div>
          </div>
          
        </div>
      </SectionWrapper>

      {/* AWARDS */}
      <SectionWrapper>
        <div className="container-default">
          <p className="overline text-center mb-6">Industry recognition</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="group text-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-default">
              <img src={badgeWebby} alt="Webby Awards" className="h-24 w-auto object-contain mx-auto mb-2" />
              <p className="text-sm font-medium">Webby Awards</p>
              <p className="text-caption">Best B2B Campaign</p>
            </div>
            <div className="group text-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-default">
              <img src={badgeCannes} alt="Cannes Lions" className="h-24 w-auto object-contain mx-auto mb-2" />
              <p className="text-sm font-medium">Cannes Lions</p>
              <p className="text-caption">Shortlist Recognition</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* SERVICES */}
      <SectionWrapper>
        <div className="container-default">
          <h2 className="text-h2 mb-3">Three ways we work with you.</h2>
          <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto mb-4">We build the founder's personal brand and the company's content machine. At Seed to Series A, you need both.</p>
          <p className="text-body-lg text-muted-foreground mb-10">All of them start the same way: a <strong>30-day pilot</strong> so you can see the work before you commit.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-surface p-6 md:p-8 flex flex-col border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <h3 className="text-h3 mb-1 group-hover:text-[#111111]">Foundation</h3>
              <p className="text-body font-semibold mb-3 group-hover:text-[#111111]">$1,800/month</p>
              <p className="text-body text-muted-foreground mb-4 group-hover:text-[#111111] transition-colors duration-300">A founder LinkedIn presence and content foundation, built for the stage where you don't have a marketing team yet. 12 ghostwritten LinkedIn posts/month. 2 SEO articles/month. Content calendar. Monthly performance report.</p>
              <p className="text-caption mb-4 group-hover:text-[#111111] transition-colors duration-300">For: Seed-stage B2B SaaS founders with no marketing hire.</p>
              <Link to="/services/founder-linkedin" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors mt-auto">Learn more →</Link>
            </div>
            <div className="group bg-surface p-6 md:p-8 flex flex-col relative border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <span className="absolute top-4 right-4 bg-foreground text-background text-xs font-semibold px-3 py-1">Most popular</span>
              <h3 className="text-h3 mb-1 group-hover:text-[#111111]">Engine</h3>
              <p className="text-body font-semibold mb-3 group-hover:text-[#111111]">$3,500/month</p>
              <p className="text-body text-muted-foreground mb-4 group-hover:text-[#111111] transition-colors duration-300">A content system that builds organic pipeline. Founder brand plus company SEO, working together. Founder LinkedIn ghostwriting (3x/week + 2 carousels/month). Brand page management. 4 to 6 SEO articles/month. Monthly KPI report. Quarterly strategy session.</p>
              <p className="text-caption mb-4 group-hover:text-[#111111] transition-colors duration-300">For: Series A B2B SaaS founders and their teams that need leads from content, not just presence.</p>
              <Link to="/services/content-marketing" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors mt-auto">Learn more →</Link>
            </div>
            <div className="group bg-surface p-6 md:p-8 flex flex-col border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <h3 className="text-h3 mb-1 group-hover:text-[#111111]">Full Stack</h3>
              <p className="text-body font-semibold mb-3 group-hover:text-[#111111]">$6,000/month</p>
              <p className="text-body text-muted-foreground mb-4 group-hover:text-[#111111] transition-colors duration-300">The complete content machine. Founder brand, company SEO, distribution, and attribution so you can prove what's working. Everything in Engine plus technical SEO, distribution layer (email + carousel repurposing), attribution setup, and one original research asset per quarter.</p>
              <p className="text-caption mb-4 group-hover:text-[#111111] transition-colors duration-300">For: Series A/B founders and their teams ready to treat content as a growth engine, not a line item.</p>
              <Link to="/services/organic-seo" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors mt-auto">Learn more →</Link>
            </div>
          </div>

          <p className="text-body text-muted-foreground text-left mt-8">
            Need a content audit, a technical SEO review, or pSEO for your product? We do those too.{" "}
            <Link to="/pricing" className="font-medium text-foreground hover:text-accent transition-colors">See pricing →</Link>
          </p>
        </div>
      </SectionWrapper>

      {/* DAMAGING ADMISSION */}
      <SectionWrapper className="bg-surface-alt">
        <div className="container-narrow">
          <h2 className="text-h2 mb-6">No paid ads. No video. No junior teams.</h2>
          <div className="space-y-6 text-body-lg text-muted-foreground">
            <p>We don't run paid ads. We don't produce video. We don't have a floor of junior coordinators managing your account while the senior team stays busy winning new clients.</p>
            <p>What we do: <strong>founder LinkedIn ghostwriting, content strategy, SEO</strong>. We do it at a level most agencies can't match precisely because we're not spread thin.</p>
            <p>We're a handful of people who do things really well. <strong>You talk directly to whoever is doing the work. Every time.</strong></p>
          </div>
        </div>
      </SectionWrapper>

      {/* PROCESS */}
      <SectionWrapper>
        <div className="container-default">
          <h2 className="text-h2 mb-10">How it works.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 1</p>
              <h3 className="text-h3 mb-3 group-hover:text-[#111111]">The Pilot</h3>
              <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">We start with <strong>30 days</strong>. You see the quality of the work. We learn your product, your ICP, and your voice. <strong>$1,500 to $2,000</strong>, <strong>no strings attached</strong>.</p>
            </div>
            <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 2</p>
              <h3 className="text-h3 mb-3 group-hover:text-[#111111]">The Strategy</h3>
              <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">If we continue, we build the full program: content calendar, creator roster, or both. Strategy first, execution second. No guessing.</p>
            </div>
            <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 3</p>
              <h3 className="text-h3 mb-3 group-hover:text-[#111111]">The Output</h3>
              <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">You get the results. We handle the work. You own everything we produce: content, relationships, playbooks.</p>
            </div>
          </div>
          <p className="text-body text-muted-foreground text-center mt-10">Results, not promises.</p>
        </div>
      </SectionWrapper>

      {/* CASE STUDIES */}
      <SectionWrapper>
        <div className="container-default">
          <p className="text-body text-muted-foreground mb-2">Most of our client relationships start with the pilot. Most of them don't stop there.</p>
          <div className="border-t border-border mt-8 pt-6">
            <h2 className="text-h2 font-semibold text-foreground mb-10">All from one client. One year. Four different programs.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.link} {...cs} />
            ))}
          </div>
          <p className="text-body text-muted-foreground mt-8">Most detailed public examples are from Archive. The operating system behind them is what we apply to every engagement.</p>
        </div>
      </SectionWrapper>

      {/* CREDENTIALS */}
      <SectionWrapper>
        <div className="container-default">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
            <div className="flex justify-center">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden">
                <img src={vanessaHero} alt="Vanessa Semprun" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div>
              <h2 className="text-h2 mb-6">Why Vanessa.</h2>
              <div className="space-y-4 text-body text-muted-foreground mb-8">
                <p>Before Output Marketing, Vanessa was Influencer Marketing Manager at Fireflies.ai, where she ran a B2B SaaS influencer campaign for their Series A product push: 39 creators, 855,000 impressions, 3.40% engagement. Before that, Marketing Manager at Archive, a B2B SaaS platform for DTC brands.</p>
                <p>She's been on the client side. She knows what it feels like to hire an agency that doesn't understand your product, your sales cycle, or your buyers. She built influencer programs from scratch, managed creator rosters, launched products, and ran the full content machine.</p>
                <p>The <strong>Webby Award</strong> and the <strong>Cannes Lions shortlist</strong> came from that work.</p>
                <p className="text-caption">IE Business School. CDMP certified.</p>
              </div>
              <div className="flex items-center gap-8">
                <img src={logoFireflies} alt="Fireflies.ai" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                <img src={logoArchive} alt="Archive" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                <img src={badgeIE} alt="IE Business School" className="h-10 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* TESTIMONIAL */}
      <SectionWrapper>
        <div className="container-default">
          <p className="overline text-center mb-6">From the client</p>
          <blockquote className="text-h3 font-normal italic max-w-2xl mx-auto text-center">
            "We went from a silent LinkedIn presence to 7 brands on the Radar waitlist in the first campaign. The engagement numbers weren't vanity — they came from the right people."
          </blockquote>
          <p className="text-caption text-muted-foreground text-center mt-4">
            — Archive team, on the Radar Feature Launch campaign
          </p>
          <div className="border-t border-border max-w-xs mx-auto mt-8 mb-2" />
        </div>
      </SectionWrapper>

      {/* PILOT OFFER */}
      <section className="bg-dark text-dark-text section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-h2 mb-6">Start with <strong>30 days</strong>.</h2>
          <p className="text-body-lg text-dark-muted mb-8"><strong>$1,500 to $2,000</strong>. Full audit of your current presence. A strategic roadmap. Two to three weeks of live execution so you can see exactly what working with us looks like.</p>
          <p className="text-body text-dark-muted mb-8"><strong>No retainer. No contract.</strong> No commitment beyond the month.</p>
          <CTAButton to="/contact" variant="primary-inverted" className="mb-4">Start my <strong>30-day pilot</strong> →</CTAButton>
          <p className="text-sm text-dark-muted mt-3"><strong>No retainer. No contract.</strong> <strong>We reply within 24 hours.</strong></p>
          <Link to="/pricing" className="text-sm text-dark-muted hover:text-accent transition-colors mt-2 inline-block">See full pricing →</Link>
        </div>
      </section>

      {/* FAQ */}
      <SectionWrapper>
        <div className="container-default">
          <h2 className="text-h2 mb-10">Common questions.</h2>
          <div className="max-w-3xl">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default Home;