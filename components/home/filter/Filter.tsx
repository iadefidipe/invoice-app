import { useState, useRef, useEffect } from 'react'
import { Span } from '../../../styles/HelperStyles'
import Image from 'next/image'
import arrow from '../../../assets/icon-arrow-down.svg'
import FilterOption from './FilterOption'
import { FilterWrapper, Header, Heading, ImageWrap } from './Filter.style'

function Filter() {
	const dropdown = useRef<HTMLDivElement | null>(null)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		document.addEventListener('mousedown', (e) => {
			const target = e.target as Element
			if (dropdown.current && !dropdown?.current?.contains(target)) {
				setOpen(false)
			}
		})
	},[])

	return (
		<FilterWrapper ref={dropdown}>
			<Header>
				<Heading
					id='filterHeading'
					aria-controls='dropdown-filter-options'
					onClick={() => setOpen(!open)}>
					Filter <Span>By Status</Span>
				</Heading>
				<ImageWrap open={open}>
					<Image src={arrow} alt='' />
				</ImageWrap>
			</Header>
			{open && <FilterOption />}
		</FilterWrapper>
	)
}

export default Filter
