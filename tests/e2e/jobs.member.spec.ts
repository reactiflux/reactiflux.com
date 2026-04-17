import { test, expect } from "@playwright/test";
import jobsFixture from "../fixtures/jobs-hiring";
import identityFixture from "../fixtures/identity-ok";

const AUTHED_TOKEN = JSON.stringify({
  state: "ok",
  token: "Bearer fake-e2e-token",
  raw: "access_token=fake&token_type=Bearer&expires_in=3600",
});

test.describe("/jobs — authenticated member", () => {
  test.use({
    storageState: {
      cookies: [],
      origins: [
        {
          origin: "http://localhost:4321",
          localStorage: [{ name: "doa", value: AUTHED_TOKEN }],
        },
      ],
    },
  });

  test.beforeEach(async ({ page }) => {
    await page.route("**/.netlify/functions/discordIdentity", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(identityFixture),
      }),
    );
    await page.route("**/api/jobs/hiring*", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(jobsFixture),
      }),
    );
  });

  test("renders fetched job postings", async ({ page }) => {
    await page.goto("/jobs");

    await expect(page.getByText("Acme Corp")).toBeVisible();
    await expect(page.getByText("Globex Inc")).toBeVisible();
    await expect(
      page.getByText(/senior react engineer wanted at acme/i),
    ).toBeVisible();
  });
});
