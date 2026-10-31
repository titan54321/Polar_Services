---
name: Polar
description: Air-conditioning installation, maintenance and repair in La Piedad, Michoacán; a daylight brand site whose every path ends in a WhatsApp quote.
colors:
  white: "#ffffff"
  ice: "#eef5ff"
  ice-deep: "#dce9fc"
  ink: "#0b1f33"
  ink-soft: "#3f546a"
  polar-blue: "#0a5bd8"
  polar-blue-deep: "#08408f"
  whatsapp-green: "#25d366"
  whatsapp-green-hover: "#1fbf5b"
  whatsapp-ink: "#05301a"
typography:
  display:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.6rem, 5.6vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.125rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.35
  wordmark:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    letterSpacing: "-0.03em"
rounded:
  sm: "12px"
  md: "18px"
  lg: "28px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 5vw, 80px)"
  section-y: "clamp(80px, 10vw, 136px)"
  max: "1280px"
  gap-sm: "8px"
  gap-md: "16px"
  gap-lg: "24px"
  gap-xl: "40px"
components:
  button-whatsapp:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.whatsapp-ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-whatsapp-hover:
    backgroundColor: "{colors.whatsapp-green-hover}"
  button-whatsapp-sm:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.whatsapp-ink}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "42px"
  button-whatsapp-lg:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.whatsapp-ink}"
    rounded: "{rounded.pill}"
    padding: "0 30px"
    height: "60px"
  chip:
    backgroundColor: "{colors.ice}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "46px"
  chip-hover:
    backgroundColor: "{colors.ice-deep}"
  chip-selected:
    backgroundColor: "{colors.polar-blue}"
    textColor: "{colors.white}"
  promise-tile:
    backgroundColor: "{colors.ice}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.md}"
    padding: "20px 22px"
  service-card:
    backgroundColor: "{colors.ice}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "26px 28px 30px"
  step-card:
    backgroundColor: "{colors.polar-blue-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "28px"
  quote-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "clamp(24px, 3.5vw, 40px)"
  input-text:
    backgroundColor: "{colors.ice}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "52px"
  nav:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    padding: "14px {spacing.gutter}"
---

# Design System: Polar

## Overview

**Creative North Star: "The Clear Afternoon Showroom"**

Polar is the air-conditioning category standard played straight, held to the craft bar of the big AC brand sites: daylight grounds, large rounded product photography, one confident blue, and a quote that is always one tap away. The page reads cool and clean the way a freshly installed unit does: white and pale ice-blue surfaces, deep navy ink, and no ornament that does not help a hot visitor on a phone decide to write on WhatsApp.

Density is generous and calm. Sections breathe on a fluid vertical rhythm, photographs sit in big soft-cornered frames, and structure comes from filled tonal surfaces (ice panels on white, deep-blue cards on a blue band) rather than from lines or borders. Type is a single family, Manrope, used at heavy weights with tight tracking for headings and plain open settings for reading.

Color carries meaning, not decoration. Polar blue is structure, selection and links; WhatsApp green belongs to the quote action and nothing else. The system replaced an earlier dark neon tech look and rejects it: Polar lives in daylight.

**Key Characteristics:**
- Light only: white and ice-blue grounds, navy ink, no dark theme.
- One family (Manrope), heavy weights (700–800) and negative tracking for headings.
- Filled surfaces instead of hairlines; borders are effectively absent.
- Large radii (28px) on photographs and cards; pills for every control.
- Green is reserved for the WhatsApp quote action.
- Motion is a single load-time entrance on the hero; the rest of the page is still.

## Colors

A cool daylight palette of white and ice over navy ink, with one structural blue and one action green.

### Primary
- **Polar Blue** (`polar-blue`): the brand's structural color. The wordmark, links and service links, the selected chip, the focus ring, line icons, the check discs in the why list, the hero photo's frame panel, and the full-bleed steps band.
- **Deep Polar Blue** (`polar-blue-deep`): hover state for blue links and the contact phone; the fill of step cards sitting on the Polar Blue band.

### Secondary
- **WhatsApp Green** (`whatsapp-green`): the quote action only. Every WhatsApp button (nav, hero, quote form) and nothing else.
- **WhatsApp Green Pressed** (`whatsapp-green-hover`): hover fill of the green buttons on fine pointers.
- **Forest Ink** (`whatsapp-ink`): label and icon color on green buttons; dark text on green rather than white keeps the label legible.

### Neutral
- **White** (`white`): page ground, nav, footer, the quote card, and text on blue surfaces.
- **Ice** (`ice`): the primary tonal surface. Promise tiles, service cards, unselected chips, text inputs, the message preview, the logo slot and the why-photo panel.
- **Deep Ice** (`ice-deep`): one step down from Ice; hover fill of unselected chips.
- **Navy Ink** (`ink`): headings, body text, legends, strong labels.
- **Slate Ink** (`ink-soft`): secondary text (leads, card body copy, nav links, footer). Roughly 7:1 on white.

### Named Rules
**The Green Means WhatsApp Rule.** WhatsApp Green appears only on the control that sends a quote request. Never use it for decoration, badges, success states or secondary links.

**The Blue Is Structure Rule.** Polar Blue marks what is interactive or structural (links, selection, focus, icons, the steps band). Body copy is never blue.

## Typography

**Display Font:** Manrope (with system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Manrope (same stack)

**Character:** One geometric-humanist sans doing all the work. At 800 with tight negative tracking it gives headings the confident, product-brand weight of the AC majors; at 400 with 1.6 line height it reads plainly, like a local tradesperson talking.

### Hierarchy
- **Display** (800, fluid 2.6–4.75rem, 1.02, −0.04em): the hero h1 only.
- **Headline** (800, fluid 2–3rem, 1.08, −0.035em): section h2s.
- **Title** (700, 1.375rem, 1.2, −0.02em): card, step and list item h3s; the quote card title is set larger at 1.5rem.
- **Lead** (400, fluid 1.125–1.25rem, 1.55): the sentence under the h1 and section heads, in Slate Ink, held to about 34–44ch.
- **Body** (400, 1.0625rem, 1.6): running text.
- **Label** (600–700, 0.9375rem): nav links, chip text, legends and form labels, the trust strip, footer text.
- **Wordmark** (800, 1.5rem, −0.03em): the "Polar" name in Polar Blue, nav and footer.

Phone numbers always use tabular figures (`font-variant-numeric: tabular-nums`); the contact phone is the largest one, at fluid 1.75–2.25rem, 800, in Polar Blue. Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`.

### Named Rules
**The Heavy Headings Rule.** Headings are 700 or 800 with negative tracking; nothing between 400 body and 700 title is used for a heading. No uppercase, no letterspaced labels above headings.

## Layout

A centered column capped at 1280px plus a fluid gutter (20–80px) on each side. Sections stack on a fluid vertical rhythm (`section-y`, 80–136px). Gaps step through 8 / 16 / 24 / 40px, with fluid gaps (32–96px) between two-column halves.

- **Hero:** two columns (copy at 1fr, photo at 1.05fr), vertically centered. The trust strip of four promise tiles sits directly under it.
- **Services:** a section head (h2 left, lead right, bottom-aligned, wrapping) over a three-column card grid.
- **Why Polar:** two equal columns, photo and checked list.
- **Steps:** the one full-bleed band; its content is re-centered to the 1280px column.
- **Contact:** two equal columns, contact details and the quote card, vertically centered.
- **Footer:** 2fr / 1fr / 1fr.

Anchored sections carry `scroll-margin-top: 88px` to clear the sticky nav.

**Responsive.** Below 1100px the nav links hide (phone and WhatsApp stay) and promises go to two columns. Below 900px every two-column split stacks, service cards become horizontal (image 2fr, body 3fr) in a single column, steps stack, the hero photo goes to 4:3, and the footer goes to two columns with the brand spanning. Below 600px the nav phone hides, hero chips become a three-up equal grid, hero buttons go full width, service cards return to vertical with 16:10 images, the promises collapse into one ice panel holding a plain list (no per-item tiles), and the footer stacks.

## Elevation & Depth

Flat by default. Depth comes from tonal layering: Ice surfaces on White, Deep Polar Blue cards on the Polar Blue band, a photo inset 12px inside a blue panel. Exactly two shadows exist, both soft, navy-tinted and ambient:

### Shadow Vocabulary
- **Nav lift** (`box-shadow: 0 1px 0 rgb(11 31 51 / 0.06), 0 8px 24px -12px rgb(11 31 51 / 0.18)`): applied to the sticky nav only once the page has scrolled past 8px.
- **Quote float** (`box-shadow: 0 2px 4px rgb(11 31 51 / 0.04), 0 24px 48px -20px rgb(11 31 51 / 0.22)`): the white quote card, the only surface lifted at rest, because it is the page's destination.

### Named Rules
**The Filled Not Lined Rule.** Separate things with tonal fills and space, not borders or dividers. The build has no visible borders.

## Shapes

Generous, soft, consistent. Three radii plus the pill:

- **Large (28px):** photographs, service cards, step cards, the quote card, the hero media panel (its inner image uses 20px so the inset reads concentric).
- **Medium (18px):** promise tiles and the mobile promise panel.
- **Small (12px):** inputs, the message preview, the logo slot, the skip link.
- **Pill (999px):** every button, every chip, step numerals, the check discs, small separator dots.

Images are cropped with `object-fit: cover` inside their frames. Icons are 24-unit line drawings at 1.8 stroke with round caps and joins, colored by `currentColor`; the WhatsApp mark is the only filled icon.

## Components

### Buttons
Pill-shaped, solid, confident; there is effectively one button and it is green.
- **Shape:** full pill (999px).
- **WhatsApp (primary):** WhatsApp Green fill, Forest Ink label at 700, WhatsApp glyph leading with a 10px gap. Sizes: small 42px (nav), default 52px, large 60px at 1.125rem (hero and quote card); block width in the quote card and on phones.
- **Hover / Active:** fill shifts to the pressed green on fine pointers only (150ms); press scales to 0.97 (160ms, ease-out).
- **Focus:** 3px Polar Blue outline, 3px offset, following the pill.
- **Text links:** service links are Polar Blue 700 with a trailing arrow that slides 4px right on hover while the color deepens. The call link is Slate Ink with the number in Navy Ink, turning blue on hover.

### Chips
Radio choices for building a quote, styled as pills.
- **Style:** Ice fill, Navy Ink label (600, 0.9375rem), 46px tall, 20px side padding, 8px gaps.
- **State:** selected becomes Polar Blue with white text; unselected hover is Deep Ice; press scales to 0.97; keyboard focus draws the blue ring on the pill. The native radio stays in place, invisible, over the pill.

### Trust Strip (promises)
Four short confirmed claims under the hero. Each is an Ice tile (18px radius, 20px 22px padding) with a 28px blue line icon and a two-weight line: the bold word in Navy Ink at body size, the rest in Slate Ink at label size. Four columns, two under 1100px, and on phones a single ice panel with the items as a plain list.

### Service Cards
Ice cards with a 28px radius and clipped edges: a 4:3 photograph on top, then a body (26px 28px 30px) with title, Slate Ink description and a blue "Cotizar …" link pinned to the bottom. Horizontal (image beside body) between 600 and 899px.

### Why List
A single column of reasons, 28px apart, each indented 48px behind a 32px Polar Blue disc carrying a white check. Title then Slate Ink sentence. Paired with a 3:2 photograph on an Ice panel where the photo's white ground multiplies into the ice.

### Steps Band
The one full-bleed Polar Blue band, white type. Three Deep Polar Blue cards (28px radius, 28px padding), each opening with a 48px white disc holding the step number in blue at 800; body text in white at 85% opacity.

### Quote Card
The page's destination and the only lifted surface: white card, 28px radius, fluid 24–40px padding, Quote float shadow, 26px between fields. Fieldsets of chips, one optional name input, a live Ice preview of the composed message, and a full-width large WhatsApp button.

### Inputs / Fields
- **Style:** borderless, Ice fill, 12px radius, 52px tall, 16px side padding, body size; placeholder in a muted slate; Polar Blue caret.
- **Focus:** the global 3px Polar Blue ring at 2px offset.
- **Labels:** label-weight Navy Ink above the field; optional markers in Slate Ink at 500.

### Navigation
Sticky white bar, 14px vertical padding on the page gutter. Left: a 42px Ice logo slot holding a blue mark, plus the blue wordmark. Right: four Slate Ink links (label size, 600, 28px apart, blue on hover), the phone number in tabular figures, and the small WhatsApp button. Gains the Nav lift shadow once scrolled. Links hide below 1100px and the phone below 600px; the green button never hides.

### Footer
White, Slate Ink at label size, three columns: wordmark and one-line description, the section links, and the phone number large (1.25rem, 800, Navy Ink) above the copyright and photo credit. Links turn blue on hover.

### Motion
One moment only. On load, the hero copy and photo rise 18px and fade in over 700ms on `cubic-bezier(0.23, 1, 0.32, 1)`, staggered 80ms per element, while the hero photograph settles from 1.06 scale over 1600ms. Content is hidden only when the script runs, so it is always visible without JS, and reduced motion removes the entrance and smooth scrolling entirely. Everything else is 150–200ms state feedback: color fades, the 0.97 press, the arrow nudge, the nav shadow. Hover effects are gated to `(hover: hover) and (pointer: fine)`.

## Do's and Don'ts

### Do:
- **Do** keep every ground light: White and Ice, with Navy Ink text.
- **Do** reserve WhatsApp Green for the quote action, with Forest Ink (not white) on it.
- **Do** use Polar Blue for links, selection, focus, icons and the single steps band.
- **Do** separate content with tonal fills (Ice on White, Deep Polar Blue on Polar Blue) and space.
- **Do** frame photographs large, with the 28px radius.
- **Do** make every control a pill and keep tap targets at 42px or taller (46px chips, 52–60px buttons).
- **Do** set phone numbers in tabular figures and let the contact phone be big and blue.
- **Do** gate hover styling to fine pointers and honor reduced motion.

### Don't:
- **Don't** bring back the dark neon tech look this system replaced.
- **Don't** use green for anything but sending a quote.
- **Don't** add borders, hairline dividers or outlined cards; use fills.
- **Don't** add shadows beyond the two in the vocabulary, or lift any surface other than the quote card at rest.
- **Don't** introduce a second typeface, or set headings below 700.
- **Don't** add scroll-triggered animation; the hero entrance is the only choreographed motion.
