# rules.md — Mandatory Rules for Claude Code

## ⚠️ READ EVERY TIME. No exceptions. No skipping.

---

## Rule 1: Always Read Before Building

Before writing ANY code, executing ANY command, or making ANY file changes:

1. Read `CLAUDE.md` in full
2. Read `rules.md` (this file) in full
3. Confirm which **phase** you are working on
4. Confirm which **screen** you are building
5. Reference the correct screenshot(s) for the current task

**If you skip this step, you will build the wrong thing.**

---

## Rule 2: Branch Discipline

- **My branch:** `jonel/ui-clone`
- **Never** commit to `main`
- **Never** touch Victor's branch or files related to the dietary restriction feature
- Always confirm you are on the correct branch before making changes: `git branch --show-current`

---

## Rule 3: Pixel-Perfect Matching

- Every component must match the TGTG app screenshots exactly
- Use the exact color hex codes from `CLAUDE.md`
- Match typography sizes, weights, spacing, and line heights
- Match border radius values, shadow styles, and padding
- When in doubt, reference the screenshots — they are the source of truth

---

## Rule 4: No Design Creativity

This is a **clone**, not an original design. Do NOT:

- Invent new color schemes or typography choices
- Add animations or effects not present in the original app
- Change the layout or spacing from what the screenshots show
- "Improve" the design — match it exactly as-is

The only adaptation allowed is making the mobile layout work on desktop (centered container with max-width, as specified in CLAUDE.md).

---

## Rule 5: Code Architecture Standards

Follow these patterns for clean, maintainable code:

### Separation of Concerns
- Components handle rendering only
- Event handlers are defined as named functions, not inline
- Business logic lives outside JSX

### Constants
- All colors, sizes, and repeated values go in `src/constants/theme.js`
- No magic numbers or hardcoded strings in component files
- Category names, section titles → constants or data files

### Error Handling
- Wrap data lookups with fallback values
- Handle missing images gracefully (show placeholder)
- Handle missing/undefined data without crashing

### File Organization
- One component per file
- Components grouped by feature (layout, discover, store-detail)
- Mock data in `src/data/mockData.js`

---

## Rule 6: Accessibility Requirements

Every component must include:

- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<button>`)
- `alt` text on all images
- `aria-label` on icon-only buttons
- Proper heading hierarchy (h1 → h2 → h3, no skipping)
- Keyboard-navigable interactive elements
- Sufficient color contrast (TGTG's brand colors already pass — maintain them)

---

## Rule 7: Phase Completion Protocol

When finishing a phase:

1. Verify all components render without errors
2. Cross-reference every element against the relevant screenshot(s)
3. Run the app and visually inspect
4. Check the Quality Checklist in `CLAUDE.md`
5. Commit with a clear message: `Phase X: [description of what was built]`

---

## Rule 8: Desktop Adaptation Rules

Since TGTG has no desktop version, follow these rules for adaptation:

- **Max container width:** 480px (simulates mobile-width content on desktop)
- **Center the app container** horizontally on the page
- **Background behind container:** Light gray `#F0F0F0` (or similar neutral)
- **Bottom nav bar:** Fixed to the bottom of the container, not the full browser window
- **Horizontal scroll carousels:** Work the same way with mouse scroll / drag
- **Sticky footer on detail page:** Sticks to the bottom of the container viewport
- **Touch interactions → Mouse interactions:** Tap = click, swipe = scroll/drag

---

## Rule 9: Mock Data Requirements

All data must be realistic and match the TGTG app experience:

- Store names should be real-sounding NYC restaurants/bakeries/grocers
- Prices should be in the $4.99–$6.99 discounted range, with originals $15–$25
- Pickup windows should be realistic time ranges
- Distances should be in miles (0.3 mi – 3.0 mi)
- Ratings should range from 3.5 – 4.8
- Review counts should be realistic (10 – 500+)
- Bag types: "Surprise Bag", "Baked Goods Surprise Bag", "Grocery Surprise Bag", etc.
- Include at least 6-8 stores for discover page sections

---

## Rule 10: Communication Protocol

If something is unclear or a decision needs to be made:

1. **Stop and ask** — don't guess
2. Reference which screenshot or PRD section is unclear
3. Suggest 2-3 options with tradeoffs
4. Wait for confirmation before proceeding

---

## Quick Reference: Current Phase

> **Update this section as you progress:**
>
> - [ ] Phase 1: Project Scaffolding
> - [ ] Phase 2: Discover Page
> - [ ] Phase 3: Store Detail Page
> - [ ] Phase 4: Polish & Integration
