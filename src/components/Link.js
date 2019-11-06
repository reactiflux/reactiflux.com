import React from 'react'

import { Link as InternalLink } from 'gatsby'

export function Link({ children, newTab, to, ...props }) {
	const isInternal = to.startsWith('/')

	return isInternal ? (
		<InternalLink to={to} {...props}>
			{children}
		</InternalLink>
	) : (
		<a
			href={to}
			target={newTab ? '_blank' : null}
			rel={newTab ? 'noopener noreferrer' : null}
			{...props}
		>
			{children}
		</a>
	)
}

Link.defaultProps = {
	newTab: true,
}
