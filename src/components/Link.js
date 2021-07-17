import React from "react";

import { Link as InternalLink } from "gatsby";

export function Link({ children, newTab, to, ...props }) {
  const isInternal = to.startsWith("/");
  const toNewTab = newTab && !to.startsWith("#");

  return isInternal ? (
    <InternalLink to={to} {...props}>
      {children}
    </InternalLink>
  ) : (
    <a
      href={to}
      target={toNewTab ? "_blank" : null}
      rel={toNewTab ? "noopener noreferrer" : null}
      {...props}
    >
      {children}
    </a>
  );
}

Link.defaultProps = {
  newTab: true,
};
