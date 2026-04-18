import type { Context } from "@netlify/functions";

const CACHE_TTL_MS = 5 * 60 * 1000;
const cache = new Map<
  string,
  { expiresAt: number; status: number; body: string }
>();

const handler = async (request: Request, context: Context) => {
  // Inexplicably `$ netlify dev` seems to hard crash if an `Authentication`
  // header is present on an incoming request. So, hack
  const Authorization = request.headers.get("x-auth")!;

  const cached = cache.get(Authorization);
  if (cached && cached.expiresAt > Date.now()) {
    return new Response(cached.body, {
      status: cached.status,
      headers: { "Content-Type": "application/json", "x-cache": "HIT" },
    });
  }

  try {
    const [userRes, memberRes] = await Promise.all([
      fetch("https://discord.com/api/users/@me", {
        headers: { Authorization },
      }),
      fetch(
        "https://discord.com/api/users/@me/guilds/102860784329052160/member",
        { headers: { Authorization } },
      ),
    ]);
    console.log(
      `user: ${userRes.status} ${userRes.statusText}. member: ${memberRes.status} ${memberRes.statusText}`,
    );
    const [user, member] = await Promise.all([
      userRes.json(),
      memberRes.json(),
    ]);
    console.log("user object:", user);
    console.log("member object:", member);
    if (!memberRes.ok) {
      if (memberRes.status === 429) {
        return new Response(
          JSON.stringify({
            message: memberRes.statusText,
          }),
          { status: memberRes.status },
        );
      }
    }
    const body = JSON.stringify({
      user,
      isMember: memberRes.ok,
    });
    if (userRes.ok) {
      cache.set(Authorization, {
        expiresAt: Date.now() + CACHE_TTL_MS,
        status: 200,
        body,
      });
    }
    return new Response(body, {
      headers: { "Content-Type": "application/json", "x-cache": "MISS" },
    });
  } catch (e) {
    console.error("[DIS_ID]", e);
    return new Response(JSON.stringify(e), { status: 400 });
  }
};

export default handler;
