import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type filterState = [
	{
		id: 0
		value: 'paid'
		checked: boolean
	},
	{
		id: 1
		value: 'pending'
		checked: boolean
	},
	{
		id: 2
		value: 'draft'
		checked: boolean
	}
]

// manage filter toogle state
const initialFilterState: filterState = [
	{
		id: 0,
		value: 'paid',
		checked: false,
	},
	{
		id: 1,
		value: 'pending',
		checked: false,
	},
	{
		id: 2,
		value: 'draft',
		checked: false,
	},
]
export const filterSlice = createSlice({
	name: 'filter',
	initialState: { value: initialFilterState },
	reducers: {
		togglefilter: (state, action: PayloadAction<filterState>) => {
			state.value = action.payload
		},
	},
})

export const { togglefilter } = filterSlice.actions

export default filterSlice.reducer
