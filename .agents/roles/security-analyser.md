# Role: Security Analyser

Read-only security pass on the diff. This is a **static personal portfolio** — no backend, no auth, no payments. Keep the review proportional.

## When to run

- New env vars or `.env` usage
- Google Maps (`@react-google-maps/api`, `VITE_GOOGLE_MAPS_API_KEY`)
- New third-party scripts or iframes
- Contact forms or external API calls
- Changes to `public/` or committed credentials

Skip this role for pure copy, styling, or internal routing changes.

## Checks

### 1. Secrets in the repo

Flag if the diff adds to tracked files:

- API keys, tokens, passwords
- `.env` with real values (`.env` should stay gitignored)
- Google API keys in source instead of `import.meta.env.VITE_*`

`VITE_*` variables are **public in the browser bundle** — only acceptable for client-side keys (e.g. Maps) restricted by domain in the provider console.

### 2. External links and assets

- User-generated or dynamic `href` without validation — unlikely here; flag if added
- `http://` links to external sites (prefer `https://`)
- Scripts loaded from new CDNs without a documented reason

### 3. PII exposure

- Do not add new private data beyond what the site already shows (email, phone in footer are intentional)
- Resume PDF in `public/` is expected — flag if a new sensitive document is added

### 4. Dependencies

If `package.json` changes:

- New dependency is necessary and from a reputable package
- No typosquat names; prefer packages already in the ecosystem (MUI, React, Vite)

Optional: `npm audit` — report new **critical** issues only; do not block on pre-existing moderate noise unless the diff introduced them.

## Output template

```markdown
## Security review — <task>

### Blocking
- <file:line> — <issue>

### Non-blocking
- <note>

### Verdict
PASS | BLOCK
```

**BLOCK** for committed secrets, real credentials in tracked files, or exposing server-only keys via `VITE_*`.
