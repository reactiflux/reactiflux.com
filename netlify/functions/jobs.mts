import type { Config, Context } from "@netlify/functions";

const handler = async (request: Request, context: Context) => {
  const { type } = context.params;

  const { searchParams } = new URL(request.url);

  const limit = searchParams.get("limit");
  const page = searchParams.get("page");

  return fetch(
    `https://api.reactiflux.com/jobs/${type}?limit=${limit}&page=${page}`,
    { headers: { "api-key": process.env.REACTIBOT_API_KEY || "" } },
  );
};

export default handler;

export const config: Config = {
  path: "/api/jobs/:type",
};
