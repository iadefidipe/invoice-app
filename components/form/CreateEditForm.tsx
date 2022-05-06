import { Formik } from "formik"
import { AnimatePresence } from "framer-motion"
import toast from "react-hot-toast"
import { initialValues, validationSchema } from "data/form"
import Button from "../shared/Buttons"
import Fields from "./Fields"
import { invoiceCollectionRef } from "pages"
import { addDoc, getDocs, updateDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/clientApp"
import { useAppDispatch, useAppSelector } from "redux/types/reduxTypes"
import { updateInvoice } from "redux/features/Invoices"
import { toggleForm } from "redux/features/openForm"
import { toggleExit } from "redux/features/open"
import { toggleEditForm } from "redux/features/openEditForm"
import { InvoiceInterface, FormDataInterface } from "data/form"
import { createInvoice } from "utilities/form"
import Store from "store"
import Form from "./Form"
import {
  EditInvoiceFormHeading as Heading,
  EditInvoiceFormButtons as Buttons,
} from "./Components"
import { getInvoice } from "utilities/Misc"

interface CreateEditFormInterface {
  invoice: InvoiceInterface
}

function CreateEditForm({ invoice }: CreateEditFormInterface) {
  const dispatch = useAppDispatch()
  const open = useAppSelector((state) => state.openEditForm.value)

  //TODO: on form upload value to firebase, get new data from fire base, send to local storage and from local storage to redux start
  const onSubmit = async (value: FormDataInterface, onSubmitProps: any) => {
    const newValue = createInvoice(value)

    const invoiceDoc = await doc(db, "invoices", invoice.id)
    await updateDoc(invoiceDoc, newValue)
    toast.loading(`Editing Invoice ${invoice.id}`)
    const data = await getDocs(invoiceCollectionRef)

    const invoices: InvoiceInterface[] = getInvoice(data)
    dispatch(updateInvoice(invoices))
    toast.dismiss()
    toast.success(`Successfully edited Invoice ${invoice.id}`)

    onSubmitProps.resetForm()
    dispatch(toggleEditForm(false))
  }

  return (
    <AnimatePresence>
      {open && (
        <Formik
          initialValues={{
            senderAddress: invoice.senderAddress,
            clientName: invoice.clientName,
            clientEmail: invoice.clientEmail,
            clientAddress: invoice.clientAddress,
            createdAt: new Date(invoice.createdAt),
            paymentTerms: invoice.paymentTerms,
            description: invoice.description,
            items: invoice.items,
            status: invoice.status,
            total: invoice.total,
            paymentDue: invoice.paymentDue,
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form edit>
              <Heading>
                Edit <span>#</span>
                {invoice.id.toUpperCase()}
              </Heading>
              <Fields />

              <Buttons>
                <Button
                  type='reset'
                  onClick={() => {
                    dispatch(toggleEditForm(false))
                  }}
                  secondary
                >
                  Cancel
                </Button>
                <Button type='submit'>Save Changes</Button>
              </Buttons>
            </Form>
          )}
        </Formik>
      )}
    </AnimatePresence>
  )
}

export default CreateEditForm
