import Filter from '../filter/Filter'
import { Span } from '../../../styles/HelperStyles'
import {
	HeaderWrapper,
	TextWrapper,
	Heading,
	SubHeading,
	InnerWrapper,
	Button,
} from './Header.style'

function Header(): JSX.Element {
	return (
		<HeaderWrapper>
			<TextWrapper>
				<Heading>Invoices</Heading>
				<SubHeading>No Invoices</SubHeading>
			</TextWrapper>
			<InnerWrapper>
				<Filter />
				<Button>
					New <Span>Invoice</Span>
				</Button>
			</InnerWrapper>
		</HeaderWrapper>
	)
}

export default Header
