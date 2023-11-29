import Link from "next/link";
import { BASE_URL } from "../api/route";
import { WorkspaceList } from "./WorkspaceList";

export default async function Page() {
  const data = await getWorkSpaces();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex my-10 h-16">
        <Link
          className="py-2 px-3 ml-10 flex justify-center items-center rounded-md no-underline hover:bg-btn-background-hover border"
          href="/"
        >
          Home
        </Link>
      </nav>
      <main>
        <h1 className="gap-20 text-3xl m-20">Workspaces</h1>
        <section>
          <WorkspaceList workspaces={data.workspaces} />
        </section>
      </main>
    </div>
  );
}

async function getWorkSpaces(): Promise<{
  workspaces: [{ id: string; title: string }];
}> {
  const data = await fetch(`${BASE_URL}/api/workspaces`);
  return data.json();
}
