import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient as createClientFromCookies } from "@/utils/supabase/server";
import Tabs from "../../components/Tabs";

export default async function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const supabase = createClientFromCookies(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }
  return (
    <div className="min-h-[90vh] mt-5 w-full flex flex-col items-start">
      <div className="mb-5 flex items-center w-full justify-between md:px-20 md:gap-10 flex-col md:flex-row">
        <Tabs userId={user.id} />
        <div className="mt-5 px-5">
          <Link
            className="bg-purple-700 rounded-md px-4 py-2 text-foreground mb-2"
            href={`/workspaces/create`}
          >
            + Add a workspace{" "}
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
}
