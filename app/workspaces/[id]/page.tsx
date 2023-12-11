import { createClient } from "../../../utils/supabase/client";
import { TWorkspace } from "../page";
import Rating from "../Rating";
import RatingSummary from "../RatingSummary";

export default async function WorkspacePage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getWorkspace(params.id);
  if (!data) return <div>Workspace not found</div>;
  const workspace = data[0];
  return (
    <div className="flex md:px-20 flex-col md:flex-row items-center md:items-start">
      <div className="w-3/4 md:w-1/2 rounded flex flex-col gap-5">
        <img src={workspace.imageUrl} alt="" className="rounded-2xl" />
        <RatingSummary />
      </div>
      <div className="md:w-1/2 p-5 flex flex-col gap-5">
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
      </div>
    </div>
  );
}

const getWorkspace = async (id: string): Promise<TWorkspace[] | null> => {
  const supabase = createClient();
  const { data: workspace } = await supabase
    .from("workspace")
    .select<any, TWorkspace>("*")
    .eq("id", id);
  return workspace;
};
