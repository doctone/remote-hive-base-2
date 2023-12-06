"use client";

import { TWorkspace as TWorkspace } from "./page";
import Workspace from "./Workspace";

export function WorkspaceList({ workspaces }: { workspaces: TWorkspace[] }) {
  return (
    <div className="flex gap-10 flex-col w-full justify-center">
      {workspaces.map(({ id, title, description, imageUrl }) => (
        <Workspace
          key={id}
          id={id}
          description={description}
          title={title}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
}
