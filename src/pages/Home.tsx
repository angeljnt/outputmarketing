import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import GhostButton from "@/components/GhostButton";
import FAQItem from "@/components/FAQItem";
import CaseStudyCard from "@/components/CaseStudyCard";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import vanessaHero from "@/assets/vanessa-hero.jpeg";
import logoFireflies from "@/assets/logo-fireflies.png";
import logoZeniq from "@/assets/logo-zeniq.svg";
import logoArchive from "@/assets/logo-archive.svg";
import badgeWebby from "@/assets/badge-webby.png";
import badgeCannes from "@/assets/badge-cannes.png";
import badgeIE from "@/assets/badge-ie.png";
import badgeCDMP from "@/assets/badge-cdmp.png";

const caseStudies = [
  {
    title: "Archive: Radar Feature Launch",
    client: "Archive",
    type: "Product Launch Marketing",
    date: "Feb 2025",
    metrics: ["7 brands added to waitlist", "2.45% engagement rate", "1 upsell opportunity identified"],
    link: "/work/archive-radar-launch",
  },
  {
    title: "Archive: AI Insider Newsletter",
    client: "Archive",
    type: "Product Launch & Customer Retention",
    date: "2025",
    metrics: ["Recurring revenue stream established", "3-tier customer segmentation executed", "Retention improved through value-driven content"],
    link: "/work/archive-ai-newsletter",
  },
  {
    title: "Archive: LinkedIn Content Strategy",
    client: "Archive",
    type: "Thought Leadership",
    date: "Ongoing",
    metrics: ["114 reactions + 68 comments on featured post", "7,363 impressions", "1.21% engagement rate maintained"],
    link: "/work/archive-linkedin-strategy",
  },
  {
    title: "Archive: Product Marketing Campaign",
    client: "Archive",
    type: "Product Marketing",
    date: "Ongoing",
    metrics: ["Full campaign dashboard built", "AI Assistant + Gifting campaigns managed", "DTC brand pipeline tracked"],
    link: "/work/archive-product-marketing",
  },
];

const faqs = [
  { q: "Do you work with early-stage startups?", a: "Yes. Most of our clients are Seed to Series A, with ARR between $300K and $5M. That's exactly the stage where getting the marketing right compounds the most." },
  { q: "We've never done influencer marketing before. Is that a problem?", a: "That's actually where we do our best work. Building a program from scratch is cleaner than fixing one that went sideways. We've done both." },
  { q: "Do you run paid social or Google ads?", a: "No. We don't run paid. If that's what you need, we'll tell you who does it well. What we do: influencer programs, content, LinkedIn, SEO. We do it without the waste that comes from spreading across everything." },
  { q: "What happens if the pilot doesn't work out?", a: "We part ways. No pressure, no awkward conversation. The pilot exists precisely so neither of us has to make a long-term commitment before we know it's the right fit." },
  { q: "How fast can we start?", a: "Usually within a week of the first call. We don't have an onboarding queue." },
  { q: "Who actually does the work?", a: "Vanessa and Angel. Not a team of juniors supervised by someone you met once. You'll have both of our contact info from day one." },
  { q: "Do you work with DTC eCommerce brands too?", a: "Yes. The influencer and content work maps cleanly to DTC, especially brands that have found their product-market fit but are burning too much on paid social and need organic and creator growth." },
  { q: "All your case studies are from Archive. Should I be concerned?", a: "No. We chose to go deep with one client rather than shallow with ten. Four different campaigns, different channels, different goals, all from the same relationship. That's what it looks like when an agency actually commits to a client's growth. You'll get the same." },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Output Marketing: B2B Marketing Agency for SaaS and DTC</title>
        <meta name="description" content="Human-first B2B marketing for SaaS and DTC brands. Influencer programs, content strategy, LinkedIn, and SEO. Start with a 30-day pilot." />
      </Helmet>

      {/* HERO */}
      <section className="section-padding">
        <div className="container-default">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h1 className="text-display mb-4">
                Marketing that actually moves the needle.{" "}
                <span className="block">Built for B2B SaaS and DTC brands.</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-6">
                Human-first. No AI slop. Marketing with ROI.
              </p>
              <CTAButton to="/contact" className="mb-3">Start my 30-day pilot →</CTAButton>
              <p className="text-caption">No retainer commitment. No long contracts. $1,500 to $2,000 for 30 days.</p>
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
          <p className="overline text-center mb-6">Brands we've built programs for</p>
          <div className="flex items-center justify-center gap-10 md:gap-16 overflow-x-auto">
            <div className="shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <img src={logoArchive} alt="Archive" className="h-8 w-auto object-contain" />
            </div>
            <div className="shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <img src={logoFireflies} alt="Fireflies.ai" className="h-8 w-auto object-contain" />
            </div>
            <div className="shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              <img src={logoZeniq} alt="Zeniq" className="h-8 object-contain" />
            </div>
          </div>
          <div className="mt-6 text-center space-y-1">
            <p className="text-small text-muted-foreground">Archive Radar launch: 2.45% engagement rate · 7 brands to waitlist</p>
            <p className="text-small text-muted-foreground">B2B fintech funding announcement: 855,000 impressions · 3.40% engagement</p>
          </div>
        </div>
      </SectionWrapper>

      {/* PROBLEM */}
      <section className="bg-dark text-dark-text section-padding">
        <div className="container-narrow">
          <h2 className="text-h2 mb-8">Here's what's actually happening.</h2>
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
              <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Budget spent. No pipeline.</h3>
              <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">You've paid for posts, campaigns, and creator fees. The CAC math doesn't work.</p>
            </div>
            <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Better product. Less visibility.</h3>
              <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Your roadmap is stronger. Your pricing is tighter. But no one outside your current users knows you exist.</p>
            </div>
            <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Their name. Not yours.</h3>
              <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Every time your ICP searches, reads, or asks around, your competitor's name is the one that comes up.</p>
            </div>
          </div>
          <p className="text-body text-muted-foreground text-center mt-10">This is a solvable problem. Most agencies just aren't solving it.</p>
        </div>
      </SectionWrapper>

      {/* AWARDS */}
      <SectionWrapper>
        <div className="container-default">
          <p className="overline text-center mb-6">Industry recognition</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <img src={badgeWebby} alt="Webby Awards" className="h-8 w-auto object-contain mx-auto mb-2" />
              <p className="text-sm font-medium">Webby Awards</p>
              <p className="text-caption">Best B2B Campaign</p>
            </div>
            <div className="text-center">
              <img src={badgeCannes} alt="Cannes Lions" className="h-8 w-auto object-contain mx-auto mb-2" />
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
          <p className="text-body-lg text-muted-foreground mb-10">All of them start the same way: a 30-day pilot so you can see the work before you commit.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-surface p-6 md:p-8 flex flex-col border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <h3 className="text-h3 mb-1 group-hover:text-[#111111]">Signal</h3>
              <p className="text-body font-semibold mb-3 group-hover:text-[#111111]">$2,000/month</p>
              <p className="text-body text-muted-foreground mb-4 group-hover:text-[#111111] transition-colors duration-300">A consistent, human social presence on the channels that matter for your ICP. LinkedIn + one other channel. 12 posts/month. Content calendar. Monthly report.</p>
              <p className="text-caption mb-4 group-hover:text-[#111111] transition-colors duration-300">For: Early-stage SaaS teams with no marketing hire yet.</p>
              <Link to="/services/social-media" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors mt-auto">Learn more →</Link>
            </div>
            <div className="group bg-surface p-6 md:p-8 flex flex-col relative border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <span className="absolute top-4 right-4 bg-foreground text-background text-xs font-semibold px-3 py-1">Most popular</span>
              <h3 className="text-h3 mb-1 group-hover:text-[#111111]">Engine</h3>
              <p className="text-body font-semibold mb-3 group-hover:text-[#111111]">$3,500/month</p>
              <p className="text-body text-muted-foreground mb-4 group-hover:text-[#111111] transition-colors duration-300">A content system that builds organic pipeline. Not just followers. Content strategy, 4 SEO articles/month, 16 social posts, founder LinkedIn ghostwriting, monthly KPI report.</p>
              <p className="text-caption mb-4 group-hover:text-[#111111] transition-colors duration-300">For: SaaS companies that need leads from content, not just presence.</p>
              <Link to="/services/content-marketing" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors mt-auto">Learn more →</Link>
            </div>
            <div className="group bg-surface p-6 md:p-8 flex flex-col border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
              <h3 className="text-h3 mb-1 group-hover:text-[#111111]">Program</h3>
              <p className="text-body font-semibold mb-3 group-hover:text-[#111111]">$5,000/month</p>
              <p className="text-body text-muted-foreground mb-4 group-hover:text-[#111111] transition-colors duration-300">Your first influencer program. Or the one that actually works this time. 5 to 10 qualified creators/month, strategy, execution, ROI measurement, executive report.</p>
              <p className="text-caption mb-4 group-hover:text-[#111111] transition-colors duration-300">For: B2B SaaS and DTC brands ready to build pipeline through creators.</p>
              <Link to="/services/influencer-marketing" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors mt-auto">Learn more →</Link>
            </div>
          </div>

          <p className="text-body text-muted-foreground text-center mt-8">
            Need a landing page, an AEO audit, or CEO ghostwriting? We do those too.{" "}
            <Link to="/pricing" className="font-medium text-foreground hover:text-accent transition-colors">See pricing →</Link>
          </p>
        </div>
      </SectionWrapper>

      {/* DAMAGING ADMISSION */}
      <SectionWrapper className="bg-surface-alt">
        <div className="container-narrow">
          <h2 className="text-h2 mb-6">Here's what we won't do.</h2>
          <div className="space-y-6 text-body-lg text-muted-foreground">
            <p>We don't run paid ads. We don't produce video. We don't have a floor of junior coordinators managing your account while the senior team stays busy winning new clients.</p>
            <p>What we do: influencer programs, content strategy, LinkedIn, SEO. We do it at a level most agencies can't match precisely because we're not spread thin.</p>
            <p>We're a handful of people who do things really well. You talk directly to whoever is doing the work. Every time.</p>
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
              <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">We start with 30 days. You see the quality of the work. We learn your product, your ICP, and your voice. $1,500 to $2,000, no strings attached.</p>
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
          <h2 className="text-h2 mb-10">All from one client. One year. Four different programs.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.link} {...cs} />
            ))}
          </div>
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
                <p>Before Output Marketing, Vanessa was Influencer Marketing Manager at Fireflies.ai, where she ran a B2B fintech Series G campaign: 39 creators, 855,000 impressions, 3.40% engagement. Before that, Marketing Manager at Archive, a B2B SaaS platform for DTC brands.</p>
                <p>She's been on the client side. She knows what it feels like to hire an agency that doesn't understand your product, your sales cycle, or your buyers. She built influencer programs from scratch, managed creator rosters, launched products, and ran the full content machine.</p>
                <p>The Webby Award and the Cannes Lions shortlist came from that work.</p>
                <p className="text-caption">IE Business School. CDMP certified.</p>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <img src={logoFireflies} alt="Fireflies.ai" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                <img src={logoArchive} alt="Archive" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                <img src={badgeIE} alt="IE Business School" className="h-8 w-auto object-contain" />
                <img src={badgeCDMP} alt="CDMP Certified" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* PILOT OFFER */}
      <section className="bg-dark text-dark-text section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-h2 mb-6">Start with 30 days.</h2>
          <p className="text-body-lg text-dark-muted mb-8">$1,500 to $2,000. Full audit of your current presence. A strategic roadmap. Two to three weeks of live execution so you can see exactly what working with us looks like.</p>
          <p className="text-body text-dark-muted mb-8">No retainer. No contract. No commitment beyond the month.</p>
          <CTAButton to="/contact" variant="primary-inverted" className="mb-4">Start my 30-day pilot →</CTAButton>
          <p className="text-sm text-dark-muted mt-3">No retainer. No contract. We reply within 24 hours.</p>
          <Link to="/pricing" className="text-sm text-dark-muted hover:text-accent transition-colors mt-2 inline-block">See full pricing →</Link>
        </div>
      </section>

      {/* FAQ */}
      <SectionWrapper>
        <div className="container-default">
          <h2 className="text-h2 mb-10">Questions you probably have.</h2>
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
