import styled, { css } from "styled-components"
import { InnerWrapper } from "pages/index"
import { useAppSelector } from "redux/types/reduxTypes"
import { InvoiceInterface } from "types/types"
import Image from "next/image"
import arrow from "../../assets/icon-arrow-left.svg"
import { fontStylesA, fontStylesB } from "components/shared/typography"
import InvoiceStatus from "components/shared/InvoiceStatus"
import Link from "next/link"
import { invoicesMessage } from "utilities/Misc"
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from "components/shared/Headings"
import InvoiceTable from "./InvoiceTable"
import Buttons from "./Buttons"
import CreateEditForm from "components/form/CreateEditForm"
import { FormDataInterface } from "data/form"
import DeletePopup from "./DeletePopup"


const Wrapper = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`
const GenStyle = css`
  padding: 1rem 1.5rem;
`
const BackLink = styled(Link)``
const InvoiceHeader = styled.div`
  display: grid;
  background: ${(props) => props.theme.color.invoiceItem.bg};
  width: 100%;
  border-radius: 0.5rem;
  ${GenStyle}
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  & > div:nth-of-type(2) {
    display: none;
    @media only screen and (min-width: 768px) {
      grid-columnn: 2/3;
      display: flex;
    }
  }
`
const InvoiceFooter = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.color.invoiceItem.bg};
  @media only screen and (min-width: 768px) {
    display: none;
  }
`
const FooterWrap = styled.div`
  margin: 0 auto;
`

const LinkWrap = styled.div`
  cursor: pointer;
`
const LinkText = styled.span`
  ${fontStylesA}
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

const StatusText = styled.p`
  ${fontStylesB}
`
const DetailBold = styled(Heading3)``

const StatusInvoice = styled(InvoiceStatus)``

const InvoiceBody = styled.div`
  ${GenStyle}
  display: grid;
  gap: 31px;
`
const Description = styled.div``
const DescriptionText = styled.p`
  ${fontStylesB}
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
const InvoiceDescriptionWrap = styled.div``
interface InvoiceDetailInterface {
  data: FormDataInterface
}

function InvoiceDetail({ data }: InvoiceDetailInterface) {
  console.log("status", data.clientName)
  return (
    <>
    <DeletePopup id = {data.id}/>
      <CreateEditForm invoice={data} />
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

          <Buttons />
        </InvoiceHeader>

        <InvoiceBody>
          <InvoiceDescriptionWrap>
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
          </InvoiceDescriptionWrap>

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

          <InvoiceTable items={data.items} total={data.total} />
        </InvoiceBody>
      </Wrapper>
      <InvoiceFooter>
        <FooterWrap>
          <Buttons />
        </FooterWrap>
      </InvoiceFooter>
    </>
  )
}

export default InvoiceDetail
