import { useEffect, useMemo, useState } from "react";

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
type JobType = "hiring" | "forhire";
type PageSize = 10 | 25 | 50;

interface Filters {
  partTime: boolean;
  fullTime: boolean;
  visa: boolean;
  remote: boolean;
  internship: boolean;
}

const TAG_MATCHERS: Record<keyof Filters, RegExp> = {
  partTime: /\bpart[- ]?time\b/i,
  fullTime: /\bfull[- ]?time\b/i,
  visa: /\bvisa\b/i,
  remote: /\bremote\b/i,
  internship: /\bintern(ship)?\b/i,
};

function matchesFilters(post: JobPost, filters: Filters): boolean {
  const active = (Object.keys(filters) as (keyof Filters)[]).filter(
    (k) => filters[k],
  );
  if (active.length === 0) return true;
  const haystack = post.tags.join(" ") + " " + post.description;
  return active.every((k) => TAG_MATCHERS[k].test(haystack));
}

export default function JobSearch() {
  const [type, setType] = useState<JobType>("hiring");
  const [limit, setLimit] = useState<PageSize>(10);
  const [filters, setFilters] = useState<Filters>({
    partTime: false,
    fullTime: false,
    visa: false,
    remote: false,
    internship: false,
  });
  const [status, setStatus] = useState<Status>("pending");
  const [data, setData] = useState<JobsResponse | null>(null);

  useEffect(() => {
    let cancelled = false;
    setStatus("pending");
    fetch(`/api/jobs/${type}?limit=${limit}&page=1`)
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
  }, [type, limit]);

  const visiblePosts = useMemo(
    () => data?.data.filter((p) => matchesFilters(p, filters)) ?? [],
    [data, filters],
  );

  const toggle = (k: keyof Filters) =>
    setFilters((f) => ({ ...f, [k]: !f[k] }));

  return (
    <div className="grid gap-8 md:grid-cols-[220px_1fr]">
      <aside className="space-y-4">
        <PillSelect
          label="Type of listing"
          value={type}
          onChange={(v) => setType(v as JobType)}
          options={[
            { value: "hiring", label: "I'm looking for a job" },
            { value: "forhire", label: "I'm looking for an employee" },
          ]}
        />
        <PillSelect
          label="Page size"
          value={String(limit)}
          onChange={(v) => setLimit(Number(v) as PageSize)}
          options={[
            { value: "10", label: "load 10 results at a time" },
            { value: "25", label: "load 25 results at a time" },
            { value: "50", label: "load 50 results at a time" },
          ]}
        />
        <div className="space-y-2 pt-2">
          <Checkbox
            checked={filters.partTime}
            onChange={() => toggle("partTime")}
            label="Part time role"
          />
          <Checkbox
            checked={filters.fullTime}
            onChange={() => toggle("fullTime")}
            label="Full time role"
          />
          <Checkbox
            checked={filters.visa}
            onChange={() => toggle("visa")}
            label="Employer helps with visa"
          />
          <Checkbox
            checked={filters.remote}
            onChange={() => toggle("remote")}
            label="Accepts remote candidates"
          />
          <Checkbox
            checked={filters.internship}
            onChange={() => toggle("internship")}
            label="Offer is an internship / no exp. required"
          />
        </div>
      </aside>

      <section className="space-y-6">
        {status === "pending" && (
          <p className="text-foreground/60">Fetching posts&hellip;</p>
        )}
        {status === "error" && (
          <p>Something went wrong &mdash; please try again.</p>
        )}

        {status === "success" && visiblePosts.length === 0 && (
          <p>
            We couldn&rsquo;t find any results for your query &mdash; try
            something different!
          </p>
        )}

        {status === "success" &&
          visiblePosts.map((post) => (
            <JobCard
              key={`${post.author.id}-${post.createdAt}`}
              post={post}
            />
          ))}
      </section>
    </div>
  );
}

function PillSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-pink text-pink w-full appearance-none rounded-full border-2 bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2020%2020%22%20fill=%22%23dc1d64%22><path%20d=%22M5.5%207.5L10%2012l4.5-4.5z%22/></svg>')] bg-[length:20px] bg-[right_0.75rem_center] bg-no-repeat px-4 py-2 pr-10 text-sm focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label className="text-pink flex cursor-pointer items-start gap-2 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="border-pink text-pink focus:ring-pink mt-0.5 h-4 w-4 rounded border-2 accent-pink"
      />
      <span>{label}</span>
    </label>
  );
}

function JobCard({ post }: { post: JobPost }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="border-pink rounded-2xl border px-6 pt-4 pb-5">
      <header className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {post.author.avatar && (
            <img
              src={post.author.avatar}
              alt=""
              className="h-8 w-8 rounded-full"
            />
          )}
          <div className="text-sm">
            <strong className="text-pink font-accent">
              {post.author.displayName}
            </strong>
            <span className="text-foreground/70">
              {" "}
              on{" "}
              <a
                href={post.messageLink}
                className="text-pink hover:text-dark-pink hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </a>
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="border-pink text-pink hover:bg-pink hover:text-background rounded-full border px-3 py-1 text-xs whitespace-nowrap"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      </header>

      {(post.tags.length > 0 || post.reactions.length > 0) && (
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-pink text-background rounded-md px-2 py-0.5 text-xs font-semibold uppercase"
            >
              {tag}
            </span>
          ))}
          {post.reactions.map(([emoji, count]) => (
            <span
              key={emoji}
              className="border-pink text-foreground rounded-md border px-2 py-0.5 text-xs"
            >
              {emoji} {count}
            </span>
          ))}
        </div>
      )}

      <div
        className={
          expanded
            ? "prose-jobs"
            : "prose-jobs relative max-h-32 overflow-hidden after:absolute after:inset-x-0 after:bottom-0 after:h-12 after:bg-gradient-to-t after:from-background after:to-transparent after:content-['']"
        }
        dangerouslySetInnerHTML={{ __html: post.description }}
      />
    </article>
  );
}
