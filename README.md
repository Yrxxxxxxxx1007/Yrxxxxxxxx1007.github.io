# Ruixuan Yang — Academic Homepage

Personal academic website: https://yrxxxxxxxx1007.github.io/

Built with the original [Hugo Blox Academic CV](https://github.com/HugoBlox/hugo-theme-academic-cv) template, using its biography, publication cards, and experience blocks.

## Update content

- `data/authors/me.yaml`: biography, contact links, education, and experience.
- `content/_index.md`: research interests, news, and homepage sections.
- `content/publications/compact/index.md` and `content/publications/mind/index.md`: paper metadata and author order.
- `data/publications.yaml`: structured publication data for the homepage metadata.
- `config/_default/params.yaml`: theme and site metadata.

Jin Cui and Jiaqi Guo are equal first authors of COMPACT. Ruixuan Yang follows them and precedes Jiepeng Zhou. MIND follows the author order and equal-contribution markers in the [ACL Anthology PDF](https://aclanthology.org/2026.acl-long.2020.pdf): Jin Cui and Jiaqi Guo share equal contribution.

## Develop and publish

Requires Hugo Extended 0.162.0, Go, Node.js 22+, and pnpm 10.14.0.

```sh
pnpm install --frozen-lockfile --ignore-scripts
pnpm dev
pnpm build
```

GitHub Actions builds the site on every push and deploys successful builds from `main` to GitHub Pages.

## Attribution

Hugo Blox Academic CV and Hugo Blox Kit are distributed under the MIT license. See `HUGO-BLOX-LICENSE.md`. The repository history retains the previous Minimal Light and al-folio implementations and their licenses.

The build prepares a local Tailwind CLI wrapper because Hugo 0.162 cannot resolve pnpm's `.pnpm` paths. The Node permission sandbox remains enabled. A local override also fixes the template's empty-map link deduplication. The fonts are bundled locally under their SIL Open Font Licenses.
