import { Formik } from "formik"
import { AnimatePresence } from "framer-motion"
import { initialValues, validationSchema } from "data/form"
import Button from "../shared/Buttons"
import Fields from "./Fields"
import { invoiceCollectionRef } from "pages"
import { addDoc, getDocs } from "firebase/firestore"
import { useAppDispatch, useAppSelector } from "redux/types/reduxTypes"
import { updateInvoice } from "redux/features/Invoices"
import { toggleForm } from "redux/features/openForm"
import { toggleExit } from "redux/features/open"
import { toggleEditForm } from "redux/features/openEditForm"
import { FormDataInterface } from "data/form"
import { createInvoice } from "utilities/form"
import Store from "store"
import Form from "./Form"
import { InvoiceInterface } from "types/types"
import { 
  EditInvoiceFormHeading as Heading, 
  EditInvoiceFormButtons as Buttons 
} from './Components'

interface CreateEditFormInterface {
  invoice: FormDataInterface
}

function CreateEditForm({ invoice }: CreateEditFormInterface) {
  const dispatch = useAppDispatch()
  const open = useAppSelector((state) => state.openEditForm.value)

  //TODO: on form upload value to firebase, get new data from fire base, send to local storage and from local storage to redux start
  const onSubmit = async (value: FormDataInterface, onSubmitProps: any) => {
    const newValue = createInvoice(value)
    await addDoc(invoiceCollectionRef, newValue)
    const data = await getDocs(invoiceCollectionRef)
    Store.set(
      "invoices",
      data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    )
    dispatch(updateInvoice(Store.get("invoices")))
    console.log("submited form", invoice)

    // // console.log("submit", value)
    onSubmitProps.resetForm()
    dispatch(toggleForm(false))
    dispatch(toggleExit(true))
    // console.log("submited form", value)
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
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <Heading>Edit <span>#</span>{invoice.id}</Heading>
              <Fields />

              <Buttons>
                
                <Button type='reset' onClick={() => {
                    dispatch(toggleEditForm(false))
                    dispatch(toggleExit(true))
                  }} secondary>
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
