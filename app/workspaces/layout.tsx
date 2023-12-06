import { GeistSans } from "geist/font";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient as createClientFromCookies } from "@/utils/supabase/server";

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
    <div className="min-h-[90vh] w-full flex flex-col items-start">
      <div className="flex items-center w-full justify-between px-20">
        <div className="flex self-start text-3xl gap-10 m-10">
          <Link href="/workspaces">All Workspaces</Link>
          {user && (
            <Link href={`/user/${user.id}`} className="text-purple-800">
              My Workspaces
            </Link>
          )}
        </div>
        <div className="">
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
