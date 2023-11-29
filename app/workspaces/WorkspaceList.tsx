"use client";

import { Workspace } from "./page";

export function WorkspaceList({ workspaces }: { workspaces: Workspace[] }) {
  console.log(workspaces);

  return (
    <div>
      {workspaces.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
}
