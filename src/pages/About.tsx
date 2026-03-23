import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import vanessaAbout from "@/assets/vanessa-about.jpg";
import angelPhoto from "@/assets/angel-photo.jpeg";
import logoFireflies from "@/assets/logo-fireflies.png";
import logoArchive from "@/assets/logo-archive.svg";
import badgeWebby from "@/assets/badge-webby.png";
import badgeCannes from "@/assets/badge-cannes.png";
import badgeIE from "@/assets/badge-ie.png";


const About = () => {
  return (
    <>
      <Helmet>
        <title>About Output Marketing: Vanessa Semprun & Angel</title>
        <meta name="description" content="A handful of people who do things really well. Meet Vanessa Semprun and Angel, the team behind Output Marketing." />
      </Helmet>

      {/* HERO */}
      <SectionWrapper>
        <div className="container-narrow text-center">
          <h1 className="text-display mb-4">A handful of people who do things really well.</h1>
          <p className="text-body-lg text-muted-foreground">Not 50 people. Not a project manager between you and the work. Just us.</p>
        </div>
      </SectionWrapper>

      {/* VANESSA */}
      <SectionWrapper>
        <div className="container-default">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
            <div>
              <p className="overline mb-4">The founder</p>
              <div className="space-y-4 text-body text-muted-foreground">
                <p>Before Output Marketing, Vanessa was Influencer Marketing Manager at Fireflies.ai, where she ran a B2B fintech Series G campaign: 39 creators, 855,000 impressions, 3.40% engagement on a B2B funding announcement. Before that, Marketing Manager at Archive, a B2B SaaS platform for DTC brands.</p>
                <p>She's been on the client side. She knows what it feels like to hire an agency that doesn't understand your product, your sales cycle, or your buyers. She built influencer programs from scratch, ran the full content machine, and managed product launches. All of it measurable.</p>
                <p>The Webby Award and the Cannes Lions shortlist came from that work.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <img src={logoFireflies} alt="Fireflies.ai" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                <img src={logoArchive} alt="Archive" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                <img src={badgeIE} alt="IE Business School" className="h-8 w-auto object-contain" />
                
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <img src={badgeWebby} alt="Webby Awards" className="h-8 w-auto object-contain" />
                <img src={badgeCannes} alt="Cannes Lions" className="h-8 w-auto object-contain" />
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
          <p className="text-body-lg mb-4">Seen enough? Start with 30 days.</p>
          <CTAButton to="/contact">Start my 30-day pilot →</CTAButton>
          <p className="text-caption mt-3">No retainer. No contract.</p>
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
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* PHILOSOPHY */}
      <section className="bg-dark text-dark-text section-padding">
        <div className="container-narrow">
          <h2 className="text-h2 mb-6">How we think about marketing.</h2>
          <div className="space-y-6 text-body-lg text-dark-muted">
            <p>Most agencies spread thin. They take every client, every channel, every ask. The work suffers. The client notices. The relationship ends.</p>
            <p>We do influencer programs, content strategy, LinkedIn, and SEO. We do those things at a level most agencies can't match because we're not also doing paid ads, video, PR, and event marketing at the same time.</p>
            <p>You talk directly to whoever is doing the work. Every time. No account managers. No weekly updates from someone who wasn't in the meeting.</p>
          </div>
        </div>
      </section>

      {/* AWARDS + CREDENTIALS */}
      <SectionWrapper>
        <div className="container-default">
          <p className="overline text-center mb-8">Recognition and background</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-h3 mb-4">Awards</h3>
              <div className="flex items-center gap-6 mb-4">
                <img src={badgeWebby} alt="Webby Awards" className="h-8 w-auto object-contain" />
                <img src={badgeCannes} alt="Cannes Lions" className="h-8 w-auto object-contain" />
              </div>
              <div className="space-y-2">
                <p className="text-body">Webby Awards / Best B2B Campaign</p>
                <p className="text-body">Cannes Lions / Shortlist Recognition</p>
              </div>
            </div>
            <div>
              <h3 className="text-h3 mb-4">Experience</h3>
              <div className="flex items-center gap-4 mb-4">
                <img src={logoFireflies} alt="Fireflies.ai" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                <img src={logoArchive} alt="Archive" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                <img src={badgeIE} alt="IE Business School" className="h-8 w-auto object-contain" />
                <img src={badgeCDMP} alt="CDMP" className="h-8 w-auto object-contain" />
              </div>
              <div className="space-y-2 text-body text-muted-foreground">
                <p>Fireflies.ai: Influencer Marketing Manager</p>
                <p>Archive: Marketing Manager</p>
                <p>IE Business School: MBA</p>
                <p>CDMP: Certified Digital Marketing Professional</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="container-narrow text-center">
          <h2 className="text-h2 mb-6">Work with people who have done this before.</h2>
          <CTAButton to="/contact">Start my 30-day pilot →</CTAButton>
          <p className="text-caption mt-3">No retainer. No contract. We reply within 24 hours.</p>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default About;
