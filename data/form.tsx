import * as Yup from "yup"
import { SchemaOf } from "yup"

export interface FormDataInterface {
  senderAddress: {
    street: string
    city: string
    postCode: string
    country: string
  }
  clientName: string
  clientEmail: string
  clientAddress: {
    street: string
    city: string
    postCode: string
    country: string
  }
  createdAt: Date
  paymentTerms: number
  description: string
  status: string
  items: []
  total: number
  paymentDue: Date
}

export interface InvoiceInterface {
  id: string
  senderAddress: {
    street: string
    city: string
    postCode: string
    country: string
  }
  clientName: string
  clientEmail: string
  clientAddress: {
    street: string
    city: string
    postCode: string
    country: string
  }
  createdAt: Date
  paymentTerms: number
  description: string
  status: string
  items: []
  total: number
  paymentDue: Date
}
export const initialValues: FormDataInterface = {
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientName: "",
  clientEmail: "",
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  createdAt: new Date(),
  paymentTerms: 30,
  description: "",
  status: "pending",
  items: [],
  total: 0,
  paymentDue: new Date(),
}

export const validationSchema = Yup.object().shape({
  senderAddress: Yup.object().shape({
    street: Yup.string().required("- All fields must be filled."),
    city: Yup.string().required("- All fields must be filled."),
    postCode: Yup.string().required("- All fields must be filled."),
    country: Yup.string().required("- All fields must be filled."),
  }),
  clientName: Yup.string().required("- All fields must be filled."),
  clientEmail: Yup.string()
    .email("- Invalid email.")
    .required("- All fields must be filled."),
  clientAddress: Yup.object().shape({
    street: Yup.string().required("- All fields must be filled."),
    city: Yup.string().required("- All fields must be filled."),
    postCode: Yup.string().required("- All fields must be filled."),
    country: Yup.string().required("- All fields must be filled."),
  }),
  createdAt: Yup.date().required("- All fields must be filled."),
  paymentTerms: Yup.string().required("- All fields must be filled."),
  description: Yup.string().required("- All fields must be filled."),
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("- All fields must be filled."),
        quantity: Yup.number()
          .typeError("- Invalid input.")
          .required("- All fields must be filled."),
        price: Yup.number()
          .typeError("- Invalid input.")
          .required("- All fields must be filled."),
        total: Yup.number(),
      })
    )
    .min(1, "- An item must be added."),
})
