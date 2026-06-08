import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import { packageContent } from "@/content/siteContent";

const publicPackages = packageContent.filter((pkg) => !pkg.custom);
const customPackages = packageContent.filter((pkg) => pkg.custom);

const Pricing = () => {
  const pilot = publicPackages.find((pkg) => pkg.name === "30-Day Pilot");
  const recurringPackages = publicPackages.filter((pkg) => pkg.name !== "30-Day Pilot");

  return (
    <>
      <Helmet>
        <title>Pricing | Output Marketing</title>
        <meta
          name="description"
          content="Pilot-first pricing for B2B SaaS teams. Start small, then scale the scope that works."
        />
      </Helmet>

      <SectionWrapper>
        <div className="container-narrow text-center">
          <p className="overline mb-4">Pricing</p>
          <h1 className="text-display mb-4">Pricing.</h1>
          <p className="text-body-lg text-muted-foreground mb-8">
            Pilot first. Then the right monthly scope.
          </p>
          <CTAButton to="/contact">
            Start my <strong>30-day pilot</strong> →
          </CTAButton>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-alt">
        <div className="container-default">
          <div className="border border-border bg-background p-6 md:p-8">
            <p className="overline mb-3">How output works</p>
            <h2 className="text-h2 mb-4">No fixed content quotas.</h2>
            <p className="text-body text-muted-foreground max-w-3xl">
              The pilot tells us the right cadence. If one post a week is what
              moves results, we do that. If heavier output is what the business
              needs, we do that. We do what brings outcome.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {pilot && (
        <section className="bg-dark text-dark-text section-padding">
          <div className="container-default">
            <div className="max-w-3xl">
              <p className="overline text-dark-muted mb-3">Always first</p>
              <h2 className="text-h2 mb-2">{pilot.name}</h2>
              <p className="text-body font-semibold mb-4">{pilot.price}</p>
              <p className="text-body-lg text-dark-muted mb-6">{pilot.summary}</p>
              <div className="space-y-2 text-body text-dark-muted">
                {pilot.includes.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <SectionWrapper className="bg-surface-alt">
        <div className="container-default">
          <div className="max-w-3xl mb-10">
            <p className="overline mb-3">What the pilot gives you</p>
            <h2 className="text-h2 mb-4">You leave with more than advice.</h2>
            <p className="text-body-lg text-muted-foreground">
              The pilot is designed to reduce risk. You get a clearer starting point, real work, and a cleaner decision about what should continue.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-border bg-background p-6">
              <p className="overline mb-3">What you leave with</p>
              <div className="space-y-2 text-body text-muted-foreground">
                <p>• A clear read on what is broken now</p>
                <p>• Real work shipped in the highest-priority lane</p>
                <p>• A recommendation based on what actually paid off</p>
              </div>
            </div>
            <div className="border border-border bg-background p-6">
              <p className="overline mb-3">How we decide</p>
              <div className="space-y-2 text-body text-muted-foreground">
                <p>• Keep the work that is moving pipeline, demand, or clarity</p>
                <p>• Cut the work that is adding effort without enough return</p>
                <p>• Expand only the lane that deserves more depth</p>
              </div>
            </div>
            <div className="border border-border bg-background p-6">
              <p className="overline mb-3">Why it lowers risk</p>
              <div className="space-y-2 text-body text-muted-foreground">
                <p>• No big contract before seeing how we work</p>
                <p>• No fixed quota logic forcing unnecessary output</p>
                <p>• A cleaner decision on Foundation, Engine, Full Stack, or a custom scope</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container-default">
          <div className="max-w-3xl mb-10">
            <p className="overline mb-3">Monthly scopes</p>
            <h2 className="text-h2 mb-4">After the pilot.</h2>
            <p className="text-body-lg text-muted-foreground">
              Once the pilot is done, we move into the lane that earned more attention.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recurringPackages.map((pkg) => (
              <div key={pkg.name} className="border border-border bg-surface p-6 md:p-8">
                {pkg.badge && (
                  <span className="mb-4 inline-flex rounded-r-full rounded-l-sm border border-border bg-neutral-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="text-h3 mt-4 mb-2">{pkg.name}</h3>
                <p className="text-body font-semibold mb-3">{pkg.price}</p>
                <p className="text-body text-muted-foreground mb-4">{pkg.summary}</p>
                <p className="text-small text-muted-foreground">
                  <strong className="text-foreground">Best for:</strong> {pkg.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-t border-border">
        <div className="container-default">
          <div className="max-w-3xl">
            <p className="overline mb-3">Custom scopes</p>
            <h2 className="text-h2 mb-4">Need something else?</h2>
            <p className="text-body text-muted-foreground mb-4">
              Custom work exists, but it stays secondary to the pilot-plus-package path.
            </p>
            <div className="space-y-3 text-body text-muted-foreground">
              {customPackages.map((pkg) => (
                <p key={pkg.name}>
                  <strong className="text-foreground">{pkg.name}:</strong> {pkg.summary}
                </p>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default Pricing;
