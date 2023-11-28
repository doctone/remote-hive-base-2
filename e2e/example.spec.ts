import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/RemoteHive/);
});

test("workspaces", async ({ page }) => {
  await page.goto("/workspaces");

  await expect(page.getByRole("heading", { name: "Workspaces" })).toBeVisible();
});
