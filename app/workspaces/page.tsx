import Link from "next/link";
import { WorkspaceList } from "./WorkspaceList";
import { createClient } from "../../utils/supabase/client";
import { createClient as createClientFromCookies } from "@/utils/supabase/server";

import { cookies } from "next/headers";

export type Workspace = { id: string; title: string; description: string };

export default async function Page() {
  const workspaces = await getWorkSpaces();
  const cookieStore = cookies();

  const supabase = createClientFromCookies(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <main>
        <div className="flex text-3xl gap-10 m-10">
          <h1>Workspaces</h1>
          {user && (
            <Link href={`/workspaces/${user.id}`} className="text-purple-800">
              My Workspaces
            </Link>
          )}
        </div>
        <section>
          {workspaces && <WorkspaceList workspaces={workspaces} />}
        </section>
      </main>
    </div>
  );
}

async function getWorkSpaces(): Promise<Workspace[] | null> {
  const supabase = createClient();
  const { data: workspaces } = await supabase
    .from("workspace")
    .select<"workspace", Workspace>();

  return workspaces;
}
