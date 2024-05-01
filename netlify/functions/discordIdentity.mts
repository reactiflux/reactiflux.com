import type { Context } from "@netlify/functions";

const handler = async (request: Request, context: Context) => {
  // Inexplicably `$ netlify dev` seems to hard crash if an `Authentication`
  // header is present on an incoming request. So, hack
  const Authorization = request.headers.get("x-auth")!;
  try {
    const res = await fetch("https://discord.com/api/users/@me", {
      headers: { Authorization },
    });
    // Why the heck can't I just return the result of `fetch()`
    // Produced weird content decode errors but everything seemed fine
    return new Response(await res.text(), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[DIS_ID]", e);
    return new Response(JSON.stringify(e), { status: 400 });
  }
};

export default handler;
