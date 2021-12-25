import styled from 'styled-components'
import Avatar from './shared/Avatar'
import Logo from './shared/Logo'
import { toggleThemeFunc } from '../types/types'
import ThemeToggle from './ThemeToggle'

const SidebarWrapper = styled.aside`
	background-color: ${({ theme }) => theme.color.sidebar.bg};
	position: sticky;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 900px) {
		flex-direction: column;
	}
`
const InnerWrapper = styled.div``

function Sidebar({ toggleTheme }: toggleThemeFunc) {
	return (
		<SidebarWrapper>
			<Logo />
			<ThemeToggle toggleTheme={toggleTheme} />
			<Avatar />
		</SidebarWrapper>
	)
}

export default Sidebar
