import { test, expect } from "@playwright/test";

test("homepage loads with correct title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Rozx/i);
  await expect(page.locator("h1")).toBeVisible();
});

test("trial page redirects to live registration platform", async ({ page }) => {
  await page.goto("/start-trial");
  await expect(page).toHaveURL(/.*app\.rozx\.in\/register.*/);
});

test("pricing page loads with plan cards", async ({ page }) => {
  await page.goto("/pricing");
  await expect(page.locator("h1")).toContainText(/pricing/i);
});

test("legal pages render content", async ({ page }) => {
  for (const path of ["/privacy", "/terms", "/cookies", "/refund-policy"]) {
    await page.goto(path);
    await expect(page.locator("h1")).toBeVisible();
  }
});
