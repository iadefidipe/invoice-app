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

function InvoiceItem(): JSX.Element {
	return (
		<Link href={`/invoice`} passHref={true} scroll={false}>
			<StyledLink variants={animation}>
				<Id>
					<span>#</span>
					RT3080
				</Id>
				<PaymentDue>Due {dayjs('12/12/12').format('DD MMM YYYY')}</PaymentDue>
				<ClientName>Israel Adefidipe</ClientName>
				<Total as='div'>£560</Total>
				<StyledInvoiceStatus status='pending' />
				<Arrow>
					<Image src={arrow} alt='' />
				</Arrow>
			</StyledLink>
		</Link>
	)
}

export default InvoiceItem

// `/invoice/${id}`
