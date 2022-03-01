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
import { toggleForm } from "../../../redux/features/openForm"
import { toggleExit } from "../../../redux/features/open"
import { useAppDispatch, useAppSelector } from "../../../redux/types/reduxTypes"

function Header(): JSX.Element {
	const dispatch = useAppDispatch()
	return (
		<HeaderWrapper>
			<TextWrapper>
				<Heading>Invoices</Heading>
				<SubHeading>No Invoices</SubHeading>
			</TextWrapper>
			<InnerWrapper>
				<Filter />
				<Button onClick={ () => {dispatch(toggleForm(true))
				dispatch(toggleExit(false))} } >
					New <Span>Invoice</Span>
				</Button>
			</InnerWrapper>
		</HeaderWrapper>
	)
}

export default Header
