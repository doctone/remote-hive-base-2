import Link from "next/link";
import { WorkspaceList } from "./WorkspaceList";
import { createClient } from "../../utils/supabase/client";
import { createClient as createClientFromCookies } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type Workspace = { id: string; title: string; description: string };

export default async function Page() {
  const workspaces = await getWorkSpaces();
  const cookieStore = cookies();
  const supabase = createClientFromCookies(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-evenly border-b border-b-foreground/10 h-16">
        <Link
          className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover flex items-center"
          href="/"
        >
          Home
        </Link>
        {user && (
          <div className="flex items-center gap-4">Hey, {user.email}!</div>
        )}
      </nav>
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
