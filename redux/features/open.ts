import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Store from 'store'

// manage theme toogle state
const initialExitState: boolean = true

export const homeExitSlice = createSlice({
	name: 'exit',
	initialState: { value: initialExitState },
	reducers: {
		toggleExit: (state, action: PayloadAction<boolean>) => {
			state.value = action.payload
		},
	},
})

export const { toggleExit} = homeExitSlice.actions

export default homeExitSlice.reducer
