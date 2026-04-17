import { test, expect } from "@playwright/test";

test.describe("/auth/discordcb — OAuth callback", () => {
  test("stores a Bearer token in localStorage.doa from the URL fragment", async ({
    page,
  }) => {
    const hash =
      "#token_type=Bearer&access_token=fake-access-token&expires_in=604800&scope=email+guilds.members.read+identify+guilds";

    await page.goto(`/auth/discordcb${hash}`);

    const doa = await page.evaluate(() => localStorage.getItem("doa"));
    expect(doa, "localStorage.doa should be set").toBeTruthy();

    const parsed = JSON.parse(doa!);
    expect(parsed.state).toBe("ok");
    expect(parsed.token).toBe("Bearer fake-access-token");
  });

  test("records an error state when the fragment has no access_token", async ({
    page,
  }) => {
    await page.goto("/auth/discordcb#error=access_denied");

    const doa = await page.evaluate(() => localStorage.getItem("doa"));
    expect(doa).toBeTruthy();

    const parsed = JSON.parse(doa!);
    expect(parsed.state).toBe("err");
  });
});
