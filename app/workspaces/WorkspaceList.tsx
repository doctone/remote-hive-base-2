"use client";

import { TWorkspace as TWorkspace } from "./page";
import Notification from "../../components/Notification";
import WorkspaceCard from "./WorkspaceCard";

export function WorkspaceList({
  workspaces,

  userId,
}: {
  workspaces: TWorkspace[];

  userId: string;
}) {
  return (
    <div className="flex gap-10 flex-col w-full justify-center">
      {workspaces.map(({ id, title, description, imageUrl }) => (
        <WorkspaceCard
          key={id}
          id={id}
          description={description}
          title={title}
          imageUrl={imageUrl}
        />
      ))}
      <Notification />
    </div>
  );
}
