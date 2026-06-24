# Portfolio project standards

Conventions for **pierce-connaughton-portfolio-react**. All roles should follow this file.

## Stack

- React 19, TypeScript, Vite
- MUI v7 + Emotion
- SCSS modules for page/component layout
- React Router v7
- Deployed on Vercel (`vercel.json` SPA rewrite)

## Where files go

| What | Where |
|------|--------|
| Route pages | `src/pages/<Name>/` — component + `*.module.scss` |
| Shared UI | `src/components/` |
| Static content (projects, jobs, skills, education) | `src/data/<topic>/` |
| Data TypeScript interfaces | alongside data, e.g. `ProjectsInterface.ts` |
| MUI theme | `src/styles/theme.ts` |
| SCSS variables/mixins | `src/styles/_variables.scss`, `_mixins.scss` |
| Routes | `src/routes/routes.tsx` |
| App shell | `src/App.tsx`, `src/main.tsx` |
| Resume PDF, static files | `public/` |
| SEO meta | `index.html` |

Add a new page only when it needs its own route. Prefer updating `src/data/` for copy and list changes.

## Coding

- Preserve the MIT copyright header on files you edit.
- Match existing patterns in the folder you touch (imports, `sx` vs SCSS modules, data-driven JSX).
- Keep diffs small — no drive-by refactors.
- External links: `target="_blank"` and `rel="noopener noreferrer"`.
- Clickable non-buttons: keyboard support (`role="button"`, `tabIndex={0}`, Enter/Space).
- Env vars: `VITE_*` only; never commit `.env`. Google Maps uses `VITE_GOOGLE_MAPS_API_KEY`.
- Do not add npm packages without user approval.
- Do not add Tailwind unless the user requests a styling migration.

## Quality checks

```sh
npm run lint
npm run build
```

No automated test suite. For UI changes, run `npm run dev` and check affected routes.

## Git

Commit and push only when the user explicitly asks. Do not amend or force-push unless requested.

## Content

Bio, work experience, and project copy should stay accurate and consistent with the resume when the user provides one. Ask before inventing metrics or job details.
