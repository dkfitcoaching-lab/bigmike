# MASTER PLAN: Big Mike Ely Landing Page — $250k Agency-Quality Rebuild
# STATUS: BUILDING NOW
# Score Target: 38/100 → 99/100
# Last Updated: 2026-04-02

---

## INSTRUCTIONS FOR ANY SESSION
Read this file + index.html. Then execute. Every detail below is final.
DO NOT TOUCH app.html, portal.html, or book.html — only index.html (public landing page).

---

## PHOTO INVENTORY (Verified — Every Image Visually Confirmed)

### Hero
| File | Description | Use |
|------|------------|-----|
| `hero-stage-2025.jpg` | Mike on stage, CROWN on head, most muscular, world champion moment | **PRIMARY HERO** |

### Inner Circle (People Who Matter)
| File | Description | Use | Crop |
|------|------------|-----|------|
| `about-lifestyle.jpg` | Mike + wife Dejan, matching tropical outfits, poolside | **Wife — featured prominently** | center top |
| `about-hany-rambod.jpg` | Mike backstage with Hany Rambod (coached Jay Cutler, Phil Heath) | **Legend #1** | center center |
| `about-tom-platz.jpg` | Mike with Tom Platz "The Quadfather" | **Legend #2** | center top |
| `about-roelly.jpg` | Mike with Roelly Winklaar, Yamamoto shirts | **Legend #3** | center 35% |

### Mike Solo (Best Shots)
| File | Description | Use | Crop |
|------|------------|-----|------|
| `about-back-gym.jpg` | Back shot in gym — INSANE development, rear lat spread | CTA background / gallery feature | center center |
| `about-gym-olympia.jpg` | Vacuum/abs pose in gym, smiling, Cleveland sign | About section | center top |
| `gallery-gym-recent.jpg` | Full body gym shot, posing | Gallery | center center |
| `gallery-most-muscular-stage.jpg` | Most muscular on stage, dramatic lighting | Gallery feature | center center |
| `gallery-champion-2024.jpg` | Most muscular on stage, trophies visible | Gallery | center 20% |

### Pro Card Results (Coached Athletes)
| File | Description | Use |
|------|------------|-----|
| `results-procard-lindsay.jpg` | Lindsay + Mike holding IFBB PRO CARD sign | Results |
| `results-procard-lindsay-stage.jpg` | Lindsay on stage with pro card, dramatic | Results |
| `results-procard-backstage.jpg` | Mike + athlete backstage, IFBB PRO CARD | Results |
| `results-procard-rob.jpg` | Mike + Rob, Rob holding IFBB PRO CARD | Results |
| `results-procard-ladies.jpg` | Female athlete on stage with medal | Results |
| `results-procard-female.jpg` | Female athlete holding pro card sign with Mike | Results |
| `results-group.jpg` | MASSIVE group photo, ~50+ athletes at gym | Results — social proof |

### Gallery (Competition)
| File | Description |
|------|------------|
| `gallery-back-dbl-bicep.jpg` | Back double bicep |
| `gallery-side-chest-stage.jpg` | Side chest on stage |
| `gallery-most-muscular-crab.jpg` | Crab most muscular |
| `gallery-wings-chicago-2015.jpg` | Wings of Strength Chicago 2015 |
| `gallery-wings-stage.jpg` | Back double bicep on stage |
| `gallery-gym-side-tricep.jpg` | Side tricep in gym |
| `gallery-ferrigno-prep.jpg` | Ferrigno Legacy prep |
| `gallery-muscular-dev-2013.jpg` | Muscular Development 2013 |
| `gallery-posing-clinic.jpg` | Posing clinic |
| `gallery-stage-2014.jpg` | On stage 2014 |
| `gallery-gym-prep-2014.jpg` | Gym prep 2014 |
| `gallery-procard-story.jpg` | Pro card story |
| `gallery-transformation.jpg` | Transformation over years |
| `new-trophy-event.jpg` | EMPTY FILE (0 bytes) — do not use |

---

## CORRECTED FACTS (User-Confirmed)
- **2x Olympian** (competed at Mr. Olympia TWICE — not just "competitor")
- **2024 AND 2025 IFBB Pro Masters World Champion** (back-to-back titles)
- **Hundreds of pro clients** (not just "pro cards" — hundreds of actual pro-level athletes)
- **Center Stage Aesthetics** = Mike + Dejan's coaching business
- **Old School Iron Gym, Ohio** (gym where he trains — Square site has WRONG address)
- **Coaching since 1996** — 30+ years
- **NPC Judge**
- Wife's name: **Dejan** (co-owner of Center Stage Aesthetics)

## SOCIAL LINKS
- Instagram (personal): https://instagram.com/ifbbpromikeely
- Instagram (business): https://instagram.com/center_stage_aesthetics
- Facebook: https://facebook.com/BIGMIKEELY
- Square (reference only): https://big-mike-108395.square.site/

---

## PAGE STRUCTURE (Final Order)

```
1. BRAND REVEAL (3s cinematic intro)
2. NAV (fixed, glass morphism on scroll)
3. HERO (hero-stage-2025.jpg — crowned world champion)
4. INNER CIRCLE (wife + legends + bio — strongest social proof)
5. THE RECORD (stats + pro card results photos)
6. SERVICES (6 premium cards)
7. GALLERY (magazine masonry — competition + gym)
8. CTA (dramatic close with back shot background)
9. CONTACT ("Message Mike" — Supabase form + socials)
10. FOOTER
```

---

## SECTION-BY-SECTION SPECIFICATION

### 1. BRAND REVEAL
- Keep current: "IFBB Pro" kicker → "Big Mike Ely" gold gradient → gold line → "World Champion · Olympian · Coach"
- Enhancement: Add "2x" before World Champion
- Timing: 2.8s display → 1s exit fade
- After exit: hero visible immediately, no flash

### 2. NAV
- Left: BME monogram + "Big Mike Ely"
- Right links: About · Results · Services · Gallery · [Book] (gold CTA button)
- Mobile: hamburger → full-screen overlay menu
- On scroll: glass morphism background, slight shrink, border bottom glow

### 3. HERO
- **Image**: `hero-stage-2025.jpg` (Mike with crown, most muscular, on stage)
- **Position**: `center 15%` (keeps crown and upper body visible)
- **Gradient overlay**: Bottom 45% fades to pure black for text readability
- **Ken Burns**: Subtle 30s scale 1 → 1.08, slight translate
- **Content (bottom-aligned)**:
  - Kicker: `IFBB PRO · 2x OLYMPIAN · 2x WORLD CHAMPION`
  - H1: `BIG` (white) `MIKE` (gold gradient) `ELY` (white) — or just `Big` `Mike` `Ely` with Mike in gold
  - Subtitle: `The coach behind hundreds of pro cards. Back-to-back Masters World Champion. The standard since 1996.`
  - CTAs: "Book a Session" (gold primary) + "See the Results" (ghost secondary → scrolls to results)
- **Animations**: Staggered fade-up with spring easing, 200ms delays between elements
- **Atmospheric**: Gold dust particles floating up, warm orb glow behind subject
- **Gold accent line**: 1px gold gradient line below hero, subtle glow

### 4. INNER CIRCLE (After Hero)
- **Heading**: "The Inner Circle" (or "Built With Legends")
- **Layout**: Bio text left, photo grid right (desktop). Stacked on mobile.
- **Bio text**:
  ```
  Mike Ely didn't learn coaching from a certification course.
  
  He learned it from 30 years under the bar, on the stage, and in the
  trenches with the greatest names in bodybuilding. Two-time IFBB Pro
  Masters World Champion — back to back, 2024 and 2025. Two-time
  Mr. Olympia competitor. NPC Judge. And the coach behind hundreds
  of pro cards since 1996.
  
  He and his wife Dejan run Center Stage Aesthetics out of Old School
  Iron Gym in Ohio — where the standard isn't negotiable.
  ```
- **Credential badges**: IFBB Pro · 2x World Champion · 2x Olympian · NPC Judge · Since 1996
- **Photo grid** (5 photos, masonry):
  - **LARGE** (spans 2 cols): `about-lifestyle.jpg` — Mike + Dejan (wife), label: "Mike & Dejan — Center Stage Aesthetics"
  - **MEDIUM**: `about-hany-rambod.jpg` — label: "With Hany Rambod"
  - **MEDIUM**: `about-tom-platz.jpg` — label: "With Tom Platz — The Quadfather"
  - **MEDIUM**: `about-roelly.jpg` — label: "With Roelly Winklaar" (crop: center 35%)
  - **MEDIUM**: `about-gym-olympia.jpg` — label: "Old School Iron Gym"
- **Photo hover**: Scale 1.03, border glows gold, label fades to full opacity
- **Photo labels**: Always partially visible (opacity 0.7), full on hover

### 5. THE RECORD (Stats + Results)
- **Heading**: "The Record Speaks"
- **4 stat cards** (row):
  - "2x" / "World Champion" (gold animated number)
  - "2x" / "Mr. Olympia"  
  - "100s" / "Pro Cards Coached"
  - "1996" / "Coaching Since" (counter animation)
- **Results photo grid** (below stats):
  - Use ALL 7 results photos
  - Staggered grid, varying sizes
  - Pro card photos get subtle red "IFBB PRO CARD" accent
  - Group photo (`results-group.jpg`) spans full width — shows scale of his operation
  - Each photo: gold bottom border on hover, label always visible

### 6. SERVICES
- **Heading**: "The Arsenal"
- **6 cards**, keep current structure but enhanced:
  1. 1-on-1 Training
  2. Contest Prep
  3. Nutrition Planning
  4. Posing Sessions
  5. Online Coaching
  6. Full Coaching Package (Signature badge)
- Each card: glass morphism, gold scan-line hover, lift on hover
- All "Book →" links go to #contact

### 7. GALLERY
- **Heading**: "Built Over a Lifetime"
- **Magazine masonry**: 
  - Featured (2-col span): `gallery-champion-2024.jpg`, `gallery-most-muscular-stage.jpg`
  - Regular: all other gallery images
  - Labels always visible on mobile, hover on desktop
- **Lightbox**: current system works, keep it

### 8. CTA
- **Background**: `about-back-gym.jpg` (the insane back shot) with heavy dark overlay
- **Quote**: "Iron doesn't care about your excuses. Neither does the stage."
- **Heading**: "Your Move"
- **Button**: "Start the Conversation" → #contact
- **Sub**: "Limited availability · Serious inquiries only"

### 9. CONTACT
- **Heading**: "Message Mike"
- **Subtext**: "Tell Mike about your goals. He reviews every inquiry personally and responds within 24 hours."
- **Form fields**: Name, Email or Phone, Service dropdown, Goals textarea, Submit
- **Form posts to**: Supabase `contact_inquiries` table (already working)
- **Below form**: Instagram buttons for both @ifbbpromikeely and @center_stage_aesthetics
- **Location line**: "Old School Iron Gym · Ohio · Limited Availability"

### 10. FOOTER
- BME monogram
- Quote: "Iron doesn't lie. The stage doesn't lie. The work is the work."
- Links: About · Results · Services · Gallery · Book · Coach Portal (dimmed)
- Social icons: Instagram (personal), Center Stage Aesthetics (star icon), Facebook
- Copyright: © 2026 Big Mike Ely Coaching / Center Stage Aesthetics
- VAT credit: Vermillion Axis Technologies

---

## VISUAL DESIGN SYSTEM

### Colors (Keep Current Gold Theme)
```css
--bg: #030302          /* Near-black background */
--acc: #E0B030         /* Primary gold */
--goldGrad: linear-gradient(135deg, #806014 0%, #9A7018 15%, #C49828 35%, #E8CC70 48%, #F2E4A0 52%, #E0BC50 58%, #C49828 72%, #9A7018 88%, #806014 100%)
```

### Typography
- Display: Cinzel (headings)
- Body: Rajdhani (paragraphs)
- Mono: IBM Plex Mono (labels, badges, small text)

### Animation Principles
- Spring easing: `cubic-bezier(.22, 1, .36, 1)`
- Stagger delays: 100-200ms between siblings
- Reveal: fade-up 36px with 0.9s duration
- Photos: scale from 0.88 with blur-to-sharp
- Numbers: count-up animation with easeOutCubic
- Gold elements: 4s shimmer cycle on gradients
- Parallax: hero content fades on scroll, CTA background has subtle movement

### Responsive Breakpoints
- Mobile: max-width 768px
- Small: max-width 400px
- Tablet: 769px-1023px
- Desktop: 1024px+
- Wide: 1400px+

---

## CRITICAL RULES
1. Single file: ALL CSS + HTML + JS in index.html
2. No frameworks, no build tools — vanilla only
3. All images lazy-loaded except hero
4. Hero image preloaded in <head>
5. Supabase keys stay exactly as they are
6. Theme switching (gold/crimson) stays
7. Service worker (sw.js) untouched
8. PWA manifest untouched
9. Contact form Supabase integration stays exactly as-is
10. DO NOT TOUCH app.html, portal.html, book.html

---

## VALIDATION CHECKLIST (Run After Build)
```bash
# Extract and validate JS
sed -n '/<script>/,/<\/script>/p' index.html | sed '1d;$d' > /tmp/bigmike_js.js && node -c /tmp/bigmike_js.js

# Check line count (target: ~1200-1500 lines)
wc -l index.html

# Verify all images referenced exist
grep -oP 'src="img/[^"]+' index.html | sed 's/src="//' | while read f; do [ -f "$f" ] || echo "MISSING: $f"; done
```

---

*This plan is the source of truth. Any Claude Code session should read this + index.html and execute.*
