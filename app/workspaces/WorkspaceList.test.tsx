import { render, screen } from "@testing-library/react";
import { WorkspaceList } from "./WorkspaceList";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

describe("Workspaces", () => {
  it("renders list", () => {
    render(
      <WorkspaceList
        userId="test"
        workspaces={[
          {
            id: "test",
            title: "test",
            description: "this describes my workspaces",
            imageUrl: "",
            isFavourite: false,
          },
        ]}
      />
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
