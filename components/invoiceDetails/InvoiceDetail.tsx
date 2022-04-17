import styled, { css } from "styled-components"
import { InnerWrapper } from "pages/index"
import { useAppSelector, useAppDispatch } from "redux/types/reduxTypes"
import Image from "next/image"
import arrow from "../../assets/icon-arrow-left.svg"
import { fontStylesA, fontStylesB } from "components/shared/typography"
import Link from "next/link"
import { invoicesMessage } from "utilities/Misc"
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from "components/shared/Headings"
import CreateEditForm from "components/form/CreateEditForm"
import { InvoiceInterface } from "data/form"
import DeletePopup from "./DeletePopup"
import InvoiceHeader from "./InvoiceHeader"
import InvoiceFooter from "./InvoiceFooter"
import InvoiceBody from "./InvoiceBody"
import { useEffect } from "react"

const Wrapper = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const Container = styled.div`
  width: 100%;
  padding: 0 24px;
`
const BackLink = styled(Link)``

const LinkWrap = styled.div`
  cursor: pointer;
`
const LinkText = styled.span`
  ${fontStylesA}
`

interface InvoiceDetailPropInterface {
  id: string
}

function InvoiceDetail({ id }: InvoiceDetailPropInterface) {
  const invoices = useAppSelector((state) => state.invoice.value)
  const invoice = invoices.find(
    (invoice: InvoiceInterface) => invoice.id == id
  ) as InvoiceInterface

  return (
    <>
      <DeletePopup invoice={invoice} />
      <CreateEditForm invoice={invoice} />
      <Container>
        <Wrapper>
          <BackLink href={`/`} passHref={true}>
            <LinkWrap>
              <Image src={arrow} alt='' /> <LinkText>Go Back</LinkText>
            </LinkWrap>
          </BackLink>
          <InvoiceHeader invoice={invoice} />
          <InvoiceBody invoice={invoice} />
        </Wrapper>
      </Container>
      <InvoiceFooter invoice={invoice} />
    </>
  )
}

export default InvoiceDetail
