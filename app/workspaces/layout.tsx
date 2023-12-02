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
      <main className="min-h-screen flex flex-col items-center">
        {children}
      </main>
    </>
  );
}
