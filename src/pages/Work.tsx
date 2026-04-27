import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import { clientList, proofCategories } from "@/content/siteContent";

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

const Work = () => {
  return (
    <>
      <Helmet>
        <title>Work | Output Marketing</title>
        <meta
          name="description"
          content="See how Output Marketing helps lean B2B SaaS teams with content, launches, visibility, and follow-through."
        />
      </Helmet>

      <SectionWrapper>
        <div className="container-default">
          <p className="overline mb-4">Work and proof</p>
          <h1 className="text-display mb-4">
            Proof from real B2B SaaS execution.
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-3xl">
            Most of our public proof comes from Archive. That is okay. It shows how the same system worked across launches, content, visibility, and follow-through.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-alt">
        <div className="container-default">
          <div className="max-w-3xl mb-10">
            <p className="overline mb-3">What this work proves</p>
            <h2 className="text-h2 mb-4">More than one tactic.</h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {proofCategories.map((category) => (
              <div key={category.title} className="border border-border bg-background p-6">
                <h3 className="text-h3 mb-3">{category.title}</h3>
                <p className="text-body text-muted-foreground">
                  {category.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container-default">
          <div className="bg-surface border border-neutral-200 border-l-4 border-l-foreground p-6 md:p-8 max-w-3xl">
            <p className="overline mb-3">Important context</p>
            <h2 className="text-h3 mb-3">Yes, most of the public proof is from Archive.</h2>
            <p className="text-body text-muted-foreground mb-4">
              That is intentional. We would rather show deep work from one real client than random wins from ten.
            </p>
            <p className="text-body text-muted-foreground">
              The point is simple: the same team handled launches, visibility, content, and follow-through inside one account.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container-default">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.link} {...cs} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-y border-border">
        <div className="container-default">
          <p className="overline text-center mb-6">Other clients we've supported</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {clientList.map((client) => (
              <span
                key={client}
                className="px-4 py-2 border border-border text-small text-muted-foreground bg-background"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-dark text-dark-text">
        <div className="container-narrow text-center">
          <h2 className="text-h2 mb-4">
            If your team needs better marketing follow-through, this is the kind of work we do.
          </h2>
          <p className="text-body-lg text-dark-muted mb-6">
            Start with the pilot. We will show you the best next step from there.
          </p>
          <CTAButton to="/contact" variant="primary-inverted">
            Start my{" "}<strong>30-day pilot</strong> →
          </CTAButton>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default Work;
