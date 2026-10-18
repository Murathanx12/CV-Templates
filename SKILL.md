---
name: cv-creator
description: Create or revise a readable technical CV using five reusable white-paper HTML and LaTeX templates, with framed sections and a portfolio QR. Use for CV layout, wording and PDF export.
---

# CV creator

Sources: https://github.com/Murathanx12/CV-Templates

Locate that checkout, or retrieve the selected standalone source from `latex/`.
The five layouts are Blackline, Blueprint, Compact, Side panel and Extended.
Blackline uses a single reading column and complete category brackets;
Blueprint splits panels; Compact and Side panel are shorter compositions;
Extended gives more room to the work history. Start from the requested layout
instead of generating another design system. Sources compile with XeLaTeX or
Tectonic. `index.html` provides local text editing and browser printing.

## Content and design

- Establish facts from the supplied CV, portfolio and user corrections. Preserve
  substantive roles, tools, research and results. Distinguish completed work
  from ongoing experiments. Do not invent dates, qualifications or metrics.
- Describe technical contributions plainly. Prefer what was designed, built,
  tested or coordinated over generic claims about impact or passion.
- Use white paper, black structural brackets and restrained blue. Bound complete
  categories. Use conventional headings and selectable text. Images are optional,
  never substitutes for essential text. Preserve a clear reading order.
- Give layout alternatives meaningfully different composition, with the same
  facts unless a shortened edition is explicitly requested. Explain when a
  compact edition omits sections. Do not squeeze a full history into tiny type.
- Keep the portfolio URL visible. Generate and check its matching QR. The
  browser example QR is removed when its destination changes; LaTeX generates
  a matching code from `\portfolio`.

## Delivery and reuse

Deliver the requested HTML and PDF, plus editable LaTeX when requested. Keep
temporary renders and validation work internal; do not create a bundle of
reports or many variants unless useful to the user. Keep the HTML controls and
download links consistent with the selected document. Clearly distinguish a
sample download from a user's edited print export.

Check the actual PDF: page count, complete readable text, clipping, links and
QR destination. Inspect the rendered pages. A fresh reader can identify unclear
contributions; neither a template nor a review guarantees hiring outcomes or
an AI-detector result.

For public examples, use explicitly fictional content. Exclude personal CVs,
contact details, private documents, original project artwork, private paths and
their metadata. Review the entire tree before publishing. Publishing a template
does not authorize publishing the user's actual CV or changing their website.
