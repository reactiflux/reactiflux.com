import React from 'react';

import InternalLink, { LinkProps } from 'next/link';

interface Props extends LinkProps {
  newTab?: boolean;
  title?: string;
}

export function Link({
  children,
  newTab,
  href: origHref,
  ...props
}: React.PropsWithChildren<Props>) {
  const href = origHref.toString();
  const isInternal = href.startsWith('/');
  const toNewTab = newTab && !href.startsWith('#');

  return isInternal ? (
    <InternalLink {...props} href={href}>
      <a>{children}</a>
    </InternalLink>
  ) : (
    <a
      href={href.toString()}
      {...(toNewTab
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : undefined)}
      {...props}
    >
      {children}
    </a>
  );
}

Link.defaultProps = {
  newTab: true,
};
