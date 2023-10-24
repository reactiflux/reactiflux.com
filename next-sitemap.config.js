const { exec: origExec } = require("child_process");
const { promisify } = require("util");

const exec = promisify(origExec);

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.reactiflux.com",
  generateRobotsTxt: true, // (optional)
  priority: 1,
  autoLastmod: false,
  transform: async (config, url) => {
    if (url.includes("/blog/post/")) {
      return await transformBlogPost(url);
    }
    if (url.includes("/transcripts/")) {
      return await transformTranscript(url);
    }

    return {
      loc: url,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};

/**
 * These functions allow us to use real dates for the lastmod field in the sitemap, which should be helpful for SEO. Another approach here, rather than spawning a bunch of shells from node one by one, would be to add to our GitHub Action CI workflow to generate a file with all the dates in it, and then read that file in here. That would likely be faster, but this is fine for now.
 * `git-ls-tree` is a good starting point for that approach, to enumerate the files we need to check. https://serverfault.com/questions/401437/how-to-retrieve-the-last-modification-date-of-all-files-in-a-git-repository
 */
const fetchLastModified = async (path) => {
  const { stdout, stderr } = await exec(
    `git log -1 --pretty=format:'%aI' -- ${path}`,
  );
  if (stderr) {
    throw new Error(stderr);
  }
  return stdout;
};

const transformBlogPost = async (url) => {
  const filename = url.split("/blog/post/").pop();
  const date = await fetchLastModified(`./src/blog/${filename}.md`);

  return {
    loc: url,
    lastmod: date,
    changefreq: "monthly",
    priority: "0.7",
  };
};
const transformTranscript = async (url) => {
  const filename = url.split("/transcripts/").pop();
  const date = await fetchLastModified(`./src/transcripts/${filename}.md`);

  return {
    loc: url,
    lastmod: date,
    changefreq: "monthly",
    priority: "0.7",
  };
};
