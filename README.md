# API-Kit

API-Kit is an open-source API sharing platform focused on reusable backend modules and implementation guides.

This repository contains the web frontend built with Next.js (App Router), including the marketing homepage, docs experience, framework guides, and module-level integration pages.

## Product Focus

API-Kit helps teams:

- Publish reusable API modules (Auth, Billing, Ecommerce, Notification, Organization, Rate Limits, SDK)
- Share implementation patterns by framework and language ecosystem
- Standardize API consumption with practical docs and guided onboarding

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install and Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # Start local development server
npm run lint     # Run ESLint
npm run build    # Create production build
npm run start    # Start production server
```

## Route Map

### Main pages

- `/` - Home
- `/showcase` - Showcase (placeholder)
- `/templates` - Templates (placeholder)
- `/enterprise` - Enterprise (placeholder)

### Docs hub

- `/docs` -> redirects to `/docs/getting-started`
- `/docs/getting-started`
- `/docs/core-concepts`
- `/docs/framework-guides` -> redirects to `/docs/framework-guides/node-js-ts`
- `/docs/framework-guides/[stack]`
- `/docs/api-kit` -> redirects to `/docs/api-kit/auth`
- `/docs/api-kit/[module]`

## Docs Structure

Docs content and navigation are centralized in:

- `components/docs-content.ts` - docs taxonomy, groups, and section copy
- `components/docs-shell.tsx` - docs layout (sidebar, breadcrumbs, rails, TOC)

API-Kit module pages support framework-specific previews through:

- `components/module-framework-selector.tsx`
- `app/docs/api-kit/[module]/page.tsx`

## Project Structure

```text
app/
  page.tsx
  docs/
  showcase/
  templates/
  enterprise/
components/
  home-page.tsx
  topbar.tsx
  docs-shell.tsx
  docs-content.ts
  module-framework-selector.tsx
public/
```

## Contribution Flow

This project follows a card-based workflow.

1. Create a branch for one card/task only.
2. Keep scope focused to that card.
3. Run quality checks (`npm run lint`, optional `npx tsc --noEmit`).
4. Commit with clear conventional message (`feature: ...`, `refactor: ...`, `fix: ...`, `docs: ...`).
5. Open review, merge, and continue with next card.

## Quality Checks

Before merging:

```bash
npm run lint
npx tsc --noEmit
```

## License

MIT. See [LICENSE](./LICENSE).
