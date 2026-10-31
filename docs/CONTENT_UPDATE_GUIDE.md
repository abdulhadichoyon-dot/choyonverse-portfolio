# Choyonverse content update guide

## GitHub-first workflow

1. Open the repository on GitHub.
2. Open `src/data/projects.ts` to add or edit a project.
3. Copy an existing project object and change its `id`, `number`, `title`, `category`, `status`, `description`, `role`, `stack`, links and `visual`.
4. Keep `id` unique. Use the next number in sequence.
5. Commit the change. Vercel should deploy the new version from the connected branch.

## Project fields

- `id`: unique stable slug, e.g. `my-new-project`
- `number`: two-digit display number
- `title`: project name
- `category`: `AI & Software`, `Web Experiences`, or `In the Lab`
- `status`: `Live`, `Prototype`, `In development`, or `Exploration`
- `description`: brief, specific and honest
- `role`: what you actually did
- `stack`: only technologies actually used
- `liveUrl` / `sourceUrl`: optional public links
- `featured`: whether it is part of the main showcase
- `visual`: one of the existing artwork variants (`signal`, `market`, `anime`, `chat`, `studio`, `engine`)

## Future private Admin Dashboard

Recommended architecture when ready:

- Authentication: a managed auth provider, with an allowlist for the portfolio owner.
- Database: a `projects` collection/table matching the TypeScript schema.
- Image storage: managed object storage with public, optimized image URLs.
- Server-side publishing: protected API or server function; secrets stay server-side.
- Validation: reject duplicate IDs, invalid URLs, unsupported statuses and empty project titles.
- Safety net: draft/publish workflow, revision history and a rollback path.

Do not add a fake client-only password gate. It is not real admin security.
