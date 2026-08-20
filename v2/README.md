# Version 2

A working copy of the four-study portfolio. Version 1 lives at the repo root and is
frozen — nothing in here touches it.

Started 2026-08-18 as a byte-identical copy of v1 (same five pages, same stylesheet,
same script). Every path is relative, so this folder is self-contained and can be
served or moved on its own.

## What's here

```
index.html                 Home — hero, four studies, approach, about
concept-testing.html       Payment Verification Flow — Usability Testing
product-flows-worksheet.html   Developer Portal Redesign
agentic-commerce.html      Agentic Commerce & Payment Security
checkout-animation.html    Checkout Security Animation A/B
assets/css/style.css       All styling, light + dark
assets/js/main.js          Theme toggle, header state
.nojekyll                  Serve files as-is
```

Same posture as v1: link-only, `noindex, nofollow` on every page, no résumé in the repo.

## Preview locally

```bash
cd "path/to/portfolio-four-studies"
python3 -m http.server 8001
```

v1 at <http://localhost:8001>, v2 at <http://localhost:8001/v2/>.

Once pushed, v2 is live at `<site-url>/v2/` — unlinked from v1, and noindexed like
everything else.

## Changes from v1

**A study-design chart in case study 1.** `concept-testing.html` now carries a
"Three rounds, structured similar to RITE testing" chart under *What each round tested*:
one row per round showing the variants it put in front of participants, a bar for how many
took part on a shared scale, and the markets — plus a note on why R2 and R3 ran in the UK
only.

Case studies 2, 3 and 4 are unchanged from v1.

Supporting changes:

- `assets/css/style.css` — new section 17: the chart palette and components, an in-figure
  note component, and a rule letting a chart break out of the 66ch prose measure (a
  720-unit chart squeezed to 66ch renders its labels at 7px). Cache buster `?v=18` → `?v=19`
  on every page. Nothing above section 17 was touched.
- `_drafts/` — chart proposals for case studies 2–4 and the scripts that generate them.
  **Gitignored on purpose.** Unapproved charts stay off the site; the folder exists so the
  work survives, not so it ships. Regenerate any of them with
  `python3 _drafts/build_cs3.py`.

### The palette

Charts use the validated data-viz palette, which happens to share this site's blue ramp:

| Job | Light | Dark |
|---|---|---|
| Categorical 1–3 | `#2a78d6` `#eb6834` `#1baf7a` | `#3987e5` `#d95926` `#199e70` |
| Ordinal blue | `#86b6ef` → `#184f95` | `#184f95` → `#86b6ef` (anchor flips) |

Checked with the dataviz skill's `validate_palette.py` against this site's own chart
surfaces — `#ffffff` light and `#191a1f` dark — not the script's defaults. All checks pass
in both modes. Light-mode aqua sits at 2.82:1, below the 3:1 mark floor, so every
categorical mark carries a visible label and a table view. Re-run before changing a hex.

### Ground rules the charts follow

- Every number comes from a fact already stated in the case study. Nothing is estimated,
  and no confidential metric was added.
- Where results are proprietary, the chart shows direction only and says so on its face.
- The two qualitative maps (delegation boundary, friction-to-feature) are labeled as
  synthesis, not measurement.
