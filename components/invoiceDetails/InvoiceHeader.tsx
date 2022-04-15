import styled, { css } from "styled-components"
import InvoiceStatus from "components/shared/InvoiceStatus"
import { fontStylesA, fontStylesB } from "components/shared/typography"
import Buttons from "./Buttons"
import { InvoiceInterface } from "data/form"

const Wrapper = styled.div`
  display: grid;
  background: ${(props) => props.theme.color.invoiceItem.bg};
  width: 100%;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  border: 2px red solid;

  & > div:nth-of-type(2) {
    display: none;
    @media only screen and (min-width: 768px) {
      grid-columnn: 2/3;
      display: flex;
    }
  }
`
const StatusWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media only screen and (min-width: 768px) {
    grid-columnn: 1/2;
    justify-content: start;
  }
`

const StatusInvoice = styled(InvoiceStatus)``
const StatusText = styled.p`
  ${fontStylesB}
`

interface InvoiceHeaderInterface {
  invoice: InvoiceInterface
}

function InvoiceHeader({ invoice }: InvoiceHeaderInterface) {
  return (
    <Wrapper>
      <StatusWrap>
        <StatusText>Status</StatusText>
        <StatusInvoice status={invoice?.status} />
      </StatusWrap>

      <Buttons data={invoice} />
    </Wrapper>
  )
}

export default InvoiceHeader
