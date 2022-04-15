import styled from 'styled-components'
import Image from 'next/image'
import logo from '../../assets/logo.svg'

const LogoWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 5rem;
	height: 5rem;
	border-radius: 0 20px 20px 0;
	background: #7c5dfa;
	::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 50%;
		background: #9277ff;
		border-radius: 20px 0 20px 0;
	}
	@media only screen and (min-width: 900px) {
		width: 6.4375rem;
		height: 6.4375rem;
	}
	& > span {
		z-index: 20;
	}
`

function Logo() {
	return (
		<LogoWrapper>
			<Image src={logo} alt='invoice-logo' />
		</LogoWrapper>
	)
}

export default Logo
