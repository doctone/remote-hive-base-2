import { render, screen } from "@testing-library/react";
import { WorkspaceList } from "./WorkspaceList";
import { describe, expect, it } from "vitest";

describe("Workspaces", () => {
  it("renders list", () => {
    render(<WorkspaceList workspaces={[{ id: "test", title: "test" }]} />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
