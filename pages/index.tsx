import type { NextPage, GetServerSideProps } from "next"
import axios from "axios"
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
import { getDocs } from "firebase/firestore"
import Main from "../components/home/Main"
import { updateInvoice } from "redux/features/Invoices"
import Store from "store"
import { InvoiceInterface } from "../data/form"
import { getInvoice, getFilteredInvoice, apiEndpoint } from "utilities/Misc"
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

interface HomeInterface {
  data: InvoiceInterface[]
}

const Home = ({ data }: HomeInterface) => {
  const dispatch = useAppDispatch()
  dispatch(updateInvoice(data))
  const exit = useAppSelector((state) => state.exit.value)
  const invoice = useAppSelector((state) => state.invoice.value)

  useEffect(() => {
    const getPosts = async () => {
      const data = await axios.get(apiEndpoint)
      console.log(data)
    }
    getPosts()
  })

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

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(apiEndpoint)

  return {
    props: { data },
  }
}

export default Home
