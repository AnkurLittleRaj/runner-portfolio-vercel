# Ankur Raj — Portfolio (Angular 22)

A course-map themed portfolio: career history laid out as mile markers along
a route, skills as pace "splits," and a training log for habits outside work.

## Run it locally

This was hand-written outside a sandbox with no network access, so it hasn't
been through `npm install` yet. To run it:

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Structure

```
src/app/
  hero/            bib-style header (name, role, headline stats)
  about/            "About the runner" — bio + what you own / how you show up
  experience/       career timeline as mile markers (edit the `markers` array)
  skills/           skills grouped into splits (edit the `groups` array)
  training-log/     personal habits (edit the `entries` array)
  contact/          LinkedIn, GitHub, email
```

## Things to fill in before you publish this

Search the codebase for these markers:

1. **Baker Hughes start date** — in `experience/experience.component.ts`,
   replace `[start date]` with your actual join date.
2. **Accenture end date** — same file, replace `[end date]` (only needed if
   you've since left; otherwise delete that marker's end date and say
   "Present").
3. **GitHub URL** — in `contact/contact.component.ts`, replace the `href="#"`
   placeholder link with your actual GitHub profile.
4. **Second and third habits** — in `training-log/training-log.component.ts`,
   replace the two `[HABIT]` placeholder entries with real ones, or delete
   them if you'd rather keep just running.

## Design notes

Palette and type are pulled from an actual running track rather than a
generic "sporty" look:

- `--track` / `--track-2`: asphalt/track charcoal (background)
- `--chalk`: lane-paint off-white (primary text)
- `--rust`: cinder-track rust-orange (primary accent, mile markers)
- `--lane`: lane-marking yellow (secondary accent)
- `--pine`: trail green (muted accent on the About cards)

Type: Archivo for display/headings, Inter for body copy, JetBrains Mono for
data — bib numbers, dates, stat labels.

Change the palette in `src/styles.scss` (the `:root` block) — every
component reads from those same custom properties, so one edit updates the
whole site.
