# Minimal Professional Portfolio Redesign

**Date:** 2026-05-30
**Goal:** Convert the existing bold/flashy dark portfolio into a calm Swiss/minimal,
recruiter-friendly aesthetic while preserving all content, routing, and SEO.

## Decisions

- **Accent:** one muted **teal** — `#0F766E` (light), `#3FBFA9` (dark). Used sparingly:
  links, the single primary CTA, small highlights (dates, role line).
- **Theme:** keep light + dark **toggle**, default **light**; dark redesigned to soft
  charcoal `#0F1115` (not pure black).
- **Typography:** editorial pairing — **Fraunces** (serif) headings + **Hanken Grotesk**
  (sans) body, replacing Space Grotesk.
- **Stats row** in hero: kept. **All project demo links:** kept (small muted text-links).

## Approach

Reskin in place: redefine CSS-variable tokens, register fonts in `@theme`, add a new
`--brand`/`--brand-foreground` token (do NOT repurpose shadcn `--accent`), replace the
floating Dock with a sticky top nav, and rewrite each section's markup to the minimal
layout. Remove from use: preloader, mesh-gradient background, shiny text/button,
draggable photo stack. Keep ScrollReveal (subtle fade-up). Effect component files stay
on disk, unimported.

## Constraints baked in

1. **Button contrast both modes** — `--brand-foreground` flips: white text on teal in
   light, dark text on light-teal in dark (AA).
2. **Sticky nav anchors** — `scroll-mt` on each section; preserve id map
   (Home→home, Skills→skills, Experience→experience, About→about, Work→projects,
   Contact→contact).
3. **Token wiring (Tailwind v4)** — `--color-brand`/`--font-serif`/`--font-sans` in
   `@theme inline`; update both index.html `<link>` and index.css `body`.
4. **FOUC** — drop hardcoded `<html class="dark">`, default light, inline pre-paint
   theme script, update `theme-color`.

## Sections

Nav (sticky top bar + mobile menu + theme toggle) · Hero (left-aligned, serif headline,
solid teal CTA + view-work link + social icons + stats + single framed portrait) ·
Skills (category groups, light pills) · Experience (hairline list entry) · About (intro +
What I Do / Education / Languages lists) · Work (2-col card grid, subtle hover) ·
Contact (heading + restrained links).

## Gate

`pnpm build` (`tsc -b && vite build`) must pass.
