import styled, { css } from 'styled-components'

export const mainPadding = css`
	padding: 10px;

	@media (min-width: 1200px) {
		padding: 10px calc(10px + ((100vw - 1200px) / 2));
	}
`

export const Main = styled.main`
	flex-grow: 1;

	${mainPadding}

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

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: ${props =>
		props.theme.mobilePadding
			? `calc(100vh - ${props.theme.mobilePadding})`
			: '100vh'};
`
