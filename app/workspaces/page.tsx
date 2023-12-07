import { WorkspaceList } from "./WorkspaceList";
import { createClient, getUser } from "../../utils/supabase/client";

import { cookies } from "next/headers";
import { createClient as createClientFromCookies } from "../../utils/supabase/server";
import { redirect } from "next/navigation";

export const revalidate = 0;

export type TWorkspace = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

export default async function Page() {
  const workspaces = await getWorkSpaces();
  const cookieStore = cookies();

  const user = await getUser(cookieStore);

  const addWorkspaceToFavourites = async (
    userId: string,
    workspaceId: string
  ) => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClientFromCookies(cookieStore);

    const { error } = await supabase
      .from("workspaceuser")
      .insert({ userId, workspaceId });

    if (error) throw error;
  };

  if (!user) {
    redirect("/login");
  }
  return (
    <div className="flex-1 w-full flex flex-col gap-20">
      <main>
        <section className="flex justify-center">
          {workspaces && (
            <WorkspaceList
              workspaces={workspaces}
              addToFavourites={addWorkspaceToFavourites}
              userId={user.id}
            />
          )}
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
