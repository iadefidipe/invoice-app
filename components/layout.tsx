import { useState, useEffect } from 'react'
import { light, dark } from '../data/theme'
import Store from 'store'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/Globalstyles'
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

function Layout({ children }: layoutType) {
	const [theme, setTheme] = useState<theme>('light')

	//using store.js lib for local storage to track
	useEffect(() => {
		if (Store.get('theme') === undefined) {
			Store.set('theme', 'light')
		}
		setTheme(Store.get('theme'))
	}, [setTheme])

	function toggleTheme(): void {
		Store.set('theme', theme === 'light' ? 'dark' : 'light')
		setTheme(Store.get('theme'))
		console.log('hello')
	}
	return (
		<ThemeProvider theme={theme === 'light' ? light : dark}>
			<GlobalStyles />
			<Wrapper>
				<Sidebar toggleTheme={toggleTheme} />
				{children}
			</Wrapper>
		</ThemeProvider>
	)
}

export default Layout
