import { test, expect } from "@playwright/test";

test("dashboard renders key sections", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Performance Overview" })).toBeVisible();
  await expect(page.getByText("Monthly Recurring Revenue")).toBeVisible();
  await expect(page.getByText("Channel Performance")).toBeVisible();
  await expect(page.getByText("Top Customers")).toBeVisible();
});
