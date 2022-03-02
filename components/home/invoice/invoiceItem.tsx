import Link from 'next/link'
import {
	StyledLink,
	Id,
	PaymentDue,
	ClientName,
	Total,
	StyledInvoiceStatus,
	Arrow,
	animation,
} from './invoiceItem.style'
import dayjs from 'dayjs'
import arrow from 'assets/icon-arrow-right.svg'
import Image from 'next/image'


interface InvoiceItemInterface{
	id: string
	paymentDue: string
	clientName: string
	total: number
	status: string

}

function InvoiceItem({id,paymentDue,clientName,total,status}:InvoiceItemInterface): JSX.Element {
	return (
		<Link href={`/invoice`} passHref={true} scroll={false}>
			<StyledLink variants={animation}>
				<Id>
					<span>#</span>
					{id.slice(0,5)}
				</Id>
				<PaymentDue>Due {dayjs(paymentDue).format('DD MMM YYYY')}</PaymentDue>
				<ClientName>{clientName}</ClientName>
				<Total as='div'>{total}</Total>
				<StyledInvoiceStatus status={status} />
				<Arrow>
					<Image src={arrow} alt='' />
				</Arrow>
			</StyledLink>
		</Link>
	)
}

export default InvoiceItem

// `/invoice/${id}`
