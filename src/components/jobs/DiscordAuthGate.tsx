import { useEffect, useState } from "react";
import JobSearch from "./JobSearch";

type State = "uninit" | "needsAuth" | "notMember" | "rateLimit" | "err" | "ok";

interface StoredToken {
  state: "ok" | "err" | "needsAuth" | "needsVerify" | "notMember" | "rateLimit";
  token?: string;
}

function readStored(): StoredToken | null {
  try {
    const raw = localStorage.getItem("doa");
    return raw ? (JSON.parse(raw) as StoredToken) : null;
  } catch {
    return null;
  }
}

async function checkAuth(): Promise<State> {
  const stored = readStored();
  if (!stored || stored.state !== "ok" || !stored.token) return "needsAuth";
  try {
    const res = await fetch("/.netlify/functions/discordIdentity", {
      headers: { "x-auth": stored.token },
    });
    if (res.status === 401) {
      localStorage.removeItem("doa");
      return "needsAuth";
    }
    if (res.status === 429) return "rateLimit";
    if (!res.ok) return "err";
    const body = (await res.json()) as { isMember: boolean };
    return body.isMember ? "ok" : "notMember";
  } catch {
    return "err";
  }
}

export default function DiscordAuthGate() {
  const [state, setState] = useState<State>("uninit");

  useEffect(() => {
    checkAuth().then(setState);
    const onStorage = (e: StorageEvent) => {
      if (e.key === "doa") checkAuth().then(setState);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (state === "uninit") {
    return <p className="text-gray-500">checking auth&hellip;</p>;
  }

  if (state === "ok") return <JobSearch />;

  if (state === "rateLimit") {
    return (
      <div className="rounded bg-yellow-50 p-4">
        <p>
          Oops! You got rate limited by Discord. Please try again in a minute or
          two.
        </p>
      </div>
    );
  }

  if (state === "err") {
    return (
      <div className="rounded bg-red-50 p-4">
        <p>
          Sorry! Something went wrong. Please consider{" "}
          <a
            className="underline"
            href="https://github.com/reactiflux/reactiflux.com/issues/new"
          >
            opening an issue
          </a>{" "}
          on GitHub.
        </p>
        <button
          type="button"
          className="mt-2 rounded border border-red-900 px-3 py-1"
          onClick={() => {
            localStorage.removeItem("doa");
            document.location.reload();
          }}
        >
          Reset and try again
        </button>
      </div>
    );
  }

  if (state === "notMember") {
    return (
      <div>
        You&rsquo;re not a member of Reactiflux!{" "}
        <a
          className="text-dark-pink underline"
          href="https://discord.gg/reactiflux"
        >
          Join us
        </a>{" "}
        if you like 💁
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p>
        Hi! This is a community job board for members of Reactiflux, the largest
        chat community of professional React developers.
      </p>
      <p>
        Since we&rsquo;re a Discord community, we require that you sign in so we
        can verify that you&rsquo;re a member of the community.
      </p>
      <button
        type="button"
        onClick={() => window.open("/.netlify/functions/discordAuth")}
        className="rounded-full border-2 border-pink bg-pink px-6 py-2 font-semibold text-background hover:border-dark-pink hover:bg-dark-pink"
      >
        Sign in with Discord
      </button>
      <p className="text-sm text-gray-500">
        We&rsquo;ll ask for permission to read your email and guild list, we
        need those to confirm you have a verified email associated with the
        account and that you&rsquo;re a member of Reactiflux.
      </p>
    </div>
  );
}
