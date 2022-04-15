import { useAppSelector, useAppDispatch } from "../../../redux/types/reduxTypes"
import { useEffect } from "react"
import Image from "next/image"
import IconCheck from "../../../assets/icon-check.svg"
import { FilterDropdown, Option, Checkbox } from "./FilterOption.style"
import filter, { toggleFilter, filterState } from "redux/features/filter"
import { useState } from "react"

// type filterOptionProp = {
// 	handleClickOutside(e: React.ChangeEvent<HTMLButtonElement>): void
// }

function FilterOption() {
  const dispatch = useAppDispatch()

  const filters = useAppSelector((state) => state.filter.value)

  function handleChange(id: number, array: filterState[]) {
    const newFilters = array.map((filter) => {
      if (!(filter.id === id)) {
        return { ...filter, checked: false }
      }
      if (filter.id === id) {
        return { ...filter, checked: !filter.checked }
      }

      return filter
    })

    dispatch(toggleFilter(newFilters))
  }

  return (
    <FilterDropdown>
      {filters.map((filter) => (
        <Option key={filter.id}>
          <input
            type='checkbox'
            checked={filter.checked}
            value={filter.value}
            onChange={() => {
              handleChange(filter.id, filters)
            }}
          />
          <Checkbox className='checkbox'>
            <Image src={IconCheck} alt='' />
          </Checkbox>

          <span>{filter.value}</span>
        </Option>
      ))}
    </FilterDropdown>
  )
}

export default FilterOption
