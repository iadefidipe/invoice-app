import styled, { css } from "styled-components"
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from "components/shared/Headings"
import InvoiceTable from "./InvoiceTable"
import { fontStylesA, fontStylesB } from "components/shared/typography"
import { InvoiceInterface } from "data/form"
import { Shadow } from "styles/HelperStyles"

const Wrapper = styled.div`
  ${Shadow}
  padding: 1rem 1.5rem;
  display: grid;
  
  background: ${(props) => props.theme.color.invoiceItem.bg};
  gap: 31px;
  border-radius: 8px;
`
const InvoiceDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 450px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Description = styled.div``
const DescriptionText = styled.p`
  ${fontStylesB}
  font-size: 12px;
`

const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  & p {
    ${fontStylesA}
  }
`
const Id = styled(Heading2)`
  font-size: 0.75rem;
  span {
    color: #7e88c3;
  }
`

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);

  & div:nth-of-type(4) {
    grid-column: 1/3;
    margin-top: 2rem;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1.5fr;
    grid-template-rows: repeat(2, 1fr);
    & div:nth-of-type(2) {
      grid-column: 1/2;
    }

    & div:nth-of-type(4) {
      grid-column: 3/4;
      grid-row: 1/2;
      margin-top: 0;
    }
  }
`

const StyledDetail = styled.div``
const PaymentDue = styled.div``
const BillTo = styled.div`
  grid-column: 2/ 3;
  grid-row: 1/3;
`
const DetailHeading = styled.p`
  ${fontStylesA}
  margin-bottom: 12px;
`
const DetailBold = styled(Heading3)``

interface InvoiceDetailPropInterface {
  invoice?: InvoiceInterface
}

function InvoiceBody({ invoice }: InvoiceDetailPropInterface) {
  return (
    <Wrapper>
      <InvoiceDescriptionWrap>
        <Description>
          <Id>
            <span>#</span>
            {invoice?.id?.slice(0, 6).toUpperCase()}
          </Id>
          <DescriptionText>{invoice?.description}</DescriptionText>
        </Description>

        <Address>
          <p>{invoice?.senderAddress.street}</p>
          <p>{invoice?.senderAddress.city}</p>
          <p>{invoice?.senderAddress.postCode}</p>
          <p>{invoice?.senderAddress.country}</p>
        </Address>
      </InvoiceDescriptionWrap>

      <Details>
        <StyledDetail>
          <DetailHeading>Invoice Date</DetailHeading>
          <DetailBold>{invoice?.createdAt}</DetailBold>
        </StyledDetail>
        <StyledDetail>
          <DetailHeading>PaymentDue</DetailHeading>
          <DetailBold>{invoice?.paymentDue}</DetailBold>
        </StyledDetail>
        <BillTo>
          <DetailHeading>Bill To</DetailHeading>
          <DetailBold>{invoice?.clientName}</DetailBold>
          <Address>
            <p>{invoice?.clientAddress.street}</p>
            <p>{invoice?.clientAddress.city}</p>
            <p>{invoice?.clientAddress.postCode}</p>
            <p>{invoice?.clientAddress.country}</p>
          </Address>
        </BillTo>

        <StyledDetail>
          <DetailHeading>Send To</DetailHeading>
          <DetailBold>{invoice?.clientEmail}</DetailBold>
        </StyledDetail>
      </Details>

      <InvoiceTable items={invoice?.items} total={invoice?.total} />
    </Wrapper>
  )
}

export default InvoiceBody
