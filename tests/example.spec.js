// @ts-check
const { test, expect } = require("@playwright/test");

test("login", async ({ page }) => {
  await page.goto("https://peak-district-pilates-classes.vercel.app/login");

  // Get page elements
  const loginField = page.locator('[placeholder="you@example.com"]');
  const passwordField = page.locator('[placeholder="••••••••"]');
  const signInButton = page.locator('button:has-text("Sign In")');

  // Fill in login details and sign in
  await loginField.fill("jackgrinshaw@gmail.com");
  await passwordField.fill("password");
  await signInButton.click();

  // Wait for navigation to complete
  await page.waitForNavigation();

  // Check if login was successful by verifying the title
  const title = await page.locator('h1:has-text("Peak District Pilates")');
  await expect(title).toHaveText("Peak District Pilates");

  // Log out
  const logOutButton = page.locator('button:has-text("Logout")');
  await logOutButton.click();
  await page.waitForNavigation();
});
