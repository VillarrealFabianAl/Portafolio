# Fabian Learning Portfolio

Dependency-free static portfolio for GitHub Pages.

## Bilingual page structure

- English: `index.html` (Home), `projects.html`, and `about.html`.
- Spanish: `es.html` (Inicio), `proyectos.html`, and `sobre-mi.html`.
- The EN / ES control on every page opens the equivalent page in the other language.
- The bulb control switches between light and dark mode and remembers the visitor’s choice.

## Publish on GitHub Pages

1. Create a GitHub repository and upload the contents of this folder to its default branch. Keep `index.html` at the repository root.
2. Open the repository’s **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the default branch and `/ (root)`, then click **Save**.
4. Wait for the Pages URL shown in that panel. Relative links are already configured for project sites.

The exact upload artifact is `Fabian_Learning_Portfolio_GitHub_Pages.zip`; unzip it before uploading. Do not upload the source repository’s `tests/`, `.worktrees/`, or other private material.

## Preview locally

From the project folder, run `python3 -m http.server 8000`, then open <http://localhost:8000/>. A local server is required for reliable iframe and asset behavior.

## Edit portfolio content

- `index.html` and `es.html`: English and Spanish home pages with the interactive showcase.
- `projects.html` and `proyectos.html`: selected work and the published Rise course.
- `about.html` and `sobre-mi.html`: approach, toolkit, profile, contact details, and CV links.
- `theme.js`: shared light/dark preference and bulb-control behavior.
- `projects.js`: project titles, summaries, types, and years.
- `index.html` → `#rise-course`: published Rise 360 feature card and external course link.
- `assets/activity-previews/`: public-safe screenshots used across Selected Work.
- `showcase/*/index.html`: demo labels and instructional copy.
- `portfolio-overview.html`: printable summary and contact note.

Run `npm test` after edits. To rebuild the upload ZIP, run `bash scripts/package-release.sh`.
