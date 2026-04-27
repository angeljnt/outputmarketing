import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import { serviceContent } from "@/content/siteContent";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Output Marketing</title>
        <meta
          name="description"
          content="Content, SEO, social and LinkedIn, and launch support for B2B SaaS teams."
        />
      </Helmet>

      <SectionWrapper>
        <div className="container-default">
          <div className="max-w-3xl">
            <p className="overline mb-4">Services</p>
            <h1 className="text-display mb-4">Services for B2B SaaS teams.</h1>
            <p className="text-body-lg text-muted-foreground mb-8">
              Content. SEO. Social and LinkedIn. Launch support.
            </p>
            <CTAButton to="/contact">
              Start my <strong>30-day pilot</strong> →
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-y border-border">
        <div className="container-default space-y-6">
          {serviceContent.map((service) => (
            <div
              key={service.slug}
              className="border border-border bg-surface p-6 md:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="overline mb-3">{service.navLabel}</p>
                  <h2 className="text-h2 mb-3">{service.title}</h2>
                  <p className="text-body text-muted-foreground mb-4">
                    {service.overview}
                  </p>
                  <Link
                    to={service.path}
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    Full details →
                  </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="overline mb-3">What we do</p>
                    <div className="space-y-2">
                      {service.includes.slice(0, 4).map((item) => (
                        <p key={item} className="text-small text-muted-foreground">
                          • {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="overline mb-3">Good when</p>
                    <div className="space-y-2">
                      {service.fit.slice(0, 3).map((item) => (
                        <p key={item} className="text-small text-muted-foreground">
                          • {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="overline mb-3">Not for</p>
                    <div className="space-y-2">
                      {service.notFit.slice(0, 3).map((item) => (
                        <p key={item} className="text-small text-muted-foreground">
                          • {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default Services;
