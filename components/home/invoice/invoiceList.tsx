import styled from "styled-components"
import InvoiceItem from "./invoiceItem"
import { motion } from "framer-motion"
import { useAppSelector, useAppDispatch } from "redux/types/reduxTypes"
import { useEffect, useState } from "react"
import { InvoiceInterface } from "data/form"
import { filterInvoice } from "redux/features/filteredInvoice"
import NoInvoices from "./NoInvoice"

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`

const animation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function InvoicesList() {
  const dispatch = useAppDispatch()

  const invoices = useAppSelector((state) => state.invoice.value)
  const filters = useAppSelector((state) => state.filter.value)
  const filteredInvoice = useAppSelector((state) => state.filteredInvoice.value)

  const [renderInvoices, setRenderInvoice] =
    useState<InvoiceInterface[]>(invoices)

  useEffect(() => {
    const getInvoice = () => {
      const checkedFilter = filters.filter((filter) => filter.checked === true)

      let filteredInvoice = invoices.filter(
        (invoice) => invoice.status === checkedFilter[0].value
      )
      if (checkedFilter[0]) {
        return filteredInvoice
      } else {
        return invoices
      }
    }

    dispatch(filterInvoice(getInvoice()))
  }, [filters, invoices])

  return (
    <>
      {filteredInvoice.length === 0 ? (
        <NoInvoices />
      ) : (
        <Wrapper variants={animation} initial='hidden' animate='visible'>
          {filteredInvoice.map((invoice) => {
            return (
              <InvoiceItem
                key={invoice.id}
                id={invoice.id}
                paymentDue={invoice.paymentDue}
                clientName={invoice.clientName}
                total={invoice.total}
                status={invoice.status}
              />
            )
          })}
        </Wrapper>
      )}
    </>
  )
}
