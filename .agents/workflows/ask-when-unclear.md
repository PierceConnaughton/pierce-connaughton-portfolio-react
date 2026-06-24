# Ask when unclear

All roles inherit this rule: **do not guess** when the request or outcome is ambiguous. Ask the user, then wait.

## When to ask

- **Copy** — bio, job bullets, project descriptions, or metrics not provided
- **Design** — layout, colours, or which page should show new content
- **Scope** — unclear whether to update data files, add a route, or both
- **New dependency** — task seems to need an npm package not already installed
- **Conflicting source** — resume vs site content disagree; confirm which is canonical

## When not to ask

- Obvious typos or lint/build failures
- Following an existing pattern in the same folder
- Running `npm run lint` or `npm run build` after changes

## How to ask

One question per ambiguity. Offer 2–3 concrete options when helpful.

**Good:** “Should the updated SITA bullets replace the site copy entirely, or only the Associate role?”

**Bad:** “What should I do?”
