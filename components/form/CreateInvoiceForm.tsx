import { Formik, Form } from "formik"
import { AnimatePresence } from "framer-motion"
import { initialValues, validationSchema } from "../../data/form"
import Button from "../shared/Buttons"
import {
  CreateInvoiceFormHeading as Heading,
  CreateInvoiceFormButtons as Buttons,
} from "./Components"
import Fields from "./Fields"
import { invoiceCollectionRef } from "pages"
import { addDoc, getDocs } from "firebase/firestore"
import { useAppDispatch, useAppSelector } from "../../redux/types/reduxTypes"
import { updateInvoice } from "../../redux/features/Invoices"
import { toggleForm } from "../../redux/features/openForm"
import { toggleExit } from "../../redux/features/open"
import { FormDataInterface } from "../../data/form"

import Store from "store"

// const onSubmit = async (value) => {
//   await addDoc(invoiceCollectionRef, value)
//   const data = await getDocs(invoiceCollectionRef)
//   Store.set(
//     "invoices",
//     data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
//   )
//   dispatch(updateInvoice(Store.get("invoices")))
// }

function CreateInvoiceForm() {
  const dispatch = useAppDispatch()
  const invoice = useAppSelector((state) => state.invoice.value)
  const open = useAppSelector((state) => state.openForm.value)

  //TODO: on form upload value to firebase, get new data from fire base, send to local storage and from local storage to redux start
  const onSubmit = async (value: FormDataInterface, onSubmitProps: any) => {
    await addDoc(invoiceCollectionRef, value)
    const data = await getDocs(invoiceCollectionRef)
    Store.set(
      "invoices",
      data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    )
    dispatch(updateInvoice(Store.get("invoices")))
    console.log("submited form", invoice)
    dispatch(updateInvoice(Store.get("invoices")))
    // console.log("submit", value)
    onSubmitProps.resetForm()
    dispatch(toggleForm(false))
    dispatch(toggleExit(true)) 
  }

  //TODO: add draft to firebase
  const addDraft = async (value: FormDataInterface) => {
    await addDoc(invoiceCollectionRef, { ...value, status: "draft" })
    const data = await getDocs(invoiceCollectionRef)
    console.log("draft", data)
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
