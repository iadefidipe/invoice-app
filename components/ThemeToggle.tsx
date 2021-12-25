import styled, { ThemeContext } from 'styled-components'
import { useContext } from 'react'
import Image from 'next/image'
import { toggleTheme } from '../redux/features/theme'
import { toggleThemeFunc } from '../types/types'

const Button = styled.button`
	border: none;
	cursor: pointer;
	outline: none;

	width: 32px;
	height: 32px;
	border: 2px solid red;

	:focus-visible {
		outline: 2px dotted #7e88c3;
	}
`
const Wrapper = styled.div`
	border: 2px solid green;
	width: 100%;
	height: 100%;
	position: relative;
	object-fit: contain;

	span {
		border: 2px solid yellow;
		width: 100%;
		border-radius: 50%;
	}
`

function ThemeToggle({ toggleTheme }: toggleThemeFunc) {
	const theme = useContext(ThemeContext)
	console.log(theme.icon.path)
	return (
		<Button
			onClick={() => {
				toggleTheme()
			}}>
			<Wrapper>
				<Image src={theme.icon.path} layout='fill' alt={theme.icon.alt} />
			</Wrapper>
		</Button>
	)
}

export default ThemeToggle
