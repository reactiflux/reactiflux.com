import type { Context } from "@netlify/functions";

const handler = async (request: Request, context: Context) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const {
    meta,
    data: { id, ...data },
  } = await request.json();
  const { base, table } = meta;

  console.log({ data, url: `https://api.airtable.com/v0/${base}/${table}` });

  // // Make the request using fetch
  fetch(`https://api.airtable.com/v0/${base}/${table}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_RECORD}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        id,
        ...data,
      },
    }),
  })
    .then((response) => response.json()) // Convert the response to JSON
    .then((data) => {
      // Handle the data from the response
      console.log(data);
    });
  // ..
  return new Response("ok");
};

export default handler;
