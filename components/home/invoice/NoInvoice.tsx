import styled from "styled-components"
import { Heading2 } from "components/shared/Headings"
import { fontStylesA } from "components/shared/typography"
import Image from "next/image"
import illustration from "assets/illustration-empty.svg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const ImageIcon = styled(Image)`
  margin-bottom: 2.5rem;
`

const Heading = styled(Heading2)`
  margin-bottom: 1.5rem;
`

const Paragraph = styled.p`
  max-width: 12.5rem;
  ${fontStylesA}
  line-height: 1rem;
  span {
    font-weight: bold;
  }
`

export default function NoInvoices() {
  return (
    <Wrapper>
      <ImageIcon src={illustration} alt='' />
      <Heading>There is nothing here.</Heading>
      <Paragraph>
        Create an invoice by clicking the <span>New</span> button and get
        started.
      </Paragraph>
    </Wrapper>
  )
}
