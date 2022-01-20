import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/theme'
import filterReducer from './features/filter'

// creating store with redux toolkit
export const store = configureStore({
	reducer: {
		theme: themeReducer,
		filter: filterReducer,
	},
})
