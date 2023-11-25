import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: workspaces } = await supabase.from("workspace").select();

  return <pre>{JSON.stringify(workspaces, null, 2)}</pre>;
}
