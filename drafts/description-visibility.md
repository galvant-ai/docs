# Keep SEO descriptions without visible subtitles

Research checked against current Mintlify documentation on October 28, 2026. The user approved the CSS approach, which is now applied. The experimental metadata configuration changes were removed.

## Findings

- The page frontmatter `description` field supplies both the visible subtitle and SEO description.
- The current Pages and global configuration references do not document a subtitle-only `hideDescription` option.
- The SEO documentation supports native global and folder-scoped meta tags. A global description generated description, Open Graph, and Twitter tags without a subtitle in the preview, but was identical across pages. A scope targeting a leaf page did not produce that page's separate description. This does not establish a suitable native replacement for the individual page descriptions.
- A nested frontmatter `metatags.description` did not generate a description tag in the current preview.

## Approved implementation

Restored individual `description` frontmatter on all 17 pages, with wording matching the current split pages, and added one rule in `styles.css`:

```css
#header > .prose {
  display: none;
}
```

The selector was checked against the current Mint theme's rendered header: its direct `.prose` child contains the description; the title, page controls, and body content are separate. A stylesheet in the content directory is loaded by Mintlify without imports or custom components. The user approved this specific exception to the preference for native features. No other custom styling was introduced.

Preview verification confirmed distinct standard, Open Graph, and Twitter description tags on Quickstart, Work with files, Ask questions with Scout, Reusable workflows, Agent trace and Show logic, and Dashboard variables. Their page-header descriptions have computed `display: none`; titles, page controls, and body content remain visible. Full Mintlify build validation passed with zero errors or warnings, and the internal-link and anchor check passed. Results are also recorded in `page-reviews.md`.

## Sources

- [Page metadata](https://www.mintlify.com/docs/organize/pages)
- [SEO and metadata](https://www.mintlify.com/docs/optimize/seo)
- [Global and scoped SEO settings](https://www.mintlify.com/docs/organize/settings-seo)
- [Supported custom CSS and page layout selectors](https://www.mintlify.com/docs/customize/custom-scripts)
