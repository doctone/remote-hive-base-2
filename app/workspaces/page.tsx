import Link from "next/link";
import { WorkspaceList } from "./WorkspaceList";
import { createClient } from "../../utils/supabase/client";

export type Workspace = { id: string; title: string; description: string };

export default async function Page() {
  const workspaces = await getWorkSpaces();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <main>
        <h1 className="gap-20 text-3xl m-20">Workspaces</h1>
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
