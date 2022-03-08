import styled, { css } from "styled-components"
import { InnerWrapper } from "pages/index"
import { useAppSelector } from "redux/types/reduxTypes"
import { InvoiceInterface } from "types/types"
import Image from "next/image"
import arrow from "../../assets/icon-arrow-left.svg"
import { fontStylesA, fontStylesB } from "components/shared/typography"
import InvoiceStatus from "components/shared/InvoiceStatus"
import Button from "components/shared/Buttons"
import Link from "next/link"
import { invoicesMessage } from "utilities/Misc"
import { Id } from "components/home/invoice/invoiceItem.style"
import { Heading1,Heading2, Heading3, Heading4 } from 'components/shared/Headings'

const Wrapper = styled(InnerWrapper)`
  border: 2px red solid;
`
const BackLink = styled(Link)`
  cursor: pointer;
`
const InvoiceHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${(props) => props.theme.color.invoiceItem.bg};
  width: 100%;
  padding: 1rem 1.5rem;
`
const InvoiceFooter = styled.div`
  display: flex;
`

const LinkWrap = styled.div``
const LinkText = styled.span`
  ${fontStylesA}
`

const StatusWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const ButtonWrap = styled(StatusWrap)`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`
const StatusText = styled.p`
  ${fontStylesB}
`
const DetailBold = styled(Heading3)``

const StatusInvoice = styled(InvoiceStatus)``

const InvoiceBody = styled.div``
const Description = styled.div``
const DescriptionText = styled.p`
  ${fontStylesB}
`
const Address = styled.div`
  & p {
    ${fontStylesA}
  }
`

const Details = styled.div``

const StyledDetail = styled.div``
const PaymentDue = styled.div``
const BillTo = styled.div``
const DetailHeading = styled.p`
${fontStylesA}
`
interface InvoiceDetailInterface {
  data: InvoiceInterface
}

function InvoiceDetail({ data }: InvoiceDetailInterface) {
  console.log("status", data.clientName)
  return (
    <Wrapper>
      <BackLink href={`/`} passHref={true}>
        <LinkWrap>
          <Image src={arrow} alt='' /> <LinkText>Go Back</LinkText>
        </LinkWrap>
      </BackLink>

      <InvoiceHeader>
        <StatusWrap>
          <StatusText>Status</StatusText>
          <StatusInvoice status={data.status} />
        </StatusWrap>

        <ButtonWrap>
          <Button secondary>Edit</Button>
          <Button alert>Delete</Button>
          {!(data.status === "paid") && <Button>Mark as Paid</Button>}
        </ButtonWrap>
      </InvoiceHeader>

      <InvoiceBody>
        <Description>
          <Id>
            <span>#</span>
            {data.id.slice(0, 5)}
          </Id>
          <DescriptionText>{data.description}</DescriptionText>
        </Description>

        <Address>
          <p>{data.senderAddress.street}</p>
          <p>{data.senderAddress.city}</p>
          <p>{data.senderAddress.postCode}</p>
          <p>{data.senderAddress.country}</p>
        </Address>

        <Details>
          <StyledDetail>
            <DetailHeading>Invoice Date</DetailHeading>
            <DetailBold>{data.createdAt}</DetailBold>
          </StyledDetail>
          <StyledDetail>
            <DetailHeading>PaymentDue</DetailHeading>
            <DetailBold>{data.paymentDue}</DetailBold>
          </StyledDetail>
          <BillTo>
            <DetailHeading>Bill To</DetailHeading>
            <DetailBold>{data.clientName}</DetailBold>
            <Address>
              <p>{data.clientAddress.street}</p>
              <p>{data.clientAddress.city}</p>
              <p>{data.clientAddress.postCode}</p>
              <p>{data.clientAddress.country}</p>
            </Address>
          </BillTo>

          <StyledDetail>
            <DetailHeading>Send To</DetailHeading>
            <DetailBold>{data.clientEmail}</DetailBold>
          </StyledDetail>
        </Details>
      </InvoiceBody>
      {/* <InvoiceFooter>
        <ButtonWrap>
          <Button secondary>Edit</Button>
          <Button alert>Delete</Button>
          <Button>Mark as Paid</Button>
        </ButtonWrap>
      </InvoiceFooter> */}
    </Wrapper>
  )
}

export default InvoiceDetail
