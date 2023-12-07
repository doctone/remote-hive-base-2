import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient, getUser } from "../../../utils/supabase/client";
import { TWorkspace } from "../../workspaces/page";
import Favourites from "./Favourites";

export default async function Page() {
  const cookieStore = cookies();

  const user = await getUser(cookieStore);
  if (!user) {
    return redirect("/login");
  }
  const workspaces = await getWorkSpaces(user.id);

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div>
        <section>
          {workspaces && <Favourites workspaces={workspaces} />}
        </section>
      </div>
    </div>
  );
}

async function getWorkSpaces(id: string): Promise<TWorkspace[] | undefined> {
  const supabase = createClient();
  const { data: workspaces } = await supabase
    .from("workspaceuser")
    .select<"workspace(*)", { workspace: TWorkspace }>("workspace(*)")
    .eq("userId", id);

  return workspaces?.map(({ workspace }) => workspace);
}
