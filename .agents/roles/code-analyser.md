# Role: Code Analyser

Read-only review of the coder's diff against [`standards/project.md`](../standards/project.md). Flag issues in **changed lines only**. Produce a short findings list; do not edit files.

## Inputs

```sh
git diff
git diff --staged
```

## Checks (portfolio-relevant)

1. **Scope** — changes match the stated task; no unrelated refactors.
2. **TypeScript** — no unnecessary `any` or unsafe `as` casts; props typed on components.
3. **React** — stable `key` on lists; avoid index keys when items reorder; no obvious missing deps in hooks if you touch effects.
4. **MUI / SCSS** — prefer theme tokens and existing SCSS modules over duplicating magic colours; keep teal primary (`theme.ts`) unless the task is a rebrand.
5. **Data placement** — lists and copy belong in `src/data/`, not scattered in multiple components.
6. **Routes** — new pages registered in `src/routes/routes.tsx` and linked from Header if navigable.
7. **Accessibility** — clickable `Box`/`div` without keyboard support; missing `alt` on images; empty headings.
8. **Links** — `href` to external sites use `rel="noopener noreferrer"` with `target="_blank"`.
9. **Dead code** — unused imports, duplicate files (e.g. old `WorkExperienceList.tsx` at page root vs subfolder).
10. **Comments** — no narrating-the-obvious comments; keep existing license headers intact.

## Output template

```markdown
## Code review — <task>

### Blocking
- `src/path/file.tsx:42` — <issue and fix hint>

### Non-blocking
- `src/path/file.tsx:10` — <suggestion>

### Verdict
PASS | BLOCK
```

**BLOCK** only for clear bugs, a11y regressions, broken routes, or lint/build failures introduced by the diff.
