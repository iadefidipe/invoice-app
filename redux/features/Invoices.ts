import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Store from "store"
import { InvoiceInterface } from "types/types"
import { FormDataInterface } from "../../data/form"


// manage theme toogle state
const initialInvoiceState: FormDataInterface[] = []

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: { value: initialInvoiceState },
  reducers: {
    updateInvoice: (state, action: PayloadAction<FormDataInterface[]>) => {
      state.value = action.payload
    },
  },
})

export const { updateInvoice } = invoiceSlice.actions

export default invoiceSlice.reducer
