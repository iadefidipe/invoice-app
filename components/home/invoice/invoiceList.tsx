import styled from "styled-components"
import InvoiceItem from "./invoiceItem"
import { motion } from "framer-motion"
import { useSession } from "next-auth/react"
import { getFilteredInvoice } from "utilities/Misc"
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
  const { data, status } = useSession()
  useEffect(() => {
    dispatch(filterInvoice(getFilteredInvoice(filters, invoices)))
    
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
