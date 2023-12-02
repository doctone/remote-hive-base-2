import { render, screen } from "@testing-library/react";
import { WorkspaceList } from "./WorkspaceList";
import { describe, expect, it } from "vitest";

describe("Workspaces", () => {
  it("renders list", () => {
    render(
      <WorkspaceList
        workspaces={[
          {
            id: "test",
            title: "test",
            description: "this describes my workspaces",
          },
        ]}
      />
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
