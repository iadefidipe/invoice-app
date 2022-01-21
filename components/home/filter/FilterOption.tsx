import { useAppSelector, useAppDispatch } from '../../../redux/types/reduxTypes'
import { useEffect } from 'react'
import Image from 'next/image'
import IconCheck from '../../../assets/icon-check.svg'
import { FilterDropdown, Option, Checkbox } from './FilterOption.style'
import { filterState } from '../../../redux/features/filter'

// type filterOptionProp = {
// 	handleClickOutside(e: React.ChangeEvent<HTMLButtonElement>): void
// }

function FilterOption() {
	const filters = useAppSelector<filterState>((state) => state.filter.value)
	const dispatch = useAppDispatch()

	// function handleClick(id) {
	// 	setOptions(
	// 		Filter.map((filter) => {
	// 			if (id === filter.id) {
	// 				setFilter(filter.checked ? null : filter.value)
	// 				return { ...filter, checked: !filter.checked }
	// 			}
	// 			return { ...filter, checked: false }
	// 		})
	// 	)
	// }

	// useEffect(() => {
	// 	document.addEventListener('mousedown', handleClickOutside)
	// 	return () => {
	// 		document.removeEventListener('mousedown', handleClickOutside)
	// 	}
	// })

	return (
		<FilterDropdown>
			{filters.map((filter) => (
				<Option key={filter.id}>
					<input
						type='checkbox'
						// checked={checked}
						// onChange={() => {
						// 	handleClick(id)
						// }}
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
