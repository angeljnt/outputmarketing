# Output Marketing Current Design System

This document captures the current visual and structural system of the live website in `/Users/angeljnt/outputmarketing-live`.

Its purpose is simple: make future edits safer. If we change copy, add pages, or evolve the offer, we should preserve the system below unless we are intentionally redesigning it.

## Current Website Status

### Product status

- The site is a marketing site, not an app product.
- It is built as a static Vite + React + TypeScript + Tailwind site with a few custom marketing primitives and a large unused `shadcn/ui` install.
- The public IA is compact:
  - Home
  - Work
  - Pricing
  - About
  - Contact
  - 3 service pages
  - 4 case studies

### UX status

- The site already has a clear visual identity.
- The system is consistent across major pages.
- Most pages reuse the same section rhythm, card language, CTA treatment, and contrast pattern.
- The strongest repeated idea is: minimal, editorial, premium, direct, and anti-agency-bloat.

### Functional status

- Navigation is working and responsive.
- Page transitions are SPA-based through React Router.
- The contact form is currently a front-end interaction only:
  - it validates email locally
  - shows a toast
  - resets the form
  - does not send data anywhere yet
- The site builds successfully locally with `npm run build`.

### Design-system maturity

- The system is real, but only partially formalized.
- Core tokens live in `src/index.css` and `tailwind.config.ts`.
- Shared marketing primitives are clean:
  - `SectionWrapper`
  - `CTAButton`
  - `GhostButton`
  - `FAQItem`
  - `CaseStudyCard`
  - `MetricDisplay`
  - `Nav`
  - `Footer`
- Some visual rules are still implemented ad hoc:
  - direct `#111111` usage for hover text
  - repeated `border-neutral-200` instead of a single semantic token
  - legacy `App.css` file from the starter template that is not part of the active system

## Design System Summary

### Brand character

The current website feels:

- boutique, not corporate
- premium, not flashy
- direct, not playful
- warm, not cold
- sharp, not ornamental
- text-led, not illustration-led

It behaves more like an editorial brand system than a high-polish SaaS dashboard aesthetic.

### Visual principles

1. Keep the interface quiet so the words and proof do the work.
2. Use contrast through background shifts, not through decorative effects.
3. Let the gold accent act as emphasis, not as a dominant brand wash.
4. Favor flat surfaces, borders, and typography over shadows, gradients, and chrome.
5. Make every CTA feel deliberate and singular.

## Foundations

### Color system

The active palette comes from CSS variables in `src/index.css` plus a small explicit accent map in `tailwind.config.ts`.

| Role | Token / class | Current use |
|---|---|---|
| Page background | `bg-background` | warm off-white main canvas |
| Primary text | `text-foreground` | near-black text |
| Muted text | `text-muted-foreground` | secondary body copy |
| Surface | `bg-surface` | cards and calm containers |
| Alternate surface | `bg-surface-alt` | soft contrast sections |
| Dark section | `bg-dark text-dark-text` | problem/philosophy/footer blocks |
| Dark muted text | `text-dark-muted` | secondary copy on dark backgrounds |
| Accent | `accent.DEFAULT` / `text-accent` / `bg-accent` | hover state and emphasis |
| Accent tint | `bg-accent-tint` | table row / FAQ row hover |
| Border | `border-border` | default structural linework |
| Success | `text-success` | contact success state |
| Destructive | `text-destructive` | invalid email state |

#### Practical palette behavior

- Main experience: off-white background + near-black text.
- Contrast moments: full-width dark sections.
- Interaction emphasis: warm gold hover.
- Surface hierarchy: mostly border + fill, not shadow + depth.

#### Guardrail

Do not introduce new saturated brand colors, gradients, or glassmorphism effects unless the site is being intentionally redesigned.

### Typography

The site uses `Inter` as the system sans font.

| Token | Current intent |
|---|---|
| `text-display` | hero headlines and large numeric proof |
| `text-h1` | available, but not the main public pattern |
| `text-h2` | section titles |
| `text-h3` | card titles, FAQ question size, subsection titles |
| `text-h4` | spare utility use |
| `text-body` | default paragraph copy |
| `text-body-lg` | hero support copy and key narrative paragraphs |
| `text-small` | support text |
| `text-micro` | overlines and tiny labels |
| `text-caption` | price notes, metadata, subdued helper text |

#### Typography behavior

- Headlines are compact and tight-tracked.
- Body copy is readable and relaxed, not dense.
- Overlines are uppercase, micro-sized, and slightly letterspaced.
- The visual identity depends on restrained typography, not type experimentation.

#### Guardrail

Do not swap the font family or start mixing expressive display fonts without a full redesign pass.

### Spacing and layout

The system uses a small set of reusable layout utilities:

| Utility | Intent |
|---|---|
| `section-padding` | default vertical rhythm |
| `container-narrow` | narrative sections, CTA closes, dark manifesto blocks |
| `container-default` | most page sections |
| `container-wide` | pricing tables and wider content |

#### Layout rules

- Sections breathe vertically.
- Most content sits within a centered container.
- Dense content gets a narrower measure.
- Tables and comparison views use the widest container.
- The nav is fixed and the app reserves `pt-16` on `<main>` to avoid overlap.

#### Guardrail

Do not invent lots of one-off max-width wrappers. Reuse the three container classes unless there is a strong reason not to.

### Shape and depth

- The system is mostly square-cornered with a modest default radius token.
- Most marketing cards do not visually lean on rounded corners.
- Circular crops are reserved for founder/team photos.
- Shadows are minimal and mostly limited to nav state and dropdowns.

#### Guardrail

Avoid adding rounded-xl, floating glass cards, large blur panels, or layered shadows. That would shift the whole visual language.

## Component System

### Navigation

Current behavior:

- fixed top nav
- 64px visual height
- background becomes slightly translucent with blur and `shadow-sm` on scroll
- desktop inline nav + dropdown
- mobile full-height panel below the nav bar
- CTA in ghost-button style

Design meaning:

- restrained
- highly legible
- no novelty animations
- functional first

### Primary CTA

`CTAButton` is the main action primitive.

Rules:

- solid black background by default
- white text on black
- gold hover state
- compact but sturdy button proportions
- minimum 44px target height
- strong, short copy

Use for:

- page-primary actions
- main hero actions
- section closes
- contact submit

### Secondary CTA

`GhostButton` is the secondary action primitive.

Rules:

- transparent background
- black border
- black text
- gold hover fill

Use for:

- secondary navigation actions
- alternate CTA in hero/work sections
- booking or supporting action when the primary CTA is already present

### Section wrapper

`SectionWrapper` is a layout and motion primitive.

Rules:

- applies default vertical rhythm
- applies subtle scroll reveal
- uses a short fade-up animation
- animation is quiet and only fires once

This is important: the motion language is present, but intentionally restrained.

### Card language

The site repeatedly uses the same card grammar:

- `bg-surface`
- border
- no shadow
- generous padding
- hover fill changes to gold
- hover text changes to near-black

This pattern appears in:

- offer cards
- pain cards
- process cards
- case-study previews
- proof/evidence stat blocks

### FAQ

FAQ rows use:

- border-bottom separators
- accent-tint hover
- question sized as `text-h3`
- animated chevron rotation
- short expand/collapse motion

This gives the FAQ a stronger editorial feel than a generic accordion component.

### Metric display

The metric system is one of the site’s signature patterns:

- large display number
- muted-to-gold animated color shift on reveal
- small descriptive caption
- centered alignment

Use it sparingly. It works because it feels like an event when it appears.

### Footer

The footer is not a utility footer. It behaves like a final CTA section:

- full dark background
- centered headline
- primary CTA
- quiet secondary nav
- minimal legal noise

## Page Templates

### Home page template

The homepage follows this structure:

1. Hero
2. Trust/logo strip
3. Dark problem section
4. Pain/agitation cards
5. Awards
6. Offer cards
7. Positioning/constraint section
8. Process steps
9. Case-study grid
10. FAQ
11. Footer CTA

This is the main narrative spine of the site.

### Pricing template

The pricing page follows:

1. Intro hero
2. Dark pilot block
3. Tier grid
4. Comparison table
5. Add-ons table
6. Decision helper
7. FAQ
8. Light CTA strip
9. Footer

### Service page template

The current service pages generally follow:

1. Hero
2. Dark problem/opportunity block
3. Fit definition
4. Scope/program description
5. Evidence or proof block
6. Public proof strip or mini case-study links
7. Process steps
8. Pricing/pilot bridge
9. FAQ
10. Footer

### Case study template

Case studies generally follow:

1. Hero with overline + title + metadata
2. Context/challenge/problem narrative
3. Execution list
4. Metric grid
5. Interpretation
6. CTA close
7. Footer

### Contact template

The contact page uses a split-layout conversion pattern:

- left side: primary form
- right side: lower-friction conversational option
- success state swaps the full form block with a confirmation card

## Motion and Interaction

### Current motion rules

- section reveal: subtle fade + slight upward movement
- FAQ: quick collapse/expand
- metrics: number color animates into gold
- nav: light state change on scroll
- cards: hover color inversion
- logos/badges: grayscale to full-color on hover

### Motion guardrail

Do not add:

- parallax
- heavy stagger systems
- long entrance animations
- floating elements
- animated gradients

The current system uses motion as polish, not spectacle.

## Imagery and Proof

### Image treatment

- founder/team imagery uses circular crops
- logos and badges are often desaturated until hover
- visuals support trust and credibility rather than decoration

### Proof treatment

- proof is text-forward
- numbers are embedded inside headlines, lists, or metric blocks
- proof cards remain visually consistent with offer cards

## Implementation Notes That Matter

These are not redesign reasons, but they matter when editing:

1. `src/App.css` is legacy starter-template CSS and is not part of the active design language.
2. `ServiceInfluencer.tsx` actually renders the Founder LinkedIn page.
3. `ServiceSocial.tsx` actually renders the Organic SEO page.
4. The repo includes many `shadcn/ui` components, but the marketing site mostly relies on custom primitives instead.
5. The system is semantic in spirit, but not fully semantic in implementation because some styles are hard-coded repeatedly.

## What We Should Preserve During Future Changes

### Preserve

- warm neutral canvas
- black/gold action language
- flat bordered cards
- strong section rhythm
- dark contrast sections
- tight editorial headings
- compact CTA vocabulary
- proof-forward layout
- low-drama motion

### Avoid

- adding purple/blue SaaS gradients
- switching to soft rounded startup cards everywhere
- introducing multiple new button styles
- overusing shadows
- mixing dashboard UI patterns into marketing pages
- replacing the dark contrast sections with decorative image banners
- changing hover behavior page by page

## Safe Refactor Priorities

If we want to improve the system without redesigning it, do this in order:

1. Replace repeated `#111111` values with a semantic token or utility.
2. Replace repeated `border-neutral-200` usage with a shared semantic border decision.
3. Remove or ignore `src/App.css` so future edits do not mistake it for active styling.
4. Decide whether the service page filenames should be renamed to match their actual purpose.
5. Document a small set of approved section recipes so new pages do not drift.

## Change Checklist

Before shipping any visual change, check:

- Does it use the existing container classes?
- Does it use the current type scale?
- Does it preserve the black/gold CTA logic?
- Does it fit the flat bordered card language?
- Does it keep contrast sections restrained?
- Does it introduce any new color, radius, or shadow language?
- Does it feel editorial and premium rather than generic SaaS?

If the answer to the last two questions is "yes", the change probably needs a deliberate design review rather than a casual patch.

## Source Files

The current system is defined primarily by:

- `tailwind.config.ts`
- `src/index.css`
- `src/components/SectionWrapper.tsx`
- `src/components/CTAButton.tsx`
- `src/components/GhostButton.tsx`
- `src/components/Nav.tsx`
- `src/components/Footer.tsx`
- `src/components/FAQItem.tsx`
- `src/components/CaseStudyCard.tsx`
- `src/components/MetricDisplay.tsx`

The system is expressed across these major page references:

- `src/pages/Home.tsx`
- `src/pages/Pricing.tsx`
- `src/pages/About.tsx`
- `src/pages/Work.tsx`
- `src/pages/ServiceInfluencer.tsx`
- `src/pages/ServiceContent.tsx`
- `src/pages/ServiceSocial.tsx`
- `src/pages/Contact.tsx`
