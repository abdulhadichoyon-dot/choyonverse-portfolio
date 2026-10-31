# Choyonverse private Admin Dashboard — Phase 2 spec

The first release intentionally keeps public content in GitHub-managed TypeScript files. A private admin should be added as a second release, not simulated with a password hidden in frontend code.

## Required capabilities

- Owner-only sign-in and server-side authorization.
- Create, edit, preview, publish, unpublish and archive projects.
- Manage title, summary, category, status, role, stack, featured flag, live URL, repository URL, cover image and image alt text.
- Reorder projects without editing source files.
- Edit profile copy and social handles.
- Draft preview before publishing.
- Image validation, size limits and automatic WebP conversion.
- Revision history and rollback.
- Server-side schema validation for every write.

## Suggested data model

`projects` fields should mirror `src/data/projects.ts` and add:

- `published`: boolean
- `sort_order`: integer
- `updated_at`: timestamp
- `created_at`: timestamp
- `revision`: integer

`profile` and `social_links` should have their own records so profile edits do not require project mutations.

## Security and deployment

- Use a managed authentication provider with an owner allowlist.
- Enforce authorization in server-side route handlers or serverless functions, not only in the React UI.
- Keep private service keys and GitHub write tokens in Vercel environment variables.
- Validate every field and every URL on the server.
- Never ship an admin secret or service-role key in `VITE_*` variables or browser bundles.
- Use a draft/publish state and keep a recoverable copy of the last published content.
- Make the public website consume only published data.

## Migration path

Create a small typed `PortfolioContentProvider` interface. The GitHub/committed-data provider is the initial implementation. A database-backed provider can implement the same interface later, keeping the existing portfolio UI and `Project` type stable.
