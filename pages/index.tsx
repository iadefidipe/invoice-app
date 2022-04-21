import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Header from "components/home/header/Header"
import styled from "styled-components"
import CreateInvoiceForm from "../components/form/CreateInvoiceForm"
import { useEffect } from "react"
import { db } from "../firebase/clientApp"
import { useAppDispatch, useAppSelector } from "../redux/types/reduxTypes"
import { collection } from "firebase/firestore"
import InvoicesList from "components/home/invoice/invoiceList"
import { addDoc, getDocs } from "firebase/firestore"
import Main from "../components/home/Main"
import { updateInvoice } from "redux/features/Invoices"
import Store from "store"
import { InvoiceInterface } from "../data/form"
import { getInvoice } from "utilities/Misc"
import { Shadow } from "styles/HelperStyles"

// component style
const Wrapper = styled.div`
  ${Shadow}
  width: 100%;
  padding: 0 24px;
`

export const InnerWrapper = styled.main`
  max-width: 730px;
  margin: 100px auto 0;
`

export const invoiceCollectionRef = collection(db, "invoices")

const Home: NextPage = (): JSX.Element => {
  const exit = useAppSelector((state) => state.exit.value)
  const invoices = useAppSelector((state) => state.invoice.value)

  const dispatch = useAppDispatch()

  useEffect(() => {
    //get data from firebase once app loads
    const getData = async () => {
      const data = await getDocs(invoiceCollectionRef)
      const invoices: InvoiceInterface[] = getInvoice(data)
      dispatch(updateInvoice(invoices))
    }
    getData()
  })

  return (
    <>
      <Head>
        <title>Invoices ({invoices.length}) | Frontend Mentor</title>

        <meta
          name='description'
          content='A CRUD Invoice application to easily track your business/personal transactions'
        />
        <link rel='apple-touch-icon' href='/favicon.png' />
        <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
      </Head>
      <Wrapper>
        <InnerWrapper>
          <Header />
          <InvoicesList />
        </InnerWrapper>

        <CreateInvoiceForm />
      </Wrapper>
    </>
  )
}

export default Home
