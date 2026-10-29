# Galvant documentation

Customer documentation for Galvant Chat and Dashboards, built with Mintlify. The site starts at `index.mdx`; navigation and branding live in `docs.json`.

## Preview locally

With the Mintlify CLI installed, run this from the repository root:

```bash
mint dev
```

Use the local address printed by the command. See the [current Mintlify documentation](https://www.mintlify.com/docs) for installation and preview options.

## Review the content

- `drafts/documentation-skeleton.md`: agreed page structure and editorial decisions.
- `drafts/page-reviews.md`: source and editorial reviews, including the split into the current 17 pages.
- `drafts/media-checklist.md`: all 90 screenshot, GIF, and video placeholders with capture briefs and replacement instructions.
- `.mintlify/product-brief.md`: audience, scope, and terminology for future authoring.

These authoring files are excluded from the published documentation through `.mintignore`. Visual placeholders are intentionally visible on the customer pages until their assets are supplied.

The first draft was checked against the app repository. Confirm exact controls and example results in the deployed app while capturing media. Keep each page's instructions usable without its video.

## Validate changes

```bash
mint validate --no-build --format json --telemetry false
mint broken-links --check-anchors --telemetry false
mint validate --format json --telemetry false
```

Use Mintlify's built-in components. Check the [latest Mintlify documentation](https://www.mintlify.com/docs) before changing component or navigation syntax. Add new customer pages to `docs.json`; keep draft planning and internal source evidence in `drafts/`. Keep sidebar labels descriptive.

Give each page its own frontmatter `description` for SEO. The approved rule in `styles.css` hides the page-header subtitle while preserving the description metadata. Check that selector against the rendered header when changing the theme. Do not add other custom CSS or components without discussing them first.
