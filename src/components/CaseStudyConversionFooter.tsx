import CTAButton from "./CTAButton";
import TrustMicroRow from "./TrustMicroRow";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import { trackEvent } from "@/lib/analytics";

const CaseStudyConversionFooter = () => (
  <SectionWrapper>
    <div className="container-narrow text-center">
      <h2 className="text-h2 mb-6">Want this operating system applied to your team?</h2>
      <CTAButton to="/contact" onClick={() => trackEvent("cta_primary_click", { page: window.location.pathname, location: "case_study_footer" })}>
        Start my{"\u00A0"}<strong>30-day pilot</strong> →
      </CTAButton>
      <p className="mt-4">
        <Link to="/work" className="text-sm text-muted-foreground hover:text-accent transition-colors" onClick={() => trackEvent("cta_secondary_click", { label: "See all case studies" })}>
          See all case studies →
        </Link>
      </p>
      <TrustMicroRow className="mt-4" />
    </div>
  </SectionWrapper>
);

export default CaseStudyConversionFooter;
