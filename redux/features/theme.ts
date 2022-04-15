import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Store from 'store'

// manage theme toogle state
const initialThemeState: string = Store.get('theme')

export const themeSlice = createSlice({
	name: 'theme',
	initialState: { value: initialThemeState },
	reducers: {
		toggleTheme: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		},
	},
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
