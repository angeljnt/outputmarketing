export interface IndustryProfile {
  slug: string;
  title: string;
  summary: string;
  commonChallenge: string;
  bestPackage: string;
  proofAngle: string;
}

export interface ProofSnippet {
  title: string;
  meta: string;
  link: string;
}

export interface FAQEntry {
  question: string;
  answer: string;
}

export interface ExpectationItem {
  title: string;
  body: string;
}

export interface ClientBrand {
  name: string;
  domain: string;
}

export interface ServiceContent {
  slug: string;
  title: string;
  navLabel: string;
  path: string;
  pageTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  overview: string;
  solves: string[];
  includes: string[];
  fit: string[];
  notFit: string[];
  before: string[];
  after: string[];
  whyShift: string;
  expectations: ExpectationItem[];
  packageFit: string;
  packageSecondary?: string;
  proof: ProofSnippet[];
  faqs: FAQEntry[];
}

export interface PackageContent {
  name: string;
  price: string;
  summary: string;
  bestFor: string;
  focus: string[];
  includes: string[];
  expectations: ExpectationItem[];
  fit: string[];
  notFit: string[];
  before: string[];
  after: string[];
  nextStep: string;
  badge?: string;
  custom?: boolean;
}

export const industryProfiles: IndustryProfile[] = [
  {
    slug: "b2b-saas-ai",
    title: "B2B SaaS and AI SaaS",
    summary: "Our best fit. Lean software teams that need marketing to convert without leaning so hard on sales.",
    commonChallenge:
      "The product is strong, but it still needs a sales rep doing too much of the conversion work. That makes growth harder to scale.",
    bestPackage: "Engine",
    proofAngle: "Content, visibility, and launches tied to growth.",
  },
  {
    slug: "dtc-brands",
    title: "Select DTC Brands",
    summary: "A selective fit for brands that already have traction and need a steadier marketing system.",
    commonChallenge:
      "The product is selling, but the marketing rhythm feels inconsistent, the next move is unclear, and the founder worries about breaking what already works.",
    bestPackage: "Foundation or Engine",
    proofAngle: "Content, launches, and visibility built around growth without adding chaos.",
  },
  {
    slug: "boutique-agency",
    title: "Boutique Agencies / White-Label Partners",
    summary: "A secondary offer for agencies that need extra hands.",
    commonChallenge:
      "You have client demand, but delivery capacity is stretched and that starts hurting speed, margins, or trust.",
    bestPackage: "White-Label / Capacity Track",
    proofAngle: "Extra delivery support, content help, and overflow execution.",
  },
];

export const proofCategories = [
  {
    title: "Founder and LinkedIn Content",
    summary: "Posts that keep the founder visible and trusted.",
  },
  {
    title: "Product and Launch Support",
    summary: "Launch support that does more than one announcement.",
  },
  {
    title: "Content Systems Tied to Pipeline",
    summary: "Content built for pipeline, not just traffic.",
  },
  {
    title: "Execution Systems",
    summary: "Clearer execution so the work is easier to run and easier to trust.",
  },
];

export const clientBrands: ClientBrand[] = [
  { name: "Archive", domain: "archive.com" },
  { name: "Fireflies.ai", domain: "fireflies.ai" },
  { name: "Interrupt Media", domain: "interruptmedia.com" },
  { name: "ZenGRC", domain: "zengrc.com" },
  { name: "CaseEasy.ca", domain: "caseeasy.ca" },
  { name: "StudySmarter", domain: "studysmarter.co.uk" },
  { name: "Grade Potential", domain: "gradepotential.com" },
  { name: "Zeniq Ecosystem", domain: "zeniq.com" },
  { name: "Argus Labs", domain: "argus.gg" },
  { name: "Venley.ai", domain: "venley.ai" },
  { name: "VN Industrial", domain: "vnindustrial.com.ve" },
  { name: "Hardense", domain: "hardense.com" },
  { name: "VPNpro", domain: "vpnpro.com" },
  { name: "Standard Procedure", domain: "standardprocedure.com" },
];

export const clientList = clientBrands.map((client) => client.name);

export const packageContent: PackageContent[] = [
  {
    name: "30-Day Pilot",
    price: "$1,500 to $2,000",
    summary: "A low-risk start. We audit, do real work, and show you the next best step.",
    bestFor: "Teams that want proof before a bigger commitment.",
    focus: [
      "Current-state audit",
      "Strategic roadmap",
      "Live execution in the highest-priority channel",
      "Clear recommendation for what should happen next",
    ],
    includes: [
      "Current-state audit",
      "Strategic roadmap",
      "2 to 3 weeks of live execution",
      "End-of-pilot recommendations",
    ],
    expectations: [
      {
        title: "First 30 days",
        body: "We review what is happening now and start with the channel that matters most.",
      },
      {
        title: "What ships",
        body: "You get an audit, live work, and a clear next-step plan.",
      },
      {
        title: "How we work",
        body: "Direct communication, fast work, and no long contract.",
      },
      {
        title: "What success looks like",
        body: "By the end, you know what is broken, what to fix, and what to do next.",
      },
    ],
    fit: [
      "You know something is off, but you need clarity before committing.",
      "You want to see how we think and execute before moving month-to-month.",
      "You need momentum in one high-priority channel now, not a six-week strategy deck.",
    ],
    notFit: [
      "You want a long-term contract before seeing how we work.",
      "You need a full internal team replacement immediately.",
      "You want paid media or production-heavy work as the main engagement.",
    ],
    before: [
      "Unclear priorities",
      "Scattered visibility efforts",
      "No clean recommendation for what the next stage should be",
    ],
    after: [
      "Clear roadmap",
      "Live evidence from real execution",
      "A grounded recommendation for Foundation, Engine, Full Stack, or a custom scope",
    ],
    nextStep: "From there, we move into the right package or project scope.",
  },
  {
    name: "Foundation",
    price: "$1,800 / month",
    summary: "For founder-led SaaS teams that need a stronger presence and a real content base.",
    bestFor: "Founder-led B2B SaaS teams without much marketing support yet.",
    focus: [
      "Founder visibility",
      "Early content foundation",
      "Initial SEO base",
      "Consistent publishing discipline",
    ],
    includes: [
      "Founder content support",
      "Early SEO content",
      "Content planning",
      "Basic reporting rhythm",
    ],
    expectations: [
      {
        title: "First 30 to 60 days",
        body: "We build a steady posting rhythm and a cleaner content base.",
      },
      {
        title: "Ongoing cadence",
        body: "You get steady founder content, early SEO content, and simple reporting.",
      },
      {
        title: "What changes operationally",
        body: "Marketing stops happening in random bursts.",
      },
      {
        title: "What success looks like",
        body: "You look more active, more clear, and more ready to grow.",
      },
    ],
    fit: [
      "You are founder-led and still light on internal marketing capacity.",
      "You need visibility and a basic content system before you need a bigger growth machine.",
      "Your current issue is inconsistency, not total lack of ambition.",
    ],
    notFit: [
      "You already need a full reporting and distribution layer.",
      "Your team already has a strong content engine running.",
      "You need advanced technical SEO or a launch-heavy cadence immediately.",
    ],
    before: [
      "Founder visibility is weak or inconsistent.",
      "Content happens sporadically.",
      "SEO is not yet a real system.",
    ],
    after: [
      "Founder presence becomes repeatable.",
      "The company has a real content foundation.",
      "The business is ready to graduate into Engine when the timing is right.",
    ],
    nextStep: "Many teams move into Engine once the base is in place.",
  },
  {
    name: "Engine",
    price: "$3,500 / month",
    summary: "Our core offer. Content, visibility, and reporting built for growth.",
    bestFor: "Lean SaaS teams that want content to help drive pipeline.",
    focus: [
      "Founder and brand visibility",
      "SEO content",
      "Recurring execution",
      "Reporting and accountability",
    ],
    includes: [
      "Founder and brand content execution",
      "SEO content production",
      "Recurring editorial support",
      "Monthly reporting and performance clarity",
    ],
    expectations: [
      {
        title: "First 30 to 60 days",
        body: "We set priorities, clean up the workflow, and build a steady content system.",
      },
      {
        title: "Ongoing cadence",
        body: "You get steady content, brand visibility, SEO support, and monthly reporting.",
      },
      {
        title: "What changes operationally",
        body: "Content stops being random and starts supporting growth.",
      },
      {
        title: "What success looks like",
        body: "Content, visibility, and reporting start working together.",
      },
    ],
    fit: [
      "You already have a product and a market, but the content layer is not doing enough for pipeline.",
      "You need recurring execution, not just a strategy refresh.",
      "You want founder and brand visibility working together.",
    ],
    notFit: [
      "You are too early and do not yet have real marketing motion.",
      "You only need one isolated project and nothing ongoing.",
      "You need enterprise-scale execution across a large internal org.",
    ],
    before: [
      "Content exists, but it does not compound.",
      "Visibility is inconsistent.",
      "Reporting is too weak to guide decisions.",
    ],
    after: [
      "The team has a working content and visibility engine.",
      "Execution becomes recurring instead of reactive.",
      "Reporting gives the team a clearer read on what is moving.",
    ],
    nextStep: "If you need more launch support and deeper reporting, we move into Full Stack.",
    badge: "Core offer",
  },
  {
    name: "Full Stack",
    price: "$6,000 / month",
    summary: "For teams that want content, launches, and reporting working as one growth system.",
    bestFor: "Lean teams ready for more depth, more follow-through, and better ROI tracking.",
    focus: [
      "Everything in Engine",
      "Distribution layer",
      "Attribution support",
      "Technical SEO and deeper operational structure",
    ],
    includes: [
      "Engine-level recurring execution",
      "Distribution support",
      "Attribution and reporting support",
      "Technical and operational depth",
    ],
    expectations: [
      {
        title: "First 30 to 60 days",
        body: "We improve the work around the content too: launches, distribution, and reporting.",
      },
      {
        title: "Ongoing cadence",
        body: "You get recurring execution plus stronger launch and reporting support.",
      },
      {
        title: "What changes operationally",
        body: "Marketing starts feeling more organized and easier to manage.",
      },
      {
        title: "What success looks like",
        body: "You get better follow-through, clearer numbers, and stronger growth support.",
      },
    ],
    fit: [
      "You already have content motion and now need stronger operational depth.",
      "You need reporting, attribution, launches, and distribution to connect cleanly.",
      "You want content treated as a measurable growth layer.",
    ],
    notFit: [
      "You are still building the basics and do not yet need this level of structure.",
      "You only need a one-time audit or sprint.",
      "You are looking for a broad generalist agency to cover every marketing channel.",
    ],
    before: [
      "The team has activity, but the system around it is fragmented.",
      "Launches and content feel disconnected.",
      "Measurement is not strong enough to guide growth decisions.",
    ],
    after: [
      "The content machine becomes more structured.",
      "Launches and visibility get stronger follow-through.",
      "The team has better operational and reporting clarity.",
    ],
    nextStep: "This is the top public package. Custom work can sit beside it if needed.",
  },
  {
    name: "White-Label / Capacity Track",
    price: "Custom scope",
    summary: "Extra delivery help for agencies that need more capacity.",
    bestFor: "Boutique agencies that need help getting work out the door.",
    focus: [
      "Execution capacity",
      "White-label delivery",
      "Reporting support",
      "Overflow campaign and content work",
    ],
    includes: [
      "Content production",
      "SEO support",
      "Social execution",
      "Reporting support",
    ],
    expectations: [
      {
        title: "What it is",
        body: "A custom scope for agencies that need delivery help behind the scenes.",
      },
      {
        title: "How it works",
        body: "We shape the scope around your client load and delivery needs.",
      },
      {
        title: "What success looks like",
        body: "You get more delivery capacity without hiring more people.",
      },
      {
        title: "Narrative rule",
        body: "Publicly visible, but secondary to the B2B SaaS core offer.",
      },
    ],
    fit: [
      "You are an agency partner with real execution needs.",
      "You need recurring capacity more than a public SaaS package.",
    ],
    notFit: [
      "You need a broad full-service agency relationship.",
      "You are not comfortable with white-label or embedded support.",
    ],
    before: [
      "Client work is sold, but delivery bandwidth is stretched.",
      "Reporting and production become bottlenecks.",
    ],
    after: [
      "The agency gets more dependable execution support.",
      "Client delivery becomes easier to sustain.",
    ],
    nextStep: "This stays a selective custom lane, not a headline package.",
    custom: true,
  },
  {
    name: "Project Track",
    price: "Custom project scope",
    summary: "For one clear project that does not need a monthly package.",
    bestFor: "Teams with one clear need, not an ongoing engagement.",
    focus: [
      "Specific, bounded work",
      "Audit or sprint support",
      "Project-based execution",
    ],
    includes: [
      "Content audits",
      "Technical SEO audits",
      "Positioning audits",
      "pSEO setup",
      "Launch sprints",
    ],
    expectations: [
      {
        title: "What it is",
        body: "A clear project with a clear start and finish.",
      },
      {
        title: "How it works",
        body: "Smaller scope, faster timing, and a simple goal.",
      },
      {
        title: "What success looks like",
        body: "You get the audit, sprint, or asset you came for.",
      },
      {
        title: "When it appears",
        body: "Usually after the pilot or when the need is obviously specific from the start.",
      },
    ],
    fit: [
      "You have one clear, time-bounded need.",
      "You need a sprint or audit more than an ongoing execution partner right now.",
    ],
    notFit: [
      "You already need recurring execution across multiple layers.",
      "You need long-term ownership rather than a defined project.",
    ],
    before: [
      "One important problem is unresolved.",
      "The team does not need a full retainer yet.",
    ],
    after: [
      "The bounded problem is solved or clarified.",
      "The team can decide whether a recurring engagement is the next step.",
    ],
    nextStep: "If the need becomes ongoing later, we can move into a package.",
    custom: true,
  },
];

export const serviceContent: ServiceContent[] = [
  {
    slug: "content-marketing",
    title: "Content Marketing",
    navLabel: "Content Marketing",
    path: "/services/content-marketing",
    pageTitle: "Content Marketing for B2B SaaS Teams",
    metaDescription: "Content marketing for B2B SaaS teams that need clearer messaging, better visibility, and more pipeline support.",
    heroTitle: "Content that helps buyers get what you do fast.",
    heroDescription: "We create steady content for lean B2B SaaS teams that want more visibility and better pipeline support.",
    overview: "This is for teams that need steady content without hiring a full content team.",
    solves: [
      "Blog writing and thought leadership",
      "Landing page copy and content refreshes",
      "Editorial calendars and recurring production",
      "Multi-post content built around real GTM priorities",
    ],
    includes: [
      "Blog writing",
      "Thought leadership",
      "Landing page copy",
      "Editorial calendars",
      "Content refreshes",
      "Multi-post content production",
    ],
    fit: [
      "You need content that supports visibility and pipeline, not just publishing volume.",
      "Your team is lean, but the market-facing story still needs to move every week.",
      "You want sharper messaging without building a full in-house content department first.",
    ],
    notFit: [
      "You only need a copy-only landing page sprint and nothing recurring.",
      "You want broad brand campaigns across every channel at once.",
      "You mainly need paid media or production-heavy creative work.",
    ],
    before: [
      "Content is inconsistent or overly generic.",
      "The company sounds flatter than the product actually is.",
      "Publishing happens, but it does not feel connected to business priorities.",
    ],
    after: [
      "The company sounds sharper and more coherent.",
      "Publishing becomes repeatable.",
      "Content supports visibility and pipeline instead of just filling a calendar.",
    ],
    whyShift: "You do not need more noise. You need clearer content and a steadier rhythm.",
    expectations: [
      {
        title: "First 30 days",
        body: "We review what you have, spot the gaps, and start with the highest-value content first.",
      },
      {
        title: "Ongoing cadence",
        body: "You get a steady plan, steady writing, and steady output.",
      },
      {
        title: "What you get",
        body: "You get clearer content and less internal chaos.",
      },
      {
        title: "What success looks like",
        body: "Your company sounds clearer, looks more active, and gets more value from content.",
      },
    ],
    packageFit: "Engine",
    packageSecondary: "Foundation",
    proof: [
      {
        title: "Archive LinkedIn Content Strategy",
        meta: "Content that kept the brand visible and more trusted.",
        link: "/case-studies/archive-linkedin-strategy",
      },
      {
        title: "Archive Product Marketing Campaign",
        meta: "Content support tied to real product priorities.",
        link: "/case-studies/archive-product-marketing",
      },
    ],
    faqs: [
      {
        question: "Is this mostly blog writing?",
        answer: "No. Blog posts are part of it, but the goal is better content across the business.",
      },
      {
        question: "Can this work if we already have some content motion?",
        answer: "Yes. We often come in to make existing content more clear, more useful, and more consistent.",
      },
      {
        question: "Does this connect to our packages?",
        answer: "Yes. Most teams use this inside Foundation or Engine.",
      },
    ],
  },
  {
    slug: "seo-content",
    title: "SEO Content",
    navLabel: "SEO Content",
    path: "/services/seo-content",
    pageTitle: "SEO Content for B2B SaaS Teams",
    metaDescription: "SEO content for B2B SaaS teams that want more of the right traffic and better pipeline support.",
    heroTitle: "SEO content built for buyers, not vanity traffic.",
    heroDescription: "We help B2B SaaS teams create SEO content that brings in the right visitors and supports growth.",
    overview: "This is SEO content for teams that want better traffic and better buyer fit.",
    solves: [
      "SEO blog production",
      "Content strategy and planning",
      "Landing page planning",
      "Content optimization and refreshes",
      "Large-scale publishing support",
    ],
    includes: [
      "SEO blog production",
      "Content strategy",
      "Landing page planning",
      "Content optimization",
      "Large-scale publishing support",
    ],
    fit: [
      "You want SEO visibility with clearer commercial relevance.",
      "The business already has real content motion or is ready to commit to one.",
      "You need SEO to support demand, not just rankings.",
    ],
    notFit: [
      "You want technical SEO only with no content layer.",
      "You do not have enough product clarity or market motion yet.",
      "You mainly need paid acquisition or developer-heavy infrastructure work.",
    ],
    before: [
      "Visibility is weak or too generic.",
      "SEO effort exists, but it does not clearly support pipeline.",
      "Content and SEO feel disconnected from each other.",
    ],
    after: [
      "SEO content becomes more commercially relevant.",
      "Organic visibility starts pointing at the right buyer problems.",
      "Content and SEO work together as one system.",
    ],
    whyShift: "The goal is not traffic for the sake of traffic. The goal is better traffic.",
    expectations: [
      {
        title: "First 30 days",
        body: "We review your current content and pick the best SEO opportunities first.",
      },
      {
        title: "Ongoing cadence",
        body: "You get steady SEO content, updates, and a clearer focus.",
      },
      {
        title: "What you get",
        body: "You get SEO that supports the rest of your marketing.",
      },
      {
        title: "What success looks like",
        body: "More of the right people find you through search.",
      },
    ],
    packageFit: "Engine",
    packageSecondary: "Full Stack",
    proof: [
      {
        title: "Archive Product Marketing Campaign",
        meta: "Content work tied to product goals.",
        link: "/case-studies/archive-product-marketing",
      },
      {
        title: "Archive AI Insider Newsletter",
        meta: "Proof of steady content work, not random posts.",
        link: "/case-studies/archive-ai-newsletter",
      },
    ],
    faqs: [
      {
        question: "Is this technical SEO or content SEO?",
        answer: "It is mostly content SEO. Technical work can support it, but content is the main play.",
      },
      {
        question: "Can we do this without a huge publishing machine?",
        answer: "Yes. You do not need a huge machine. You need the right priorities.",
      },
      {
        question: "Which package does this usually fit?",
        answer: "Most teams start with Engine. Bigger needs usually move into Full Stack.",
      },
    ],
  },
  {
    slug: "social-linkedin-execution",
    title: "Social and LinkedIn Execution",
    navLabel: "Social and LinkedIn",
    path: "/services/social-linkedin-execution",
    pageTitle: "Social and LinkedIn Execution for B2B SaaS Teams",
    metaDescription: "Social and LinkedIn support for B2B SaaS teams that want to stay visible without doing it all in-house.",
    heroTitle: "Stay visible without doing all the posting yourself.",
    heroDescription: "We help founders and brands show up consistently on LinkedIn and social.",
    overview: "This is for teams that know visibility matters but cannot keep it moving every week.",
    solves: [
      "Social strategy and post writing",
      "Publishing support",
      "Founder content",
      "Brand content",
      "Simple performance check-ins",
    ],
    includes: [
      "Social strategy",
      "Post writing",
      "Publishing support",
      "Founder content",
      "Brand content",
      "Simple performance check-ins",
    ],
    fit: [
      "Your founder and brand presence are inconsistent.",
      "The team needs a more repeatable market-facing rhythm.",
      "You want visibility that supports credibility and demand, not just more posting.",
    ],
    notFit: [
      "You only want a personal ghostwriter disconnected from the company content layer.",
      "You mainly need community moderation or paid social.",
      "You want a consumer social growth playbook for every platform at once.",
    ],
    before: [
      "Founder posting is irregular.",
      "The brand page is active only when someone remembers.",
      "Visibility depends on random bursts of time and energy.",
    ],
    after: [
      "Founder and brand content support each other.",
      "Publishing becomes more consistent.",
      "The company feels more visible and credible in-market.",
    ],
    whyShift: "The goal is not more posts. The goal is steady visibility.",
    expectations: [
      {
        title: "First 30 days",
        body: "We lock in your voice and build a steady posting rhythm.",
      },
      {
        title: "Ongoing cadence",
        body: "You get planning, writing, posting support, and a simple read on what is landing.",
      },
      {
        title: "What you get",
        body: "You stay visible without building a bigger internal team.",
      },
      {
        title: "What success looks like",
        body: "Your founder and brand show up more often and look more active.",
      },
    ],
    packageFit: "Foundation",
    packageSecondary: "Engine",
    proof: [
      {
        title: "Archive LinkedIn Content Strategy",
        meta: "Founder content with steady visibility.",
        link: "/case-studies/archive-linkedin-strategy",
      },
      {
        title: "Archive Radar Feature Launch",
        meta: "Launch support with stronger market visibility.",
        link: "/case-studies/archive-radar-launch",
      },
    ],
    faqs: [
      {
        question: "Is this just founder ghostwriting?",
        answer: "No. Founder content is part of it, but brand content matters too.",
      },
      {
        question: "Do you publish too, or only write?",
        answer: "We help with both writing and getting the content out.",
      },
      {
        question: "Who usually needs this most?",
        answer: "Founder-led and lean SaaS teams that struggle to stay consistent.",
      },
    ],
  },
  {
    slug: "product-launch-marketing",
    title: "Product and Launch Marketing",
    navLabel: "Launch Marketing",
    path: "/services/product-launch-marketing",
    pageTitle: "Product and Launch Marketing for B2B SaaS Teams",
    metaDescription: "Launch support for B2B SaaS teams that want better messaging and better follow-through.",
    heroTitle: "Make your launches easier to see and easier to understand.",
    heroDescription: "We help B2B SaaS teams launch with clearer messaging and better follow-through.",
    overview: "This is for teams that ship good work but do not market the launch well enough.",
    solves: [
      "Feature launches",
      "Webinar support",
      "Campaign rollouts",
      "Launch messaging",
      "Cross-channel promotion",
    ],
    includes: [
      "Feature launches",
      "Webinar support",
      "Campaign rollouts",
      "Launch messaging",
      "Cross-channel promotion",
    ],
    fit: [
      "You have launches, feature releases, or rollout moments that matter.",
      "The product team is shipping, but the market-facing follow-through is too light.",
      "You need launch support without hiring a larger internal marketing team first.",
    ],
    notFit: [
      "You rarely launch anything and mainly need evergreen execution.",
      "You need enterprise product marketing across a large org.",
      "You want a one-post announcement and nothing more structured.",
    ],
    before: [
      "Launches are announced once and disappear.",
      "The value is obvious internally but not clear enough externally.",
      "Execution around the launch feels thin.",
    ],
    after: [
      "Launches have a stronger rollout arc.",
      "Messaging is clearer and more useful to the market.",
      "The team gets more value from the product work it is already shipping.",
    ],
    whyShift: "The goal is not hype. The goal is better follow-through.",
    expectations: [
      {
        title: "First 30 days",
        body: "We find the message gaps and the channels that matter most.",
      },
      {
        title: "Ongoing cadence",
        body: "This can run as a monthly package or a one-off project.",
      },
      {
        title: "What you get",
        body: "You get clearer launch messaging and stronger rollout support.",
      },
      {
        title: "What success looks like",
        body: "Your launches get more attention and make more sense to buyers.",
      },
    ],
    packageFit: "Full Stack",
    packageSecondary: "Project Track",
    proof: [
      {
        title: "Archive Radar Feature Launch",
        meta: "Launch support with clearer messaging and better follow-through.",
        link: "/case-studies/archive-radar-launch",
      },
      {
        title: "Archive Product Marketing Campaign",
        meta: "Launch and campaign support tied to product goals.",
        link: "/case-studies/archive-product-marketing",
      },
    ],
    faqs: [
      {
        question: "Is this only for big launches?",
        answer: "No. It works for any launch that needs better support.",
      },
      {
        question: "Does this belong in a package or a project?",
        answer: "Both. Ongoing launches fit Full Stack. One-time needs fit Project Track.",
      },
      {
        question: "What is the biggest problem this solves?",
        answer: "It helps your launch get seen, understood, and remembered.",
      },
    ],
  },
];

export const servicesNav = [
  { label: "All Services", to: "/services" },
  ...serviceContent.map((service) => ({ label: service.navLabel, to: service.path })),
];
