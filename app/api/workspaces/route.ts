import { NextResponse } from "next/server";
import { createClient } from "../../../utils/supabase/client";

type Workspace = {
  id: string;
  title: string;
};

export async function GET() {
  const supabase = createClient();
  const { data: workspaces } = await supabase
    .from("workspace")
    .select<"workspace", Workspace>();

  return NextResponse.json({ workspaces });
}
