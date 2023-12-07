import { createBrowserClient } from "@supabase/ssr";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { createClient as createClientFromCookies } from "@/utils/supabase/server";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

export const canInitSupabaseClient = (cookieStore: ReadonlyRequestCookies) => {
  try {
    createClientFromCookies(cookieStore);
    return true;
  } catch (e) {
    return false;
  }
};

export const getUser = async (cookieStore: ReadonlyRequestCookies) => {
  const supabase = createClientFromCookies(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};
