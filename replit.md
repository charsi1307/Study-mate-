# Study Mate Class 9

A CBSE Class 9 education web app for students to learn through YouTube videos, AI-generated summaries, and MCQ practice across 4 subjects.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm --filter @workspace/cbse-class9 run dev` — run the frontend (port 20526)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string
- Required env: `AI_INTEGRATIONS_OPENAI_BASE_URL`, `AI_INTEGRATIONS_OPENAI_API_KEY` — auto-provisioned by Replit AI Integrations

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Wouter routing, TanStack Query, Tailwind CSS (dark mode default)
- API: Express 5
- DB: PostgreSQL + Drizzle ORM (conversations + messages tables)
- AI: Replit AI Integrations (OpenAI gpt-5-mini) for summaries and MCQs
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `lib/api-spec/openapi.yaml` — single source of truth for all API contracts
- `lib/db/src/schema/` — Drizzle ORM schema (conversations, messages)
- `artifacts/api-server/src/data/content.ts` — all CBSE Class 9 subjects and chapters data (static)
- `artifacts/api-server/src/routes/subjects.ts` — subjects and chapters API routes
- `artifacts/api-server/src/routes/ai.ts` — AI summary and MCQ generation routes (with in-memory cache)
- `artifacts/cbse-class9/src/pages/` — React pages (home, subject, chapter)
- `lib/integrations-openai-ai-server/` — OpenAI server-side client
- `lib/integrations-openai-ai-react/` — OpenAI React hooks

## Architecture decisions

- Content data (subjects, chapters, YouTube video IDs) is hardcoded in `content.ts` — no DB needed for curriculum
- AI responses are cached in-memory per chapter to avoid redundant OpenAI calls
- Dark mode is the default and only mode — `class="dark"` set on `<html>` element
- OpenAPI spec is the source of truth; all frontend API calls use generated React Query hooks
- AI summaries and MCQs are generated on-demand (lazy) and cached in memory server-side

## Product

- Home page: 4 CBSE Class 9 subject cards (Maths, Science, Social Science, English)
- Chapter list: 8 chapters per subject with title, description, duration
- Chapter detail: YouTube video embed + AI summary + key points + 5 interactive MCQ questions with explanations

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- AI routes use in-memory cache — restarts clear cached summaries/MCQs
- YouTube video IDs in `content.ts` should be verified periodically as videos may be removed
- Always run codegen after changing `openapi.yaml`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
