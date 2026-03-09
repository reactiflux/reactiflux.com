import React from "react";

const DiscordCB = () => {
  React.useEffect(() => {
    const token = window.location.hash.slice(1);
    const authorization = Object.fromEntries(
      new URLSearchParams(token).entries(),
    );

    fetch("/.netlify/functions/discordIdentity", {
      headers: {
        "x-auth": `${authorization.token_type} ${authorization.access_token}`,
      },
    })
      .then(async (res) => {
        if (res.status !== 200) {
          localStorage.setItem(
            "doa",
            JSON.stringify({
              state: "err",
              message: "Something went wrong with the request",
              raw: new Error(await res.text()),
            }),
          );
        }
        const identity = await res.json();
        if (!identity?.user?.email || !identity?.user?.verified) {
          localStorage.setItem(
            "doa",
            JSON.stringify({
              state: "needsVerify",
              message: "This account does not have a verified email address",
            }),
          );
          window.close();
          return;
        }
        localStorage.setItem(
          "doa",
          JSON.stringify({
            state: "ok",
            token: `${authorization.token_type} ${authorization.access_token}`,
            raw: token,
          }),
        );
        window.close();
      })
      .catch((e) => {
        console.error(e);
        localStorage.setItem(
          "doa",
          JSON.stringify({
            state: "err",
            message: e instanceof Error ? e.message : e.toString(),
            raw: e,
          }),
        );
        window.close();
      });
  });
  return null;
};

export default DiscordCB;
