import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import GhostButton from "@/components/GhostButton";
import FAQItem from "@/components/FAQItem";
import CaseStudyCard from "@/components/CaseStudyCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FitAssessmentChecklist from "@/components/FitAssessmentChecklist";
import PilotFocusDiagram from "@/components/PilotFocusDiagram";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/LogoMarquee";
import logoArchive from "@/assets/logo-archive.svg";
import vanessaHero from "@/assets/vanessa-hero.jpeg";
import {
  clientBrands,
  industryProfiles,
  packageContent,
  serviceContent,
} from "@/content/siteContent";

const IconBubble = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors duration-300 ${className}`}
  >
    {children}
  </span>
);

const GoogleMark = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="#EA4335"
      d="M12.24 10.285v3.964h5.515c-.224 1.285-.972 2.373-2.064 3.101l3.34 2.59c1.945-1.794 3.069-4.433 3.069-7.555 0-.728-.065-1.429-.186-2.1z"
    />
    <path
      fill="#34A853"
      d="M12 22c2.7 0 4.965-.896 6.62-2.42l-3.34-2.59c-.927.62-2.113.987-3.28.987-2.52 0-4.655-1.702-5.42-3.99H3.13v2.506A9.996 9.996 0 0 0 12 22"
    />
    <path
      fill="#4A90E2"
      d="M6.58 13.987A5.996 5.996 0 0 1 6.29 12c0-.69.119-1.36.29-1.987V7.507H3.13A9.996 9.996 0 0 0 2 12c0 1.614.386 3.14 1.13 4.493z"
    />
    <path
      fill="#FBBC05"
      d="M12 6.023c1.467 0 2.785.505 3.822 1.496l2.867-2.867C16.96 3.042 14.696 2 12 2A9.996 9.996 0 0 0 3.13 7.507l3.45 2.506C7.345 7.725 9.48 6.023 12 6.023"
    />
  </svg>
);

const SparkGridMark = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      d="M11 2l1.4 4.6L17 8l-4.6 1.4L11 14l-1.4-4.6L5 8l4.6-1.4L11 2zm7 9l.8 2.2L21 14l-2.2.8L18 17l-.8-2.2L15 14l2.2-.8L18 11zM6 13l1.1 3.1L10 17l-2.9.9L6 21l-1.1-3.1L2 17l2.9-.9L6 13z"
    />
  </svg>
);

const InstagramMark = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17" cy="7" r="1.1" fill="currentColor" />
  </svg>
);

const LinkedInMark = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5a1.5 1.5 0 0 0 0 3zm-1.2 1.4h2.4V18H5.3V9.9zm4 0h2.3V11c.6-.9 1.6-1.4 2.9-1.4 2.3 0 3.5 1.5 3.5 4.2V18h-2.4v-3.9c0-1.5-.5-2.3-1.7-2.3-1 0-1.6.6-1.9 1.5-.1.2-.1.5-.1.8V18H9.3V9.9z"
    />
  </svg>
);

const TikTokMark = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      d="M14.7 4c.4 1.2 1.3 2.2 2.5 2.7.7.3 1.4.4 2.1.4v2.4a6.7 6.7 0 0 1-2.3-.4v5.2a5.1 5.1 0 1 1-5.1-5.1c.3 0 .6 0 .8.1v2.5a2.8 2.8 0 0 0-.8-.1 2.7 2.7 0 1 0 2.7 2.7V4h2.1z"
    />
  </svg>
);

const XMark = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      d="M5 5h3.6l3.4 4.7L15.9 5H19l-5.3 6.1L19.5 19h-3.6l-3.8-5.2L7.6 19H4.5l5.7-6.6L5 5z"
    />
  </svg>
);

const ProductHuntMark = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#FF6154" />
    <path
      fill="#fff"
      d="M9 7.5h4.1c2 0 3.4 1.3 3.4 3.2s-1.4 3.2-3.4 3.2h-1.8v2.6H9V7.5zm2.3 4.5h1.5c.8 0 1.4-.5 1.4-1.3s-.6-1.3-1.4-1.3h-1.5V12z"
    />
  </svg>
);

const serviceCardOverrides: Record<
  string,
  { title?: string; description?: string; icons?: React.ReactNode }
> = {
  "seo-content": {
    title: "SEO/GEO Content",
    description:
      "Get ranked in Google. Get featured in ChatGPT, Claude, and other AI tools.",
    icons: (
      <>
        <IconBubble>
          <GoogleMark />
        </IconBubble>
        <IconBubble className="text-sky-700">
          <SparkGridMark />
        </IconBubble>
      </>
    ),
  },
  "social-linkedin-execution": {
    icons: (
      <>
        <IconBubble>
          <InstagramMark />
        </IconBubble>
        <IconBubble>
          <LinkedInMark />
        </IconBubble>
        <IconBubble>
          <TikTokMark />
        </IconBubble>
        <IconBubble>
          <XMark />
        </IconBubble>
      </>
    ),
  },
  "product-launch-marketing": {
    icons: (
      <IconBubble>
        <ProductHuntMark />
      </IconBubble>
    ),
  },
};

const caseStudies = [
  {
    title: "Archive: Radar Feature Launch",
    client: "Archive",
    type: "Product and Launch Marketing",
    date: "2025",
    metrics: [
      <>Clearer launch narrative and rollout structure</>,
      <>Waitlist interest collected from the right audience</>,
      <>Launch support carried beyond the first announcement</>,
    ],
    link: "/case-studies/archive-radar-launch",
    clientLogo: logoArchive,
  },
  {
    title: "Archive: AI Insider Newsletter",
    client: "Archive",
    type: "Content System and Retention Support",
    date: "2025",
    metrics: [
      <>Recurring audience touchpoint instead of isolated sends</>,
      <>Segmentation and content structure built around value delivery</>,
      <>A stronger content rhythm supporting retention</>,
    ],
    link: "/case-studies/archive-ai-newsletter",
    clientLogo: logoArchive,
  },
  {
    title: "Archive: LinkedIn Content Strategy",
    client: "Archive",
    type: "Founder and Brand Visibility",
    date: "Ongoing",
    metrics: [
      <>Founder visibility turned into a repeatable system</>,
      <>Content cadence stayed consistent instead of reactive</>,
      <>Market-facing voice became sharper and more recognizable</>,
    ],
    link: "/case-studies/archive-linkedin-strategy",
    clientLogo: logoArchive,
  },
  {
    title: "Archive: Product Marketing Campaign",
    client: "Archive",
    type: "Execution Systems",
    date: "Ongoing",
    metrics: [
      <>Campaign execution connected more tightly to product priorities</>,
      <>Performance readouts made priorities easier to read</>,
      <>Marketing work became easier to coordinate across initiatives</>,
    ],
    link: "/case-studies/archive-product-marketing",
    clientLogo: logoArchive,
  },
];

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Will this help pipeline or just create more content?",
    a: "It should help pipeline. If it does not, we change the plan.",
  },
  {
    q: "How fast will we know if this is working?",
    a: "That is what the pilot is for. You get real work fast and a clear answer fast.",
  },
  {
    q: "Do we need a big internal marketing team first?",
    a: "No. This is for small teams that need help without hiring a full department.",
  },
  {
    q: "Do you work on fixed content quotas?",
    a: "No. We make what helps. We do not chase a post count.",
  },
  {
    q: "What if we already tried an agency?",
    a: "That happens a lot. We keep the scope tighter and the work easier to trust.",
  },
];

const Home = () => {
  const publicPackages = packageContent.filter(
    (pkg) => !pkg.custom && pkg.name !== "30-Day Pilot",
  );
  const homepageProofStudies = caseStudies.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Output Marketing | B2B SaaS Marketing for Lean Teams</title>
        <meta
          name="description"
          content="Output Marketing helps lean B2B SaaS teams get more pipeline from content, visibility, and launch support with a pilot-first model."
        />
      </Helmet>

      <section className="pt-10 pb-12 md:pt-14 md:pb-14">
        <div className="container-default">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="overline mb-4">B2B SaaS marketing for lean teams</p>
              <h1 className="text-display mb-4">
                More pipeline from clearer content and better launches.
              </h1>
              <p className="text-body-lg text-muted-foreground mb-6">
                We help small SaaS teams get more from marketing. Better content. Better launches. More steady work. No big team needed.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <CTAButton to="/contact">
                  Start my 30-day pilot
                </CTAButton>
                <GhostButton to="/services">Explore services →</GhostButton>
              </div>
              <p className="text-caption">
                <strong>Pilot first.</strong> Month-to-month if we continue.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden">
                <img
                  src={vanessaHero}
                  alt="Vanessa Semprun, founder of Output Marketing"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper className="!py-6 md:!py-7 border-y border-border bg-surface">
        <div className="container-default">
          <p className="overline text-center mb-6">Clients we've supported</p>
          <LogoMarquee items={clientBrands} />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background">
        <div className="container-default">
          <div className="max-w-3xl mb-6 md:mb-8">
            <p className="overline mb-3">Before / after</p>
            <h2 className="text-h2 mb-4">What we do for people like you.</h2>
          </div>
          <BeforeAfterSlider
            before={[
              "Marketing happens in bursts.",
              "Launches come and go without much follow-through.",
              "Content exists, but it does not add up to a clearer pipeline story.",
            ]}
            after={[
              "The team has a steadier content and visibility rhythm.",
              "Launches get the market-facing support they were missing.",
              "The next best growth move is easier to spot.",
            ]}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-alt">
        <div className="container-default">
          <div className="max-w-3xl mb-6 md:mb-8">
            <p className="overline mb-3">What we do</p>
            <h2 className="text-h2 mb-4">What we help with.</h2>
            <p className="text-body-lg text-muted-foreground">
              Content that helps sales. Visibility that does not depend on random founder posts. Launches that keep going after week one.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {serviceContent.map((service) => {
              const override = serviceCardOverrides[service.slug];

              return (
                <div
                  key={service.slug}
                  className="group bg-surface p-6 md:p-8 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300 flex flex-col"
                >
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <p className="overline group-hover:text-[#111111] transition-colors duration-300">
                      Best fit inside {service.packageFit}
                    </p>
                    {override?.icons ? (
                      <div className="flex items-center gap-2 text-foreground group-hover:text-[#111111]">
                        {override.icons}
                      </div>
                    ) : null}
                  </div>
                  <h3 className="text-h3 mb-3 group-hover:text-[#111111] transition-colors duration-300">
                    {override?.title ?? service.title}
                  </h3>
                  <p className="text-body text-muted-foreground mb-5 group-hover:text-[#111111] transition-colors duration-300">
                    {override?.description ?? service.heroDescription}
                  </p>
                  <Link
                    to={service.path}
                    className="text-sm font-medium text-foreground group-hover:text-[#111111] transition-colors mt-auto"
                  >
                    Learn more →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background">
        <div className="container-default">
          <div className="max-w-3xl mb-6 md:mb-8">
            <p className="overline mb-3">Proof from real work</p>
            <h2 className="text-h2 mb-4">What this looked like for one client.</h2>
            <p className="text-body-lg text-muted-foreground">
              Most of our public proof comes from Archive. That helps because you can see launches, founder content, and retention work in one place.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {homepageProofStudies.map((cs, index) => (
              <CaseStudyCard
                key={cs.link}
                {...cs}
                badge={
                  index === 0 ? (
                    <span className="inline-flex items-center gap-2 rounded-r-full rounded-l-sm border border-border bg-neutral-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground shadow-sm">
                      <Bookmark className="h-3.5 w-3.5 fill-current" />
                      Featured case
                    </span>
                  ) : undefined
                }
              />
            ))}
          </div>
          <p className="mt-6 text-body text-muted-foreground">
            If you want the full story, go here.{" "}
            <Link
              to="/case-studies"
              className="font-medium text-foreground hover:font-semibold transition-[font-weight]"
            >
              See all case studies →
            </Link>
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-alt">
        <div className="container-default space-y-10 md:space-y-12">
          <div>
            <div className="max-w-3xl mb-8">
              <p className="overline mb-3">Best-fit clients</p>
              <h2 className="text-h2 mb-4">Who this is for.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {industryProfiles.map((industry) => (
                <div key={industry.slug} className="flex h-full flex-col border border-border bg-background p-6">
                  <h3 className="text-h3 mb-3">{industry.title}</h3>
                  <p className="text-body text-muted-foreground mb-4">
                    {industry.summary}
                  </p>
                  <p className="mt-auto pt-6 text-small text-muted-foreground">
                    <strong className="text-foreground">Typical problem:</strong>{" "}
                    {industry.commonChallenge}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <div className="max-w-3xl mb-6">
                <p className="overline mb-3">Quick self-check</p>
                <h3 className="text-h3 mb-3">See if this sounds like you.</h3>
              </div>
              <FitAssessmentChecklist
                hideHeader
                requirements={[
                  "You are a B2B SaaS, AI SaaS, select DTC brand, or boutique agency with a real offer already in the market.",
                  "You want marketing to help sales, pipeline, signups, or conversion, not just make things look active.",
                  "You need a clearer system for content, SEO, social, or launches because the current rhythm feels too scattered.",
                  "You want a partner who can execute and keep things moving, not only hand over advice.",
                  "You would rather start with a pilot than jump into a big long contract.",
                ]}
                notFitItems={[
                  "You are still too early and there is no real offer traction yet.",
                  "You need a generalist agency that covers every channel at once.",
                  "You mainly want paid media, heavy video production, or PR.",
                  "You want a broad consumer-growth playbook instead of a focused B2B SaaS, selective DTC, or white-label support system.",
                ]}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background">
        <div className="container-default">
          <div className="max-w-3xl mb-8">
            <p className="overline mb-3">Packages</p>
            <h2 className="text-h2 mb-4">Simple packages.</h2>
            <p className="text-body-lg text-muted-foreground">
              Everyone starts with the pilot. Then we see how much support you really need.
            </p>
          </div>
          <div className="border border-border bg-dark text-dark-text p-6 md:p-8 mb-6">
            <p className="overline text-dark-muted mb-3">Always first</p>
            <h3 className="text-h3 mb-2">30-Day Pilot</h3>
            <p className="text-body font-semibold mb-3">$1,500 to $2,000</p>
            <p className="text-body text-dark-muted max-w-2xl">
              We look at what is going on, work on the channel that matters most, and tell you what to do next.
            </p>
            <div className="mt-5">
              <CTAButton
                to="/contact"
                variant="primary-inverted"
                className="w-full justify-center text-base shadow-[0_12px_30px_rgba(255,255,255,0.12)] sm:w-auto sm:px-8 sm:py-4"
              >
                Start my 30-day pilot
              </CTAButton>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {publicPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="group bg-surface p-6 md:p-8 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300"
              >
                {pkg.badge && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 rounded-r-full rounded-l-sm border border-border bg-neutral-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground shadow-sm transition-colors duration-300 group-hover:border-[#111111]/20 group-hover:bg-[#111111] group-hover:text-background">
                      <Bookmark className="h-3.5 w-3.5 fill-current" />
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-h3 mb-2 group-hover:text-[#111111] transition-colors duration-300">
                  {pkg.name}
                </h3>
                <p className="text-body font-semibold mb-3 group-hover:text-[#111111] transition-colors duration-300">
                  {pkg.price}
                </p>
                <p className="text-body text-muted-foreground mb-4 group-hover:text-[#111111] transition-colors duration-300">
                  {pkg.summary}
                </p>
                <p className="text-small text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">
                  <strong className="text-foreground">Best for:</strong> {pkg.bestFor}
                </p>
              </div>
            ))}
          </div>
          <p className="text-body text-muted-foreground mt-8">
            Need white-label support or a project sprint instead? Those lanes
            exist too. They just stay secondary to the core B2B SaaS package
            ladder. <Link to="/pricing" className="font-medium text-foreground hover:font-semibold transition-[font-weight]">See the full structure →</Link>
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface">
        <div className="container-default">
          <div className="max-w-3xl mb-8">
            <p className="overline mb-3">How the pilot works</p>
            <h2 className="text-h2 mb-4">The pilot shows us what to do next.</h2>
            <p className="text-body-lg text-muted-foreground">
              We try a few things. We see what works. Then we put more time into that.
            </p>
          </div>
          <PilotFocusDiagram />
          <div className="mt-8 border border-border bg-dark px-6 py-8 md:px-8">
            <div className="flex justify-center">
              <CTAButton
                to="/contact"
                variant="primary-inverted"
                className="w-full justify-center text-base sm:w-auto sm:px-8 sm:py-4"
              >
                Start my 30-day pilot
              </CTAButton>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background">
        <div className="container-default">
          <h2 className="text-h2 mb-8">Common questions.</h2>
          <div className="max-w-3xl">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default Home;
