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
interface DiscordIdentity {
  isMember: boolean;
  user?: {
    email: string;
    verified: boolean;
  };
}

const retrieveStoredToken = (): StoredToken | StoredTokenError | undefined => {
  const auth = localStorage.getItem("doa");
  if (auth) return JSON.parse(auth);
  return undefined;
};
const purgeToken = () => {
  localStorage.removeItem("doa");
};

type State =
  | "uninit"
  | "needsAuth"
  | "needsVerify"
  | "notMember"
  | "rateLimit"
  | "ok"
  | "err";

const checkAuth = async (
  stored?: StoredToken | StoredTokenError,
): Promise<State> => {
  if (!stored || stored.state !== "ok") return stored?.state ?? "uninit";
  const res = await fetch("/.netlify/functions/discordIdentity", {
    headers: { "x-auth": stored.token },
  });
  try {
    if (res.status === 401) {
      purgeToken();
      return "needsAuth";
    }
    if (res.status === 429) {
      return "rateLimit";
    }
    if (res.status !== 200) {
      return "err";
    }

    const loadedUser = (await res.json()) as DiscordIdentity;

    if (!loadedUser.isMember) {
      return "notMember";
    }
    return "ok";
  } catch (e) {
    console.error("error: ", e);
    return "err";
  }
};

export const DiscordAuth = ({ children }: Props) => {
  const [state, setState] = React.useState<State>("uninit");

  React.useEffect(() => {
    const onEvent = async (e: StorageEvent) => {
      if (e.key !== "doa") return;
      const token = retrieveStoredToken();
      setState(await checkAuth(token));
    };
    window.addEventListener("storage", onEvent);
    return () => window.removeEventListener("storage", onEvent);
  }, []);

  React.useEffect(() => {
    const storedToken = retrieveStoredToken();
    if (storedToken) {
      checkAuth(storedToken).then(setState);
      return;
    }
    setState("needsAuth");
  }, []);

  return (
    <>
      {(() => {
        switch (state) {
          case "rateLimit":
            return (
              <div>
                <p>
                  Oops! You got rate limited by Discord. Please try again in a
                  minute or two.
                </p>
              </div>
            );

          case "err":
            return (
              <div>
                <p>
                  Sorry! Something went wrong. Please consider{" "}
                  <a href="https://github.com/reactiflux/reactiflux.com/issues/new">
                    opening an issue
                  </a>{" "}
                  on GitHub.
                </p>
                <p>
                  <code>{localStorage.getItem("doa")}</code>
                </p>
                <Button
                  onClick={() => {
                    localStorage.removeItem("doa");
                    document.location.reload();
                  }}
                >
                  Reset and try again
                </Button>
              </div>
            );
          case "ok":
            return children;
          case "uninit":
            return "checking auth…";
          case "notMember":
            return (
              <div>
                You’re not a member of Reactiflux!{" "}
                <a href="https://discord.gg/reactiflux">Join us</a> if you like
                💁
              </div>
            );
          // case "needsVerify":
          //   return (
          //     <div>
          //       You don’t have a verified email associated with it. Please{" "}
          //       <a href="https://support.discord.com/hc/en-us/articles/213219267-Resending-Verification-Email">
          //         verify your email
          //       </a>{" "}
          //       and try again.
          //     </div>
          //   );
          case "needsAuth":
          default:
            return (
              <div>
                <p>
                  Hi! This is a community job board for members of Reactiflux,
                  the largest chat community of professional React developers.
                </p>
                <p>
                  Since we’re a Discord community, we require that you sign in
                  so we can verify that you’re a member of the community.
                </p>
                <Button
                  onClick={() => window.open("/.netlify/functions/discordAuth")}
                >
                  Sign in with Discord
                </Button>
                <p>
                  We’ll ask for permission to read your email and guild list, we
                  need those to confirm you have a verified email associated
                  with the account and that you’re a member of Reactiflux.
                </p>
              </div>
            );
        }
      })()}
    </>
  );
};
