# Portfolio agents

Lightweight agent setup for **pierce-connaughton-portfolio-react** — a Vite + React + TypeScript portfolio. No test suite, no monorepo, no Azure DevOps.

## Quick reference

| User request | Flow |
|--------------|------|
| Small fix (typo, one file) | [`roles/coder.md`](roles/coder.md) |
| Multi-file feature or content sync | [`roles/orchestrator.md`](roles/orchestrator.md) → planner → coder → reviewers |
| Review only | code-analyser and/or security-analyser on the diff |

## Roles

| Role | File |
|------|------|
| Orchestrator | [`roles/orchestrator.md`](roles/orchestrator.md) |
| Planner | [`roles/planner.md`](roles/planner.md) |
| Coder | [`roles/coder.md`](roles/coder.md) |
| Code analyser | [`roles/code-analyser.md`](roles/code-analyser.md) |
| Security analyser | [`roles/security-analyser.md`](roles/security-analyser.md) |

## Standards & workflows

| File | Purpose |
|------|---------|
| [`standards/project.md`](standards/project.md) | File layout, coding conventions, quality checks |
| [`workflows/ask-when-unclear.md`](workflows/ask-when-unclear.md) | When to stop and ask the user |

That is the full set — nothing else under `.agents/` is required.

**Cursor:** always-on rules in [`.cursor/rules/`](../.cursor/rules/) point here. See also root [`AGENTS.md`](../AGENTS.md).

## Quality gates

```sh
npm run lint
npm run build
```

Verify UI in the browser with `npm run dev` when behaviour changes.

## Project layout

```
src/
  pages/          Home, About, Projects, WorkExperience, NotFound
  components/     Header, Footer, Modal, PageHeader, PageContainer
  data/           Projects, WorkExperience, Skills, University
  styles/         MUI theme + SCSS
  routes/         React Router
public/           Resume PDF, static assets
```

Content updates → `src/data/`. Layout and styling → `src/pages/` and `src/components/`.
