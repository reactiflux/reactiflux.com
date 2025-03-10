import type { Context } from "@netlify/functions";

const handler = async (request: Request, context: Context) => {
  // Inexplicably `$ netlify dev` seems to hard crash if an `Authentication`
  // header is present on an incoming request. So, hack
  const Authorization = request.headers.get("x-auth")!;
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
    return new Response(
      JSON.stringify({
        user,
        isMember: memberRes.ok,
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
