# CLAUDE.md — TooGoodToGo Clone

## ⚠️ MANDATORY: Read this file AND `rules.md` before every task. Do not proceed until both are fully read and understood.

---

## Project Overview

This is a pixel-perfect desktop clone of the **Too Good To Go (TGTG)** mobile app. The original app is mobile-only for customers — this build adapts it for desktop while preserving the exact visual identity, colors, layout patterns, and interactions.

**Repo:** `codingtemple17/toogoodtogo`
**Team:** Jonel (UI clone) & Victor (dietary restriction feature)
**Jonel's branch:** `jonel/ui-clone` (never commit directly to `main`)
**Victor's branch:** his own feature branch (do not touch)

---

## Brand Identity — Match Exactly

### Colors
- **Primary Teal/Dark Green:** `#004C45` (buttons, nav icons active state, Reserve button)
- **Teal Accent:** `#00635B` (logo background, badges)
- **Star/Rating Green:** `#1F8B7E`
- **Rating Bar Green:** `#3BB8A8` (progress bars for ratings)
- **Yellow/Availability Banner:** `#FFF8DC` with `#004C45` text ("5 left")
- **Background:** `#FFFFFF` (white)
- **Card Background:** `#FFFFFF`
- **Light Gray Background:** `#F5F5F5` (section dividers, category pill inactive bg)
- **Text Primary:** `#1A1A1A` (near-black)
- **Text Secondary:** `#6B6B6B` (gray, secondary info)
- **Text Muted:** `#999999` (strikethrough prices)
- **Border/Divider:** `#E8E8E8`
- **Category Pill Active:** `#004C45` bg, `#FFFFFF` text
- **Category Pill Inactive:** `#F5F5F5` bg, `#1A1A1A` text
- **Heart Icon (unfavorited):** `#004C45` outline
- **"Today" Badge:** `#004C45` bg, white text, rounded pill
- **"Popular" / "Local Hero" Badge:** White bg with dark text, rounded, semi-transparent overlay on image

### Typography
- Font family: System font stack matching iOS (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
- Store names: Bold, ~16-18px
- Section headers ("Top picks near you"): Bold, ~20px
- Prices: Discounted bold, original strikethrough in muted gray
- Body text: Regular weight, ~14px

### Logo
- The TGTG logo is the distinctive leaf/heart shape (three overlapping teardrop shapes) in white on teal background
- Use the official logo asset; do not recreate

---

## App Structure — Screens to Build

### Screen 1: Discover Page (Home)
Reference: `IMG_4591.PNG`
- **Top bar:** Location arrow icon + "Current location" + "Court Square, New York" + dropdown chevron
- **Category pills:** Horizontal scrollable row — "All" (active/filled), "Meals", "Bread & pastries", "Groceries", "Flow..." (cut off, implies scroll)
- **Section: "Top picks near you"** with "See all" link
  - Horizontal scrollable card carousel
  - Each card: Food photo, store logo overlay (bottom-left), "Popular" badge (top-left), star rating (top-right), store name, bag type, pickup time + distance, dashed divider line, original price strikethrough + discounted price, heart/favorite icon
- **Section: "Local Heroes"** with "See all" link
  - Same card format but with "Local Hero" badge
- **Bottom navigation bar:** Discover (leaf icon, active), Browse (magnifying glass), Favorites (heart), Profile (person icon)

### Screen 2: Store Detail Page (Top)
Reference: `IMG_4593.PNG`
- **Hero image:** Full-width food photo with gradient overlay at bottom
- **Overlay elements on image:** Back arrow (top-left), share icon (top-right), heart/save icon (top-right), "5 left" badge (green bg, bottom-left), store logo circle + store name (bottom of image area)
- **Below image:**
  - Bag icon + "Surprise Bag"
  - Star icon + "3.7" + "(19)" reviews count
  - Clock icon + "Pick up: 21:00 - 21:30" + "Today" pill badge
- **Address section:** Pin icon + teal-colored address link + "More information about the store" + right chevron
- **Divider**
- **"About this Surprise Bag"** section: description text + "Meal" tag pill
- **"Overall experience"** section: "Based on 19 recent reviews" + large 3.7 star badge
  - Rating bars: Pickup 4.3, Quality 3.9, Variety 3.4 (green progress bars)
- **Sticky footer:** Original price strikethrough + discounted price + "Reserve" button (teal, rounded)

### Screen 3: Store Detail Page (Scrolled — Ratings + Map)
Reference: `IMG_4594.PNG`
- Continues ratings: Quality 3.9, Variety 3.4, Quantity 3.8
- **Directions section:** Pin icon + full address
- **Map embed:** Shows store location with store logo marker
- **"Get directions" button:** Outlined, teal border, rounded
- **Pick-up instructions** (partially visible)
- **Sticky footer** persists

### Screen 4: Store Detail Page (Scrolled — Packaging)
Reference: `IMG_4595.PNG`
- **"Pick-up instructions":** "Show your order in the app to a staff member to pick up your Surprise Bag."
- **"Packaging" section:** Two icon cards side by side
  - Container icon + "Container" + "Provided"
  - Carrier bag icon + "Carrier bag" + "Provided"
- Info banner: "We recommend bringing your own bag."
- **"Ingredients & allergens" section** (expandable, chevron up = open)
- **Sticky footer** persists

### Screen 5: Store Detail Page (Scrolled — Allergens)
Reference: `IMG_4596.PNG`
- **"Ingredients & allergens" expanded:**
  - "We wish we could tell you what exactly will be in your Surprise Bag – but it's always a surprise! The store will fill it with a selection of their unsold items. If you have questions about allergens or specific ingredients, please ask the store."
- Large empty space below (end of content)
- **Sticky footer** persists

---

## Build Phases

### Phase 1: Project Scaffolding
- Initialize React + Vite + Tailwind CSS project
- Set up folder structure (components, pages, assets, data, constants)
- Create color/theme constants file
- Create mock data file (stores, bags, ratings)
- Set up React Router with routes for Discover and Store Detail
- Build bottom navigation bar component

### Phase 2: Discover Page
- Location bar component
- Category filter pills (horizontal scrollable)
- Store card component (reusable)
- "Top picks near you" section with horizontal scroll carousel
- "Local Heroes" section with horizontal scroll carousel
- Wire up navigation from card click → Store Detail page

### Phase 3: Store Detail Page
- Hero image with overlays (back, share, save, badges, store logo)
- Bag info section (type, rating, pickup time)
- Address/location section
- "About this Surprise Bag" section
- Overall experience / ratings section with progress bars
- Directions section with map placeholder
- Pick-up instructions section
- Packaging section
- Ingredients & allergens expandable section
- Sticky footer with price + Reserve button

### Phase 4: Polish & Integration
- Responsive layout adjustments for desktop widths (centered container, max-width)
- Hover states and transitions
- Smooth scrolling for horizontal carousels
- Accessibility: semantic HTML, ARIA labels, keyboard navigation
- Final pixel-perfect review against screenshots

---

## Technical Decisions

- **Framework:** React 18+ with Vite
- **Styling:** Tailwind CSS with custom theme extending TGTG brand colors
- **Routing:** React Router v6
- **State:** React state (useState) — no external state management needed
- **Data:** Mock JSON data (no backend/API)
- **Images:** Placeholder food images via Unsplash or similar; store logos as colored circles with initials (matching app pattern)
- **Icons:** Lucide React for UI icons
- **Deployment:** GitHub Pages

---

## File Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── BottomNav.jsx
│   │   └── LocationBar.jsx
│   ├── discover/
│   │   ├── CategoryPills.jsx
│   │   ├── StoreCard.jsx
│   │   └── StoreSection.jsx
│   └── store-detail/
│       ├── HeroImage.jsx
│       ├── BagInfo.jsx
│       ├── StoreAddress.jsx
│       ├── AboutBag.jsx
│       ├── RatingsSection.jsx
│       ├── DirectionsSection.jsx
│       ├── PickupInstructions.jsx
│       ├── PackagingSection.jsx
│       ├── AllergensSection.jsx
│       └── StickyFooter.jsx
├── pages/
│   ├── DiscoverPage.jsx
│   └── StoreDetailPage.jsx
├── data/
│   └── mockData.js
├── constants/
│   └── theme.js
├── App.jsx
└── main.jsx
```

---

## Git Workflow

1. **Always work on `jonel/ui-clone` branch** — never push to `main`
2. Commit after completing each phase
3. Use clear commit messages: `Phase 1: project scaffolding and folder structure`
4. When ready, open a Pull Request from `jonel/ui-clone` → `main`
5. Victor works on his own branch for the dietary restriction feature
6. Final merge happens after both branches are reviewed

---

## Quality Checklist (Before Each Commit)

- [ ] Colors match TGTG brand exactly (reference color codes above)
- [ ] Typography weights, sizes, and spacing match screenshots
- [ ] Components have proper separation of concerns (no inline handlers)
- [ ] Constants are centralized (no magic numbers/strings in components)
- [ ] Error handling is present where applicable
- [ ] Semantic HTML elements used (nav, main, section, article, button)
- [ ] ARIA labels on interactive elements
- [ ] Code is clean — no console.logs, no commented-out code
