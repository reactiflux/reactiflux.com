import { useEffect, useState } from "react";

interface JobPost {
  tags: string[];
  type: "hiring" | "forhire";
  createdAt: string;
  description: string;
  messageLink: string;
  reactions: [string, number][];
  author: {
    id: string;
    username: string;
    displayName: string;
    avatar: string;
  };
}

interface JobsResponse {
  count: number;
  page: number;
  pages: number;
  limit: number;
  data: JobPost[];
}

type Status = "pending" | "success" | "error";

export default function JobSearch() {
  const [type, setType] = useState<"hiring" | "forhire">("hiring");
  const [status, setStatus] = useState<Status>("pending");
  const [data, setData] = useState<JobsResponse | null>(null);

  useEffect(() => {
    let cancelled = false;
    setStatus("pending");
    fetch(`/api/jobs/${type}?limit=10&page=1`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<JobsResponse>;
      })
      .then((d) => {
        if (cancelled) return;
        setData(d);
        setStatus("success");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [type]);

  return (
    <div>
      <div className="mb-6">
        <label className="block">
          <span className="sr-only">Looking for</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as "hiring" | "forhire")}
            className="rounded border border-gray-300 px-3 py-2"
          >
            <option value="hiring">I&rsquo;m looking for a job</option>
            <option value="forhire">I&rsquo;m looking for an employee</option>
          </select>
        </label>
      </div>

      {status === "pending" && <p>Fetching posts&hellip;</p>}
      {status === "error" && (
        <p>Something went wrong &mdash; please try again.</p>
      )}

      {status === "success" &&
        data?.data.map((post) => (
          <article
            key={`${post.author.id}-${post.createdAt}`}
            className="mt-10 border-t-2 border-pink pb-7"
          >
            <header className="flex items-center gap-2 py-3">
              {post.author.avatar && (
                <img
                  src={post.author.avatar}
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
              )}
              <div>
                <strong>{post.author.displayName}</strong> on{" "}
                <a
                  href={post.messageLink}
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </a>
              </div>
            </header>
            {post.tags.length > 0 && (
              <ul className="mb-2 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li key={tag} className="rounded bg-pink/10 px-2 text-sm">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            {post.reactions.length > 0 && (
              <ul className="mb-2 flex flex-wrap gap-2">
                {post.reactions.map(([emoji, count]) => (
                  <li key={emoji} className="rounded bg-gray-100 px-2 text-sm">
                    {emoji} {count}
                  </li>
                ))}
              </ul>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.description }} />
          </article>
        ))}

      {status === "success" && data?.data.length === 0 && (
        <p>
          We couldn&rsquo;t find any results for your query &mdash; try
          something different!
        </p>
      )}
    </div>
  );
}
