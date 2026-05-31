// Supabase client for ADUVerified.
// Two clients:
//   - browserSupabase()   → anon key, used in client components
//   - serverSupabase()    → service role key, used in route handlers / server actions
//
// Both fall back to a safe stub when env vars are absent so dev/build still works
// before keys are added (the stub returns no-op chainables that resolve cleanly).

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

// Minimal surface the rest of the app uses. Mirrors the real PostgREST chain
// (insert/select/update + eq/order/limit/single) just enough to keep both the
// real client and the keyless stub interchangeable.
type Result<T> = { data: T; error: unknown };

interface QueryBuilder<T = unknown> extends PromiseLike<Result<T>> {
  select(cols?: string): QueryBuilder<T>;
  eq(column: string, value: unknown): QueryBuilder<T>;
  order(
    column: string,
    opts?: { ascending?: boolean; nullsFirst?: boolean },
  ): QueryBuilder<T>;
  limit(n: number): QueryBuilder<T>;
  single(): QueryBuilder<T>;
}

type SupabaseLike = {
  from(table: string): {
    insert(rows: unknown): QueryBuilder;
    select(cols?: string): QueryBuilder;
    update(patch: unknown): QueryBuilder;
  };
};

function stubBuilder<T>(initial: T, label: string, op: string, table: string): QueryBuilder<T> {
  const b: QueryBuilder<T> = {
    select: () => stubBuilder(initial, label, op, table),
    eq: () => stubBuilder(initial, label, op, table),
    order: () => stubBuilder(initial, label, op, table),
    limit: () => stubBuilder(initial, label, op, table),
    single: () => stubBuilder(initial, label, op, table),
    then(resolve, reject) {
      console.warn(`[supabase:${label}] STUB — not configured. ${op} on "${table}" → no-op.`);
      return Promise.resolve({ data: initial, error: null }).then(resolve, reject);
    },
  };
  return b;
}

function makeStubClient(label: string): SupabaseLike {
  return {
    from(table: string) {
      return {
        insert: () => stubBuilder<unknown>(null, label, "insert", table),
        select: () => stubBuilder<unknown[]>([], label, "select", table),
        update: () => stubBuilder<unknown>(null, label, "update", table),
      };
    },
  };
}

// Memoize so we don't spin up a new client on every request.
let _browser: SupabaseClient<Database> | null = null;
let _server: SupabaseClient<Database> | null = null;

export function browserSupabase(): SupabaseLike {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return makeStubClient("browser");
  if (!_browser) _browser = createClient<Database>(url, key);
  return _browser as unknown as SupabaseLike;
}

export function serverSupabase(): SupabaseLike {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return makeStubClient("server");
  if (!_server) {
    _server = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return _server as unknown as SupabaseLike;
}

export type { Database, SupabaseLike };
