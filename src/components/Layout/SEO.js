import React from "react";
import Head from "next/head";

import Favicon from "assets/favicon.png";

// This will be broken on previews cuz fuck you it's easy
const banner = "https://reactiflux.com/logo-banner.png";

export function SEO({ description, image, lang, meta, keywords, title }) {
  return (
    <Head>
      {[
        { name: `description`, content: description },
        { property: `og:title`, content: title },
        { property: `og:image`, content: banner },
        { property: `og:description`, content: description },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:title`, content: title },
        { name: `twitter:image`, content: banner },
        { name: `twitter:description`, content: description },
      ]
        .concat(
          keywords.length > 0
            ? { name: `keywords`, content: keywords.join(`, `) }
            : [],
        )
        .concat(image ? { property: `og:image`, content: image } : [])
        .concat(meta)
        .map((m, index) => (
          <meta key={index} {...m} />
        ))}
      {[{ rel: "icon", href: Favicon.src, type: "image/png" }].map((x, i) => (
        <link key={i} {...x} />
      ))}
      <title>{title}</title>
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};
