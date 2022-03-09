import { useAppSelector } from "../../redux/types/reduxTypes"
import { invoiceCollectionRef } from "../index"
import { addDoc, getDocs } from "firebase/firestore"
// import Store from 'store'
// import { invoiceData } from '../../components/form/CreateInvoiceForm'
import { InvoiceInterface } from "types/types"
import Store from "store"
import Head from "next/head"
import InvoiceDetail from "components/invoiceDetails/InvoiceDetail"

// const Data =async (): Promise<InvoiceInterface[]> => {
//     const data = await getDocs(invoiceCollectionRef)
//     const invoices = ( data.docs.map( (doc) => ({ id: doc.id, ...doc.data() }) ) as InvoiceInterface[] )
//     return invoices

// }

interface InvoicePropInterface {
  invoice: InvoiceInterface
}

function Invoice({ invoice }: InvoicePropInterface) {
  return (
    <>
      <Head>
        <title>Invoice | {invoice.id && `#${invoice.id.slice(0, 7)}`}</title>
      </Head>

      <InvoiceDetail data={invoice} />
    </>
  )
}

// const invoiceData = [...Data()]

export default Invoice

export const getStaticPaths = async () => {
  const data = await getDocs(invoiceCollectionRef)
  const invoices = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

  const paths = invoices.map((invoice) => {
    return {
      params: { invoiceId: invoice.id },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const data = await getDocs(invoiceCollectionRef)
  const invoices = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  const id = context.params.invoiceId
  const invoiceData = invoices.find((invoice) => {
    return (invoice.id === id)
  })
  

  return {
    props: {
      invoice: invoiceData,
    },
  }
}
