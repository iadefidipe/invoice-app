import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Store from 'store'

// manage theme toogle state
const initialInvoiceState: string = Store.get('invoice')

export const themeSlice = createSlice({
	name: 'invoice',
	initialState: { value: initialThemeState },
	reducers: {
		updateInvoice: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		},
	},
})

export const { updateInvoice } = themeSlice.actions

export default themeSlice.reducer