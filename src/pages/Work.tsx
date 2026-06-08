import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CaseStudyCard from "@/components/CaseStudyCard";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    title: "Archive: Radar Feature Launch",
    client: "Archive",
    type: "Product and Launch Marketing",
    date: "2025",
    metrics: [
      <>Launch support extended beyond a single announcement</>,
      <>Audience interest turned into clearer waitlist demand</>,
      <>Product value translated more cleanly to the market</>,
    ],
    link: "/work/archive-radar-launch",
  },
  {
    title: "Archive: AI Insider Newsletter",
    client: "Archive",
    type: "Content System and Retention Support",
    date: "2025",
    metrics: [
      <>Recurring value-delivery channel created</>,
      <>Segmentation and editorial logic built into the program</>,
      <>Newsletter work tied back to broader product priorities</>,
    ],
    link: "/work/archive-ai-newsletter",
  },
  {
    title: "Archive: LinkedIn Content Strategy",
    client: "Archive",
    type: "Founder and Brand Visibility",
    date: "Ongoing",
    metrics: [
      <>Founder presence turned into a repeatable operating rhythm</>,
      <>Messaging became more consistent in-market</>,
      <>Thought leadership moved from sporadic to structured</>,
    ],
    link: "/work/archive-linkedin-strategy",
  },
  {
    title: "Archive: Product Marketing Campaign",
    client: "Archive",
    type: "Execution Systems",
    date: "Ongoing",
    metrics: [
      <>Campaigns tied more closely to product priorities</>,
      <>Reporting and execution structure became easier to manage</>,
      <>Cross-functional marketing work gained more follow-through</>,
    ],
    link: "/work/archive-product-marketing",
  },
];

const brands = [
  {
    name: "Apollo",
    focus: "Creator campaign · 2025",
    stats: ["4.83M views", "260 content pieces", "11 viral posts (100K+)", "$764K budget"],
    note: "Blended CPM $18.62 — well below the $50–$90 LinkedIn industry average.",
  },
  {
    name: "Airwallex",
    focus: "Creator campaign · 3 phases",
    stats: ["2.65M views", "88 content pieces", "7 viral posts (100K+)", "$332K budget"],
    note: "Multi-phase rollout including a dedicated TikTok motion.",
  },
  {
    name: "Monday.com",
    focus: "AI Agents campaign · in progress",
    stats: ["23 creators", "11 live posts (so far)", "20K+ views (early)", "$79K budget"],
    note: "Campaign still rolling — metrics climbing as posts go live.",
  },
  {
    name: "Tavus",
    focus: "Creator campaign · 2 phases",
    stats: ["793K views", "16 content pieces", "3 viral posts (100K+)", "$36K budget"],
    note: "Lean, high-leverage campaign in a fast-moving AI category.",
  },
  {
    name: "Beanstack",
    focus: "Creator campaign",
    stats: ["742K views", "33 content pieces", "7.14% engagement rate", "$39K budget"],
    note: "Best engagement rate across the portfolio — 3–5x platform average.",
  },
];

const Work = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Output Marketing</title>
        <meta
          name="description"
          content="9M+ impressions, 400+ content pieces, 200+ creators activated, and $1.25M+ in campaign budgets managed across 5 B2B SaaS brands."
        />
      </Helmet>

      <SectionWrapper>
        <div className="container-default">
          <p className="overline mb-4">Case studies</p>
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <div className="bg-surface border border-neutral-200 p-8 md:p-10 flex flex-col justify-center">
              <h1 className="text-h1 mb-5">
                9M+ impressions. 200+ creators. 5 B2B SaaS brands. One operating system.
              </h1>
              <p className="text-body text-muted-foreground mb-4">
                Aggregate impact across creator-led campaigns for Apollo, Airwallex,
                Monday.com, Tavus, and Beanstack, plus deep program work with Archive.
              </p>
              <p className="text-body text-muted-foreground">
                Platforms covered: LinkedIn, TikTok, Instagram, YouTube, X, Threads.
                Below: the headline numbers, the brands, and the case studies.
              </p>
            </div>

            <div className="bg-surface border border-neutral-200 p-8 md:p-10">
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <p className="text-h1 font-semibold leading-none">9M+</p>
                  <p className="text-caption text-muted-foreground mt-2">Total impressions</p>
                </div>
                <div>
                  <p className="text-h1 font-semibold leading-none">400+</p>
                  <p className="text-caption text-muted-foreground mt-2">Content pieces deployed</p>
                </div>
                <div>
                  <p className="text-h1 font-semibold leading-none">200+</p>
                  <p className="text-caption text-muted-foreground mt-2">Creators activated</p>
                </div>
                <div>
                  <p className="text-h1 font-semibold leading-none">$1.25M+</p>
                  <p className="text-caption text-muted-foreground mt-2">Campaign budgets managed</p>
                </div>
                <div>
                  <p className="text-h1 font-semibold leading-none">21</p>
                  <p className="text-caption text-muted-foreground mt-2">Viral posts (100K+ views)</p>
                </div>
                <div>
                  <p className="text-h1 font-semibold leading-none">2.19%</p>
                  <p className="text-caption text-muted-foreground mt-2">Blended engagement rate</p>
                </div>
              </div>
              <p className="text-caption text-muted-foreground mt-6 pt-6 border-t border-neutral-200">
                B2B sponsored content engagement averages 1 to 1.5%.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>


      <SectionWrapper className="bg-surface-alt">
        <div className="container-default">
          <div className="max-w-3xl mb-10">
            <p className="overline mb-3">The brands</p>
            <h2 className="text-h2 mb-4">Five B2B SaaS campaigns, in detail.</h2>
            <p className="text-body text-muted-foreground">
              Per-brand breakdown of reach, output, and budget. Detailed case studies are
              rolling out per company.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((b) => (
              <div
                key={b.name}
                className="bg-background border border-neutral-200 p-6 flex flex-col"
              >
                <p className="overline mb-3">{b.focus}</p>
                <h3 className="text-h3 mb-4">{b.name}</h3>
                <ul className="space-y-1 mb-4">
                  {b.stats.map((s) => (
                    <li key={s} className="text-body flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-caption text-muted-foreground mt-auto">{b.note}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container-default">
          <div className="max-w-3xl mb-10">
            <p className="overline mb-3">Deep case studies</p>
            <h2 className="text-h2 mb-4">Archive: one client, four disciplines.</h2>
            <p className="text-body text-muted-foreground">
              Four programs built inside the same account — launches, retention content,
              founder visibility, and product marketing execution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.link} {...cs} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default Work;
