import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ServiceContent } from "@/content/siteContent";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";
import FitChecklist from "@/components/FitChecklist";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ExpectationGrid from "@/components/ExpectationGrid";

interface ServicePageTemplateProps {
  service: ServiceContent;
}

const ServicePageTemplate = ({ service }: ServicePageTemplateProps) => {
  return (
    <>
      <Helmet>
        <title>{service.pageTitle} | Output Marketing</title>
        <meta name="description" content={service.metaDescription} />
      </Helmet>

      <SectionWrapper>
        <div className="container-default">
          <p className="overline mb-4">{service.title}</p>
          <h1 className="text-display mb-4">{service.heroTitle}</h1>
          <p className="text-body-lg text-muted-foreground mb-6 max-w-3xl">{service.heroDescription}</p>
          <CTAButton to="/contact">Start my 30-day pilot</CTAButton>
          <p className="text-caption mt-3"><strong>Pilot first.</strong> <strong>Month-to-month if we continue.</strong></p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container-default">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-16 items-start">
            <div>
              <h2 className="text-h2 mb-4">What you get.</h2>
              <p className="text-body text-muted-foreground">{service.overview}</p>
            </div>
            <div className="space-y-4">
              <div className="bg-surface border border-border p-6">
                <p className="overline mb-3">Best package fit</p>
                <h3 className="text-h3 mb-2">{service.packageFit}</h3>
                <p className="text-body text-muted-foreground">
                  Most teams start here.
                  {service.packageSecondary ? ` Secondary fit: ${service.packageSecondary}.` : ""}
                </p>
              </div>
              {service.proof[0] && (
                <div className="border border-border bg-background p-6">
                  <p className="overline mb-3">Proof in practice</p>
                  <h3 className="text-h3 mb-2">{service.proof[0].title}</h3>
                  <p className="text-body text-muted-foreground mb-4">
                    {service.proof[0].meta}
                  </p>
                  <Link
                    to={service.proof[0].link}
                    className="text-sm font-medium text-foreground hover:font-semibold transition-[font-weight]"
                  >
                    Read case study →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-alt">
        <div className="container-default">
          <h2 className="text-h2 mb-8">What is included.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border bg-background p-6">
              <p className="overline mb-3">What we help with</p>
              <ul className="space-y-3 text-body text-muted-foreground">
                {service.solves.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-border bg-background p-6">
              <p className="overline mb-3">Typical scope</p>
              <ul className="space-y-3 text-body text-muted-foreground">
                {service.includes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container-default">
          <h2 className="text-h2 mb-8">Is this right for you?</h2>
          <FitChecklist fitItems={service.fit} notFitItems={service.notFit} />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container-default">
          <h2 className="text-h2 mb-8">Before / after.</h2>
          <BeforeAfterSection before={service.before} after={service.after} whyShift={service.whyShift} />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-alt">
        <div className="container-default">
          <h2 className="text-h2 mb-8">What to expect.</h2>
          <ExpectationGrid items={service.expectations} />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container-default">
          <h2 className="text-h2 mb-10">Common questions.</h2>
          <div className="max-w-3xl">
            {service.faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default ServicePageTemplate;
