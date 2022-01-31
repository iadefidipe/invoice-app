import { Formik, Form } from "formik"
import { AnimatePresence } from "framer-motion"
import { initialValues, validationSchema } from "../../data/form"
import Button from "../shared/Buttons"
import {
  CreateInvoiceFormHeading as Heading,
  CreateInvoiceFormButtons as Buttons,
} from "./Components"
import Fields from "./Fields"

const onSubmit = () => {
  console.log("hi")
}

function CreateInvoiceForm() {
  return (
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
            <Button type='button' secondary>
              Discard
            </Button>
            <Button
              type='button'
              tertiary
            >
              Save as Draft
            </Button>
            <Button type='submit'>Save & Send</Button>
          </Buttons>
        </Form>
      )}
    </Formik>
  )
}

export default CreateInvoiceForm
