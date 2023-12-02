import { createClient as createClientFromCookies } from "@/utils/supabase/server";
import { createClient } from "../../../utils/supabase/client";

import { cookies } from "next/headers";
import { Workspace } from "../page";
import { redirect } from "next/navigation";
import { WorkspaceList } from "../WorkspaceList";

export default async function Page({ params }: { params: { userId: string } }) {
  const cookieStore = cookies();

  const supabase = createClientFromCookies(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  const workspaces = await getWorkSpaces(user.id);

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div>
        <button className="bg-purple-700 rounded-md px-4 py-2 text-foreground mb-2">
          + Add a workspace{" "}
        </button>
        <section>
          {workspaces && <WorkspaceList workspaces={workspaces} />}
        </section>
      </div>
    </div>
  );
}

async function getWorkSpaces(id: string): Promise<Workspace[] | undefined> {
  const supabase = createClient();
  const { data: workspaces } = await supabase
    .from("workspaceuser")
    .select<"workspace(*)", { workspace: Workspace }>("workspace(*)")
    .eq("userid", id);

  return workspaces?.map(({ workspace }) => workspace);
}
