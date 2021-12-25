import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/theme'

// creating store with redux toolkit
export const store = configureStore({
	reducer: {
		theme: themeReducer,
	},
})
