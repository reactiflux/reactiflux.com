import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
);

const cache = new Map<string, string | undefined>();

/**
 * Returns the ISO-8601 date (%cI) of the most recent commit that touched the
 * given file, or `undefined` if the file is missing / has no git history.
 *
 * Path is resolved relative to the project root. Results are cached per build.
 */
export function gitLastModified(relativePath: string): string | undefined {
  if (cache.has(relativePath)) {
    return cache.get(relativePath);
  }

  const absolute = path.resolve(projectRoot, relativePath);

  if (!existsSync(absolute)) {
    cache.set(relativePath, undefined);
    return undefined;
  }

  try {
    const stdout = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", absolute],
      {
        cwd: projectRoot,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      },
    ).trim();

    const result = stdout.length > 0 ? stdout : undefined;
    cache.set(relativePath, result);
    return result;
  } catch {
    cache.set(relativePath, undefined);
    return undefined;
  }
}

/**
 * Given a URL pathname (e.g. `/blog/foo` or `/transcripts/bar`), find the
 * source file backing it and return its git lastmod date.
 */
export function lastModifiedForUrl(pathname: string): string | undefined {
  // Normalize: strip trailing slash (except root) and leading slash for matching
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  // Root: return the most recent date across index + all content
  if (normalized === "" || normalized === "/") {
    const candidates = [
      "src/pages/index.astro",
      "src/layouts/BaseLayout.astro",
    ];
    const dates = candidates
      .map((p) => gitLastModified(p))
      .filter((d): d is string => Boolean(d));
    if (dates.length === 0) return undefined;
    return dates.sort().at(-1);
  }

  const segments = normalized.replace(/^\//, "").split("/");

  // /blog/<slug>
  if (segments[0] === "blog" && segments.length === 2) {
    return gitLastModified(`src/content/blog/${segments[1]}.md`);
  }
  // /blog index
  if (segments[0] === "blog" && segments.length === 1) {
    return gitLastModified("src/pages/blog/index.astro");
  }

  // /transcripts/<slug>
  if (segments[0] === "transcripts" && segments.length === 2) {
    return gitLastModified(`src/content/transcripts/${segments[1]}.md`);
  }
  // /transcripts index
  if (segments[0] === "transcripts" && segments.length === 1) {
    return gitLastModified("src/pages/transcripts/index.astro");
  }

  // Single-segment md-pages (conduct, learning, tips, roles, tmir, etc.)
  if (segments.length === 1) {
    const mdPath = `src/content/md-pages/${segments[0]}.md`;
    const mdDate = gitLastModified(mdPath);
    if (mdDate) return mdDate;

    // Fall back to a static .astro page, if one exists
    const astroPath = `src/pages/${segments[0]}.astro`;
    return gitLastModified(astroPath);
  }

  // Generic fallback: try mapping the path directly to src/pages/<path>.astro
  const astroPath = `src/pages/${segments.join("/")}.astro`;
  return gitLastModified(astroPath);
}
