# Choyonverse — implementation handoff

This repository is the source of truth for the portfolio design. If importing it into an AI coding environment, follow these rules:

- Preserve the existing art direction and layout. Do not replace it with a generic AI-generated portfolio template.
- Do not add Three.js, WebGL scenes, 3D objects or heavy shader effects.
- Keep Lenis, GSAP/ScrollTrigger and Framer Motion already wired. Do not add competing animation libraries.
- Keep the first uploaded café portrait as the primary hero portrait and the source for the social preview image.
- Keep Open Graph and Twitter large-image metadata pointing to `/og/og-image.jpg` on the final domain.
- Keep projects data-driven from `src/data/projects.ts`.
- Keep public identity and links in `src/data/profile.ts` and `src/data/socials.ts`.
- Do not invent awards, clients, years of experience, results, user counts or completed project claims.
- Do not expose private credentials or add a client-only admin password.
- Do not change unrelated files or remove accessibility/reduced-motion behavior.
- Before completing a change, run `npm run typecheck` and `npm run build`.
