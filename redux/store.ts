import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./features/theme"
import filterReducer from "./features/filter"
import invoiceReducer from "./features/Invoices"
import openFormReducer from "./features/openForm"
import exitReducer from "./features/open"
import openEditFormReducer from "./features/openEditForm"
import popUpReducer from "./features/popUp"

// creating store with redux toolkit
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    filter: filterReducer,
    invoice: invoiceReducer,
    openForm: openFormReducer,
    exit: exitReducer,
    openEditForm: openEditFormReducer,
	popUpOpen: popUpReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
