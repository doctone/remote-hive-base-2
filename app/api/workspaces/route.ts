import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type Workspace = {
  id: string;
  title: string;
};

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
  );
  const { data: workspaces } = await supabase
    .from("workspace")
    .select<"workspace", Workspace>();

  return NextResponse.json({ workspaces });
}
