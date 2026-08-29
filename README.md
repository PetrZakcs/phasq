# PhasQ — Marketing Website

Public marketing site for PhasQ. This repository holds **only the website** (Next.js, static/marketing pages, waitlist signup). The product itself (backend, SAR/GEE analysis engine, dashboard) is developed in a separate repository.

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Motion:** Framer Motion
- **Waitlist:** Supabase (client-side insert into a `waitlist` table — see `frontend/components/WaitlistForm.tsx`)
- **Analytics:** Vercel Analytics

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Environment Variables

The waitlist form needs a Supabase project to write to:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

Without these set, the form fails gracefully with a "database not configured" message instead of submitting.

## Structure

```
frontend/
├── app/            # Pages (App Router) — landing page + layout
├── components/     # Landing page sections (Hero, Features, Pricing, ...)
├── lib/            # Utilities (Supabase client, class-name helpers)
└── public/         # Static assets, images
docs/               # Historical product/investor notes (not part of the shipped site)
```

## Deployment

Deployed on Vercel directly from `frontend/` (see `vercel.json`). There is no serverless API function in this repository — the previous FastAPI backend and its Vercel function have been removed; that work continues in the product repository.

---
© 2026 PhasQ Technologies.
