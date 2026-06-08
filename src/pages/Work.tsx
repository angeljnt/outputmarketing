import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CaseStudyCard from "@/components/CaseStudyCard";
import Footer from "@/components/Footer";

const brands = [
  {
    name: "Apollo",
    type: "Creator campaign",
    date: "2025",
    metrics: [
      <>4.83M views</>,
      <>260 content pieces</>,
      <>11 viral posts (100K+ views)</>,
      <>$764K budget · $18.62 blended CPM</>,
    ],
    link: "/work/apollo",
  },
  {
    name: "Airwallex",
    type: "Creator campaign · 3 phases",
    date: "2025",
    metrics: [
      <>2.65M views</>,
      <>88 content pieces</>,
      <>7 viral posts (100K+ views)</>,
      <>$332K budget · multi-phase rollout</>,
    ],
    link: "/work/airwallex",
  },
  {
    name: "Monday",
    type: "AI Agents campaign",
    date: "In progress",
    badge: (
      <span className="inline-flex items-center gap-1.5 text-caption uppercase tracking-wider text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        In progress
      </span>
    ),
    metrics: [
      <>23 creators activated</>,
      <>11 live posts (so far)</>,
      <>20K+ views (early)</>,
      <>$79K budget</>,
    ],
    link: "/work/monday",
  },
  {
    name: "Tavus",
    type: "Creator campaign · 2 phases",
    date: "2025",
    metrics: [
      <>793K views</>,
      <>16 content pieces</>,
      <>3 viral posts (100K+ views)</>,
      <>$36K budget</>,
    ],
    link: "/work/tavus",
  },
  {
    name: "Beanstack",
    type: "Creator campaign",
    date: "2025",
    metrics: [
      <>742K views</>,
      <>33 content pieces</>,
      <>7.14% engagement rate (3 to 5x platform avg)</>,
      <>$39K budget</>,
    ],
    link: "/work/beanstack",
  },
  {
    name: "Archive",
    type: "Launch, retention, founder, product marketing",
    date: "Ongoing",
    metrics: [
      <>Radar feature launch program</>,
      <>AI Insider newsletter and retention system</>,
      <>Founder LinkedIn content strategy</>,
      <>Product marketing campaign execution</>,
    ],
    link: "/work/archive-radar-launch",
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
                  <p className="text-caption text-muted-foreground mt-2">Budget managed</p>
                </div>
                <div>
                  <p className="text-h1 font-semibold leading-none">21</p>
                  <p className="text-caption text-muted-foreground mt-2">Viral posts (100K+ views)</p>
                </div>
                <div>
                  <p className="text-h1 font-semibold leading-none">197K+</p>
                  <p className="text-caption text-muted-foreground mt-2">Total engagements</p>
                </div>
                <div>
                  <p className="text-h1 font-semibold leading-none">$39.02</p>
                  <p className="text-caption text-muted-foreground mt-2">Average CPM across campaigns</p>
                </div>
                <div>
                  <p className="text-h1 font-semibold leading-none">$0.79</p>
                  <p className="text-caption text-muted-foreground mt-2">Average cost per engagement</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </SectionWrapper>


      <SectionWrapper className="bg-surface-alt">
        <div className="container-default">
          <div className="max-w-3xl mb-10">
            <p className="overline mb-3">The work</p>
            <h2 className="text-h2 mb-4">One case study per brand.</h2>
            <p className="text-body text-muted-foreground">
              Click any brand to read the full case study.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((b) => (
              <CaseStudyCard
                key={b.name}
                title={b.name}
                client={b.name}
                type={b.type}
                date={b.date}
                metrics={b.metrics}
                link={b.link}
                badge={(b as { badge?: JSX.Element }).badge}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default Work;
