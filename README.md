# Choyonverse

A custom, editorial-style personal portfolio built with React + TypeScript + Vite. The direction is intentionally human and restrained: warm charcoal, oxblood, aged ivory, editorial type, generous spacing and small purposeful motion.

## Stack

- React + TypeScript + Vite
- Lenis (`lenis/react`) for smooth scrolling
- GSAP + ScrollTrigger + `@gsap/react` for scoped, cleaned-up motion
- Framer Motion for small interaction transitions
- Custom CSS design system (no generic component/template kit)
- No Three.js, WebGL scene or heavy 3D runtime

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Update your portfolio

### Add or edit projects

Open `src/data/projects.ts`. Add an object to the `projects` array using the existing `Project` shape. The work grid, category filters, project status and tags are generated from this data automatically.

Important: keep `status` accurate. Use `Live` only for a public, usable version. Avoid claiming a project is finished just because a repository exists.

### Update your profile / email

- `src/data/profile.ts` — display name, headline, intro, about text and public contact email.
- `src/data/socials.ts` — social profile URLs and handles.

### Replace portrait images

Replace the files under `public/images/` while preserving their filenames, or update the corresponding paths in `src/App.tsx`.

## Social sharing preview

`index.html` includes Open Graph and Twitter/X large-image metadata. The `og:image` points to:

`https://choyon.dev/og/og-image.jpg`

The preview image is based on the first uploaded portrait and keeps the full portrait visible on a 1200 × 630 canvas. After connecting the real domain, keep the metadata URL and deployed image URL in sync. Social crawlers may cache previews; after changes, use the relevant platform's link debugger or cache refresh tool.

## Domain and deployment

The preferred domain is `choyon.dev`. Connect it to the production deployment in Vercel, then ensure these are true:

1. `https://choyon.dev/` loads the site.
2. `https://choyon.dev/og/og-image.jpg` is publicly reachable without login.
3. `index.html` canonical, `og:url`, `og:image` and `twitter:image` all point to the final HTTPS domain.
4. Rebuild and redeploy after metadata or image changes.

## Content management roadmap

Phase 1 is GitHub-first: edit the typed content files and push a commit. This is simple, transparent and works well from a phone with GitHub's web editor.

Phase 2 is a private Admin Dashboard. It should be added only with a secure server-side publishing path, authentication, schema validation, image storage and audit/backup support. Never put a private GitHub token, database service key or admin credential in browser-side code. The visual portfolio already reads from a single typed content layer, so the future admin can publish into the same content model without rebuilding the UI.

## Honest content notes

The starter project entries are based on project names, descriptions and URLs previously shared by Choyon. Review status, descriptions, public links and technology tags before the public launch. Remove anything that is still private or not ready to be shown.
