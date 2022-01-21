import styled from 'styled-components'
import { Heading2 } from 'components/shared/Headings'
import { fontStylesA } from 'components/shared/typography'
import { motion } from 'framer-motion'
import InvoiceStatus from 'components/shared/InvoiceStatus'

export const StyledLink = styled(motion.a)`
	display: grid;
	grid-template-rows: max-content 1fr;
	width: 100%;
	border: 1px solid transparent;
	border-radius: 8px;
	padding: 1rem 1.5rem;
	background: ${(props) => props.theme.color.invoiceItem.bg};

	text-decoration: none;
	transition: border 0.3s, background 0.3s;
	cursor: pointer;
	:hover {
		border-color: #7c5dfa;
	}
	:focus-visible {
		outline: 2px dotted #7c5dfa;
	}
	@media only screen and (min-width: 768px) {
		grid-template-columns: 5rem 9rem 1fr min-content min-content min-content;
		grid-template-rows: min-content;
		align-items: center;
	}
`

export const Id = styled(Heading2)`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	margin-bottom: 1.5rem;
	font-size: 0.75rem;
	span {
		color: #7e88c3;
	}
	@media only screen and (min-width: 768px) {
		margin-bottom: initial;
	}
`

export const PaymentDue = styled.div`
	${fontStylesA}
	@media only screen and (min-width: 768px) {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	}
`

export const ClientName = styled.div`
	grid-column: 2 / 3;
	grid-row: 1 / 2;
	${fontStylesA}
	color: ${(props) => props.theme.color.text.bodyB};
	text-align: end;
	@media only screen and (min-width: 768px) {
		grid-column: 3 / 4;
		grid-row: 1 / 2;
		margin-right: 2rem;
		text-align: initial;
	}
`

export const Total = styled(Heading2)`
	font-size: 1rem;
	@media only screen and (min-width: 768px) {
		grid-column: 4 / 5;
		grid-row: 1 / 2;
	}
`

export const StyledInvoiceStatus = styled(InvoiceStatus)`
	grid-column: 2 / 3;
	grid-row: 2 / 4;
	margin-left: auto;
	@media only screen and (min-width: 768px) {
		grid-column: 5 / 6;
		grid-row: 1 / 2;
		margin-left: 2rem;
		margin-right: 1rem;
	}
`

export const Arrow = styled.div`
	border: 2px solid red;
	display: none;

	@media (min-width: 768px) {
		display: initial;
		grid-column: 6 / 7;
		grid-row: 1 / 2;
	}
`

export const animation = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
}
