import { test, expect } from "@playwright/test";

test.describe("/jobs — logged out", () => {
  test("shows a Sign in with Discord button when no session is present", async ({
    page,
  }) => {
    await page.goto("/jobs");
    await expect(
      page.getByRole("button", { name: /sign in with discord/i }),
    ).toBeVisible();
  });
});
