import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Store from 'store'

// manage theme toogle state
const initialOpenState: boolean = false

export const openSlice = createSlice({
	name: 'open',
	initialState: { value: initialOpenState },
	reducers: {
		toggleOpen: (state, action: PayloadAction<boolean>) => {
			state.value = action.payload
		},
	},
})

export const { toggleOpen } = openSlice.actions

export default openSlice.reducer
