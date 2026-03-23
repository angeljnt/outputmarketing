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
    metrics: ["114 reactions + 68 comments", "7,363 impressions", "1.21% engagement rate maintained"],
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
          <p className="text-body-lg text-muted-foreground mb-2">Four campaigns. One client. One year. Different problems, same standard.</p>
          <p className="text-caption mb-8">Note: These are all Archive's numbers. We're not going to show you a client we barely touched.</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <GhostButton to="/contact">Start my 30-day pilot →</GhostButton>
            <p className="text-caption self-center">No retainer. See what we'd do for you first.</p>
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
          <CTAButton to="/contact">Start my 30-day pilot →</CTAButton>
          <p className="text-caption mt-3">No retainer. No contract. We reply within 24 hours.</p>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default Work;