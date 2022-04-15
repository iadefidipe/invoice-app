import styled, { ThemeContext } from 'styled-components'
import { useContext } from 'react'
import image from 'next/image'
import { toggleTheme } from '../../redux/features/theme'
import Store from 'store'
import { useAppDispatch, useAppSelector } from '../../redux/types/reduxTypes'
import moonIcon from '../assets/icon-moon.svg'

// component styles
const Button = styled.button`
	border: none;
	cursor: pointer;
	outline: none;
	background: transparent;
	width: 32px;
	height: 32px;
	:focus-visible {
		outline: 2px dotted #7e88c3;
	}
`
const Wrapper = styled.div`
	border: 2px solid white;
	width: 100%;
	height: 100%;
	position: relative;
	object-fit: cover;

	span {
		width: 100%;
		border-radius: 50%;
	}
`
const Image = styled(image)``

// functions
function ThemeToggle() {
	const Theme = useContext(ThemeContext)

	const dispatch = useAppDispatch()
	const theme = useAppSelector((state) => state.theme.value)

	// updating the theme in local storage, which auto-updates the theme state
	function themeToggle(): void {
		Store.set('theme', theme === 'light' ? 'dark' : 'light')
		dispatch(toggleTheme(Store.get('theme')))
	}
	return (
		<Button
			onClick={() => {
				themeToggle()
			}}>
			<Wrapper>
				<Image src={Theme.icon.path} layout='fill' alt={Theme.icon.alt} />
			</Wrapper>
		</Button>
	)
}

export default ThemeToggle
