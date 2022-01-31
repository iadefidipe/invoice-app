import { Formik, Form } from "formik";
import { AnimatePresence } from "framer-motion";
import { initialValues, validationSchema } from "../../data/form";

const onSubmit = () => {
    console.log('hi')
}


function CreateInvoiceForm() {
  return (
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}  >
          {
              formik => (
                  <Form></Form>
              )
          }
      </Formik>
  )
}

export default CreateInvoiceForm;
