import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Favicon from "assets/favicon.png";

export const SITE_URL = "https://www.reactiflux.com";
export const SITE_NAME = "Reactiflux";
export const SITE_DESCRIPTION =
  "Reactiflux is a Discord community of React and JavaScript developers. Ask questions, get help, talk shop, and join live Q&As and the This Month in React podcast.";

// Absolute and on www, the host the site is served from. Deploy previews still
// point here, which is fine: crawlers only ever see production.
const BANNER = `${SITE_URL}/logo-banner.png`;

/** The URL this page is canonically served at: no query, hash or trailing slash. */
function canonicalUrl(asPath) {
  const path = asPath.split(/[?#]/)[0].replace(/(.)\/+$/, "$1");
  return `${SITE_URL}${path}`;
}

export function SEO({
  description,
  image,
  meta,
  keywords,
  title,
  noindex,
  structuredData,
}) {
  const { asPath } = useRouter();
  const url = canonicalUrl(asPath);
  // Bare titles like "Jobs" or "Transcripts" say nothing in a search result
  // or a browser tab full of them, so name the site unless the title already does.
  const fullTitle = !title
    ? SITE_NAME
    : title.includes(SITE_NAME)
    ? title
    : `${title} · ${SITE_NAME}`;
  const desc = description || SITE_DESCRIPTION;
  const img = image || BANNER;

  return (
    <Head>
      {[
        { name: `description`, content: desc },
        { property: `og:title`, content: fullTitle },
        { property: `og:description`, content: desc },
        { property: `og:url`, content: url },
        { property: `og:site_name`, content: SITE_NAME },
        { property: `og:type`, content: `website` },
        { property: `og:image`, content: img },
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:site`, content: `@reactiflux` },
        { name: `twitter:title`, content: fullTitle },
        { name: `twitter:description`, content: desc },
        { name: `twitter:image`, content: img },
      ]
        .concat(noindex ? { name: `robots`, content: `noindex` } : [])
        .concat(
          keywords.length > 0
            ? { name: `keywords`, content: keywords.join(`, `) }
            : [],
        )
        .concat(meta)
        .map((m) => (
          <meta key={m.name ?? m.property} {...m} />
        ))}
      {/* A noindexed page asking to be canonical sends Google mixed signals. */}
      {noindex ? null : <link rel="canonical" href={url} />}
      <link rel="icon" href={Favicon.src} type="image/png" />
      <title>{fullTitle}</title>
      {structuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // `<` escaped so a string in the data can't close the script tag.
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
    </Head>
  );
}

SEO.defaultProps = {
  meta: [],
  keywords: [],
};
