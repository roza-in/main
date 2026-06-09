import { test, expect } from "@playwright/test";

test("homepage loads with correct title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Rozx/i);
  await expect(page.locator("h1")).toBeVisible();
});

test("trial page loads and form is visible", async ({ page }) => {
  await page.goto("/start-trial");
  await expect(page.locator('input[id="email"]')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toBeVisible();
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
