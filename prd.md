# TooGoodToGo - Dietary Restriction Symbols Feature PRD

**Project:** Adding Dietary Restriction Symbols to Surprise Bags  
**Owner:** Jonel and Victor  
**Date:** February 14, 2026

---

## Problem

Too Good To Go's Surprise Bags intentionally hide meal contents, which means users with dietary restrictions — vegans, people with food allergies, those on strict diets — have no way to know if a bag is safe or suitable before purchasing. According to Food Allergy Research & Education (FARE), roughly 33 million Americans have food allergies. Meanwhile, plant-based consumers grew to about 6% of U.S. adults as of recent surveys. These users either risk buying incompatible meals or abandon the app entirely for competitors like CookUnity that surface dietary labels upfront. This creates both a safety concern and a retention gap.

**Background & Dependencies:**

The restaurant/store partners would need to provide dietary information for each Surprise Bag, which means TGTG's partner onboarding flow needs updating. There's a dependency on store compliance — if stores don't label accurately, there's a liability risk. You should also note that TGTG's current data model likely doesn't include dietary metadata per bag, so this requires a schema change on the backend.

---

## Target Use Cases

**Who are your users and what are they trying to do?** Focus on the MOST COMMON use cases, prioritized in order:

1. **As a vegan**, I want to make sure I am not consuming animal products
2. **As a person with allergies**, I want to make sure I am not exposed to anything that will give me a reaction
3. **As a person on a strict diet**, I want to get as much protein with the least carbs so that I can gain muscle mass

---

## Current User Journey

**How do users currently experience this problem?**

1. User opens app
2. User selects one restaurant
3. **→ Problem: User doesn't know if the food they're getting aligns with their restrictions**
4. User goes to CookUnity

---

## Proposed Solution

Labeling the surprise bags with symbols for four common dietary restrictions (vegan, gluten-free, nut-free, dairy-free).

**How it works:** Now the user selects a restaurant. Then they can scroll down the restaurant page and see if the surprise bag is in line with their dietary restrictions. Each restaurant has a recognizable symbol.

---

## Goals & Out-of-Scope

**Goals:**

* User can see if the meal aligns with their dietary restriction
* Reduce user confusion and save time browsing compatible options
* Increase customer base by serving users with dietary needs

**Out-of-Scope:**

* Other dietary symbols or religious restrictions (future work)
* Advanced filtering by multiple restrictions simultaneously (v2)

---

## Measurable Outcomes

**How will you know if this solution is working?**

* **Metric 1 (Adoption):** Percentage of users who apply a dietary filter when browsing. Measured through in-app analytics tracking filter usage. Baseline: 0% (feature doesn't exist yet). Target: 25-30% of active users within 90 days.

* **Metric 2 (Retention):** 30-day retention rate for users with dietary preferences set in their profile, compared against users without preferences set. If current overall 30-day retention is 40%, target: 50%+ for users engaging with dietary filters.

* **Metric 3 (Safety/Trust):** Reduction in negative reviews or support tickets mentioning allergies or dietary issues. Track app store reviews and in-app support tickets containing keywords like "allergy," "vegan," "gluten." Target: 50% reduction in dietary-related complaints within 6 months.

---

## Requirements

Requirements are organized by critical user journeys to help the team understand scope and prioritize must-have vs. nice-to-have functionality.

**Legend:**  
**[P0]** = MVP for GA release  
**[P1]** = Important for delightful experience  
**[P2]** = Nice-to-have

---

### Use Case: Browsing & Filtering by Dietary Restriction

**Context:** Users with dietary restrictions need to quickly identify compatible bags without reading through every listing. This is the core interaction that determines whether the feature delivers value.

**Discovery Step:**

* **[P0]** User can see dietary restriction symbols (vegan, gluten-free, nut-free, dairy-free) displayed on each Surprise Bag listing card. Symbols should be universally recognizable icons, not just text labels.
* **[P1]** User can filter the browse/search view to show only bags matching one or more dietary restrictions.
* **[P2]** User can set dietary preferences in their profile so filters are applied by default.

**Detail View Step:**

* **[P0]** User can see dietary symbols on the Surprise Bag detail page with a disclaimer that accuracy depends on the store's reporting.
* **[P1]** User can tap a symbol to see a brief explanation (e.g., "Nut-Free: This bag does not contain tree nuts or peanuts, as reported by the store").

**Store/Partner Side:**

* **[P0]** Store partners can tag each Surprise Bag with applicable dietary symbols during bag creation.
* **[P1]** Store partners receive guidance on what each dietary label means to ensure consistent tagging.

---

## Appendix

**Design Decisions:**
* TBD

**Open Questions:**
* How do we handle liability if a store mislabels a bag?
* What's the rollback plan if stores don't adopt the labeling system?
* Should we require photo evidence or certification for certain labels (e.g., allergen-free)?

**Links:**
* UX Mocks: [To be added]
* Meeting Notes: [To be added]
* Related PRDs: [To be added]
* Other Resources: [To be added]