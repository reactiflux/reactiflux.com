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

  try {
    // // Make the request using fetch
    const response = await fetch(
      `https://api.airtable.com/v0/${base}/${table}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_RECORD}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          performUpsert: {
            fieldsToMergeOn: ["id"],
          },
          records: [
            {
              fields: {
                id,
                ...data,
              },
            },
          ],
        }),
      },
    );
    const output = await response.json();
    console.log(output);
    return new Response("ok");
  } catch (e) {
    return new Response(JSON.stringify(e), { status: 400 });
  }
};

export default handler;
