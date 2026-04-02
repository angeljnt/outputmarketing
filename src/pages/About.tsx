import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import vanessaAbout from "@/assets/vanessa-about.jpg";
import angelPhoto from "@/assets/angel-photo.jpeg";
import emmilyPhoto from "@/assets/emmily-photo.jpeg";
import logoFireflies from "@/assets/logo-fireflies.png";
import logoArchive from "@/assets/logo-archive.svg";
import badgeWebby from "@/assets/badge-webby.png";
import badgeCannes from "@/assets/badge-cannes.png";
import badgeIE from "@/assets/badge-ie.png";


const About = () => {
  return (
    <>
      <Helmet>
        <title>About Output Marketing — Vanessa Semprun, Emmily Salazar & Angel</title>
        <meta name="description" content="A boutique B2B SaaS marketing team. We do founder LinkedIn ghostwriting, content, and SEO. You talk directly to whoever is doing the work." />
      </Helmet>

      {/* HERO */}
      <SectionWrapper>
        <div className="container-narrow text-center">
          <h1 className="text-display mb-4">A handful of people who do things really well.</h1>
        </div>
      </SectionWrapper>

      {/* STANDALONE STATEMENT */}
      <div className="my-10">
        <h2 className="text-h2 font-semibold text-foreground text-center max-w-2xl mx-auto px-6">
          Not 50 people. Not a project manager between you and the work. Just us.
        </h2>
      </div>

      {/* VANESSA */}
      <SectionWrapper>
        <div className="container-default">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
            <div>
              <p className="overline mb-4">The founder</p>
              <div className="space-y-4 text-body text-muted-foreground">
                <p><strong>39 creators.</strong> <strong>855,000 impressions.</strong> <strong>3.40% engagement.</strong> That was the Fireflies.ai campaign Vanessa ran as Influencer Marketing Manager before starting Output Marketing. Before that, Marketing Manager at Archive — a B2B SaaS platform for DTC brands — where the four case studies on the Work page were built.</p>
                <p>She's been on the client side. She knows what it feels like to hire an agency that doesn't understand your product, your sales cycle, or your buyers. She built influencer programs from scratch, ran the full content machine, and managed product launches. All of it measurable.</p>
                <p>The <strong>Webby Award</strong> and the <strong>Cannes Lions shortlist</strong> came from that work.</p>
              </div>
              <a
                href="https://www.linkedin.com/in/vanessasemprun/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vanessa Semprun on LinkedIn"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors mt-4 inline-block"
              >
                LinkedIn →
              </a>
            </div>
            <div className="flex justify-center">
              <div className="w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden">
                <img src={vanessaAbout} alt="Vanessa Semprun" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* MINI CTA */}
      <SectionWrapper className="bg-surface-alt">
        <div className="container-narrow text-center">
          <p className="text-body-lg mb-4">Ready to start? <strong>30-day pilot</strong>, no retainer.</p>
          <CTAButton to="/contact">Start my <strong>30-day pilot</strong> →</CTAButton>
          <p className="text-caption mt-3"><strong>No retainer. No contract.</strong></p>
        </div>
      </SectionWrapper>

      {/* EMMILY */}
      <SectionWrapper>
        <div className="container-default">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
            <div>
              <p className="overline mb-4">Operations</p>
              <div className="space-y-4 text-body text-muted-foreground">
                <p>Emmily runs the operational side of every engagement. Before Output Marketing, she was Executive Operations at Archive, coordinating campaigns across designers, content creators, and client stakeholders. She knows how our work gets built because she was part of building it.</p>
                <p>Law degree from Universidad Rafael Urdaneta. Director of Project Monitoring and Execution at Harvard National Model United Nations 2020. She brings the same legal and operational discipline to client projects that she brought to Archive.</p>
              </div>
              <a
                href="https://www.linkedin.com/in/emmilysalazarp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Emmily Salazar on LinkedIn"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors mt-4 inline-block"
              >
                LinkedIn →
              </a>
            </div>
            <div className="flex justify-center">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden">
                <img src={emmilyPhoto} alt="Emmily Salazar" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ANGEL */}
      <SectionWrapper>
        <div className="container-default">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
            <div className="flex justify-center">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden">
                <img src={angelPhoto} alt="Angel" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div>
              <p className="overline mb-4">Strategy and operations</p>
              <div className="space-y-4 text-body text-muted-foreground">
                <p>Angel handles strategy, operations, and the technical side of execution. Landing pages, written content, systems that keep things running.</p>
                <p>He doesn't touch video or paid ads. He doesn't have to. What he builds generates pipeline without burning budget.</p>
              </div>
              <a
                href="https://www.linkedin.com/in/angeljnt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Angel on LinkedIn"
                className="inline-flex items-center gap-2 mt-4 text-[#111111] hover:text-accent transition-colors duration-200"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* BEST FIT */}
      <SectionWrapper className="bg-surface-alt">
        <div className="container-narrow">
          <h2 className="text-h2 mb-6">Best fit.</h2>
          <ul className="space-y-3 text-body text-muted-foreground">
            <li>• <strong>B2B SaaS</strong>, Seed to Series B</li>
            <li>• Founders who want their personal brand and company content working together</li>
            <li>• Teams that value depth over breadth: fewer channels, better execution</li>
            <li>• Companies ready to start with a <strong>30-day pilot</strong> instead of a 6-month contract</li>
          </ul>
        </div>
      </SectionWrapper>

      {/* PHILOSOPHY */}
      <section className="bg-dark text-dark-text section-padding">
        <div className="container-narrow">
          <h2 className="text-h2 mb-6">Why we stay narrow.</h2>
          <div className="space-y-6 text-body-lg text-dark-muted">
            <p>Most agencies spread thin. They take every client, every channel, every ask. The work suffers. The client notices. The relationship ends.</p>
            <p>We do <strong>founder LinkedIn ghostwriting, content marketing, and SEO</strong>. We do those things at a level most agencies can't match because we're not also doing paid ads, video, PR, and event marketing at the same time.</p>
            <p><strong>You talk directly to whoever is doing the work. Every time.</strong> No account managers. No weekly updates from someone who wasn't in the meeting.</p>
          </div>
        </div>
      </section>

      {/* AWARDS + CREDENTIALS */}
      <SectionWrapper>
        <div className="container-default">
          <p className="overline text-center mb-8">Recognition and background</p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-h3 mb-4">Awards</h3>
              <div className="flex items-center gap-6 mb-4 h-16">
                <img src={badgeWebby} alt="Webby Awards" className="h-16 w-auto object-contain" />
                <div className="h-16 overflow-hidden flex items-center">
                  <img src={badgeCannes} alt="Cannes Lions" className="h-28 w-auto object-contain scale-125 -mt-4" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-body"><strong>Webby Award</strong> / Best B2B Campaign</p>
                <p className="text-body"><strong>Cannes Lions shortlist</strong> / Recognition</p>
              </div>
            </div>
            <div>
              <h3 className="text-h3 mb-4">Experience</h3>
              <div className="flex items-center gap-4 mb-4 h-16">
                <div className="h-16 overflow-hidden flex items-center">
                  <img src={logoFireflies} alt="Fireflies.ai" className="h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <img src={logoArchive} alt="Archive" className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
              <div className="space-y-2 text-body text-muted-foreground">
                <p>Fireflies.ai: Influencer Marketing Manager</p>
                <p>Archive: Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="container-narrow text-center">
          <h2 className="text-h2 mb-6">Work with people who have done this before.</h2>
          <CTAButton to="/contact">Start my <strong>30-day pilot</strong> →</CTAButton>
          <p className="text-caption mt-3"><strong>No retainer. No contract.</strong> <strong>We reply within 24 hours.</strong></p>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default About;