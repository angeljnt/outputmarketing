import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const faqs = [
  { q: "Which channels do you manage?", a: "LinkedIn, Instagram, X, and TikTok. We recommend based on where your ICP actually is." },
  { q: "Do you create the visuals?", a: "We provide creative direction. If you have a designer, we brief them. If not, we recommend tools and templates." },
  { q: "How many posts per month?", a: "Signal tier is 12 posts across LinkedIn and one other channel. Quality and consistency over volume." },
  { q: "Do I approve every post?", a: "Yes. Nothing goes live without your approval. After the first month, most clients go to a lighter review cycle." },
  { q: "Do you run paid social?", a: "We don't run paid. We build the organic presence that makes paid more efficient when you do run it." },
];

const ServiceSocial = () => (
  <>
    <Helmet>
      <title>Social Media: Output Marketing</title>
      <meta name="description" content="A social presence that sounds like you. Consistent content for B2B SaaS and DTC brands." />
    </Helmet>

    <SectionWrapper>
      <div className="container-default">
        <h1 className="text-display mb-4">A social presence that sounds like you. Not a scheduler.</h1>
        <p className="text-body-lg text-muted-foreground mb-6">Consistent content for B2B SaaS and DTC brands that need to show up on social without spending 10 hours a week on it themselves.</p>
        <CTAButton to="/contact">Start my 30-day pilot →</CTAButton>
        <p className="text-caption mt-3">No retainer. No long contract. $1,500 to $2,000 for 30 days.</p>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-8">Is this for you?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">SaaS startups with no social strategy</h3>
            <ul className="space-y-2 text-body text-muted-foreground">
              <li className="group-hover:text-[#111111] transition-colors duration-300">• You post when you have time, which is never</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• Your LinkedIn looks abandoned</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• Your ICP is on social but your company isn't showing up</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• You need someone to build the habit and the voice</li>
            </ul>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">DTC brands with an inconsistent presence</h3>
            <ul className="space-y-2 text-body text-muted-foreground">
              <li className="group-hover:text-[#111111] transition-colors duration-300">• Product photos and promotions but no personality</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• Followers aren't growing</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• You don't have a point of view in the content</li>
              <li className="group-hover:text-[#111111] transition-colors duration-300">• You want social that builds brand, not just broadcasts products</li>
            </ul>
          </div>
        </div>
        <p className="text-body text-muted-foreground mt-8">Sound like you? That's who we built this for.</p>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-surface-alt">
      <div className="container-default">
        <h2 className="text-h2 mb-8">What the program looks like.</h2>
        <ul className="space-y-4 text-body text-muted-foreground">
          <li><strong className="text-foreground">Content calendar:</strong> A full month of planned content, mapped to your ICP and brand voice.</li>
          <li><strong className="text-foreground">Copy:</strong> We write every post. You review. Nothing goes live without your approval.</li>
          <li><strong className="text-foreground">Creative direction:</strong> Photography guidelines, graphic specs, or design briefs depending on your setup.</li>
          <li><strong className="text-foreground">Posting:</strong> We handle the scheduling and posting.</li>
          <li><strong className="text-foreground">Monthly report:</strong> Impressions, engagement rate, follower growth, and top-performing posts with context.</li>
        </ul>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-4">Channels</h2>
        <ul className="space-y-3 text-body text-muted-foreground">
          <li><strong className="text-foreground">LinkedIn:</strong> Primary for B2B SaaS.</li>
          <li><strong className="text-foreground">Instagram:</strong> Primary for DTC.</li>
          <li><strong className="text-foreground">X (Twitter):</strong> For founders in tech and SaaS who want a public voice.</li>
          <li><strong className="text-foreground">TikTok:</strong> For DTC brands where the ICP skews under-35.</li>
        </ul>
        <p className="text-caption mt-4">Signal tier covers LinkedIn + one additional channel. We'll recommend the right second channel in the pilot.</p>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-default">
        <p className="overline mb-6">From the work</p>
        <div className="group bg-surface p-6 max-w-md border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
          <h3 className="text-h3 mb-2 group-hover:text-[#111111]">Archive LinkedIn Content Strategy</h3>
          <p className="text-caption mb-3 group-hover:text-[#111111] transition-colors duration-300">7,363 impressions · 1.21% engagement rate · 114 reactions on featured post</p>
          <Link to="/work/archive-linkedin-strategy" className="text-sm font-medium group-hover:text-[#111111] hover:text-accent transition-colors">Read case study →</Link>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-8">How it works.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 1</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Voice and Calendar</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Brand voice + ICP alignment. First month's calendar. You approve direction before we write a post.</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 2</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Write and Review</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Full month of posts in one batch. One revision round, usually.</p>
          </div>
          <div className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
            <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">Step 3</p>
            <h3 className="text-h3 mb-3 group-hover:text-[#111111]">Post and Report</h3>
            <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">Post on schedule. Monthly report on what performed and what we're adjusting.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-surface-alt">
      <div className="container-narrow text-center">
        <h3 className="text-h3 mb-1">Signal tier</h3>
        <p className="text-h2 mb-4">$2,000 / month</p>
        <p className="text-body text-muted-foreground mb-6">Or start with the pilot: $1,500 to $2,000 for 30 days.</p>
        <CTAButton to="/contact">Start my 30-day pilot →</CTAButton>
        <p className="mt-3"><Link to="/pricing" className="text-sm text-muted-foreground hover:text-accent transition-colors">See full pricing →</Link></p>
      </div>
    </SectionWrapper>

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

export default ServiceSocial;
