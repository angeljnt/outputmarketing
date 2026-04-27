# Output Marketing Website Structure Audit

This document contrasts the current site structure with research-backed trust and authority principles.

It is based on the current live codebase in `/Users/angeljnt/outputmarketing-live` as of April 26, 2026.

## Goal

Help the site build more trust and authority without bloating the navigation or breaking the current design system.

## Current Structure Snapshot

### Public IA

- Home
- Work
- Services
- Pricing
- About
- Contact
- 4 public service detail pages
- 4 public case studies

### Current homepage order

1. Hero
2. Client logo marquee
3. Services overview
4. Before / after visual
5. Best-fit clients
6. Quick self-check
7. Packages
8. Proof / case studies
9. Pilot process
10. FAQ

## What The Research Says

These are the most relevant trust-building principles for this site.

1. Credibility rises when visitors can verify claims, see that a real organization exists, understand who the experts are, and find clear contact information.
Source: Stanford Web Credibility Guidelines
https://credibility.stanford.edu/guidelines/index.html

2. Credibility is strongly affected by design quality, ease of use, company information, contact information, and clear pricing.
Source: NN/g, Designing for Young Adults
https://media.nngroup.com/media/reports/free/Designing_for_Young_Adults_3rd_Edition.pdf

3. About pages build more trust when they quickly explain what the organization does, and when endorsements, client logos, detailed case studies, and customer quotes are easy to verify.
Source: NN/g, Presenting Company Information on Corporate Websites and in About Us Sections
https://media.nngroup.com/media/reports/free/Presenting_Company_Information_on_Corporate_Websites_3rd_Edition.pdf

4. Testimonials, references, and customer stories are stronger when they feel current and specific. Outdated proof hurts credibility.
Source: NN/g, PR on Websites
https://media.nngroup.com/media/reports/free/PR_on_Websites_3rd_Edition.pdf

5. Real-world visuals from actual users or real usage contexts increase confidence because they feel less filtered than brand-authored claims alone.
Source: Baymard Institute
https://baymard.com/blog/integrate-social-media-visuals-on-product-page

## Where The Current Site Is Already Strong

- The site already looks professional and consistent, which supports first-impression credibility.
- The navigation is restrained and easy to understand.
- There is a real pricing page instead of hiding pricing completely.
- There is a real About page with real people, photos, LinkedIn links, and recognizable prior-company context.
- There is real proof instead of generic testimonials only.
- The CTA path is clear and consistent around the 30-day pilot.

## Main Structural Gaps

These are the main gaps when the current structure is contrasted with the research above.

### 1. Trust signals are present, but too distributed

The site has logos, real team members, awards, prior-company context, pricing, and case studies.
The issue is not absence.
The issue is distance.

Right now, a visitor has to move across multiple sections and pages to assemble the trust story:

- logos on home
- bios and awards on About
- deeper proof on Work
- pricing logic on Pricing

That means the site is asking the visitor to do too much synthesis.

### 2. The homepage establishes offer clarity before it establishes authority

The hero is clear, which is good.
But the next trust layer after the hero is mostly a logo strip with limited interpretation.

Logos help, but by themselves they do not explain:

- what the team actually did
- why the work should be trusted
- why this team is qualified to guide a pilot

The site needs a tighter bridge from "here is the offer" to "here is why this team is credible."

### 3. Proof lands a bit late on the homepage

The homepage reaches proof after services, before/after, fit, and packages.
That is a lot of explanation before visitors see concrete evidence.

For a boutique service business, trust usually climbs faster when proof appears earlier and with more context.

### 4. The logo strip lacks interpretation

The current marquee signals breadth of exposure, but it does not translate that exposure into authority.

A visitor can see client names, but not:

- what kind of work was done
- what level of responsibility the team held
- whether the logos connect to visible public outcomes

### 5. The About page is person-first more than operating-model-first

The people content is valuable.
The missing layer is a stronger explanation of how Output Marketing works as an operating system:

- why the team stays small
- how execution is led
- how pilot-to-scope decisions are made
- what clients should expect structurally

This matters because buyers are often judging delivery reliability as much as creative taste.

### 6. Pricing explains cost, but not enough of the risk-reduction story

The pricing page tells users that the pilot comes first and that packages follow.
That is good.

But there is still room to make the pilot feel safer and more authority-building by showing:

- what the client walks away with
- what evidence gets produced
- how the "continue or stop" decision is made

That structure would help the pricing page reinforce trust, not only pricing clarity.

### 7. Service pages are useful, but authority could be more tightly linked to proof

The service pages explain scope and fit.
What they do not yet do strongly enough is tie each service to visible evidence.

For example:

- SEO page -> featured SEO case evidence
- launch page -> featured launch proof
- social / visibility page -> featured founder visibility proof

This would reduce the gap between claim and evidence.

### 8. The site does not yet show enough "currentness"

Research consistently ties freshness to credibility.
The site is clean, but it does not visibly signal review recency very often.

That does not mean turning the site into a blog.
It means giving visitors small reassurance that the work and proof are current.

## Highest-Leverage Improvements

These are the changes most likely to strengthen trust and authority without blowing up the current system.

### P1

#### Add an authority bridge immediately after the hero

Keep the logo strip, but interpret it.

Recommended module:

- short heading such as `Built inside real SaaS teams`
- 3 compact proof points such as:
  - `Former Archive marketing leadership`
  - `Fireflies.ai campaign background`
  - `Webby-winning / Cannes-recognized work`

This turns passive logos into active credibility.

#### Move a featured proof block earlier on the homepage

Instead of waiting until the later `Proof` section, add one earlier proof summary after the logo strip or directly after services.

Best version:

- one featured case study
- one visible business outcome
- one sentence on what was actually done
- one link to the deeper case study

This gives visitors evidence before they have to process too much explanation.

#### Surface the real-team signal on the homepage

The site already has real people on About.
Bring a compressed version of that trust layer onto Home.

Recommended module:

- `Small team. Senior work.`
- one short paragraph on how the team operates
- 2 to 3 micro-credentials

This helps satisfy Stanford's "real organization" and "real people behind the site" principles earlier.

### P2

#### Rework the About page so the operating model comes before the bios

Recommended sequence:

1. What Output Marketing is
2. How the team works
3. Why the team stays small
4. Team bios
5. Recognition and prior-company context

This keeps the bios, but gives them a stronger strategic frame.

#### Add proof links directly inside service pages

Every service page should have a tight proof block:

- `See this in practice`
- one linked case study
- one short outcome statement

That makes authority more modular and easier to verify.

#### Strengthen the pricing page with pilot deliverables

Add a compact `What you leave with` block for the pilot:

- audited starting point
- one live workstream
- signal on what moved
- recommendation on what to keep, cut, or expand

This turns the pilot from a pricing concept into a trust-building mechanism.

### P3

#### Add freshness cues

Possible options:

- `Updated for 2026` on key service pages
- visible dates on case studies
- one small `recent work / recent thinking` module

#### Make contact reassurance more visible before form submission

Recommended additions:

- direct email visible before submit
- who replies
- response time
- optional geography / operating base if appropriate

This helps make the business feel more reachable and concrete.

## Suggested Homepage Sequence

This is the structure I would recommend if the goal is stronger trust and authority while keeping the current compact IA.

1. Hero
2. Logo strip with interpreted authority points
3. Featured proof block
4. Services overview
5. Before / after
6. Who this is for
7. Quick self-check
8. Packages
9. Pilot process
10. Additional proof grid
11. FAQ
12. Footer CTA

### Why this is stronger

- It gets to proof sooner.
- It interprets authority instead of implying it.
- It makes the trust story easier to assemble.
- It keeps the site compact instead of adding more top-level pages.

## Suggested Site-Wide Trust System

The strongest version of this website is not one giant `trust us` section.
It is a repeated trust system spread across key decision points.

### Home should prove

- clear offer
- credible team
- visible outcomes
- low-risk entry point

### Services should prove

- expertise in a specific lane
- fit and non-fit
- evidence for that lane

### Work should prove

- depth
- range
- recency
- real execution context

### About should prove

- real people
- operating model
- prior experience
- recognition

### Pricing should prove

- transparency
- decision logic
- low-risk next step

### Contact should prove

- approachability
- responsiveness
- seriousness

## Best Next Moves

If we want the highest-impact structural changes next, I would do them in this order:

1. Add an interpreted authority block after the hero.
2. Add one featured proof block earlier on the homepage.
3. Rework About so the operating model leads before the bios.
4. Add proof modules to service pages.
5. Add a stronger pilot-deliverables block to Pricing.

## Notes

- This audit is an inference from the current live site structure plus the research sources above.
- The NN/g `Designing for Young Adults` report is not B2B-service-specific, but its credibility factors are still useful here because they map to core trust signals such as clarity, contact information, and pricing visibility.
- Baymard's research is ecommerce-oriented, but the transferable principle is still relevant: real usage evidence tends to feel more trustworthy than polished self-description alone.
