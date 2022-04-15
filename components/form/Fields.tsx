import React from "react"
import { TouchScrollable } from "react-scrolllock"
import styled from "styled-components"
import { fontStylesA } from "../shared/typography"
import FormikControls from "./FormikControls"
import Items from "./Items"


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1rem;
  overflow-y: scroll;
  @media only screen and (min-width: 500px) {
    padding-right: 2rem;
  }
`

const FieldSet = styled.fieldset`
  border: none;
`

const Legend = styled.legend`
  margin-bottom: 1.5rem;
  ${fontStylesA}
  color: #7C5DFA;
  font-weight: bold;
`

const BillFrom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  > *:nth-child(1) {
    grid-column: 1 / -1;
  }
  > *:nth-child(2) {
    grid-column: 1 / 2;
  }
  > *:nth-child(3) {
    grid-column: 2 / -1;
  }
  > *:nth-child(4) {
    grid-column: 1 / -1;
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;

    > *:nth-child(2) {
      grid-column: 1 / 2;
    }

    > *:nth-child(3) {
      grid-column: 2 / 3;
    }

    > *:nth-child(4) {
      grid-column: 3 / 4;
    }
  }
`

const BillTo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  > * {
    grid-column: 1 / -1;
  }
  > *:nth-child(4) {
    grid-column: 1 / 2;
  }
  > *:nth-child(5) {
    grid-column: 2 / -1;
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;

    > *:nth-child(4) {
      grid-column: 1 / 2;
    }

    > *:nth-child(5) {
      grid-column: 2 / 3;
    }

    > *:nth-child(6) {
      grid-column: 3 / 4;
    }
  }
`

const OtherFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  > *:nth-child(1) {
    grid-column: 1 / 2;
  }
  > *:nth-child(2) {
    grid-column: 2 / -1;
  }
  > *:nth-child(3) {
    grid-column: 1 / -1;
  }
`

const dropdownOptions = [
  { name: "Net 1 Day", value: 1 },
  { name: "Net 7 Days", value: 7 },
  { name: "Net 14 Days", value: 14 },
  { name: "Net 30 Days", value: 30 },
]

function Fields() {
  return (
    <TouchScrollable>
      <Wrapper>
        <FieldSet>
          <Legend>Bill From</Legend>
          <BillFrom>
            <FormikControls
              control='input'
              label='Street Address'
              name='senderAddress.street'
            />
            <FormikControls
              control='input'
              label='City'
              name='senderAddress.city'
            />
            <FormikControls
              control='input'
              label='Post Code'
              name='senderAddress.postCode'
            />
            <FormikControls
              control='input'
              label='Country'
              name='senderAddress.country'
            />
          </BillFrom>
        </FieldSet>

        <FieldSet>
          <Legend>Bill To</Legend>
          <BillFrom>
            <FormikControls
              control='input'
              label="Client's Name"
              name='clientName'
            />
            <FormikControls
              control='input'
              label="Client's Email"
              name='clientEmail'
              placeholder='e.g. email@example.com'
            />
            <FormikControls
              control='input'
              label='Street Address'
              name='clientAddress.street'
            />
            <FormikControls
              control='input'
              label='City'
              name='clientAddress.city'
            />
            <FormikControls
              control='input'
              label='Post Code'
              name='clientAddress.postCode'
            />
            <FormikControls
              control='input'
              label='Country'
              name='clientAddress.country'
            />
          </BillFrom>
        </FieldSet>
        <FieldSet>
          <OtherFields>
            <FormikControls
              control='date'
              label='Invoice Date'
              name='createdAt'
            />
            <FormikControls
              control='select'
              label='Payment Terms'
              name='paymentTerms'
              options={dropdownOptions}
            />
            <FormikControls
              control='input'
              label='Description'
              name='description'
              placeholder='e.g. Graphic Design Service'
            />
          </OtherFields>
        </FieldSet>

        <Items name='items' />
      </Wrapper>
    </TouchScrollable>
  )
}

export default Fields
