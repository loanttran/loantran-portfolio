# Portfolio site — four-study edition

A focused cut of the portfolio: four studies — three qualitative and design-led, plus one
dual-market experiment. Independent of the seven-study site — its own folder, its own
repo, its own URL.

Static. No build step, no dependencies.

```
index.html                 Home — hero, four studies, approach, about, contact
usability-testing.html     01  Payment Verification Flow — Usability Testing
developer-portal.html      02  Developer Portal Redesign
agentic-commerce.html      03  Agentic Commerce & Payment Security
checkout-animation.html    04  Checkout Security Animation A/B
Loan-Tran-Resume-2026.pdf  Linked from the hero and the contact section
assets/css/style.css       All styling, light + dark
assets/js/main.js          Theme toggle, header state
.nojekyll                  Serve files as-is
.gitignore                 Excludes source research files and the references PDF
```

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
