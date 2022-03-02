import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from 'components/home/header/Header'
import styled from 'styled-components'
import CreateInvoiceForm from '../components/form/CreateInvoiceForm'
import {useEffect} from 'react'
import {db} from '../firebase/clientApp'
import { useAppDispatch, useAppSelector } from "../redux/types/reduxTypes"
import {collection}  from 'firebase/firestore'
import InvoicesList from 'components/home/invoice/invoiceList'

// component style
const Wrapper = styled.main`
	width: 100%;
	padding: 0 24px;
`

const InnerWrapper = styled.main`
	max-width: 672px;
	margin: 0 auto;
`

export const invoiceCollectionRef = collection (db, "invoices")

const Home: NextPage = (): JSX.Element => {

	const exit = useAppSelector( (state)=> state.exit.value )
	
	return (
		<Wrapper>
			{ exit && <InnerWrapper>
				<Header />
				<InvoicesList />
			</InnerWrapper>}
			<CreateInvoiceForm />
		</Wrapper>
	)
}

export default Home
