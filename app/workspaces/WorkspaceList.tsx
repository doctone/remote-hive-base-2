"use client";

import { TWorkspace as TWorkspace } from "./page";
import Workspace from "./Workspace";
import Notification from "../../components/Notification";

export function WorkspaceList({
  workspaces,

  userId,
}: {
  workspaces: TWorkspace[];

  userId: string;
}) {
  return (
    <div className="flex gap-10 flex-col w-full justify-center">
      {workspaces.map(({ id, title, description, imageUrl, isFavourite }) => (
        <Workspace
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
