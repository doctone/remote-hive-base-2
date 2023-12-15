import { cookies } from "next/headers";
import { createClient, getUser } from "../../../utils/supabase/client";
import { createClient as createClientFromCookies } from "../../../utils/supabase/server";
import { TWorkspace } from "../page";
import Rating from "../Rating";
import RatingSummary from "../RatingSummary";
import ToggleFavourite from "./AddToFavourites";
import MapSection from "./MapSection";

export default async function WorkspacePage({
  params,
}: {
  params: { id: string };
}) {
  const cookieStore = cookies();

  const user = await getUser(cookieStore);

  const toggleFavourite = async (
    userId: string | undefined,
    workspaceId: string,
    action: "add" | "remove"
  ) => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClientFromCookies(cookieStore);
    if (action === "add") {
      const { error } = await supabase
        .from("workspaceuser")
        .insert({ userId, workspaceId });
      if (error) throw error;
    } else {
      // TODO: Fix
      const { error } = await supabase
        .from("workspaceuser")
        .delete()
        .match({ userId, workspaceId });
      if (error) throw error;
    }
  };

  const workspace = await getWorkspace(params.id, user?.id);

  if (!workspace) return <div>Workspace not found</div>;
  return (
    <div className="flex md:px-20 flex-col md:grid md:grid-cols-2 items-center md:items-start">
      <div className="w-3/4 md:w-full rounded flex flex-col gap-5">
        <img src={workspace.imageUrl} alt="" className="rounded-2xl" />
        <RatingSummary />
      </div>
      <div className="md:w-full p-5 flex flex-col gap-5 items-center">
        <h1 className="text-5xl">{workspace.title}</h1>
        <h5 className="text-md mb-">{workspace.description}</h5>
        <h2 className="text-2xl">My Rating</h2>
        <div className="w-2/3">
          <div className="flex gap-5 justify-between">
            <label htmlFor="wifi">WiFi</label>
            <Rating />
          </div>
          <div className="flex gap-5 justify-between">
            <label htmlFor="coffee">Coffee Quality</label>
            <Rating />
          </div>
          <div className="flex gap-5 justify-between">
            <label htmlFor="noise">Background Noise</label>
            <Rating />
          </div>
          <div className="flex gap-5 justify-between">
            <label htmlFor="staff">Staff Friendliness</label>
            <Rating />
          </div>
          <div className="flex gap-5 justify-between">
            <label htmlFor="music">Music Quality</label>
            <Rating />
          </div>
        </div>
        <ToggleFavourite
          toggleFavourite={toggleFavourite}
          id={params.id}
          userId={user?.id}
          isFavourite={workspace.isFavourite}
        />
        <MapSection />
      </div>
    </div>
  );
}

const getWorkspace = async (
  id: string,
  userId: string | undefined
): Promise<TWorkspace | null> => {
  const supabase = createClient();
  const { data: workspace } = await supabase
    .from("workspace")
    .select<any, TWorkspace>("*")
    .eq("id", id)
    .single();
  if (!workspace) return null;
  const { data: favourites } = await supabase
    .from("workspaceuser")
    .select<"workspace(id)", { workspace: { id: string } }>("workspace(id)")
    .eq("userId", userId);

  const favouriteIds = favourites?.map(({ workspace }) => workspace.id);

  const isFavourite = favouriteIds?.includes(workspace.id);

  return {
    ...workspace,
    isFavourite: !!isFavourite,
  };
};
