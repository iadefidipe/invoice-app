import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Store from 'store'

// manage theme toogle state
const initialOpenState: boolean = false

export const popUpSlice = createSlice({
	name: 'open',
	initialState: { value: initialOpenState },
	reducers: {
		popUp: (state, action: PayloadAction<boolean>) => {
			state.value = action.payload
		},
	},
})

export const { popUp } = popUpSlice.actions

export default popUpSlice.reducer
