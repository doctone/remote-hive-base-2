describe("workspace page", () => {
  it("renders a list of workspaces", () => {
    cy.visit("/workspaces");
    cy.get("h1").should("contain", "Workspaces");
  });
});
