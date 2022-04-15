import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { FormDataInterface } from "data/form"

const initialInvoiceState: FormDataInterface[] = []

export const filteredInvoiceslice = createSlice({
  name: "filter",
  initialState: { value: initialInvoiceState },
  reducers: {
    filterInvoice: (state, action: PayloadAction<FormDataInterface[]>) => {
      state.value = action.payload
    },
  },
})

export const { filterInvoice } = filteredInvoiceslice.actions

export default filteredInvoiceslice.reducer
