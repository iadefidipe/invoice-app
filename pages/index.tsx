import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import Header from 'components/home/header/Header'
// import InvoiceItem from 'components/home/invoice/invoiceItem'
import styled from 'styled-components'
import CreateInvoiceForm from '../components/form/CreateInvoiceForm'

// component style
const Wrapper = styled.main`
	width: 100%;
	padding: 0 24px;
`

const InnerWrapper = styled.main`
	max-width: 672px;
	margin: 0 auto;
`

const Home: NextPage = (): JSX.Element => {
	return (
		<Wrapper>
			{/* <InnerWrapper>
				<Header />
				<InvoiceItem />
			</InnerWrapper> */}
			<CreateInvoiceForm />
		</Wrapper>
	)
}

export default Home
