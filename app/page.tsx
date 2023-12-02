import Header from "@/components/Header";
import WorkspaceButton from "../components/WorkspaceButton";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
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
