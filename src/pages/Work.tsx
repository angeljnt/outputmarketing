import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTAButton from "@/components/CTAButton";
import GhostButton from "@/components/GhostButton";
import Footer from "@/components/Footer";

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
    metrics: [<><strong>114</strong> reactions + <strong>68</strong> comments</>, <><strong>7,363</strong> impressions</>, <><strong>1.21%</strong> engagement rate maintained</>],
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

const Work = () => {
  return (
    <>
      <Helmet>
        <title>Work: Output Marketing</title>
        <meta name="description" content="Results, not promises. Four campaigns. One client. One year. Different problems, same standard." />
      </Helmet>

      <SectionWrapper>
        <div className="container-default">
          <h1 className="text-display mb-4">Results, not promises.</h1>
          <p className="text-body-lg text-muted-foreground mb-2"><strong>Four campaigns.</strong> <strong>One client.</strong> <strong>One year.</strong> Different problems, same standard.</p>
          <div className="flex flex-wrap gap-4 mb-6">
            <GhostButton to="/contact">Start my <strong>30-day pilot</strong> →</GhostButton>
            <p className="text-caption self-center"><strong>No retainer.</strong> See what we'd do for you first.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* ARCHIVE CALLOUT */}
      <SectionWrapper>
        <div className="container-default">
          <div className="bg-surface border border-neutral-200 border-l-4 border-l-foreground p-6 max-w-2xl mx-auto my-10">
            <h3 className="text-h3 font-semibold text-foreground">These are all Archive's numbers.</h3>
            <p className="text-body text-muted-foreground mt-2"><strong>Four campaigns.</strong> <strong>One client.</strong> <strong>One year.</strong> Different problems, same commitment.</p>
            <p className="text-body text-muted-foreground mt-2">We chose depth over breadth from day one. You'll get the same.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container-default">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => <CaseStudyCard key={cs.link} {...cs} />)}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container-narrow text-center">
          <h2 className="text-h2 mb-6">Your brand could have numbers like these.</h2>
          <CTAButton to="/contact">Start my <strong>30-day pilot</strong> →</CTAButton>
          <p className="text-caption mt-3"><strong>No retainer. No contract.</strong> <strong>We reply within 24 hours.</strong></p>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default Work;