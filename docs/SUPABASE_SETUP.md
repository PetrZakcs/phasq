# Supabase setup — waitlist

The waitlist form (`components/WaitlistForm.tsx`) talks to Supabase directly
from the browser using the anon key — no backend involved. Before going to
production, create a Supabase project and run this once in its SQL editor:

```sql
create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  interest text not null default 'other',
  country text not null default 'other',
  created_at timestamptz not null default now()
);

alter table waitlist enable row level security;

-- Anyone (anon key) can add themselves to the list...
create policy "anon can insert waitlist entries"
  on waitlist for insert
  to anon
  with check (true);

-- ...but nobody can read the list back through the anon key.
-- (Read it from the Supabase dashboard/table editor, or a service-role key.)
```

The `unique` constraint on `email` is what makes the "you're already on the
list" duplicate-handling in `WaitlistForm.tsx` work (it checks for Postgres
error code `23505`).

## Environment variables

Set these in the Vercel project (Production + Preview):

```
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<the anon/public key, not the service role key>
```

Both are safe to expose client-side (that's what `NEXT_PUBLIC_` is for) as
long as the RLS policy above is in place — it's the policy, not secrecy of
the key, that stops anyone from reading or overwriting other people's rows.

Without these set, the form fails gracefully with "Signup is temporarily
unavailable" instead of crashing.
