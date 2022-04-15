import { Formik } from "formik"
import { AnimatePresence } from "framer-motion"
import { initialValues, validationSchema } from "data/form"
import Button from "../shared/Buttons"
import {
  CreateInvoiceFormHeading as Heading,
  CreateInvoiceFormButtons as Buttons,
} from "./Components"
import Fields from "./Fields"
import { invoiceCollectionRef } from "pages"
import { addDoc, getDocs } from "firebase/firestore"
import { useAppDispatch, useAppSelector } from "redux/types/reduxTypes"
import { updateInvoice } from "redux/features/Invoices"
import { toggleForm } from "redux/features/openForm"
import { toggleExit } from "redux/features/open"
import { InvoiceInterface, FormDataInterface } from "data/form"
import { createInvoice } from "utilities/form"
import Store from "store"
import Form from "./Form"
import { getInvoice } from "utilities/Misc"

function CreateInvoiceForm() {
  const dispatch: any = useAppDispatch()
  // const invoice = useAppSelector((state) => state.invoice.value)
  const open = useAppSelector((state) => state.openForm.value)

  //TODO: on form upload value to firebase, get new data from fire base, send to local storage and from local storage to redux start
  const onSubmit = async (value: FormDataInterface, onSubmitProps: any) => {
    const newValue = createInvoice(value)
    await addDoc(invoiceCollectionRef, newValue)
    const data = await getDocs(invoiceCollectionRef)
    const invoices: InvoiceInterface[] = getInvoice(data)
    dispatch(updateInvoice(invoices))
    onSubmitProps.resetForm()
    dispatch(toggleForm(false))
    dispatch(toggleExit(true))
  }

  //TODO: add draft to firebase
  const addDraft = async (value: FormDataInterface) => {
    const newValue = createInvoice(value)
    await addDoc(invoiceCollectionRef, { ...newValue, status: "draft" })
    const data = await getDocs(invoiceCollectionRef)
    const invoices: InvoiceInterface[] = getInvoice(data)
    dispatch(updateInvoice(invoices))

    dispatch(toggleForm(false))
    dispatch(toggleExit(true))
  }

  return (
    <AnimatePresence>
      {open && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <Heading>Create Form</Heading>
              <Fields />

              <Buttons>
                <Button
                  type='reset'
                  onClick={() => {
                    dispatch(toggleForm(false))
                    dispatch(toggleExit(true))
                  }}
                  secondary
                >
                  Discard
                </Button>
                <Button
                  type='button'
                  onClick={() => addDraft(formik.values)}
                  tertiary
                >
                  Save as Draft
                </Button>
                <Button type='submit'>Save & Send</Button>
              </Buttons>
            </Form>
          )}
        </Formik>
      )}
    </AnimatePresence>
  )
}

export default CreateInvoiceForm
