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

function Layout({ children }: layoutType) {
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

export default Layout
Hi Offchain Labs Hiring Team,

It is definitely an exciting time to work in the blockchain space. I believe blockchain is the future of the internet and this is clear as the innovations in the space have revolutionized different sectors and it is rapidly gaining massive acceptance.

With over a year of hands-on experience with frontend technologies, building functional and accessible web projects, I can’t think of a more exciting start to my professional growth than exploring and shaping the future with you. What, specifically, do I bring to the team?

Excited to learn and develop blockchain technology:

I- Currently studying and learning about bitcoin and ethereum, and the blockchain. My goal is to build products that scale, are accessible, and are safe.

I- Building competency in solidity and web3.js, and I currently have a simple dapp deployed on the ethereum test net.

Great frontend skills: 

- I  write clean and efficient code with HTML, CSS/SCSS, Javascript (React/Redux, Next.js), typescript. I am also very open to feedback on my work and constantly looking for ways to improve and stay up to date with new technologies.

I am confident that this is a very rare opportunity to grow and draw from the wealth of experience and expertise on your team. I am certain that I would be a valuable asset in your company and I would appreciate the opportunity to prove this to you.

Thank you for your time and consideration. I look forward to speaking with you about this opportunity.

Best Regards,

Israel Adefidipe

 