import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { InvoiceInterface } from "data/form"

const initialInvoiceState: InvoiceInterface[] = []

export const filteredInvoiceslice = createSlice({
  name: "filter",
  initialState: { value: initialInvoiceState },
  reducers: {
    filterInvoice: (state, action: PayloadAction<InvoiceInterface[]>) => {
      state.value = action.payload
    },
  },
})

export const { filterInvoice } = filteredInvoiceslice.actions

export default filteredInvoiceslice.reducer
