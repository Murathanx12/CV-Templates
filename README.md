# CV Templates

Five editable, print-friendly CV layouts with white paper, black linework and restrained blue accents. Use the local browser editor for a quick draft or customize the standalone LaTeX sources for precise typesetting.

**[Open the CV creator](https://murathanx12.github.io/CV-Templates/)** · [Browse the sample PDFs](samples/) · [Edit the LaTeX](latex/)

| Layout | Composition | Sample |
|---|---|---|
| [Blackline](latex/blackline.tex) | Strong corner brackets, full-width category frames | [2 pages](samples/blackline.pdf) |
| [Blueprint](latex/blueprint.tex) | Split panels, blue spines and chamfered outlines | [2 pages](samples/blueprint.pdf) |
| [Compact](latex/compact.tex) | Short entries, single-column reading order | [1 page](samples/compact.pdf) |
| [Side panel](latex/panel.tex) | Education and skills rail beside the main narrative | [1 page](samples/panel.pdf) |
| [Extended](latex/extended.tex) | Editorial section labels and more detailed work records | [2 pages](samples/extended.pdf) |

Every candidate, organization, qualification and achievement in the examples is fictional. Replace or remove all sample content before applying. These templates contain no personal CVs, private documents or project artwork.

## Browser editor

Open `index.html` locally or use the hosted creator. Choose a layout, then click the CV text to edit it. Switching layouts keeps your text. Compact and Side panel show a shorter subset; the full layouts include the continued-work sections.

- **Print your CV / save PDF** prints your edited browser document.
- **Save edits as JSON** downloads a local backup; **Load saved JSON** restores it.
- **Sample PDF** and **sample LaTeX** remain the unedited examples. The browser editor does not generate LaTeX from your edits.
- No account, analytics, upload, cloud model or external font is used. Edits live only in the current page; save them before closing.
- The visible portfolio link can be edited. Changing it removes the example QR to prevent an incorrect destination. The LaTeX sources generate a matching QR automatically from `\portfolio`.

Choose A4, 100% scale and disable browser headers/footers when printing. Enable background graphics for the blue rules. Page counts above describe the supplied PDFs, not an arbitrary amount of edited content. Always inspect the finished PDF and scan the QR before use.

## LaTeX

Each file in `latex/` is standalone and uses editable text with TeX Gyre Heros, `fontspec`, TikZ, `hyperref` and `qrcode`. Compile with XeLaTeX, LuaLaTeX or Tectonic; pdfLaTeX is not supported. In Overleaf, upload a source file and choose XeLaTeX.

Update the candidate name, contact lines, `\portfolio`, education, dates and factual accomplishments. Keep the printed URL next to the QR. The QR adds a portfolio shortcut; it does not replace the written evidence in the CV.

To rebuild the five examples with [Tectonic](https://tectonic-typesetting.github.io/):

```sh
python build.py
# Or: python build.py --compiler /path/to/tectonic
```

The first compiler run may need internet access to obtain TeX packages. The browser editor itself needs no network after the files are downloaded.

## Readability and reuse

Use clear headings, selectable text, concrete contributions and verified outcomes. Single-column Blackline or Compact gives the simplest reading order; multi-column layouts need extra checking with your target application system. No template can guarantee ATS parsing, interviews or search-engine indexing.

The visual language is meant to support the work, not replace it. Add detail where it explains a contribution; remove generic claims and decorative skill ratings. Use your own words.

MIT licensed. Suggested discovery topics: `cv-template`, `resume-template`, `latex`, `latex-template`, `resume-builder`, `curriculum-vitae`, `portfolio`, `static-site`.
