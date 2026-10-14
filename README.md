# Portfolio site — four-study edition

A focused cut of the portfolio: four studies — three qualitative and design-led, plus one
dual-market experiment. Independent of the seven-study site — its own folder, its own
repo, its own URL.

Static. No build step, no dependencies.

```
index.html                    Home — statement, collage, work grid, methods, contact
concept-testing.html          Payment Authentication Setup Concept Testing
product-flows-worksheet.html  Product Flows Worksheet Redesign
agentic-commerce.html         Agentic Commerce & Payment Authentication
checkout-animation.html       Security Animation at Checkout Survey
pinterest-user-engagement.html  Pinterest: Understanding User Engagement (term paper, verbatim)
assets/css/report.css         Case study styling, light + dark, incl. the chart system
assets/js/report.js           Theme toggle and footer year for the case studies
assets/img/                   The homepage collage
_drafts/                      Unpublished work — gitignored
.nojekyll                     Serve files as-is
.gitignore                    Excludes research files, the references PDF, the résumé
```

The homepage carries its own styles inline: black and white, ruled grid, Helvetica,
hand-drawn doodles for each study (a light SVG filter gives the lines their wobble).
The case studies share `report.css`: a black cover, numbered sections, black
Findings and Outcome sections. The theme choice is stored under `portfolio-theme`
and carries across every page.

## Study-design charts

The charts inside the case studies are inline SVG. They draw with the tokens defined
at the top of `assets/css/report.css`, so they render in neutral grays:

| Job | Light | Dark |
|---|---|---|
| Categorical 1–3 + neutral | `#111111` `#6b6b6b` `#a3a3a3` `#c9c9c6` | `#f0f0ee` `#a0a0a0` `#6a6a6a` `#4a4a4a` |
| Ordinal | `#c4c4c0` → `#222222` | `#4a4a4a` → `#e6e6e4` |

The grays are told apart by lightness alone, so every mark carries a visible text label.

Ground rules the charts follow: every number comes from a fact already stated in the case
study; nothing is estimated; no confidential metric is added; where results are
proprietary the chart shows direction only and says so.

## The fitness case study (under review)

`_drafts/fitness-app-social-report.html` is finished but not published. It already uses
the live stylesheet. To publish it:

1. Move it to the site root and change its `../assets/` and `../index.html` paths to
   `assets/` and `index.html`.
2. In `index.html`, uncomment the hidden fitness card, move it above the Pinterest card,
   and give `.card--cta` `grid-column: 1 / -1` so it fills the last row.
3. Slot it between `checkout-animation.html` and `pinterest-user-engagement.html` in the
   pager links (Next/Previous on both neighbours, and on the fitness page itself).

`_drafts/build_report.py` generated the restyled case studies from the old pages. Those
old pages are gone, so the script is retired. Edit the case study pages directly.

## How this differs from the seven-study site

- Four studies instead of seven, renumbered 01–04
- Scope figures recomputed for this selection: 1,800 survey respondents (the animation
  A/B is the only survey here), 60+ qualitative participants, 5 markets
- Capability columns lead with qualitative, then quantitative, with a note that the
  larger-sample survey work isn't represented in this selection
- Date range dropped from the work heading

## ⚠️ The references PDF is deliberately NOT in this folder

`Professional_References_2026.pdf` contains three named people's **personal mobile
numbers and personal Gmail addresses**. It is not published here, and `.gitignore`
blocks any file matching `*References*.pdf` from being committed by accident.

The contact section shows "Professional references — available on request" instead.

If you decide to publish it anyway, those three people should be asked first. See the
conversation notes — this was a judgment call, not an oversight.

## Before you publish

One placeholder remains. Find it with:

```bash
grep -rn 'class="todo"' .
```

| Placeholder | Where |
|---|---|
| `[LinkedIn URL]` | `index.html` — contact section |

Everything else — name, location, email, experience, education — is filled in from the
2026 résumé.

## Preview locally

```bash
cd "path/to/portfolio-four-studies"
python3 -m http.server 8001
```

Then <http://localhost:8001>. (Port 8001 so it can run alongside the seven-study site
on 8000.)

## Deploy to GitHub Pages

This needs its **own repository**, separate from the seven-study site.

```bash
git init
git add .
git commit -m "Three-study portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then **Settings → Pages → Deploy from a branch → main → / (root)**.

Since a GitHub account can only have one `<username>.github.io` repo, at most one of the
two sites gets the bare username URL. The other lives at
`https://<username>.github.io/<repo-name>/`. Both work identically.

**Before the first push,** confirm nothing sensitive is staged:

```bash
git status --short
```

`Loan-Tran-Resume-2026.pdf` **should** appear — it is meant to be published. Nothing
matching `*References*.pdf`, `*.txt`, or `*.docx` should.

## Custom domain

Same as the other site: add a `CNAME` file containing the domain, point four `A` records
at `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and set
the domain under Settings → Pages with **Enforce HTTPS** on.
