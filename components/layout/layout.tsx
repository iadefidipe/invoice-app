import { useState, useEffect } from 'react'
import { light, dark } from '../../data/theme'
import Store from 'store'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../styles/Globalstyles'
import Sidebar from './Sidebar'
import { useAppDispatch, useAppSelector } from '../../redux/types/reduxTypes'
import { toggleTheme } from '../../redux/features/theme'

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
	//create dispatch function
	const dispatch = useAppDispatch()
	const theme = useAppSelector((state) => state.theme.value)

	//using store.js lib for local storage to track
	useEffect(() => {
		if (Store.get('theme') === undefined) {
			Store.set('theme', 'light')
		}
		dispatch(toggleTheme(Store.get('theme')))
	}, [theme])

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

export default Layout
