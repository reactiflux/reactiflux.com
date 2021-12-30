import React, { ImgHTMLAttributes } from "react";

// Unfortunately Next doesn't do any image processing for `next export` and
// blows up if you try to use it. Swap it out for a dead-simple image with no
// optimization
export default function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img {...props} />;
}
