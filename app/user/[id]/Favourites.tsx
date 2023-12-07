import React from "react";
import { TWorkspace } from "../../workspaces/page";

function Favourites({ workspaces }: { workspaces: TWorkspace[] }) {
  return (
    <div>
      {workspaces.map((workspace) => (
        <li key={workspace.id}>{workspace.title}</li>
      ))}
    </div>
  );
}

export default Favourites;
