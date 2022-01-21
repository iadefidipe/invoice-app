import styled, { css } from 'styled-components'
import { Heading1 } from '../../shared/Headings'
import { fontStylesA } from '../../shared/typography'
import { flex } from '../../../styles/HelperStyles'
import { ButtonPlus } from '../../shared/Buttons'

export const HeaderWrapper = styled.header`
	${flex}
	position: relative;
	justify-content: space-between;
	margin: 2rem 0;
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`
export const Heading = styled(Heading1)``
export const SubHeading = styled.p`
	${fontStylesA}
`
export const InnerWrapper = styled.div`
	${flex}
	position: relative;
	gap: 18px;

	@media (min-width: 768px) {
		gap: 40px;
	}
`
export const Button = styled(ButtonPlus)``
