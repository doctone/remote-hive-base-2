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
