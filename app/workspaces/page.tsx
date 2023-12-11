import { WorkspaceList } from "./WorkspaceList";
import { createClient, getUser } from "../../utils/supabase/client";
import { cache } from "react";
import { cookies } from "next/headers";
import { createClient as createClientFromCookies } from "../../utils/supabase/server";
import { redirect } from "next/navigation";

export const revalidate = 0;

export type TWorkspace = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isFavourite: boolean;
};

export default async function Page() {
  const cookieStore = cookies();
  const user = await getUser(cookieStore);
  if (!user) {
    redirect("/login");
  }
  const workspaces = await getWorkSpaces(user.id);
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

  return (
    <div className="flex-1 w-full flex flex-col gap-20">
      <main>
        <section className="flex justify-center px-20">
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

const getWorkSpaces = cache(
  async (id: string): Promise<TWorkspace[] | null> => {
    const supabase = createClient();
    const { data: workspaces } = await supabase
      .from("workspace")
      .select<any, TWorkspace>();

    const { data: favourites } = await supabase
      .from("workspaceuser")
      .select<"workspace(id)", { workspace: { id: string } }>("workspace(id)")
      .eq("userId", id);

    const favouriteIds = favourites?.map(({ workspace }) => workspace.id);

    if (!workspaces) return [];
    return workspaces.map((workspace) => {
      workspace.id;
      const isFavourite = favouriteIds?.includes(workspace.id);

      return {
        ...workspace,
        isFavourite: !!isFavourite,
      };
    });
  }
);
