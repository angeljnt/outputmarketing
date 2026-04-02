import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import logoFireflies from "@/assets/logo-fireflies.png";
import logoArchive from "@/assets/logo-archive.svg";
import badgeWebby from "@/assets/badge-webby.png";
import badgeCannes from "@/assets/badge-cannes.png";

const faqs: { q: string; a: React.ReactNode }[] = [
  { q: "Will it actually sound like me?", a: <>Yes. That's the whole job. If it doesn't sound like you, you don't post it. <strong>The first month is the calibration period.</strong> Most clients say <strong>month two is when it clicks</strong>.</> },
  { q: "Do I have to write anything?", a: "No. You do the voice capture conversations. After that, we handle everything. You review and approve. That's it." },
  { q: "What if I want to write some posts myself?", a: "That's fine. Most clients do a mix. We fill the calendar. You swap in something you wrote when you have it. The calendar doesn't stall because you had a busy week." },
  { q: "How long until LinkedIn starts working?", a: "LinkedIn is a long-term play. Most clients see meaningful engagement improvement in month two. Inbound attribution usually shows up in month four or five. We'll tell you this before you sign, not after." },
  { q: "Do you post on my behalf or do I post myself?", a: "Either. Most clients prefer to post themselves so it feels personal. We prepare the post, you hit publish. We can also manage posting if you'd rather hand it off entirely." },
];

const ServiceFounderLinkedIn = () => (
  <>
    <Helmet>
      <title>Founder LinkedIn Ghostwriting — Output Marketing</title>
      <meta name="description" content="LinkedIn ghostwriting for B2B SaaS founders. We write in your voice. You post. Your buyers find you before they find your competitor." />
    </Helmet>

    {/* HERO */}
    <SectionWrapper>
      <div className="container-default">
        <h1 className="text-display mb-4">Your buyers are on LinkedIn. You're not showing up.</h1>
        <p className="text-body-lg text-muted-foreground mb-6">We write in your voice. Three posts a week. Carousels that get read. LinkedIn that builds pipeline, not just followers.</p>
        <CTAButton to="/contact">Start my <strong>30-day pilot</strong> →</CTAButton>
        <p className="text-caption mt-3"><strong>No retainer. No long contract.</strong> <strong>$1,500 to $2,000</strong> for <strong>30 days</strong>.</p>
      </div>
    </SectionWrapper>

    {/* THE PROBLEM */}
    <section className="bg-dark text-dark-text section-padding">
      <div className="container-narrow">
        <h2 className="text-h2 mb-8"><strong>90%</strong> of SaaS companies post only from their company page.</h2>
        <div className="space-y-6 text-body-lg text-dark-muted">
          <p>LinkedIn's own data says personal profiles get <strong>8 times more engagement</strong> than company pages. Yet most B2B SaaS companies treat their founder's LinkedIn as an afterthought, a place to share company announcements and the occasional thought that felt worth posting.</p>
          <p>Meanwhile, the founders who show up consistently, take real positions, and write in a voice that sounds like a person rather than a press release are generating inbound. Not because they got lucky. Because LinkedIn rewards personal content from people, not brands.</p>
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
            <li className="group-hover:text-[#111111] transition-colors duration-300">• Your LinkedIn is inconsistent. Or empty. Or you post when something big happens and go quiet for three weeks.</li>
            <li className="group-hover:text-[#111111] transition-colors duration-300">• Your ICP is on LinkedIn. You know it. You see your competitors showing up there.</li>
            <li className="group-hover:text-[#111111] transition-colors duration-300">• You have opinions about your space. You just don't have time to write.</li>
            <li className="group-hover:text-[#111111] transition-colors duration-300">• You've thought about ghostwriting but weren't sure if the voice would sound like you.</li>
          </ul>
        </div>
        <p className="text-body text-muted-foreground mt-8">Sound familiar? That's who we built this for.</p>
      </div>
    </SectionWrapper>

    {/* WHAT WE DO */}
    <SectionWrapper className="bg-surface-alt">
      <div className="container-default">
        <h2 className="text-h2 mb-8">What the engagement looks like.</h2>
        <ul className="space-y-4 text-body text-muted-foreground">
          <li><strong className="text-foreground">Voice capture:</strong> Two to three conversations. We listen to how you talk about your work, your product, and your industry. We read your existing writing. We find your voice before we write a word.</li>
          <li><strong className="text-foreground">Content calendar:</strong> A full month of planned posts, mapped to your ICP and what they care about. You approve direction before we write anything.</li>
          <li><strong className="text-foreground">Ghostwriting:</strong> Three posts a week. Two carousels a month. Written in your voice. You review. Nothing goes live without your approval.</li>
          <li><strong className="text-foreground">Performance tracking:</strong> Monthly report covering reach, engagement rate, profile views, and inbound attributed to LinkedIn activity.</li>
          <li><strong className="text-foreground">Iteration:</strong> We track what lands and adjust. A strong voice improves over time. Month three performs better than month one.</li>
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
            <p className="text-caption group-hover:text-[#111111] transition-colors duration-300">&nbsp;</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300 text-center">
            <p className="text-display mb-2 group-hover:text-[#111111]">277%</p>
            <p className="text-body font-semibold mb-1 group-hover:text-[#111111]">More B2B leads from LinkedIn than any other social platform</p>
            <p className="text-caption group-hover:text-[#111111] transition-colors duration-300">&nbsp;</p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* CREDENTIALS */}
    <SectionWrapper>
      <div className="container-narrow">
        <p className="overline mb-4">We've done this before.</p>
        <p className="text-body text-muted-foreground mb-8">Before Output Marketing, Vanessa ran influencer programs at Fireflies.ai. She managed a B2B SaaS campaign for their Series A product push: <strong>39 creators</strong>, <strong>855,958 impressions</strong>, <strong>3.40% engagement</strong>. The four Archive campaigns that followed were built on the same playbook.</p>
        <div className="flex items-center gap-6 flex-wrap">
          <img src={logoFireflies} alt="Fireflies.ai" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src={logoArchive} alt="Archive" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src={badgeWebby} alt="Webby Awards" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src={badgeCannes} alt="Cannes Lions" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
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
            <p className="text-caption mb-3 group-hover:text-[#111111] transition-colors duration-300">7,363 impressions · 114 reactions · 1.21% engagement rate</p>
            <Link to="/work/archive-linkedin-strategy" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors">Read case study →</Link>
          </div>
          <div className="group bg-surface p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-2 group-hover:text-[#111111]">Archive Radar Feature Launch</h3>
            <p className="text-caption mb-3 group-hover:text-[#111111] transition-colors duration-300">7 brands to waitlist · 2.45% engagement rate</p>
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
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">We have the voice capture conversations, build the first month's content calendar, write the first batch of posts. You see the quality before committing to anything.</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 2</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Monthly cadence</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Content calendar approved. Posts written. You review. We publish. Monthly report delivered.</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 3</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Compound</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">The first month is the hardest. By month three, the voice is locked. By month six, the inbound is real.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* TRANSFERABILITY + PRICING */}
    <SectionWrapper className="bg-surface-alt">
      <div className="container-narrow text-center">
        <p className="text-body text-muted-foreground mb-6">Most detailed public examples are from Archive. The operating system behind them is what we apply to every engagement.</p>
        <h3 className="text-h3 mb-1">Foundation tier</h3>
        <p className="text-h2 mb-4">$1,800 / month</p>
        <p className="text-body text-muted-foreground mb-6">Or start with the pilot: <strong>$1,500 to $2,000</strong> for <strong>30 days</strong>.</p>
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

export default ServiceFounderLinkedIn;