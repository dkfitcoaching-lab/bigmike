# Big Mike Ely — Complete Project Plan (Landing Page + Coaching Portal)

## WHO THIS IS FOR
This plan is for a fresh Claude Code session to pick up and execute. Read this entire document before writing a single line of code. The developer will add their own notes before execution begins.

## WHAT THIS IS
A birthday gift and $50K agency engagement for IFBB Pro Big Mike Ely — built by Vermillion Axis Technologies (vermillionaxis.tech). Two deliverables:

1. **Landing page** (`index.html`) — the public-facing website at ifbbprobigmikeely.com
2. **Coaching portal** (`app.html`, ~4400 lines) — Mike's private coaching software (single-file vanilla JS SPA)

Both must be 100/100 on every metric. Zero bugs. Zero errors. Absolute perfection.

**Branch:** `claude/improve-landing-page-ofiCu`
**Live URL:** https://ifbbprobigmikeely.com
**Repo:** `/home/user/bigmike/`

---

## PART 1: LANDING PAGE REBUILD

### Architecture

The current landing page is a single HTML file (~535 lines) with inline CSS/JS. **This is not agency-quality architecture.** The developer wants this built the way a $100M agency would build it for a $50K client. That means a proper modern framework — Astro, Next.js static export, or similar — with components, scoped styles, optimized images, and a build step. The developer will confirm the framework choice before execution.

If staying vanilla for deployment simplicity (GitHub Pages), at minimum: proper file separation (CSS, JS, HTML), image optimization pipeline, and clean architecture.

### Mike's Square Booking URL

Mike's booking runs through Square, linked from his Instagram bio (@ifbbpromikeely). The services on the landing page MUST match exactly what's on his Square booking page. The URL was discussed extensively — the developer has it and will provide it. ALL "Book" links across the entire site (nav, hero, service cards, CTA, footer, mobile menu) must point to this same Square URL. It is NOT book.html — that's a placeholder.

### Hero Section

**The hero currently has way too much text.** It should be exactly:

```
IFBB PRO
BIG MIKE ELY
WORLD CHAMPION

[BOOK A SESSION]   [VIEW SERVICES]
```

That's it. Nothing else. No "Coached by Hany Rambod." No "Pro since 2013." No "Hundreds of pro cards earned." No bullet-separated credential dumps. Mike IS the brand — the hero should hit you with who he is and what to do. All credentials belong in the About section.

- Keep the background image (`hero-stage-2025.jpg`) — it's great
- "IFBB PRO" above the name in small gold text
- "BIG MIKE ELY" large, "MIKE" in gold gradient shimmer
- "WORLD CHAMPION" below the name in small text
- Two CTA buttons: BOOK A SESSION (gold/primary) + VIEW SERVICES (outline/secondary)
- Keep the scroll indicator arrow
- He is an Olympian — that's enough. Don't itemize how many times.

### Services Section

**Current problems:** Redundant "ELITE SERVICES" + "Coaching Services" double header. Service descriptions are way too long, presumptuous, and tell Mike how to run his business. Icons for posing coaching (ankh thing) and online coaching (globe) are terrible. "MOST POPULAR" badge is assumed.

**Rules:**
- ONE section title. "Services" or "Coaching Services" — not both.
- Kill the subtitle paragraph entirely
- Each service card: **service name only, or name + 1 short factual sentence MAX**
- Do NOT describe how Mike runs his coaching. No "learn how to highlight your strengths." No "weekly check-ins, program adjustments, and direct access." Just what the service IS.
- Icons must be masculine and clean — dumbbells, simple geometric shapes. Nothing feminine, nothing that looks like a globe or an ankh.
- Match services to what's actually on Mike's Square booking page
- Remove "MOST POPULAR" badge
- If Square has "Posing Session" — call it that. If it has "Posing Clinic" — call it that. Match exactly.

### About Section

**Current problems:** Opens with a guidance counselor story (weird, unprofessional). Flow jumps around. Credential chips repeat information already in the text. A strip of random bodybuilder names listed as decoration ("Hany Rambod • Tom Platz • Roelly Winklaar • Branch Warren • Derek Lunsford follows") is literally 0/100. Photo is cropped with no legs and has Instagram chrome.

**Fix:**
- Kill the guidance counselor opener entirely
- Write a clean, professional bio. Facts only. No editorial. No "Mike even went on to..." No storytelling. Just credentials and what he does:
  - IFBB Pro since 2013 (earned at NPC Masters Nationals)
  - 2x IFBB Pro Masters World Champion (2024, 2025)
  - Olympian
  - BS Nutritional Science, MS Exercise Science — Bowling Green State University
  - NPC Judge
  - Coached by Hany Rambod (mentioned naturally in bio, not as a headline)
  - Coaches all divisions: bodybuilding, figure, bikini, physique, wellness
  - 30+ athletes coached to IFBB Pro status
  - Training and coaching since 1996
  - "Bodybuilding, figure, bikini, physique, wellness. His programs are built on real science, refined by decades of competition, and custom to every athlete." — this line is GOOD, keep it
- The **three stat emblems** (2x World Champion / 30+ Years / Thousands Athletes Coached) are GOOD — keep those
- Kill the credential chips (redundant with stats above)
- Kill the legends strip entirely
- Replace photo with `gallery-gym-recent.jpg` — full body, recent, shows current Mike with great conditioning. NOT the cropped IG-chrome shot currently there.

### Results Section

**Current problems:** "The Track Record" + "The Numbers" double header again. Number cards use vague "Hundreds" for unverified claims. Results liner copy doesn't match the photos shown (talks about "first-time competitors" but shows all pro cards). Photo labels are generic/repetitive.

**Fix:**
- Single section title
- Use real verifiable numbers: 30+ Pro Cards, 2x World Champion, Olympian, Since 1996
- Copy must match photos. If showing pro cards, talk about pro cards.
- Photo labels should be specific where possible (athlete names, events)
- Replace `results-procard-rob.jpg` (has IG chrome) with `results-procard-lindsay.jpg` (clean)
- Add `results-procard-lindsay-stage.jpg` (Lindsay on stage earning her card)

### CTA Section

- Kill "Done With Guesswork?" — corny
- Kill "Free initial consultation • No commitment required" — don't promise what Mike hasn't confirmed
- Clean CTA with just the BOOK YOUR SESSION button. Background image stays.

### Footer

- Fine as-is. Ensure all Book links go to Square URL.
- VAT badge stays.

### Meta / SEO

- Kill "Coached by Hany Rambod" from meta description
- Meta description: "IFBB Pro Big Mike Ely — 2x Masters World Champion. Olympian. Elite bodybuilding coaching. Book a session today."
- OG title: "IFBB Pro Big Mike Ely | World Champion"

### Copy Rules (CRITICAL — apply everywhere)

1. **No editorial commentary.** No "who lives it," no "every calorie has a purpose," no "the complete championship blueprint." Just facts.
2. **No assuming how Mike runs his business.** Don't describe his coaching process.
3. **No name-dropping as decoration.** Hany Rambod is mentioned in the bio as context. Tom Platz, Roelly, etc. go in photo alt text only.
4. **No redundant headers.** One title per section.
5. **No corny motivational copy.** No "Done with guesswork?" No "Your Move." No "Just results."
6. **Verify every fact.** If you can't verify it, don't include it.
7. **Not corny is more important than clever.** Professional, clean, factual.

---

## PART 2: COACHING PORTAL (app.html)

The coaching portal at `/home/user/bigmike/app.html` is a ~4400 line single-file vanilla JS SPA. It uses localStorage for persistence with optional Supabase cloud sync. This is Mike's private tool — he uses it daily. **It must be absolutely perfect. Zero bugs. Every button works. Every view is logically architected.**

### Critical Requirements

1. **Full bug audit:** Every single clickable element on every single view must work perfectly. Mike has complained about small bugs, missing backspace handling, things not logically placed, nonsensical flows. Test EVERY button, EVERY input, EVERY navigation path. Zero tolerance for errors.

2. **PDF output:** Program builder generates PDFs. These must be properly color-coded, correct text sizes, with logos. The PDF output must look professional and match the app's visual quality.

3. **Photo/Video Gallery Upload:** Mike needs the ability to upload photos and videos to his website's gallery directly from his coaching portal. When he taps an icon, it should show options (photo library, files, camera) and let him upload media that appears on the public gallery section of the landing page. This requires Supabase Storage integration.

4. **Full website control from portal:** Mike should be able to control the entire website and platform UI from his portal. This includes:
   - **Independent theme control:** Mike can set one theme for the public website (e.g., crimson) and a different theme for his internal portal (e.g., gold). These are independent settings.
   - Site content management capabilities from the portal

5. **Cancellation Policy:** Mike's actual policy must be reflected in the scheduling/booking section:
   - Payments due day before to secure session
   - Cancel after 8PM = full charge
   - Cancel before 8PM = $10 fee
   - 48+ hours notice = no charge

6. **Render chain integrity:** `renderNutrition()` → checks `_editProgram` → `_editWorkout` → `_editMealPlan` in order. The program builder checks `_editWorkout` and `_editMealPlan` BEFORE rendering sections. Do not break this.

7. **Modal scroll:** `showModal` handles all scrolling. Do NOT add `max-height` + `overflow-y:auto` to content inside modals — it breaks iOS.

8. **iOS keyboard:** `focusout` listener resets scroll position after keyboard dismiss. Don't break this.

### Key Data Structures (in app.html)
- `clients` — array of client objects (localStorage key: `fm_clients`)
- `sessions` — session logs
- `schedule` — scheduled sessions with reminders
- `mealPlans` — meal plans referencing FOOD_DB
- `_programs` — program builder data
- `_workouts` — workout templates
- Client fields: `anabolics[]`, `peptides[]`, `fatloss[]`, `supplements[]`, `water{}`, `program{}`

### Birthday System
- `_bdayExpiry=1773936000000` — hard deadline ~March 19, 2026 16:00 UTC
- Gift wrap + popup auto-disappears after this timestamp
- DO NOT modify the birthday message text

---

## PART 3: PHOTOS INVENTORY

### 30 photos in `/home/user/bigmike/img/`:

**New photos (this session):**
| File | Description |
|------|-------------|
| `gallery-back-dbl-bicep.jpg` | Back double bicep, Muscular Development 2013 |
| `gallery-side-chest-stage.jpg` | Side chest, Muscular Development 2013 |
| `about-back-gym.jpg` | Rear lat spread, gym, 2023 Olympia prep |
| `about-tom-platz.jpg` | Mike with Tom Platz, Pittsburgh Jul 2022 |
| `about-lifestyle.jpg` | Mike and wife poolside |
| `gallery-gym-recent.jpg` | Gym pose, bald Mike, recent (#4 on trunks) |
| `gallery-most-muscular-stage.jpg` | Most muscular on stage |
| `about-hany-rambod.jpg` | Mike with Hany Rambod backstage |
| `gallery-most-muscular-crab.jpg` | Most muscular crab pose, stage (early career, has hair) |
| `gallery-wings-chicago-2015.jpg` | Back double bicep, Wings of Strength Chicago Pro 2015 |
| `gallery-gym-side-tricep.jpg` | Side tricep gym, vintage filter |
| `results-procard-lindsay-stage.jpg` | Lindsay earning IFBB Pro Card on stage (#55) |
| `results-procard-lindsay.jpg` | Mike with Lindsay backstage, Pro Card |

**Existing photos:**
| File | Description | Status |
|------|-------------|--------|
| `hero-stage-2025.jpg` | Front pose with crown | GOOD — hero background |
| `about-gym-olympia.jpg` | Gym shot | BAD — has IG chrome, needs replacement |
| `about-roelly.jpg` | Mike with Roelly Winklaar | GOOD |
| `gallery-champion-2024.jpg` | 2024 Masters World Champion | GOOD |
| `gallery-ferrigno-prep.jpg` | Ferrigno Legacy prep 2015 | GOOD |
| `gallery-muscular-dev-2013.jpg` | Muscular Development 2013 | GOOD |
| `gallery-posing-clinic.jpg` | Posing clinic flyer | GOOD |
| `gallery-procard-story.jpg` | Transformation/pro card story | GOOD |
| `gallery-stage-2014.jpg` | Stage 2014 | GOOD |
| `gallery-transformation.jpg` | Before/after transformation | GOOD |
| `gallery-wings-stage.jpg` | Back double on stage | GOOD |
| `gallery-gym-prep-2014.jpg` | Gym prep 2014 | GOOD |
| `results-group.jpg` | Group photo at Old School Iron Gym | GOOD |
| `results-procard-backstage.jpg` | Pro card backstage | GOOD |
| `results-procard-female.jpg` | Female athlete pro card | GOOD |
| `results-procard-ladies.jpg` | Figure ladies | GOOD |
| `results-procard-rob.jpg` | Rob's pro card | BAD — has IG chrome |

---

## PART 4: CREDENTIALS & INTEGRATIONS

### Supabase
- URL: `https://sjwosrwfoubvqpzmxhoe.supabase.co`
- Anon key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqd29zcndmb3VidnFwem14aG9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5OTgzMDMsImV4cCI6MjA5MDU3NDMwM30.iPPJrXX8igS8ymskqRZmkTAP7_okd3XHIeaCcrDlXPo`
- Pre-populated as defaults in app.html Settings

### Twilio SMS (Edge Function)
- Edge function code: `/home/user/bigmike/supabase/functions/send-sms/index.ts`
- Twilio phone: `+18663293169`
- Coach phone: `+14403093886`
- Deploy commands (developer runs locally):
```
npx supabase login
npx supabase link --project-ref sjwosrwfoubvqpzmxhoe
npx supabase functions deploy send-sms
npx supabase secrets set TWILIO_ACCOUNT_SID=AC91e7082ee2... TWILIO_AUTH_TOKEN=c0c223e3de58e... TWILIO_PHONE_NUMBER=+18663293169
```

---

## PART 5: MIKE'S VERIFIED FACTS (use ONLY these)

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

**If a fact is not in this table, do not put it on the site.**

---

## VERIFICATION CHECKLIST (before pushing to main)

### Landing Page
- [ ] Every fact cross-referenced against verified table above
- [ ] Every photo has correct alt text
- [ ] All "Book" links go to Square URL
- [ ] Services match Square exactly
- [ ] No IG chrome visible in any photo
- [ ] Mobile: every section correct at 375px
- [ ] Performance: Lighthouse 95+ all metrics
- [ ] No dead CSS/JS/image references
- [ ] Hero is exactly: IFBB PRO / BIG MIKE ELY / WORLD CHAMPION
- [ ] No corny copy anywhere

### Coaching Portal
- [ ] Every button on every view tested and working
- [ ] PDF output: color-coded, proper text sizes, logos
- [ ] Photo gallery upload functional (Supabase Storage)
- [ ] Independent theme control (website vs portal)
- [ ] Cancellation policy in scheduling section
- [ ] JS syntax check passes: `sed -n '/<script>/,/<\/script>/p' app.html | sed '1d;$d' > /tmp/bigmike_js.js && node -c /tmp/bigmike_js.js`
- [ ] Render chain intact (renderNutrition → renderProgramBuilder → sub-editors)
- [ ] No iOS modal scroll issues
- [ ] No iOS keyboard issues

### Final
- [ ] Push to `claude/improve-landing-page-ofiCu`
- [ ] Merge to `main`
- [ ] Live site verified at ifbbprobigmikeely.com
