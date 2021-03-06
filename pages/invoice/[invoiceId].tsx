import { GetStaticProps, GetStaticPaths } from "next"
import axios from "axios"
import { invoiceCollectionRef } from "../index"
import { getDocs } from "firebase/firestore"
import Head from "next/head"
import InvoiceDetail from "components/invoiceDetails/InvoiceDetail"
import { apiEndpoint } from "utilities/Misc"
import { InvoiceInterface } from "data/form"

interface InvoicePropInterface {
  id: string
}

function Invoice({ id }: InvoicePropInterface) {
  return (
    <>
      <Head>
        <title>Invoice | {id && `#${id.slice(0, 5)}`}</title>
      </Head>
      <InvoiceDetail id={id} />
    </>
  )
}

export default Invoice

export const getStaticPaths: GetStaticPaths = async () => {
  // const data = await getDocs(invoiceCollectionRef)
  // const invoices = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  const { data } = await axios.get(apiEndpoint)
  const paths = data.map((invoice: InvoiceInterface) => {
    return {
      params: { invoiceId: invoice.id },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.invoiceId
  return {
    props: {
      id,
    },
  }
}
