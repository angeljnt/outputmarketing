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

const companies = [
  {
    name: "Apollo",
    focus: "Content and SEO support",
    summary: "Helped scale content output tied to pipeline-relevant search intent.",
  },
  {
    name: "Airwallex",
    focus: "B2B content strategy",
    summary: "Worked on positioning and content programs for a global fintech audience.",
  },
  {
    name: "Beanstack",
    focus: "Lifecycle and content",
    summary: "Supported content programs aimed at retention and customer activation.",
  },
  {
    name: "Tavus",
    focus: "Launch and visibility",
    summary: "Contributed to launch motion and founder visibility in a fast-moving AI category.",
  },
];

const Work = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Output Marketing</title>
        <meta
          name="description"
          content="A summary of Output Marketing's case studies with B2B SaaS teams: launches, content systems, founder visibility, and execution."
        />
      </Helmet>

      <SectionWrapper>
        <div className="container-default">
          <p className="overline mb-4">Case studies</p>
          <h1 className="text-display mb-6">
            5 B2B SaaS teams. 4 deep case studies. 1 repeatable system.
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-3xl mb-10">
            The work below spans product launches, content systems, founder visibility, and
            retention. Most of the deep proof comes from Archive — that is intentional. It
            shows how the same operating system handled four very different problems inside
            one account.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            <div>
              <p className="text-display font-semibold">5</p>
              <p className="text-caption text-muted-foreground mt-1">B2B SaaS clients</p>
            </div>
            <div>
              <p className="text-display font-semibold">4</p>
              <p className="text-caption text-muted-foreground mt-1">Deep case studies</p>
            </div>
            <div>
              <p className="text-display font-semibold">4</p>
              <p className="text-caption text-muted-foreground mt-1">Disciplines covered</p>
            </div>
            <div>
              <p className="text-display font-semibold">1</p>
              <p className="text-caption text-muted-foreground mt-1">Operating system</p>
            </div>
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

      <SectionWrapper className="bg-surface-alt">
        <div className="container-default">
          <div className="max-w-3xl mb-10">
            <p className="overline mb-3">Other companies</p>
            <h2 className="text-h2 mb-4">Where the system has also been applied.</h2>
            <p className="text-body text-muted-foreground">
              Shorter engagements and supporting work across other B2B SaaS teams.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((c) => (
              <div
                key={c.name}
                className="bg-background border border-neutral-200 p-6 flex flex-col"
              >
                <p className="overline mb-3">{c.focus}</p>
                <h3 className="text-h3 mb-3">{c.name}</h3>
                <p className="text-body text-muted-foreground">{c.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default Work;
