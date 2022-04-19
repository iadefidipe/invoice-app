import styled from "styled-components"
import ScrollLock from "react-scrolllock"
import { motion, AnimatePresence } from "framer-motion"
import Button from "../shared/Buttons"
import { Heading2 } from "../shared/Headings"
import { fontStylesA } from "../shared/typography"
import { useAppDispatch, useAppSelector } from "redux/types/reduxTypes"
import { popUp } from "redux/features/popUp"
import { updateInvoice } from "redux/features/Invoices"
import { getDocs, doc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase/clientApp"
import Store from "store"

import { invoiceCollectionRef } from "pages"
import { useRouter } from "next/router"
import { getInvoice } from "utilities/Misc"
import { InvoiceInterface } from "data/form"

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`

const Popup = styled(motion.div)`
  width: 100%;
  max-width: 24rem;
  margin: 0 1.5rem;
  border-radius: 8px;
  padding: 2rem;
  background: ${(props) => props.theme.color.popup.bg};
  transition: background 0.3s;
  @media only screen and (min-width: 768px) {
    max-width: 30rem;
    padding: 3rem;
  }
`

const Heading = styled(Heading2)`
  margin-bottom: 1rem;
  @media only screen and (min-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`

const Message = styled.p`
  margin-bottom: 1.5rem;
  ${fontStylesA}
  line-height: 1.375rem;
  @media only screen and (min-width: 768px) {
    margin-bottom: 1rem;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`

const backdropAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
}

const popupAnimation = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring", duration: 0.35 },
  },
  exit: {
    scale: 0,
    transition: { duration: 0.15 },
  },
}

interface DeletePopupInterface {
  invoice: InvoiceInterface
}

export default function DeletePopup({ invoice }: DeletePopupInterface) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const popupOpen = useAppSelector((state) => state.popUpOpen.value)

  //Delete Invovoice based on ID
  const deleteInvoice = async (id: any) => {
    const invoiceDoc = doc(db, "invoices", id)
    await deleteDoc(invoiceDoc)
    const data = await getDocs(invoiceCollectionRef)
    const invoices: InvoiceInterface[] = getInvoice(data)
    dispatch(updateInvoice(invoices))
    dispatch(popUp(false))

    //go back to homempage
    router.push("/")
  }

  return (
    <AnimatePresence>
      {popupOpen && (
        <ScrollLock>
          <Backdrop
            variants={backdropAnimation}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <Popup variants={popupAnimation}>
              <Heading>Confirm Deletion</Heading>
              <Message>
                Are you sure you want to delete invoice {invoice?.id}? This
                action cannot be undone.
              </Message>
              <Buttons>
                <Button secondary onClick={() => dispatch(popUp(false))}>
                  Cancel
                </Button>
                <Button alert onClick={() => deleteInvoice(invoice.id)}>
                  Delete
                </Button>
              </Buttons>
            </Popup>
          </Backdrop>
        </ScrollLock>
      )}
    </AnimatePresence>
  )
}
