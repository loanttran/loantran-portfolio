# Portfolio site — four-study edition

A focused cut of the portfolio: four studies — three qualitative and design-led, plus one
dual-market experiment. Independent of the seven-study site — its own folder, its own
repo, its own URL.

Static. No build step, no dependencies.

```
index.html                    Home — hero, four studies, approach, about
concept-testing.html          Payment Authentication Setup Concept Testing
product-flows-worksheet.html  Product Flows Worksheet Redesign
agentic-commerce.html         Agentic Commerce & Payment Authentication
checkout-animation.html       Security Animation at Checkout Survey
assets/css/style.css          All styling, light + dark, incl. the chart system
assets/js/main.js             Theme toggle, header state
_drafts/                      Unpublished chart proposals — gitignored
.nojekyll                     Serve files as-is
.gitignore                    Excludes research files, the references PDF, the résumé
```

## Study-design charts

`concept-testing.html` carries a "Three rounds, structured similar to RITE testing" chart
under *What each round tested* — one row per round, showing the variants tested,
participants on a shared scale, and the markets, with a note on why R2 and R3 ran in the
UK only.

Chart styles live in section 17 of `assets/css/style.css`. The palette is the validated
data-viz set, which shares this site's blue ramp:

| Job | Light | Dark |
|---|---|---|
| Categorical 1–3 | `#2a78d6` `#eb6834` `#1baf7a` | `#3987e5` `#d95926` `#199e70` |
| Ordinal blue | `#86b6ef` → `#184f95` | `#184f95` → `#86b6ef` (anchor flips) |

Validated against this site's own chart surfaces — `#ffffff` light and `#191a1f` dark, not
a script default. All checks pass in both modes. Light-mode aqua sits at 2.82:1, below the
3:1 mark floor, so every categorical mark carries a visible label. Re-validate before
changing a hex.

Ground rules the charts follow: every number comes from a fact already stated in the case
study; nothing is estimated; no confidential metric is added; where results are
proprietary the chart shows direction only and says so.

Proposals for the other case studies sit in `_drafts/`, gitignored — unapproved charts
stay off the site. Regenerate with `python3 _drafts/build_cs3.py`.

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
