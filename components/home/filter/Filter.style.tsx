import styled from 'styled-components'
import { boolean } from 'yup'
import { flex } from '../../../styles/HelperStyles'
import { Heading4 } from '../../shared/Headings'
import Image from 'next/image'

interface FilterStyleType {
	open?: boolean
}

export const FilterWrapper = styled.div`
	position: relative;
`
export const Header = styled.button`
	${flex}
	width: max-content;
	height: 2rem;
	border: none;
	background: transparent;
	cursor: pointer;
	outline: none;
	img {
		transition: transform 0.3s;
	}
	:focus-visible {
		outline: 2px dotted #7c5dfa;
	}

	& > div {
	}
`
export const Heading = styled(Heading4)`
	margin-right: 0.75rem;

	@media only screen and (min-width: 550px) {
		margin-right: 1rem;
	}
`
export const ImageWrap = styled.div<FilterStyleType>`
	/* transform: rotate(180deg); */
	transition: transform 500ms;
	transform: ${(props) => (props.open ? 'rotate(-180deg)' : 'rotate(0)')};
`

export const FilterDrop = styled.div``
