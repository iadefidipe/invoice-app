import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Store from "store"
import { InvoiceInterface } from "../../data/form"



const initialInvoiceState: InvoiceInterface[] = []

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: { value: initialInvoiceState },
  reducers: {
    updateInvoice: (state, action: PayloadAction<InvoiceInterface[]>) => {
      state.value = action.payload
    },
  },
})

export const { updateInvoice } = invoiceSlice.actions

export default invoiceSlice.reducer
