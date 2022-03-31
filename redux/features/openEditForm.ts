import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Store from 'store'

// manage theme toogle state
const initialOpenState: boolean = false

export const openEditFormSlice = createSlice({
	name: 'open',
	initialState: { value: initialOpenState },
	reducers: {
		toggleEditForm: (state, action: PayloadAction<boolean>) => {
			state.value = action.payload
		},
	},
})

export const { toggleEditForm } = openEditFormSlice.actions

export default openEditFormSlice.reducer
