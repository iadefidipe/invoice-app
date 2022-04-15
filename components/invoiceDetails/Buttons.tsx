import styled from "styled-components"
import Button from "components/shared/Buttons"
import { useAppDispatch, useAppSelector } from "redux/types/reduxTypes"
import { toggleEditForm } from "redux/features/openEditForm"
import { popUp } from "redux/features/popUp"
import { invoiceCollectionRef } from "pages"
import {  getDocs, doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/clientApp"
import { updateInvoice } from "redux/features/Invoices"
import { InvoiceInterface } from "data/form"
import { getInvoice } from "utilities/Misc"

const ButtonWrap = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.5rem;
  border: 2px green solid;
`

interface ButtonsPropInterface {
  data: InvoiceInterface
}
function Buttons({ data }: ButtonsPropInterface) {
  const dispatch = useAppDispatch()

  const handlePaid = async (data: InvoiceInterface) => {
    const invoiceDoc = await doc(db, "invoices", data.id)
    await updateDoc(invoiceDoc, { ...data, status: "paid" })
    const invoiceData = await getDocs(invoiceCollectionRef)

    dispatch(updateInvoice(getInvoice(invoiceData)))
  }

  return (
    <ButtonWrap>
      <Button secondary onClick={() => dispatch(toggleEditForm(true))}>
        Edit
      </Button>
      <Button alert onClick={() => dispatch(popUp(true))}>
        Delete
      </Button>
      {!(data?.status === "paid") && (
        <Button onClick={() => handlePaid(data)}>Mark as Paid</Button>
      )}
    </ButtonWrap>
  )
}

export default Buttons
