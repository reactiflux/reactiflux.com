import type { Context } from "@netlify/functions";

const handler = async (request: Request, context: Context) => {
  // Inexplicably `$ netlify dev` seems to hard crash if an `Authentication`
  // header is present on an incoming request. So, hack
  const Authorization = request.headers.get("x-auth")!;
  try {
    const [userRes, guildsRes] = await Promise.all([
      fetch("https://discord.com/api/users/@me", {
        headers: { Authorization },
      }),
      fetch("https://discord.com/api/users/@me/guilds", {
        headers: { Authorization },
      }),
    ]);
    const [user, guilds] = await Promise.all([
      userRes.json(),
      guildsRes.json(),
    ]);
    return new Response(
      JSON.stringify({
        user,
        isMember: guilds.some((g) => g.id === "102860784329052160"),
      }),
      {
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (e) {
    console.error("[DIS_ID]", e);
    return new Response(JSON.stringify(e), { status: 400 });
  }
};

export default handler;
