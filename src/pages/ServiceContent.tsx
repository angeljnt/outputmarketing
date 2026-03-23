import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const faqs = [
  { q: "Who writes the content?", a: "We write it. You review and approve before anything goes live. Most clients do a light edit pass." },
  { q: "How long until content starts ranking?", a: "Realistically, 3 to 6 months for new content to rank in competitive categories. We'll set expectations on your specific targets in the strategy phase." },
  { q: "Is LinkedIn ghostwriting included?", a: "The Engine tier includes founder LinkedIn ghostwriting. The add-on (+$800/month) is for Signal-tier clients who want personal LinkedIn on top." },
  { q: "Do we own the content?", a: "Yes. Every article, post, strategy doc, and content calendar belongs to you." },
  { q: "Can we use you alongside an internal team?", a: "Yes. Some clients use us to add capacity to an existing team. Others use us to build the system their team works from." },
];

const ServiceContent = () => (
  <>
    <Helmet>
      <title>Content Marketing: Output Marketing</title>
      <meta name="description" content="Content that sounds like a person wrote it. SEO articles, LinkedIn ghostwriting, and content strategy for B2B SaaS teams." />
    </Helmet>

    <SectionWrapper>
      <div className="container-default">
        <h1 className="text-display mb-4">Content that sounds like a person wrote it. Because one did.</h1>
        <p className="text-body-lg text-muted-foreground mb-6">SEO articles, LinkedIn ghostwriting, and content strategy for B2B SaaS teams that need organic pipeline, not just word count.</p>
        <CTAButton to="/contact">Start my 30-day pilot →</CTAButton>
        <p className="text-caption mt-3">No retainer. No long contract. $1,500 to $2,000 for 30 days.</p>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-8">Is this for you?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-h3 mb-3">SaaS founders without a content team</h3>
            <ul className="space-y-2 text-body text-muted-foreground">
              <li>• Seed to Series A</li>
              <li>• You know content matters but haven't prioritized it</li>
              <li>• Your LinkedIn is inconsistent. Your blog is empty or outdated.</li>
              <li>• You want a system that runs without you writing everything yourself</li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3 mb-3">DTC brands strong on product, silent online</h3>
            <ul className="space-y-2 text-body text-muted-foreground">
              <li>• You've found PMF</li>
              <li>• Your paid social is expensive and the CAC math is getting worse</li>
              <li>• You need content that brings buyers to you</li>
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
          <li><strong className="text-foreground">SEO articles:</strong> Written by humans, optimized for search, structured to answer the questions your ICP is actively looking for.</li>
          <li><strong className="text-foreground">LinkedIn ghostwriting:</strong> Founder or brand voice. We write it, you post it, it sounds like you.</li>
          <li><strong className="text-foreground">Content strategy:</strong> A document that tells you what to write, why, for whom, and in what order.</li>
          <li><strong className="text-foreground">AEO:</strong> Making sure your content answers the questions being asked in ChatGPT, Perplexity, and Google's AI overviews.</li>
          <li><strong className="text-foreground">Monthly KPI reporting:</strong> Traffic, rankings, engagement rate, leads attributed. Actual numbers with context.</li>
        </ul>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-default">
        <p className="overline mb-6">From the work</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-surface p-6 border border-transparent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-2">Archive LinkedIn Content Strategy</h3>
            <p className="text-caption mb-3">7,363 impressions · 114 reactions · 1.21% engagement rate</p>
            <Link to="/work/archive-linkedin-strategy" className="text-sm font-medium hover:text-accent transition-colors">Read case study →</Link>
          </div>
          <div className="bg-surface p-6 border border-transparent hover:border-accent transition-colors duration-300">
            <h3 className="text-h3 mb-2">Archive Product Marketing Campaign</h3>
            <p className="text-caption mb-3">2 campaigns managed simultaneously · Full dashboard built</p>
            <Link to="/work/archive-product-marketing" className="text-sm font-medium hover:text-accent transition-colors">Read case study →</Link>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container-default">
        <h2 className="text-h2 mb-8">How it works.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="overline mb-3">Step 1</p>
            <h3 className="text-h3 mb-3">Audit</h3>
            <p className="text-body text-muted-foreground">We look at what you have, find the gaps, and identify the openings.</p>
          </div>
          <div>
            <p className="overline mb-3">Step 2</p>
            <h3 className="text-h3 mb-3">Strategy</h3>
            <p className="text-body text-muted-foreground">Content calendar, keyword targets, topic clusters, voice guide. You approve. Then we execute.</p>
          </div>
          <div>
            <p className="overline mb-3">Step 3</p>
            <h3 className="text-h3 mb-3">Publish and Measure</h3>
            <p className="text-body text-muted-foreground">Monthly report on what moved: rankings, traffic, engagement, leads.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-surface-alt">
      <div className="container-narrow text-center">
        <h3 className="text-h3 mb-1">Engine tier</h3>
        <p className="text-h2 mb-4">$3,500 / month</p>
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

export default ServiceContent;