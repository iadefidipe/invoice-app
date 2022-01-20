import Avatar from '../shared/Avatar'
import Logo from '../shared/Logo'
import { toggleThemeFunc } from '../../types/types'
import ThemeToggle from '../shared/ThemeToggle'
import { SidebarWrapper, InnerWrapper } from './Sidebar.style'

function Sidebar() {
	return (
		<SidebarWrapper>
			<Logo />
			<InnerWrapper>
				<ThemeToggle />
				<Avatar />
			</InnerWrapper>
		</SidebarWrapper>
	)
}

export default Sidebar
