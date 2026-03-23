

# Output Marketing — 12-Page Website Build Plan

## Scope

A complete 12-page marketing website for Output Marketing, a boutique B2B marketing agency. The site includes: Home, About, Pricing, Contact, Work (index), 4 Case Study pages, and 3 Service pages. All pages share a sticky Nav and CTA Footer. The primary conversion goal is driving visitors to start a 30-day pilot ($1,500-$2,000).

---

## Before Building: Required Assets

Per the brief's attachment protocol, the following image files must be uploaded before any code is written:

1. **output-marketing-logo.png** — Nav logo, all pages (28px height)
2. **vanessa-hero.jpg** — Hero photo on Home page and Credentials section
3. **vanessa-about.jpg** — About page Vanessa section photo
4. **angel-photo.jpg** — About page Angel section photo
5. **logo-archive.png** — Client logo (logo bar, case study cards, credentials)
6. **logo-fireflies.png** — Client logo (logo bar, credentials)
7. **logo-zeniq.png** — Client logo (logo bar)
8. **badge-webby.png** — Webby Award badge (Awards section, About page)
9. **badge-cannes.png** — Cannes Lions badge (Awards section, About page)
10. **badge-ie.png** — IE Business School badge (Credentials row)
11. **badge-cdmp.png** — CDMP certification badge (Credentials row)

---

## Implementation Plan

This is a large build. It will be broken into sequential phases to stay within message limits.

### Phase 1: Foundation
- Install `framer-motion` and `react-helmet-async`
- Import Inter font via Google Fonts in `index.html`
- Set up design system: update `index.css` with custom colors, typography classes, and background defaults
- Create shared components: `Nav.tsx` (sticky, mobile hamburger, Services dropdown), `Footer.tsx`, `CTAButton.tsx`, `GhostButton.tsx`, `SectionWrapper.tsx` (Framer Motion fade-in), `FAQItem.tsx`, `CaseStudyCard.tsx`, `MetricDisplay.tsx`
- Set up all 12 routes in `App.tsx` with scroll-to-top on navigation

### Phase 2: Home Page
- Build all 14 sections of the Home page as specified (Hero, Logo Bar, Problem, Agitate, Awards, Services, Damaging Admission, Process, Case Studies, Credentials, Pilot Offer, FAQ, Footer)

### Phase 3: About + Contact Pages
- About page: Hero, Vanessa section, Mini CTA, Angel section, Philosophy, Awards/Credentials, CTA, Footer
- Contact page: Form with validation, toast on submit, email alternative

### Phase 4: Pricing Page
- Hero, Pilot Block (dark), Three Tiers cards, Comparison Table (horizontal scroll on mobile), Add-ons table, Pricing FAQ, Footer CTA

### Phase 5: Work Pages
- Work Index page with shared CaseStudyCard grid
- 4 individual Case Study pages (Radar Launch, AI Newsletter, LinkedIn Strategy, Product Marketing) with consistent layout: metadata header, narrative sections, metric displays, CTA

### Phase 6: Service Pages
- 3 service pages (Influencer Marketing, Content Marketing, Social Media) following consistent structure: Hero, Who It's For, What We Do, Credentials/Case Study Previews, Process, Pricing, FAQ

---

## Technical Details

- **Design system**: All colors, typography, spacing, and component patterns from Section 3 of the brief applied via Tailwind utility classes and custom CSS variables
- **Animations**: Framer Motion `whileInView` with `once: true`, `y: 8 → 0` fade-in, 400ms ease-out. No parallax or carousels
- **Mobile**: Hamburger nav, stacked layouts, horizontal scroll for comparison table, 44px min tap targets
- **SEO**: `react-helmet-async` for per-page `<title>`, `<meta description>`, and canonical links
- **Contact form**: Client-side only, toast notification on submit, email validation on blur with visual indicators
- **Images**: `object-fit: cover`, consistent aspect ratios, grayscale filter on logos, `loading="lazy"` below fold
- **No backend required** at build time

---

## Next Step

Please upload the 11 image assets listed above. Once confirmed, I will begin building Phase 1.

