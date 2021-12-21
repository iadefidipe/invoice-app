import { useState, useEffect } from 'react'
import { light, dark } from '../data/theme'
import Store from 'store'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/Globalstyles'
import Sidebar from './Sidebar'

type layoutType = {
	children: React.ReactNode
}
type theme = 'light' | 'dark'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	@media only screen and (min-width: 900px) {
		flex-direction: row;
	}
`

function layout({ children }: layoutType) {
	const [theme, setTheme] = useState<theme>('light')
	useEffect(() => {
		if (Store.get('theme') === undefined) {
			Store.set('theme', 'light')
		}
		setTheme(Store.get('theme'))
	}, [theme])

	function toggleTheme(): void {
		Store.set('theme', theme === 'light' ? 'dark' : 'light')
		setTheme(Store.get('theme'))
	}
	return (
		<ThemeProvider theme={theme === 'light' ? light : dark}>
			<GlobalStyles />
			<Wrapper>
				<Sidebar />
				{children}
			</Wrapper>
		</ThemeProvider>
	)
}

export default layout
