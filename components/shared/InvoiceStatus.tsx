import styled from 'styled-components'
import { fontStylesA } from './typography'

interface InvoiceStatusType {
	status: string
	className?: string
}

const Wrapper = styled.div<InvoiceStatusType>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 6.5rem;
	height: 2.5rem;
	border-radius: 6px;
	background: ${(props) => {
		if (props.status === 'paid') return 'rgba(51, 214, 159, .06)'
		if (props.status === 'pending') return 'rgba(255, 143, 0, .06)'
		if (props.status === 'draft') return props.theme.color.invoiceStatus.bg
	}};
`

const Circle = styled.div<InvoiceStatusType>`
	width: 0.5rem;
	height: 0.5rem;
	margin-right: 0.5rem;
	border-radius: 50%;
	background: ${(props) => {
		if (props.status === 'paid') return '#33D69F'
		if (props.status === 'pending') return '#FF8F00'
		if (props.status === 'draft') return props.theme.color.invoiceStatus.text
	}};
`

const Text = styled.div<InvoiceStatusType>`
	${fontStylesA}
	color: ${(props) => {
		if (props.status === 'paid') return '#33D69F'
		if (props.status === 'pending') return '#FF8F00'
		if (props.status === 'draft') return props.theme.color.invoiceStatus.text
	}};
	font-weight: bold;
	text-transform: capitalize;
`

export default function InvoiceStatus({
	className,
	status,
}: InvoiceStatusType) {
	return (
		<Wrapper className={className} status={status}>
			<Circle status={status} />
			<Text status={status}>{status}</Text>
		</Wrapper>
	)
}
