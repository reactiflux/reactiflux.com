import type { Context } from "@netlify/functions";

import ClientOAuth2 from "client-oauth2";

export const discordOAuth = new ClientOAuth2({
  clientId: "644375510725689369",
  clientSecret: process.env.DISCORD_SECRET,
  accessTokenUri: "https://discord.com/api/oauth2/token",
  authorizationUri: "https://discord.com/oauth2/authorize",
  redirectUri: `${
    //  process.env.NETLIFY ? "https://www.reactiflux.com" : "http://localhost:8888"
    "https://www.reactiflux.com"
  }/auth/discordcb`,
  scopes: ["email", "guilds.members.read", "identify"],
});

const handler = async (request: Request, context: Context) => {
  return Response.redirect(discordOAuth.token.getUri());
};

export default handler;
