export default async function Page() {
  const workspaces = await getWorkSpaces();

  return (
    <main>
      <h1 className="gap-20 text-3xl m-20">Workspaces</h1>
      <section>{JSON.stringify(workspaces, null, 2)}</section>
    </main>
  );
}

async function getWorkSpaces(): Promise<[{ id: string; title: string }]> {
  const data = await fetch("http://localhost:3000/api/workspaces");
  return data.json();
}
