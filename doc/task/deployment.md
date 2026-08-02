# Deployment Guide — GitHub Pages

## Overview
This project is a Vite + React (TypeScript) app deployed to GitHub Pages at:
`https://alam-369.github.io/portfolio/`

Deployment uses the `gh-pages` npm package, which builds the app and pushes the
compiled output to a dedicated `gh-pages` branch. GitHub Pages then serves
static files directly from that branch — **not** from `main`.

## Why not deploy `main` directly?
`main`'s root `index.html` is the **unbuilt source file** used only for local
dev (`npm run dev`). It references `/src/main.tsx`, a raw TypeScript file that
browsers cannot execute directly — Vite/esbuild must first compile it into
real JS/CSS bundles. Serving this file in production causes a blank/black page
with a 404 on `/src/main.tsx` in the browser console.

Deploying `main` directly would require manually building and committing the
`dist/` output into `main`'s root (or `/docs`) on every release — more manual
steps and more room for error. The `gh-pages` branch approach automates this.

## Key config
- **`vite.config.ts`** — sets `base: "/portfolio/"` so built asset URLs resolve
  correctly under the GitHub Pages subpath (`/portfolio/...` instead of `/...`).
- **`package.json` scripts**:
  ```json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
  ```
  - `predeploy` runs automatically before `deploy` (npm convention).
  - `build` runs `tsc -b && vite build`, producing `dist/`.
  - `deploy` pushes the contents of `dist/` to the `gh-pages` branch via the
    `gh-pages` package.

## Deployment steps (routine releases)
1. Commit and push your changes to `main` as usual.
2. Run:
   ```bash
   npm run deploy
   ```
   This builds the app and force-pushes `dist/` contents to the `gh-pages`
   branch (creating it if it doesn't exist).
3. Verify `gh-pages` branch has updated `index.html` and hashed asset files
   under `assets/`.

## One-time GitHub repo setup
GitHub Pages must be configured to serve from the `gh-pages` branch, not
`main`:
1. Go to the repo on GitHub → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch** to `gh-pages`, folder to `/(root)`.
4. Click **Save**.
5. Wait ~30-60s for the Pages build to complete, then hard-refresh
   `https://alam-369.github.io/portfolio/` (Cmd+Shift+R) to bypass cache.

## Incident log — Aug 2, 2026: Black page bug

**Symptom:** `https://alam-369.github.io/portfolio/` showed a blank/black page.
Console error: `Failed to load resource: the server responded with a status
of 404` for `/src/main.tsx`.

**Root cause:** GitHub Pages was configured to serve from the `main` branch
instead of `gh-pages`. `main`'s root `index.html` is the dev-mode source file
(`<script type="module" src="/src/main.tsx">`), which 404s in a static
production environment because there is no dev server to compile it on the
fly.

**Verification:** Compared `main`'s `index.html` (raw source, `/favicon.ico`,
`/src/main.tsx`) against `gh-pages`'s `index.html` (built, `/portfolio/`
base path, hashed `assets/index-*.js` / `assets/index-*.css`). The live site's
served HTML matched `main`, confirming the branch misconfiguration.

**Fix applied:**
1. Untracked `dist/` from the `main` branch (it was accidentally committed
   there) and added `/dist` to `.gitignore`, since build output should only
   live on `gh-pages` (via `npm run deploy`), not on `main`.
   - Commit: `Untrack dist/ build output from main branch`
2. **Manual step (GitHub UI, not yet completed as of this writing):** Change
   **Settings → Pages → Branch** from `main` to `gh-pages`.

**Status:** Pending — awaiting the GitHub Pages branch setting change to take
effect. Once switched, re-verify by fetching
`https://alam-369.github.io/portfolio/` and confirming the served
`index.html` matches the `gh-pages` branch's built version (hashed asset
paths under `/portfolio/assets/`, not `/src/main.tsx`).
