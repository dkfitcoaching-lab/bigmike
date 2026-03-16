# Big Mike Ely Coaching Lab - Development Instructions

## CRITICAL: Read This First
This is a birthday gift coaching platform app for IFBB Pro Big Mike Ely. It is deeply personal to the developer. **Quality must be absolute perfection** - zero bugs, zero errors when Mike opens and uses it.

## Architecture
- **Single-file vanilla JS SPA**: `/home/user/bigmike/index.html` (~3700 lines)
- No framework - pure functions returning HTML strings, swapped via innerHTML
- localStorage for persistence with optional Supabase cloud sync
- Navigation: `go(tab)`, `push(view, data)`, `pop()` with navStack
- PWA with manifest.json, service worker, canvas-generated theme icons
- Branch: `claude/refactor-programs-builder-TgMWi`

## Key Data Structures
- `clients` - array of client objects (stored in localStorage as `fm_clients`)
- `sessions` - session logs with exercises, sets, rates
- `schedule` - scheduled sessions with reminders
- `mealPlans` - meal plans with foods referencing FOOD_DB by index
- `_programs` - program builder data (sections, client assignment)
- `_workouts` - workout templates with exercises and cardio
- Client fields: `anabolics[]`, `peptides[]`, `fatloss[]`, `supplements[]`, `water{}`, `program{}`

## Themes
- Default: Crimson (`LS.get("theme","crimson")`)
- CSS variables switch via `body.theme-crimson` class
- `var(--goldGrad)` and `var(--acc)` are theme-aware
- Dynamic canvas icons generated for PWA home screen

## Birthday System
- `_bdayExpiry=1773936000000` - hard deadline ~March 19, 2026 16:00 UTC
- Gift wrap + popup auto-disappears after this timestamp
- DO NOT modify the birthday message text - it's finalized

## Program Builder
- Programs have sections: training, nutrition, anabolics, peptides, fatloss, supplements, water, protocol
- Each section delegates to a renderer function
- CRITICAL PATTERN: `renderProgramBuilder()` must check `_editWorkout` and `_editMealPlan` BEFORE rendering sections, otherwise sub-editors won't display
- Auto-populates sections based on client's services when assigned
- PDF builder reads checkboxes into local vars BEFORE calling closeModal()

## Known Patterns & Gotchas
1. **Render priority**: `renderNutrition()` → checks `_editProgram` → `_editWorkout` → `_editMealPlan` in order. The program builder also checks `_editWorkout` and `_editMealPlan` first.
2. **Modal scroll**: showModal handles all scrolling. Do NOT add `max-height` + `overflow-y:auto` to content inside modals - it breaks iOS.
3. **Theme colors**: Never hardcode `#1a1408` or `#1a1000` - use `var(--bg)` for text on gradient backgrounds.
4. **Function naming**: Workout builder uses `pickWkExCustom()` (not `pickExerciseCustom` which is for client program days).
5. **Cloud sync**: `save()` persists all data stores including programs/workouts. `savePrograms()` and `saveWorkouts()` are for local-only saves.
6. **iOS keyboard**: focusout listener resets scroll position after keyboard dismiss.
7. **All picker modals** (exercises, anabolics, peptides, supplements, foods) should allow custom entry with fully customizable dose/timing/frequency fields - not just preset options.

## Databases (in-code constants)
- `FOOD_DB[]` - foods with macros, `ck` flag (1=cooked, 0=dry/raw), categories P/C/F/V
- `ANABOLICS_DB[]` - categories: Anabolic Steroids, AI, SERMs, Prolactin Support, Peptides, SARMs, Ancillaries, Fat Loss/GLPs
- `SUPP_DB[]` - supplement categories with preset doses/timings
- `CARDIO_DB[]` - cardio types with modes
- `EXERCISE_DB{}` - exercise groups with exercises

## PENDING WORK (if continuing)
### High Priority
1. **Fat Loss / GLP section**: Add as new program section type "fatloss" with:
   - GLPs: Semaglutide, Tirzepatide, Retatrutide, Liraglutide
   - Fat burners: Injectable L-Carnitine, Clenbuterol, T3/T4, DNP, Yohimbine HCL, Alpha-Yohimbine
   - Full CRUD like peptides section (client.fatloss array)
   - Include in PDF builder, export/import, deleteClient cleanup

2. **Supplement database expansion**: Add SUPP_DB constant with categories:
   - Protein & Aminos, Pre-Workout & Performance, Digestive & Gut Health
   - Vitamins & Minerals, Joint & Recovery, Sleep & Stress
   - Liver & Organ Support, Glucose & Metabolism, Hormonal & Vitality, Fiber & Greens
   - Create picker modal like peptide/anabolics pickers

3. **Food prep state indicators**: FOOD_DB has `ck` property. Display:
   - Proteins/carbs with ck:1 → "(cooked)" badge
   - Oats/cream of rice with ck:0 → "(dry)" badge
   - In meal plan display AND food picker

4. **Dosage customization**: All compound/supplement pickers must allow custom dose entry (free text input), not just preset dropdown options

5. **Alpha-Yohimbine**: Add alongside Yohimbine HCL in Fat Loss section with proper dosing (1mg, 2mg, 3mg)

### Medium Priority
- Notes fields on individual supplement entries and meal items
- Client filter reset (`_clientFilter`) on tab switch in `_doGoTab`
- Clean up remaining dead code: `renderWorkoutBuilder`, `_nutView`, `_guideSearch`

### Low Priority
- Remove duplicate items from ANABOLICS_DB "Ancillaries" that are now in "Fat Loss/GLPs"

## Testing Checklist
After any changes, always:
1. Extract JS and validate: `sed -n '/<script>/,/<\/script>/p' index.html | sed '1d;$d' > /tmp/bigmike_js.js && node -c /tmp/bigmike_js.js`
2. Check all onclick handlers reference existing functions
3. Verify modals open and scroll properly (no nested overflow containers)
4. Verify render chain: renderNutrition → renderProgramBuilder → sub-editors
5. Commit and push to `claude/refactor-programs-builder-TgMWi`
