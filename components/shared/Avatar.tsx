import styled from 'styled-components'
import Image from 'next/image'
import avartar from '../../assets/image-avatar.jpg'

const Button = styled.button`
	height: 2rem;
	width: 2rem;
	border: none;
	&,
	& > *,
	span {
		border-radius: 100px;
	}
`

const AvatarImage = styled.div``

function Avatar() {
	return (
		<Button>
			<AvatarImage>
				<Image src={avartar} alt='app-avartar' layout='responsive'></Image>
			</AvatarImage>
		</Button>
	)
}

export default Avatar
