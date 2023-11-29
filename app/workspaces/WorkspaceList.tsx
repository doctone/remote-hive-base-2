"use client";

export function WorkspaceList({
  workspaces,
}: {
  workspaces: [{ id: string; title: string }];
}) {
  return (
    <div>
      {workspaces.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
}
