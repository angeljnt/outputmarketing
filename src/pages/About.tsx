import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import Footer from "@/components/Footer";
import vanessaAbout from "@/assets/vanessa-about.jpg";
import angelPhoto from "@/assets/angel-photo.jpeg";
import emmilyPhoto from "@/assets/emmily-photo.jpeg";
import logoFireflies from "@/assets/logo-fireflies.png";
import logoArchive from "@/assets/logo-archive.svg";
import badgeWebby from "@/assets/badge-webby.png";
import badgeCannes from "@/assets/badge-cannes.png";

const team = [
  {
    label: "Founder",
    name: "Vanessa Semprun",
    image: vanessaAbout,
    link: "https://www.linkedin.com/in/vanessasemprun/",
    summary:
      "Vanessa leads client strategy and execution.",
    credentials: [
      "Former Archive marketing lead",
      "Fireflies.ai campaign background",
      "Webby-winning B2B campaign work",
    ],
  },
  {
    label: "Strategy and systems",
    name: "Angel",
    image: angelPhoto,
    link: "https://www.linkedin.com/in/angeljnt/",
    summary:
      "Angel runs systems, delivery structure, and technical execution.",
    credentials: [
      "Landing pages and site updates",
      "Content ops and workflow cleanup",
      "Keeps delivery tight behind the scenes",
    ],
  },
  {
    label: "Operations",
    name: "Emmily Salazar",
    image: emmilyPhoto,
    link: "https://www.linkedin.com/in/emmilysalazarp/",
    summary:
      "Emmily keeps timelines, approvals, and delivery moving.",
    credentials: [
      "Former Executive Operations at Archive",
      "Law degree background",
      "Project monitoring and execution experience",
    ],
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Output Marketing</title>
        <meta
          name="description"
          content="How Output Marketing works, why the team stays small, and who is behind the work."
        />
      </Helmet>

      <SectionWrapper>
        <div className="container-narrow text-center">
          <p className="overline mb-4">About</p>
          <h1 className="text-display mb-4">Small team. Senior work.</h1>
          <p className="text-body-lg text-muted-foreground">
            Direct access. Clear execution. A small operating layer built for lean SaaS teams.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-alt">
        <div className="container-default">
          <div className="max-w-3xl mb-10">
            <p className="overline mb-3">What Output Marketing is</p>
            <h2 className="text-h2 mb-4">A small operating layer for lean teams.</h2>
            <p className="text-body-lg text-muted-foreground">
              We are not trying to look like a big agency. The model is simple: start with the pilot, stay close to execution, and expand only the parts of the work that are proving useful.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-border bg-background p-6">
              <p className="overline mb-3">Pilot first</p>
              <h3 className="text-h3 mb-3">Start small on purpose.</h3>
              <p className="text-body text-muted-foreground">
                Clients do not need to gamble on a big contract first. The pilot shows what deserves more time and what does not.
              </p>
            </div>
            <div className="border border-border bg-background p-6">
              <p className="overline mb-3">How we work</p>
              <h3 className="text-h3 mb-3">Direct access to the people doing the work.</h3>
              <p className="text-body text-muted-foreground">
                Strategy, execution, operations, and site support stay connected. Less handoff. Less confusion. Better follow-through.
              </p>
            </div>
            <div className="border border-border bg-background p-6">
              <p className="overline mb-3">Why we stay small</p>
              <h3 className="text-h3 mb-3">Narrower scope. Better output.</h3>
              <p className="text-body text-muted-foreground">
                The goal is not to cover every marketing channel. The goal is to keep the work clear enough to trust and useful enough to grow from.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-y border-border">
        <div className="container-default">
          <div className="max-w-3xl mb-10">
            <p className="overline mb-3">Team</p>
            <h2 className="text-h2 mb-4">The people behind the work.</h2>
            <p className="text-body-lg text-muted-foreground">
              The team stays compact on purpose so strategy, production, and delivery discipline do not drift apart.
            </p>
          </div>

          <div className="space-y-6">
            {team.map((person, index) => (
              <div key={person.name} className="border border-border bg-surface p-6 md:p-8">
                <div className={`grid gap-8 items-start md:gap-12 ${index % 2 === 0 ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"}`}>
                  <div className={index % 2 === 0 ? "order-2 lg:order-1" : "order-2"}>
                    <p className="overline mb-3">{person.label}</p>
                    <h2 className="text-h2 mb-3">{person.name}</h2>
                    <p className="text-body text-muted-foreground mb-5">
                      {person.summary}
                    </p>
                    <div className="space-y-2 mb-5">
                      {person.credentials.map((item) => (
                        <p key={item} className="text-small text-muted-foreground">
                          • {item}
                        </p>
                      ))}
                    </div>
                    <a
                      href={person.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      LinkedIn →
                    </a>
                  </div>

                  <div className={`flex justify-center ${index % 2 === 0 ? "order-1 lg:order-2" : "order-1"}`}>
                    <div className="h-40 w-40 overflow-hidden rounded-full md:h-52 md:w-52">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container-default">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-border bg-surface p-6">
              <p className="overline mb-3">Recognition</p>
              <h2 className="text-h3 mb-4">Recognition and background.</h2>
              <div className="mb-5 flex items-center gap-6">
                <img src={badgeWebby} alt="Webby Awards" className="h-16 w-auto object-contain" />
                <div className="flex h-16 items-center overflow-hidden">
                  <img src={badgeCannes} alt="Cannes Lions" className="h-28 w-auto object-contain scale-125 -mt-4" />
                </div>
              </div>
              <div className="space-y-2 text-small text-muted-foreground">
                <p>• Webby Award for B2B campaign work</p>
                <p>• Cannes Lions shortlist recognition</p>
              </div>
            </div>

            <div className="border border-border bg-surface p-6">
              <p className="overline mb-3">Where the work was built</p>
              <h2 className="text-h3 mb-4">Operating context.</h2>
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-16 items-center overflow-hidden">
                  <img
                    src={logoFireflies}
                    alt="Fireflies.ai"
                    className="h-28 w-auto object-contain grayscale"
                  />
                </div>
                <img
                  src={logoArchive}
                  alt="Archive"
                  className="h-12 w-auto object-contain grayscale"
                />
              </div>
              <div className="space-y-2 text-small text-muted-foreground">
                <p>• Archive shaped the launch, content, and ops muscle</p>
                <p>• Fireflies.ai added campaign and creator execution depth</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default About;
