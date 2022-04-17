import styled, { css } from "styled-components"
import Buttons from "./Buttons"
import { InvoiceInterface } from "data/form"

const Wrapper = styled.div`
  margin-top: 3.5rem;
  padding: 2rem;
  background: ${(props) => props.theme.color.invoiceItem.bg};
  @media only screen and (min-width: 768px) {
    display: none;
  }
`
const FooterWrap = styled.div`
  margin: 0 auto;
`
interface InvoiceFooterInterface {
  invoice: InvoiceInterface
}
export default function InvoiceFooter({ invoice }: InvoiceFooterInterface) {
  return (
    <Wrapper>
      <FooterWrap>
        <Buttons data={invoice} />
      </FooterWrap>
    </Wrapper>
  )
}
