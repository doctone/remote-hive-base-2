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
    <>
      <main className="min-h-screen w-full flex flex-col items-start">
        <div className="flex self-start text-3xl gap-10 m-10">
          <Link href="/workspaces">All Workspaces</Link>
          {user && (
            <Link href={`/workspaces/${user.id}`} className="text-purple-800">
              My Workspaces
            </Link>
          )}
        </div>
        {children}
      </main>
    </>
  );
}
