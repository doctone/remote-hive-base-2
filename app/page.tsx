import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import WorkspaceButton from "../components/WorkspaceButton";
import { canInitSupabaseClient } from "../utils/supabase/client";

export default async function Index() {
  const cookieStore = cookies();

  const isSupabaseConnected = canInitSupabaseClient(cookieStore);

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header />
        <WorkspaceButton />
        <main className="flex-1 flex flex-col gap-6"></main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Built By{" "}
          <a
            href="https://github.com/doctone"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Sam James
          </a>
        </p>
      </footer>
    </div>
  );
}
