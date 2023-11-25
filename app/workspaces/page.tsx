import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

type Workspace = {
  id: string;
  title: string;
};

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: workspaces } = await supabase
    .from("workspace")
    .select<"workspace", Workspace>();

  return (
    <main>
      <h1 className="gap-20 text-3xl m-20">Workspaces</h1>
      <section>
        {workspaces?.map(({ id, title }) => (
          <h2 key={id}>{title}</h2>
        ))}
      </section>
    </main>
  );
}
