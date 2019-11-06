import styled, { css } from 'styled-components'

export const Main = styled.main`
	padding: 10px;

	@media (min-width: 1200px) {
		padding: 10px calc(10px + ((100vw - 1200px) / 2));
	}

	${props =>
		props.homepage
			? css`
				display: block;
`
			: css`
				@media (min-width: 820px) {
					display: grid;
					grid-template-columns: 1fr 2fr;

					> * {
						grid-column: 2;
						grid-row: 2;
					}

					> :not(nav):last-child {
						transform: translateX(-25%);
					}

					> h1:first-child {
						grid-column: 1 / span 2;
						grid-row: 1;
					}

					> nav {
						grid-column: 1;
						grid-row: 2;
					}
				}
`}
`
