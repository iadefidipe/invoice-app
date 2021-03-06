import { Formik } from "formik"
import toast from "react-hot-toast"
import axios from "axios"
import { v4 as uuidv4 } from "uuid"
import { useRouter } from "next/router"
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
import { apiEndpoint, getInvoice } from "utilities/Misc"

function CreateInvoiceForm() {
  const router = useRouter()

  const dispatch: any = useAppDispatch()
  // const invoice = useAppSelector((state) => state.invoice.value)
  const open = useAppSelector((state) => state.openForm.value)

  //TODO: on form upload value to firebase, get new data from fire base, send to local storage and from local storage to redux start
  const onSubmit = async (value: FormDataInterface, onSubmitProps: any) => {
    try {
      const newValue = createInvoice(value)
      const newInvoice = { id: uuidv4(), ...newValue }
      await axios.post(apiEndpoint, newInvoice)
      const { data } = await axios.get(apiEndpoint)

      // await addDoc(invoiceCollectionRef, newValue)
      toast.loading("Adding new invoice, Please wait!")
      // const data = await getDocs(invoiceCollectionRef)
      // const invoices: InvoiceInterface[] = getInvoice(data)
      dispatch(updateInvoice(data))
      toast.dismiss()
      toast.success(`Successfully added New Invoice`)

      onSubmitProps.resetForm()
      dispatch(toggleForm(false))
      dispatch(toggleExit(true))
      //go back to homempage
      router.push("/")
    } catch (err) {
      toast.error("This is an error!")
    }
  }

  //TODO: add draft to firebase
  const addDraft = async (value: FormDataInterface) => {
    const newValue = createInvoice(value)
    const newInvoice = { id: uuidv4(), ...newValue, status: "draft" }
    await axios.post(apiEndpoint, newInvoice)
    const { data } = await axios.get(apiEndpoint)
    // await addDoc(invoiceCollectionRef, { ...newValue, status: "draft" })
    toast.loading("Adding new Draft invoice, Please wait!")
    // const data = await getDocs(invoiceCollectionRef)
    // const invoices: InvoiceInterface[] = getInvoice(data)
    dispatch(updateInvoice(data))
    toast.dismiss()
    toast.success(`Successfully added Draft Invoice`)

    dispatch(toggleForm(false))
    dispatch(toggleExit(true))
    router.push("/")
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
