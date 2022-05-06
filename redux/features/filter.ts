import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { number, string } from "yup"

export interface FilterInterface {
  id: number
  value: string
  checked: boolean
}

// manage filter toogle state
const initialFilterState: FilterInterface[] = [
  {
    id: 0,
    value: "paid",
    checked: false,
  },
  {
    id: 1,
    value: "pending",
    checked: false,
  },
  {
    id: 2,
    value: "draft",
    checked: false,
  },
]
export const filterSlice = createSlice({
  name: "filter",
  initialState: { value: initialFilterState },
  reducers: {
    toggleFilter: (state, action: PayloadAction<FilterInterface[]>) => {
      state.value = action.payload
    },
  },
})

export const { toggleFilter } = filterSlice.actions

export default filterSlice.reducer
