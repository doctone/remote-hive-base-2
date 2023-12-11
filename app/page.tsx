import Home from "@/components/Home";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center bg-center bg-no-repeat bg-[url('https://www.dpsolutions.com/hs-fs/hubfs/remote-workspaces.jpg?width=2121&height=1414&name=remote-workspaces.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Home />
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
