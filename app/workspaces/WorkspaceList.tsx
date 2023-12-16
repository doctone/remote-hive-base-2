"use client";

import { TWorkspace as TWorkspace } from "./page";
import Notification from "../../components/Notification";
import WorkspaceCard from "./WorkspaceCard";

export function WorkspaceList({
  workspaces,
}: {
  workspaces: TWorkspace[];

  userId: string;
}) {
  return (
    <div className="flex gap-10 flex-col w-full justify-center">
      {workspaces.map((workspace) => (
        <WorkspaceCard key={workspace.id} workspace={workspace} />
      ))}
      <Notification />
    </div>
  );
}
