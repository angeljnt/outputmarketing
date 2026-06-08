## Goal

Drop the ruby (and any colored) accent. Move to pure monochrome + the existing warm paper tint (#F5F3EE) for hover surfaces. Primary interaction cues become **font weight + an arrow glyph** for links, and **underlined text-buttons** for CTAs.

## Token changes

`tailwind.config.ts`
- `accent.DEFAULT`: `#C72C48` → `#F5F3EE` (paper tint, used as hover background)
- `accent.dark`: `#9B2335` → `#111111` (near-black for active/strong states)
- `accent.tint`: keep at `#F5F3EE` (already paper)
- Keep the `accent` token name so existing `hover:bg-accent` / `bg-accent/45` classes keep working but now render as neutral paper.

`src/index.css`
- Focus-visible outline `#C72C48` → `#111111` (black focus ring, accessible on light bg).

`src/components/MetricDisplay.tsx`
- Replace `whileInView={{ color: "#C72C48" }}` with a weight animation (`fontWeight: 700`) and keep text color at `currentColor`. No color change on view.

`src/components/PilotFocusDiagram.tsx`
- Replace `color: "#C72C48"` with `color: "#111111"` plus a `fontWeight` bump for the active state.

## Link / hover-text cue (weight + arrow)

For text links that today use `hover:text-accent` (Footer, About, Services, Contact, Home, Pricing, case study pages):
- Replace with a shared utility class pattern: `font-medium hover:font-semibold transition-[font-weight] after:content-['_→'] after:opacity-0 hover:after:opacity-100 after:transition-opacity`.
- Implement once as a small helper className constant (e.g. exported from `src/lib/ui.ts` as `linkHover`) and reuse, so we don't sprinkle the same Tailwind string everywhere.
- Footer/nav links: same treatment, arrow only on hover; active route gets `font-semibold` + persistent arrow.

`Nav.tsx`
- Swap `hover:bg-accent hover:text-[#111111]` → `hover:bg-accent` (now paper) + `hover:font-semibold`. Dropdown items: same. Mobile menu: same.
- Focus rings switch from `ring-accent` to `ring-foreground`.

## Buttons (underlined text-button)

`src/components/CTAButton.tsx`
- `primary` variant becomes: no fill, no border. Black text, `font-semibold`, underline with `underline-offset-4`, trailing `→` glyph, hover bumps underline thickness (`decoration-2`) and translates arrow `translate-x-0.5`. Same min-height 44px for tap target.
- `primary-inverted` variant: white text + white underline on dark backgrounds, same arrow.
- Remove the colored hover (`hover:bg-accent hover:text-[#111111]`).

`src/components/GhostButton.tsx`
- Convert to the same underlined text-button pattern as `CTAButton primary` (since the user wants underlined text-buttons throughout). Keep the existing `<strong>` slot.

## Card / surface hovers

Cards currently using `hover:bg-accent hover:border-accent` (Home service cards, Work `CaseStudyCard`):
- These now render as `bg paper-tint + border paper-tint` since the token was remapped. Result is a soft neutral hover, no color. No code change needed beyond the token swap, but I'll verify visually.
- Add a subtle `group-hover:translate-x-0.5` to the card's "Read case study →" link to reinforce the arrow cue.

`bg-accent/45` pill badges (Pricing, Home `In progress` chip, BeforeAfterSlider): now render as a 45%-opacity paper tint over background. Visually almost invisible. I'll swap these specific usages to `bg-neutral-100 border-neutral-300` so the pills remain readable.

`FAQItem.tsx`
- `hover:bg-accent-tint` already maps to paper tint. No change.

## Work page eyebrow

`src/pages/Work.tsx` lines 43-44 use `text-accent` and `bg-accent` for the eyebrow dot+label. Without a color this disappears. Swap to `text-foreground` with a small `bg-foreground` dot, no color.

## Memory updates

Update `mem://index.md` Core line:
- "Aesthetic: Minimalist, monochromatic with amber gold (#D4A853) accent." → "Aesthetic: Strict monochrome. No color accents. Hover = paper tint (#F5F3EE) surface or font-weight + arrow (→) cue. Active/focus = black (#111111). Primary CTAs = underlined text-buttons with trailing arrow."

Update `mem://style/design-direction` with the new rules and explicitly forbid colored accents (ruby, gold, or otherwise).

## Verification

- Read the build output.
- Spot-check Home, Work, Pricing, About, Contact in the preview at 1189px to confirm no stray red/gold remains and that hover/active states still read clearly.

## Out of scope

- No structural/layout changes.
- No content edits.
- No changes to photos, logos, or the team section.
