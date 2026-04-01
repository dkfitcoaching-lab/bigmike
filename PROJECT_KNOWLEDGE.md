# PROJECT KNOWLEDGE — Big Mike Ely Coaching Platform
## READ THIS ENTIRE FILE BEFORE WRITING A SINGLE LINE OF CODE.

---

## THE STAKES

This is a $50,000+ engagement for Vermillion Axis Technologies (vermillionaxis.tech), a $2B agency. The client is an anonymous donor who hired the agency to build a world-class platform for IFBB Pro Big Mike Ely as a gift. Mike is someone who has given 30 years of his life coaching others — often for free — and this is being built to honor that. The developer behind this project owes their career to Mike.

**Quality standard:** Look at vermillionaxis.tech. That is the LOW END of baseline. This build must exceed it. 100/100 on every metric. Zero bugs. Zero errors. Absolute perfection. Treat this like a $50M agency contract where your reputation is on the line.

**The developer's exact words:** "I want you to treat this like it's a multimillion dollar attention to detail type of build where you have to just ensure that everything is beautifully laid out everything is flawless aesthetically font size lighting details polish audit it's constantly checking your work ensuring every single possible thing viewing it from every single possible way ensuring that everything is perfected."

---

## TWO DELIVERABLES

### 1. Landing Page (Astro framework — `site/`)
**Status: Phase 1 COMPLETE.** Astro 4 component build with scoped styles, all content fixes applied. Build output deployed to root `index.html` + `_assets/`.

### 2. Coaching Portal (`app.html`, ~4400 lines)
**Status: NOT STARTED.** Single-file vanilla JS SPA. Stays as-is architecturally. Needs full bug audit, PDF fixes, gallery upload, independent theme control, cancellation policy.

---

## WHO IS MIKE ELY

| Fact | Source |
|------|--------|
| IFBB Pro Card — 2013 NPC Masters Nationals (Super-Heavyweight, Over 40) | NPC News Online |
| 2x IFBB Pro Masters World Champion (2024, 2025) | Instagram, NPC News Online |
| Olympian (Masters Mr. Olympia) | Instagram bio |
| 1st — 2019 IFBB Baltimore Classic Masters Pro | NPC News Online |
| 2nd — 2022 IFBB Masters World Pro | NPC News Online |
| 14th — 2015 Wings of Strength Chicago Pro | NPC News Online |
| 14th — 2015 IFBB Ferrigno Legacy Pro | NPC News Online |
| BS Nutritional Science — BGSU | Old School Iron |
| MS Exercise Science — BGSU | Old School Iron |
| NPC Judge | Site |
| Coached by Hany Rambod | Photos, Instagram |
| Training/coaching since 1996 | Old School Iron |
| 30+ clients to IFBB Pro status | Facebook |
| 40+ clients with 100lb+ weight loss | Old School Iron |
| Center Stage Aesthetics / Old School Iron Gym, Brook Park | Instagram |
| All divisions: bodybuilding, figure, bikini, physique, wellness | Facebook |

**IF A FACT IS NOT IN THIS TABLE, DO NOT PUT IT ON THE SITE.**

---

## COPY RULES (ENFORCED EVERYWHERE)

1. **No editorial commentary.** No "who lives it," no "every calorie has a purpose," no "the complete championship blueprint."
2. **No assuming how Mike runs his business.** Don't describe his coaching process or promise things he hasn't confirmed.
3. **No name-dropping as decoration.** Hany Rambod is mentioned in the bio as context. Tom Platz, Roelly, etc. go in photo alt text only.
4. **No redundant headers.** One title per section. Never "Elite Services" + "Coaching Services."
5. **No corny motivational copy.** No "Done with guesswork?" No "Your Move." No "Just results." No guidance counselor stories.
6. **Verify every fact.** If it's not in the table above, don't include it.
7. **"Not corny is more important than clever."** Professional, clean, factual.
8. **Don't tell Mike how to run his business.** "No shit it's fully remote" — don't state the obvious about his services.

---

## CREDENTIALS & INTEGRATIONS

- **Square Booking URL:** `https://big-mike-108395.square.site/` — ALL "Book" links point here
- **Supabase URL:** `https://sjwosrwfoubvqpzmxhoe.supabase.co`
- **Supabase Anon Key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqd29zcndmb3VidnFwem14aG9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5OTgzMDMsImV4cCI6MjA5MDU3NDMwM30.iPPJrXX8igS8ymskqRZmkTAP7_okd3XHIeaCcrDlXPo`
- **Coach Phone:** `+14403093886`
- **Twilio Phone:** `+18663293169`
- **Live URL:** ifbbprobigmikeely.com
- **Branch:** `claude/improve-landing-page-ofiCu`
- **Agency Site:** vermillionaxis.tech (quality reference)

---

## LANDING PAGE ARCHITECTURE

```
site/
├── astro.config.mjs          # Static output, builds to ../dist/
├── package.json               # Astro 4.x
├── tsconfig.json
├── public/                    # Symlinks to repo root assets
│   ├── img -> ../../img
│   ├── icons -> ../../icons
│   └── ... (symlinks to app.html, manifest.json, etc.)
└── src/
    ├── layouts/BaseLayout.astro   # HTML shell, meta, fonts, theme init
    ├── pages/index.astro          # Composes all section components
    ├── components/
    │   ├── Nav.astro              # Fixed nav + mobile menu
    │   ├── Hero.astro             # IFBB PRO / BIG MIKE ELY / WORLD CHAMPION
    │   ├── Services.astro         # 6 service cards → Square booking
    │   ├── About.astro            # Facts-only bio, 3 stat emblems, gym photo
    │   ├── Results.astro          # Verified numbers + pro card photos
    │   ├── Gallery.astro          # 12-photo grid with show dates
    │   ├── CTA.astro              # Clean booking CTA
    │   ├── Footer.astro           # Links, social, VAT badge
    │   └── RevealObserver.astro   # Scroll-triggered stagger animations
    └── styles/global.css          # CSS variables, reset, shared section styles
```

**To build:** `cd site && npm install && npx astro build`
**Output:** `dist/` → copy `dist/index.html` to root `index.html`, copy `dist/_assets/` to root `_assets/`
**Deploy:** GitHub Pages serves from repo root on push to `main`

---

## COACHING PORTAL REQUIREMENTS (app.html — NOT YET DONE)

### 1. Full Bug Audit
Every single clickable element on every single view must work perfectly. Mike complains about small bugs, missing backspace handling, things illogically placed. Test EVERY button, EVERY input, EVERY navigation path.

### 2. PDF Output
Program builder generates PDFs. Must be properly color-coded, correct text sizes, with logos. Must look professional.

### 3. Photo/Video Gallery Upload
Mike uploads photos/videos from his portal to the website gallery. Supabase Storage integration. Tap icon → photo library picker → upload → appears on public gallery.

### 4. Independent Theme Control
Mike can set crimson for the website and gold for his portal, or vice versa. Two separate theme settings:
- `bm_website_theme` — controls public landing page
- `bm_portal_theme` — controls coaching portal
The landing page already reads `bm_website_theme` first (see BaseLayout.astro).

### 5. Cancellation Policy (in scheduling section)
- Payments due day before to secure session
- Cancel after 8PM = full charge
- Cancel before 8PM = $10 fee
- 48+ hours notice = no charge

### 6. Website Content Management from Portal
Mike should be able to control the website from his portal.

### 7. Technical Constraints
- Render chain: `renderNutrition()` → `_editProgram` → `_editWorkout` → `_editMealPlan`
- `showModal` handles scrolling — NO `max-height` + `overflow-y:auto` inside modals (breaks iOS)
- `focusout` listener resets scroll position after iOS keyboard dismiss
- Birthday system: `_bdayExpiry=1773936000000` — DO NOT modify birthday message text
- JS validation: `sed -n '/<script>/,/<\/script>/p' app.html | sed '1d;$d' > /tmp/bigmike_js.js && node -c /tmp/bigmike_js.js`

---

## PHOTOS INVENTORY (31 files in `/home/user/bigmike/img/`)

All committed and pushed. Key notes:
- `about-gym-olympia.jpg` — BAD, has IG chrome, needs replacement
- `results-procard-rob.jpg` — BAD, has IG chrome (replaced in Results section with Lindsay photos)
- `gallery-gym-recent.jpg` — used as About section photo (full body, recent, bald Mike)
- `hero-stage-2025.jpg` — hero background, keep it
- `about-hany-rambod.jpg` — Mike with Hany Rambod backstage 2014
- `about-tom-platz.jpg` — Mike with Tom Platz, Pittsburgh 2022
- `results-procard-lindsay.jpg` — Mike with Lindsay backstage
- `results-procard-lindsay-stage.jpg` — Lindsay on stage earning pro card

---

## WHAT THE DEVELOPER EXPLICITLY REJECTED

1. "Coached by Hany Rambod" in the hero — "sounds like he's a fanboy"
2. Guidance counselor opener in About — "extremely weird"
3. Legends strip listing names — "literally zero out of 100"
4. Editorial service descriptions — "don't assume how he runs his coaching"
5. Globe/ankh icons for posing/online coaching — "horrendous and the gayest thing ever"
6. "MOST POPULAR" badge — assumed, not confirmed by Mike
7. "Done With Guesswork?" CTA — corny
8. "Free initial consultation" — don't promise what Mike hasn't confirmed
9. "Hundreds" as a stat value — unverified, use "30+" for pro cards
10. Cropped photos missing legs — "looks like trash"
11. Vanilla HTML architecture — "Are you aware that this is a $50,000 website why the fuck are you building an HTML"

---

## WHAT THE DEVELOPER APPROVED

1. Hero background photo (`hero-stage-2025.jpg`) — "really cool"
2. Three stat emblems (2x World Champion / 30+ Years / Thousands Athletes Coached) — "the only part I actually think have a reason to be in their own little sort of emblems"
3. "Bodybuilding, figure, bikini, physique, wellness. His programs are built on real science, refined by decades of competition, and custom to every athlete." — KEEP THIS LINE
4. VAT badge in footer
5. The overall dark aesthetic with gold accents

---

## SESSION HISTORY

### Session 1 (7+ hours, ran out of context)
- Photo extraction pipeline built (31 photos from conversation JSONL)
- Supabase/Twilio integration set up
- App.html settings fixes (removed settings tab, pre-populated credentials)
- LANDING_PAGE_REBUILD_PLAN.md written (297 lines)
- Extensive section-by-section design review with developer feedback
- Inline HTML content fixes (hero, services, meta, Square links)

### Session 2 (current)
- Recovered full conversation transcript from JSONL
- Astro 4 framework build completed
- 9 components + layout + global styles + page
- All content fixes from plan applied
- Build output deployed to root for GitHub Pages
- This PROJECT_KNOWLEDGE.md document created

### What a session that opened in between did
- Spent over an hour and $200 of tokens
- Made zero commits
- Did not read LANDING_PAGE_REBUILD_PLAN.md
- Apparently worked on PDF section of app.html but saved nothing
- Complete waste — developer is furious about this

---

## NEXT STEPS (in priority order)

1. **app.html full bug audit** — every button, every view, every input
2. **PDF output fixes** — colors, text sizes, logos
3. **Photo gallery upload** — Supabase Storage integration in portal
4. **Independent theme control** — website vs portal themes
5. **Cancellation policy** — add to scheduling section
6. **Website management from portal** — content control
7. **Final QA** — Lighthouse audit, mobile testing, all links verified
8. **Merge to main** — deploy live to ifbbprobigmikeely.com
