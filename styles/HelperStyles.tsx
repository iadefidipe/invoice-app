import styled, { css } from 'styled-components'

export const flex = css`
	display: flex;
	align-items: center;
`

export const Span = styled.span`
	@media (max-width: 468px) {
		display: none;
	}
`

export const Shadow =css`
	box-shadow: 0 8px 10px -10px rgba(72, 84, 159, 0.25);
`
