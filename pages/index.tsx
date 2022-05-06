import type { NextPage, GetServerSideProps } from "next"

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
import { getInvoice, getFilteredInvoice } from "utilities/Misc"
import { Shadow } from "styles/HelperStyles"
import { filterInvoice } from "redux/features/filteredInvoice"

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

// interface HomeInterface {
//   invoices: InvoiceInterface[]
// }

const Home = () => {
  const dispatch = useAppDispatch()

  // dispatch(updateInvoice(invoices))
  const exit = useAppSelector((state) => state.exit.value)
  const invoice = useAppSelector((state) => state.invoice.value)
  console.log("outside useeffect")

  useEffect(() => {
    // get data from firebase once app loads
    const getData = async () => {
      const data = await getDocs(invoiceCollectionRef)
      const invoices: InvoiceInterface[] = getInvoice(data)
      dispatch(updateInvoice(invoices))
    }
    getData()

    // console.log("in the function")
  }, [])

  return (
    <>
      <Head>
        <title>Invoices ({invoice.length}) | Frontend Mentor</title>

        <meta
          name='description'
          content='A CRUD Invoice application to easily track your business/personal transactions'
        />
        <link rel='apple-touch-icon' href='/favicon.png' />
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

// export const getServerSideProps: GetServerSideProps = async () => {
//   const data = await getDocs(invoiceCollectionRef)
//   const invoices: InvoiceInterface[] = getInvoice(data)
//   return {
//     props: { invoices },
//   }
// }

export default Home
