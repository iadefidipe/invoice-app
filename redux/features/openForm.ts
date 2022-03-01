import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Store from 'store'

// manage theme toogle state
const initialOpenState: boolean = false

export const openFormSlice = createSlice({
	name: 'open',
	initialState: { value: initialOpenState },
	reducers: {
		toggleForm: (state, action: PayloadAction<boolean>) => {
			state.value = action.payload
		},
	},
})

export const { toggleForm } = openFormSlice.actions

export default openFormSlice.reducer
