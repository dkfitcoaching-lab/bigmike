# Big Mike Ely Landing Page — Complete Rebuild Plan

## Context
This is a $50K agency-quality landing page for IFBB Pro Big Mike Ely, built by Vermillion Axis Technologies. The current build is a single-file vanilla HTML page at `/home/user/bigmike/index.html` (~535 lines). The client (developer) has reviewed every section on mobile and identified critical issues with copy, architecture, photo usage, service accuracy, and overall professionalism. This plan documents every issue and the exact fix required.

**Quality bar:** Match or exceed the sophistication of vermillionaxis.tech. Every metric — visual, performance, accessibility, SEO, copy accuracy, architecture — must score 100/100.

**Branch:** `claude/improve-landing-page-ofiCu`
**Live URL:** https://ifbbprobigmikeely.com
**Coaching app:** `/home/user/bigmike/app.html` (separate, do not touch in this plan)

---

## ARCHITECTURE DECISION

The current build is a single HTML file with inline CSS and JS. This is not agency-quality. The rebuild should use a proper modern stack:

**Recommended:** Astro or Next.js static export — component-based, optimized images, scoped styles, deployed as static HTML. If staying vanilla for simplicity/speed of deployment (GitHub Pages), at minimum split into proper file structure with build step for optimization.

**Developer to decide:** Framework choice before execution begins. The plan below is architecture-agnostic — it defines WHAT needs to exist regardless of HOW it's built.

---

## MIKE'S VERIFIED CREDENTIALS (use ONLY these facts)

| Fact | Source |
|------|--------|
| IFBB Pro Card earned at **2013 NPC Teen/Collegiate/Masters Nationals** (Super-Heavyweight, Over 40) | NPC News Online, USAMuscle |
| **2x IFBB Pro Masters World Champion** (2024, 2025) | Instagram bio, NPC News Online |
| **2x Olympian** (2023 Masters Olympia 12th, plus one more) | Instagram bio |
| 1st Place — 2019 IFBB Baltimore Classic Masters Pro | NPC News Online |
| 2nd Place — 2022 IFBB Masters World Pro | NPC News Online |
| 14th — 2015 IFBB Wings of Strength Chicago Pro | NPC News Online |
| 14th — 2015 IFBB Ferrigno Legacy Pro | NPC News Online |
| BS Nutritional Science — Bowling Green State University | Old School Iron, Facebook |
| MS Exercise Science — Bowling Green State University | Old School Iron, Facebook |
| NPC Judge | Current site |
| Coached by Hany Rambod (Pro Creator) | Instagram, photos |
| Personal trainer/coach since 1996 | Old School Iron |
| 30+ clients to IFBB Pro status | Facebook |
| 40+ clients with 100lb+ weight loss | Old School Iron |
| Associated with Center Stage Aesthetics / Old School Iron Gym | Instagram |
| Coaches all divisions: bodybuilding, figure, bikini, physique, wellness | Facebook |

**DO NOT fabricate or assume any facts not listed above. If unsure, leave it out.**

---

## MIKE'S ACTUAL SERVICES (from Square booking — developer to confirm)

The services section MUST match what Mike actually offers on his Square booking page linked from Instagram. The developer needs to provide the Square URL or confirm these services:

**Known from research:**
- 1-on-1 Training
- Contest Prep
- Posing Sessions / Posing Clinics
- Online Coaching
- Nutrition Planning
- Full Coaching Package (training + nutrition + everything)

**CRITICAL:** Do NOT assume how Mike runs any service. Keep descriptions factual and service-oriented only. No commentary. No "learn how to highlight your strengths" type copy. Just: what it is, that's it.

**Developer action required:** Provide Mike's Square booking link so services can be verified and matched exactly.

---

## SECTION-BY-SECTION FIXES

### 1. HERO (lines 247-266)

**Current problems:**
- "IFBB PRO • 2x WORLD CHAMPION • 2x OLYMPIAN" — too much crammed into one line
- "Coached by Hany Rambod • Pro since 2013 • Hundreds of pro cards earned" — makes Mike sound like a fanboy, unprofessional
- All credential dumping belongs in About, not Hero

**Fix — Hero should be exactly:**
```
IFBB PRO
BIG MIKE ELY
WORLD CHAMPION

[BOOK A SESSION]   [VIEW SERVICES]
```

- Kill `hero-badge` with the bullet-separated credentials line
- Kill `hero-proof` line entirely
- Above the name: just "IFBB PRO" in small gold text
- The name: "BIG MIKE ELY" large, "MIKE" in gold gradient
- Below the name: just "WORLD CHAMPION" in small text
- Keep both CTA buttons
- Keep the background image (hero-stage-2025.jpg) — it's good
- Keep the scroll indicator arrow

### 2. SERVICES (lines 270-313)

**Current problems:**
- "ELITE SERVICES" + "Coaching Services" = redundant double header
- Subtitle paragraph is commentary, not needed
- Service card descriptions are too long and presumptuous — telling Mike how to run his business
- Icons for posing (ankh thing) and online coaching (globe) are terrible
- Missing services that may be on his actual Square page
- "MOST POPULAR" badge on Full Coaching Package — don't assume this

**Fix:**
- Single section title only. Either "Services" or "Coaching Services" — not both
- Kill the subtitle paragraph entirely
- Each service card: **Service name + 1 short factual sentence MAX** (or just the name alone)
- Example: "1-on-1 Training" with "In-person sessions at Old School Iron Gym, Brook Park." or just "1-on-1 Training" alone
- Replace all icons with masculine, clean SVGs — dumbbells, shield, simple geometric. Nothing that looks like an ankh or a globe
- Match services to Square booking exactly
- Remove "MOST POPULAR" badge unless Mike confirms
- "BOOK →" links should all go to Mike's actual Square booking URL (not book.html placeholder)

### 3. ABOUT (lines 317-355)

**Current problems:**
- Opens with guidance counselor story — weird, unprofessional, out of nowhere
- Flow jumps around: guidance counselor → nationals → titles → degrees → coaching
- Credential chips (2x World Champion, 2x Olympian, IFBB Pro, etc.) are redundant with the text above them
- "Hany Rambod • Tom Platz • Roelly Winklaar • Branch Warren • Derek Lunsford follows" — listing random names is 0/100, terrible
- Photo is cropped badly (no lower body)
- Photo has IG chrome (about-gym-olympia.jpg)

**Fix:**
- Kill the guidance counselor opener
- Write a clean professional bio — facts only, no editorial commentary:
  - IFBB Pro since 2013 (NPC Masters Nationals)
  - 2x IFBB Pro Masters World Champion (2024, 2025)
  - 2x Olympian
  - BS Nutritional Science, MS Exercise Science — BGSU
  - NPC Judge
  - Coaches all divisions
  - 30+ athletes to IFBB Pro status
  - Training/coaching since 1996
- The three stat emblems below are GOOD — keep those (2x World Champion, 30+ Years, Thousands Athletes)
- Kill the credential chips — they repeat the stats above
- Kill the legends strip entirely (the name-dropping line)
- Replace photo with `gallery-gym-recent.jpg` (full body, recent, bald Mike in gym) — this shows current Mike, great conditioning, full body visible
- Move Hany Rambod mention to a natural place in the bio text — "Earned his IFBB Pro card in 2013, coached by Hany Rambod" — as context, not a headline

### 4. RESULTS / TRACK RECORD (lines 359-400)

**Current problems:**
- "The Track Record" + "The Numbers" = redundant again
- Number cards say "Hundreds" for pro cards and competition wins — unverified, vague
- "Every Division / Bikini to Bodybuilding" — doesn't need its own card
- Results liner text: "From first-time competitors to national champions..." doesn't match the photos (all pro cards and posing clinics shown)
- Photos below are good but labels are generic/repetitive ("IFBB Pro Card Earned" x3)

**Fix:**
- Single section title
- Number cards should use real verifiable numbers where possible:
  - "30+" Pro Cards Earned (verified)
  - "2x" World Champion
  - "2x" Olympian
  - "Since 1996" or "30+" Years Coaching
- Results liner should match the photos shown — if showing pro cards, talk about pro cards
- Photo labels should be specific: athlete name if known, or the event
- Replace `results-procard-rob.jpg` (has IG chrome) with a clean version — use `results-procard-lindsay.jpg` (Mike & Lindsay with pro card) which is clean
- Add new photos: Lindsay on stage with card, group photo stays

### 5. CTA SECTION (lines 404-413)

**Current problems:**
- "Done With Guesswork?" — corny
- "Free initial consultation • No commitment required" — don't promise things that may not be true

**Fix:**
- Clean CTA: "Ready to Start?" or just the Book button with no headline fluff
- Remove trust line unless Mike confirms he offers free consultations
- Keep background image (about-back-gym.jpg) — it works
- Keep the BOOK YOUR SESSION button

### 6. FOOTER (lines 416-450)

**Current problems:** Mostly fine. Minor issues:
- "Coach Login" link at opacity .4 is fine
- VAT badge is good

**Fix:**
- Keep as-is, just ensure all links work
- Book link should go to Square URL

### 7. NAVIGATION

**Current:** Fine structurally. Mobile menu was already fixed.

**Fix:**
- Ensure "Book a Session" links to actual Square booking URL everywhere
- Nav CTA, mobile menu CTA, all service card "Book →" links, hero buttons, CTA section button — ALL must go to the same Square booking URL

### 8. META / SEO

**Current problems:**
- Meta description still says "Coached by Hany Rambod" as a lead credential
- OG description similar

**Fix:**
- Meta description: "IFBB Pro Big Mike Ely — 2x Masters World Champion, 2x Olympian. Elite bodybuilding coaching for every division. Book a session today."
- OG title: "IFBB Pro Big Mike Ely | World Champion"
- Keep OG image (hero shot)

---

## PHOTOS INVENTORY (30 files in /home/user/bigmike/img/)

### New photos from this session (saved and pushed):
| File | Description | Use |
|------|-------------|-----|
| `gallery-back-dbl-bicep.jpg` | Back double bicep, Muscular Development 2013 | Gallery or background |
| `gallery-side-chest-stage.jpg` | Side chest, Muscular Development 2013 | Gallery or background |
| `about-back-gym.jpg` | Rear lat spread, gym, 2023 Olympia prep | CTA background (already used) |
| `about-tom-platz.jpg` | Mike with Tom Platz, Pittsburgh Jul 2022 | About section or gallery |
| `about-lifestyle.jpg` | Mike and wife poolside | About section |
| `gallery-gym-recent.jpg` | Gym pose, recent/bald, Cleveland | About section photo (replace current) |
| `gallery-most-muscular-stage.jpg` | Most muscular on stage | Gallery or hero candidate |
| `about-hany-rambod.jpg` | Mike with Hany Rambod backstage, 2014 pro card show | About section |
| `gallery-most-muscular-crab.jpg` | Most muscular crab pose, stage | Gallery |
| `gallery-wings-chicago-2015.jpg` | Back double bicep, Wings of Strength Chicago Pro 2015 | Gallery |
| `gallery-gym-side-tricep.jpg` | Side tricep gym, vintage filter | Gallery or background |
| `results-procard-lindsay-stage.jpg` | Lindsay earning IFBB Pro Card on stage (#55) | Results section |
| `results-procard-lindsay.jpg` | Mike with Lindsay backstage, Pro Card | Results section |

### Existing photos (from previous sessions):
| File | Description | Issue |
|------|-------------|-------|
| `hero-stage-2025.jpg` | Front pose with crown, champion | GOOD — keep as hero |
| `about-gym-olympia.jpg` | Gym shot | HAS IG CHROME — needs replacement or re-crop |
| `about-roelly.jpg` | Mike with Roelly Winklaar | GOOD |
| `gallery-champion-2024.jpg` | 2024 Masters World Champion stage | GOOD |
| `gallery-ferrigno-prep.jpg` | Ferrigno Legacy prep 2015 | GOOD |
| `gallery-muscular-dev-2013.jpg` | Muscular Development 2013 | GOOD |
| `gallery-posing-clinic.jpg` | Posing clinic flyer | GOOD |
| `gallery-procard-story.jpg` | Transformation/pro card story | GOOD |
| `gallery-stage-2014.jpg` | Stage 2014 | GOOD |
| `gallery-transformation.jpg` | Before/after transformation | GOOD |
| `gallery-wings-stage.jpg` | Back double on stage | GOOD |
| `gallery-gym-prep-2014.jpg` | Gym prep 2014 | GOOD |
| `results-group.jpg` | Big group photo at gym | GOOD |
| `results-procard-backstage.jpg` | Pro card backstage | GOOD |
| `results-procard-female.jpg` | Female athlete pro card | GOOD |
| `results-procard-ladies.jpg` | Figure ladies | GOOD |
| `results-procard-rob.jpg` | Rob's pro card | HAS IG CHROME — replace with Lindsay photos |

---

## COPY RULES

1. **No editorial commentary.** No "who lives it," "the complete championship blueprint," "every calorie has a purpose." Just facts.
2. **No assuming how Mike runs his business.** Don't describe his coaching process unless he's confirmed it.
3. **No name-dropping as decoration.** Hany Rambod belongs in bio context ("coached by Hany Rambod"). Tom Platz, Roelly, etc. belong in photo alt text only, not displayed as a flex strip.
4. **No redundant headers.** One title per section. Not "Elite Services" + "Coaching Services."
5. **No corny motivational copy.** No "Done with guesswork?" No "Your Move." No "Just results."
6. **Verify every fact.** Year Mike turned pro = 2013. Degrees from BGSU. 2x World Champion (2024, 2025). If you're not sure, don't include it.

---

## CANCELLATION POLICY (for app.html, NOT landing page)

Mike's actual policy:
- Payments due day before to secure session
- Cancel after 8PM = full charge
- Cancel before 8PM = $10 fee
- 48+ hours notice = no charge

This goes in the coaching app's scheduling/booking section only.

---

## SUPABASE / TWILIO (deferred)

Credentials saved in app.html settings defaults:
- Supabase URL: `https://sjwosrwfoubvqpzmxhoe.supabase.co`
- Anon key: pre-populated in app
- Coach phone: `+14403093886`
- Twilio phone: `+18663293169`
- Edge function code: `/home/user/bigmike/supabase/functions/send-sms/index.ts`

Deploy commands (for developer to run locally):
```
npx supabase login
npx supabase link --project-ref sjwosrwfoubvqpzmxhoe
npx supabase functions deploy send-sms
npx supabase secrets set TWILIO_ACCOUNT_SID=AC91e7082ee2... TWILIO_AUTH_TOKEN=c0c223e3de58e... TWILIO_PHONE_NUMBER=+18663293169
```

---

## DEVELOPER ACTION ITEMS BEFORE EXECUTION

1. **Provide Mike's Square booking URL** (from his Instagram bio link) so services can be matched exactly
2. **Decide on architecture:** Stay vanilla HTML or move to Astro/Next.js?
3. **Confirm services list** matches what's on Square
4. **Confirm "2x Olympian"** — we have 2023 Masters Olympia confirmed, need the second year
5. **Send any remaining photos** — especially a clean replacement for `about-gym-olympia.jpg` (has IG chrome)

---

## VERIFICATION CHECKLIST (after rebuild)

1. Every fact on the page cross-referenced against verified sources above
2. Every photo has correct alt text with verified show name and year
3. All "Book" links go to actual Square URL
4. Services match Square exactly
5. No IG chrome visible in any photo
6. JS syntax check: `node -c`
7. Mobile test: every section looks correct on 375px viewport
8. Performance: Lighthouse 95+ on all metrics
9. No dead CSS, no dead JS, no unused images referenced
10. Push to `claude/improve-landing-page-ofiCu`, merge to `main`
