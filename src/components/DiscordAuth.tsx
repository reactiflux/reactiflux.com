import React from "react";
import { Button } from "./Button";

interface Props {
  children: React.ReactChildren;
}

interface StoredToken {
  state: "ok";
  token: string;
  raw: string;
}
interface StoredTokenError {
  state: "err";
  message: string;
  raw: Error;
}
interface DiscordUser {
  email: string;
  verified: boolean;
}

const retrieveStoredToken = (): StoredToken | StoredTokenError | undefined => {
  const auth = localStorage.getItem("doa");
  if (auth) return JSON.parse(auth);
  return undefined;
};

type State = "uninit" | "needsAuth" | "needsVerify" | "ok";

export const DiscordAuth = ({ children }: Props) => {
  const [state, setState] = React.useState<State>("uninit");
  const [stored, setStored] = React.useState<StoredToken | StoredTokenError>();

  React.useEffect(() => {
    const storedToken = retrieveStoredToken();
    if (storedToken) {
      setStored(storedToken);
      return;
    }

    const onEvent = (e: StorageEvent) => {
      if (e.key !== "doa") return;
      setStored(retrieveStoredToken());
    };
    window.addEventListener("storage", onEvent);
    setState("needsAuth");
    return () => window.removeEventListener("storage", onEvent);
  }, []);

  React.useEffect(() => {
    if (!stored || stored.state !== "ok") return;
    (async () => {
      console.log("fetching");
      const res = await fetch("/.netlify/functions/discordIdentity", {
        headers: { "x-auth": stored.token },
      });
      const loadedUser = (await res.json()) as DiscordUser;
      if (!loadedUser.email || !loadedUser.verified) {
        setState("needsVerify");
      } else {
        setState("ok");
      }
    })();
  }, [stored]);

  switch (state) {
    case "ok":
      return children;
    case "uninit":
      return "checking auth…";
    case "needsVerify":
      return (
        <>
          This Discord account does not have a verified email associated with
          it. Please{" "}
          <a href="https://support.discord.com/hc/en-us/articles/213219267-Resending-Verification-Email">
            verify your email
          </a>{" "}
          and try again.
        </>
      );
    case "needsAuth":
    default:
      return (
        <div>
          <Button
            onClick={() => window.open("/.netlify/functions/discordAuth")}
          >
            Auth
          </Button>
        </div>
      );
  }
};
