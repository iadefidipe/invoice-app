import Filter from "../filter/Filter"
import { Span } from "../../../styles/HelperStyles"
import {
  HeaderWrapper,
  TextWrapper,
  Heading,
  SubHeading,
  InnerWrapper,
  Button,
} from "./Header.style"
import { toggleForm } from "../../../redux/features/openForm"
import { toggleExit } from "../../../redux/features/open"
import { useAppDispatch, useAppSelector } from "redux/types/reduxTypes"
import { invoicesMessage } from "utilities/Misc"

function Header(): JSX.Element {
  const dispatch = useAppDispatch()
  const filteredInvoice = useAppSelector((state) => state.filteredInvoice.value)
  const filters = useAppSelector((state) => state.filter.value)
  const checkedFilter = filters.filter((filter) => filter.checked === true)
  const message = invoicesMessage(
    filteredInvoice.length,
    checkedFilter[0]?.value
  )

  return (
    <HeaderWrapper>
      <TextWrapper>
        <Heading>Invoices</Heading>
        <SubHeading>{message}</SubHeading>
      </TextWrapper>
      <InnerWrapper>
        <Filter />
        <Button
          onClick={() => {
            dispatch(toggleForm(true))
            // dispatch(toggleExit(false))
          }}
        >
          New <Span>Invoice</Span>
        </Button>
      </InnerWrapper>
    </HeaderWrapper>
  )
}

export default Header
