# MASTER PLAN: Big Mike Ely Landing Page — $250k Agency-Quality Rebuild

## STATUS: IN PROGRESS
## Current Score: 38/100 → Target: 99/100

---

## CRITICAL CONTEXT
- This is a public-facing landing page for IFBB Pro Big Mike Ely
- Must look like a $250k agency build — not a template, not amateur
- Every pixel, animation, word matters
- Photos uploaded: hero-stage-2025.jpg, hany-rambod, tom-platz, roelly, lifestyle, gym shots, results, gallery
- Missing photos needed: wife, dad (need from user)

---

## PHASE 1: HERO — THE FIRST 3 SECONDS (Highest Impact)

### Current Problems:
- Uses `gallery-most-muscular-stage.jpg` instead of dedicated `hero-stage-2025.jpg`
- Hero text just says "Big Mike Ely" — no emotional hook
- Single CTA button, no subtitle text selling him
- Ken Burns animation is subtle but hero feels flat
- No depth layers or cinematic feel on first load

### Plan:
1. **Switch hero image** to `hero-stage-2025.jpg`
2. **Add powerful subtitle** under name: "2x World Champion. Olympian. The Coach Behind Hundreds of Pro Cards."
3. **Dual CTAs**: "Book a Session" (primary gold) + "See the Results" (ghost/secondary)
4. **Hero gradient redesign**: Deeper cinematic blend — subject visible top 60%, text area bottom 40% with rich dark gradient
5. **Animated gold accent line** that draws across under the name
6. **Staggered load animation**: kicker → name → subtitle → line → CTAs, each with spring physics feel
7. **Floating golden particles** enhanced — more visible, different sizes, slight blur depth of field
8. **Atmospheric orbs** — more pronounced warm gold glow behind subject

---

## PHASE 2: LAYOUT RESTRUCTURE — WHAT MATTERS FIRST

### Current Order (Wrong):
Hero → Trust Bar → Services → About → Results → Gallery → CTA → Contact

### New Order (Correct):
Hero → Inner Circle (Mike + Legends) → The Record (Stats + Results Photos) → Services → Gallery → CTA → Contact

### Why:
- The PEOPLE in Mike's life (Hany Rambod, Tom Platz, Roelly, wife, dad) are the strongest social proof
- Put them RIGHT AFTER the hero — visitors see Mike with bodybuilding LEGENDS immediately
- Services are important but less visually impactful — move down
- Trust bar ("as featured in") can be removed or made subtler — the photos ARE the trust

---

## PHASE 3: "INNER CIRCLE" SECTION (New — Replaces About)

### Design:
- Large cinematic heading: "The Inner Circle" or "Built With Legends"
- Mike's bio paragraph — shorter, punchier, more editorial
- **Photo grid with premium hover effects:**
  - LARGE: Mike with Hany Rambod (the most credibility — Hany coached Jay Cutler, Phil Heath)
  - LARGE: Mike with Tom Platz (The Quadfather — instant bodybuilding credibility)
  - MEDIUM: Mike with Roelly Winklaar
  - MEDIUM: Mike's wife (need photo from user)
  - MEDIUM: Mike's dad (need photo from user)
- Each photo has:
  - Subtle gold border glow on hover
  - Name label that slides up on hover
  - Parallax micro-movement on scroll
  - Premium aspect ratios (not all the same)

### Bio Text (Editorial, punchy):
"Mike Ely didn't learn coaching from a certification course. He learned it from 30 years under the bar, on the stage, and in the trenches with the greatest names in bodybuilding. Two-time IFBB Pro Masters World Champion. Masters Mr. Olympia competitor. NPC Judge. And the coach behind hundreds of pro cards since 1996."

---

## PHASE 4: STATS / RECORD SECTION

### Current Problems:
- Stats repeat in both About and Results sections
- Number cards look generic
- Results photos are small and undifferentiated

### Plan:
- **Massive stat counters** with animated count-up on scroll
- **4 key stats**: "2x" World Champion, "30+" Years, "100s" Pro Cards, "Since 1996"
- Each stat card: dark glass background, gold number, subtle breathing glow
- Below stats: **Results photo grid** — larger photos, staggered grid, gold accent borders
- Each result photo: name overlay, "Pro Card Earned" badge

---

## PHASE 5: SERVICES — PREMIUM CARD REDESIGN

### Current Problems:
- Cards look like every other coaching site template
- SVG icons are generic
- Text descriptions could be stronger

### Plan:
- **Glass morphism cards** with deeper depth
- **Premium scan-line hover effect** (already partially implemented)
- **Larger service icons** with gold gradient fill on hover
- **Rewrite service descriptions** — more editorial, less generic
- **"Signature" badge** on Full Coaching Package more prominent
- **Hover state**: card lifts more dramatically, gold top border glows

---

## PHASE 6: GALLERY — WORLD-CLASS PRESENTATION

### Current Problems:
- All items same size except one "featured"
- Feels like a basic grid, not a curated gallery
- Labels only show on hover (miss the story)

### Plan:
- **Magazine-style masonry layout**: varying sizes create visual rhythm
- **2-3 featured hero images** spanning full width or 2 columns
- **Lazy-loaded with shimmer placeholders** (already implemented)
- **Lightbox**: smoother transitions, swipe on mobile, pinch-to-zoom
- **Category feel**: Competition shots grouped, gym shots grouped, lifestyle grouped
- Always show labels (they tell Mike's story)

---

## PHASE 7: ANIMATIONS & LOADING EXPERIENCE

### Current:
- Brand reveal is nice but could be more dramatic
- Reveal animations are basic fade-up
- No scroll-driven animations

### Plan:
- **Brand reveal**: Add golden particle burst as name appears
- **Section reveals**: Different animation per section type
  - Stats: count up with spring bounce
  - Photos: scale up from center with blur-to-sharp
  - Cards: stagger from left with slight rotation
  - Text: character-by-character or word-by-word for headings
- **Scroll progress indicator**: thin gold line at top of viewport
- **Parallax layers**: hero orbs move at different speeds
- **Gold accent borders**: pulsing glow animation on section dividers

---

## PHASE 8: TYPOGRAPHY & COLOR REFINEMENTS

### Current Issues:
- Font sizes could be more dramatic
- Gold gradient could be richer
- Text contrast needs checking

### Plan:
- **Hero name**: Even larger on desktop (clamp to 140px)
- **Section headings**: More weight variation, tighter letter-spacing
- **Gold gradient**: Add more stops for richer metallic look
- **Body text**: Slightly larger (16px base), better line-height
- **Accent colors**: Ensure gold pops against dark backgrounds
- **Text shadows**: More dramatic on hero, subtle elsewhere

---

## PHASE 9: CONTACT / BOOKING

### Current:
- Simple form that posts to Supabase
- User mentioned wanting Square booking to work without Square

### Plan:
- **Keep Supabase form** (it works, it's simple)
- **Add booking calendar** if Square integration is desired (separate task)
- **Better form styling**: Premium input focus states, animated labels
- **Social proof near form**: "Mike reviews every inquiry personally"
- **Response time badge**: "Typically responds within 24 hours"

---

## PHASE 10: MOBILE EXCELLENCE

### Current:
- Mobile styles exist but could be more polished
- Hero on mobile needs to feel as premium as desktop

### Plan:
- **Mobile hero**: Full bleed photo, text overlay at bottom with glassmorphism
- **Touch interactions**: Smooth swipe for gallery, haptic-feel buttons
- **Bottom CTA bar**: Sticky "Book Now" that appears after scrolling past hero
- **Performance**: Ensure <3s load on 4G

---

## PHOTOS NEEDED FROM USER
1. Mike's wife — high quality photo together
2. Mike's dad — high quality photo together
3. Any additional pro card celebration photos
4. Any photos of Mike with other legends/pros

---

## IMPLEMENTATION ORDER (Priority)
1. Hero image swap + text improvements + animation enhancement
2. Section reorder (Inner Circle up top)
3. Photo grid redesign for Inner Circle
4. Stats section polish
5. Gallery masonry upgrade
6. Service cards premium redesign
7. Animation system overhaul
8. Typography + color refinements
9. Mobile polish
10. Contact/booking enhancement

---

## FILES
- `/home/user/bigmike/index.html` — single file, all CSS + HTML + JS
- `/home/user/bigmike/img/` — all photos
- Total: ~939 lines currently

---

*This plan saved to repo so it survives session limits. Last updated: 2026-04-02*
