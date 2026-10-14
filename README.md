# melichavez.com

Personal portfolio of **Melissa Chávez**, junior web developer and English–Spanish
localization specialist based in Ottawa, Canada.

**Live site:** https://melichavez.com

A one-page site with my projects, experience, education and skills, built by hand
with plain HTML, CSS and a little JavaScript. No frameworks, no build step and no dependencies.

## Features

- **Responsive, mobile-first layout** that works from 320 px phones to wide desktops
- **Light and dark themes** with a sun/moon switch; the visitor's choice is remembered
- **Accessible:** semantic HTML, skip link, visible keyboard focus, and text contrast
  checked against WCAG 2.1 AA in both themes (0 issues in axe-core scans)
- **Fast:** the whole site is about 150 KB; the portrait is served as responsive WebP with a JPEG fallback
- **SEO and sharing:** meta description, canonical URL and Open Graph tags
- **Progressive enhancement:** the theme switch only appears when JavaScript is available

## Built with

- **HTML5:** semantic sections, `<picture>` with `srcset` for responsive images
- **CSS3:** custom properties as design tokens, Flexbox, Grid, `clamp()`, media queries
- **JavaScript (vanilla):** theme switch with `localStorage` and `aria-pressed`

## Project structure

```
melichavez-portfolio/
├── index.html        page content
├── css/styles.css    all styling: design tokens at the top, dark theme below them
├── js/theme.js       light/dark switch
├── images/           portrait in two sizes (WebP + JPEG)
└── favicon.svg       browser-tab icon
```

## Design system

All colours, fonts and spacing are defined once as CSS custom properties at the top of
`css/styles.css`. The dark theme reuses the same token names with new values under
`[data-theme="dark"]`, so components never need theme-specific code.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--color-paper` | `#f3f5f8` | `#14181f` | Page background |
| `--color-ink` | `#0f1a2b` | `#eef2f8` | Headings |
| `--color-accent` | `#3355d1` | `#6f8cff` | Borders and decoration |
| `--color-accent-text` | `#2846b8` | `#93a9ff` | Accent text (AA-compliant) |
| `--color-accent-2` | `#12a594` | `#2cc4b0` | Card accent (decoration only) |
| `--color-accent-3` | `#f0b429` | `#f5c451` | Card accent (decoration only) |

Typography: Fraunces (headings), Inter (body) and IBM Plex Mono (labels), via Google Fonts.

## Running locally

```bash
git clone https://github.com/MelDevCode/melichavez-portfolio.git
cd melichavez-portfolio
```

Then open `index.html` with the VS Code **Live Server** extension, or run any static
server, for example:

```bash
python -m http.server 5500
```

and visit http://localhost:5500.

## Deployment

The site is static and hosted on Hostinger. To deploy, upload `index.html`,
`favicon.svg`, `css/styles.css`, `js/` and `images/` to `public_html`.

## Roadmap

- [ ] English/Spanish language switch (`/es/` pages with `hreflang`)
- [ ] Active menu highlighting while scrolling
- [ ] Subtle fade-in for sections (respecting reduced-motion settings)
- [ ] Print-ready resume stylesheet
- [ ] Structured data (JSON-LD) for search engines
- [ ] Project case studies and live demos

## Contact

- Email: melchavez2@gmail.com
- LinkedIn: [linkedin.com/in/melichavez](https://www.linkedin.com/in/melichavez)
- GitHub: [@MelDevCode](https://github.com/MelDevCode)
