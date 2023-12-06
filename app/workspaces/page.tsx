import { WorkspaceList } from "./WorkspaceList";
import { createClient } from "../../utils/supabase/client";

export const revalidate = 0;

export type TWorkspace = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

export default async function Page() {
  const workspaces = await getWorkSpaces();

  return (
    <div className="flex-1 w-full flex flex-col gap-20">
      <main>
        <section className="flex justify-center">
          {workspaces && <WorkspaceList workspaces={workspaces} />}
        </section>
      </main>
    </div>
  );
}

async function getWorkSpaces(): Promise<TWorkspace[] | null> {
  const supabase = createClient();
  const { data: workspaces } = await supabase
    .from("workspace")
    .select<any, TWorkspace>();

  return workspaces;
}
