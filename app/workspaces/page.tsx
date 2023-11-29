import { BASE_URL } from "../api/route";
import { WorkspaceList } from "./WorkspaceList";

export default async function Page() {
  const data = await getWorkSpaces();

  return (
    <main>
      <h1 className="gap-20 text-3xl m-20">Workspaces</h1>
      <section>
        <WorkspaceList workspaces={data.workspaces} />
      </section>
    </main>
  );
}

async function getWorkSpaces(): Promise<{
  workspaces: [{ id: string; title: string }];
}> {
  const data = await fetch(`${BASE_URL}/api/workspaces`);
  return data.json();
}
