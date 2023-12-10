import { NextResponse, NextRequest } from "next/server";
import { createClient } from "../../../utils/supabase/client";

type TWorkspace = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isFavourite: boolean;
};

async function GET(request: NextRequest) {
  const supabase = createClient();
  const { data: workspaces } = await supabase
    .from("workspace")
    .select<any, TWorkspace>();

  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("userId");

  if (!id) {
    return NextResponse.json({ workspaces });
  }

  const { data: favourites } = await supabase
    .from("workspaceuser")
    .select<"workspace(id)", { workspace: { id: string } }>("workspace(id)")
    .eq("userId", id);

  const favouriteIds = favourites?.map(({ workspace }) => workspace.id);

  if (!workspaces) return [];
  const result = workspaces.map((workspace) => {
    const isFavourite = favouriteIds?.includes(workspace.id);

    return {
      ...workspace,
      isFavourite: !!isFavourite,
    };
  });
  // incorrect response??
  return NextResponse.json({ workspaces: result });
}
