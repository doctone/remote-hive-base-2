import { WorkspaceList } from "./WorkspaceList";
import { createClient, getUser } from "../../utils/supabase/client";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type TWorkspace = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isFavourite: boolean;
  postcode?: string;
};

export default async function Page() {
  const cookieStore = cookies();
  const user = await getUser(cookieStore);
  if (!user) {
    redirect("/login");
  }
  const workspaces = await getWorkSpaces(user.id);

  return (
    <div className="flex-1 w-full flex flex-col gap-20">
      <main>
        <section className="flex justify-center px-5 md:px-20">
          HEY PETER
          {workspaces && (
            <WorkspaceList workspaces={workspaces} userId={user.id} />
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
