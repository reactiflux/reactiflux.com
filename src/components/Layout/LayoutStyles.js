import styled, { css } from 'styled-components'

import { pink } from '@utils/theme'

export const mainPadding = css`
	padding: 10px;

	@media (min-width: 1200px) {
		padding: 10px calc(10px + ((100vw - 1200px) / 2));
	}
`

const homeTitleSize = size => `calc(${size}vw * 0.9)`
const homeTitleSizeMax = size => `calc(${size}px * 11.75)`

export const Main = styled.main`
	flex-grow: 1;

	${mainPadding}

	${props =>
		props.homepage
			? css`
					display: block;

					p {
						font-size: calc(17px + 1vw);
						font-weight: 500;
						line-height: 1.5;
					}

					a {
						display: inline-block;
						vertical-align: middle;
					}

					h1 {
						font-family: 'Space Mono', monospace;
						font-size: ${homeTitleSize(18)};
						letter-spacing: ${homeTitleSize(-1.3)};
						line-height: 1;
						position: relative;

						span {
							color: ${pink};
							font-family: 'Poppins', sans-serif;
							font-size: ${homeTitleSize(3.6)};
							font-weight: 600;
							left: ${homeTitleSize(69)};
							letter-spacing: 0;
							position: absolute;
							text-transform: uppercase;
							top: ${homeTitleSize(3)};
						}
					}

					@media (min-width: 1300px) {
						h1 {
							font-size: ${homeTitleSizeMax(18)};
							letter-spacing: ${homeTitleSizeMax(-1.3)};

							span {
								font-size: ${homeTitleSizeMax(3.6)};
								left: ${homeTitleSizeMax(69)};
								top: ${homeTitleSizeMax(3)};
							}
						}
					}
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
