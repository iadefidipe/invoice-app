import { useField } from "formik"
import React from "react"
import styled from "styled-components"
import { fontStylesA } from "../shared/typography"
import arrow from "../../assets/icon-arrow-down.svg"

const SelectDrop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  ${fontStylesA}
`
const Label = styled.label`
  color: ${(props) => props.theme.color.text.formLabel};
  transition: color 0.3s;
`
const SelectWrapper = styled.div`
  position: relative;
  grid-column: 1 / -1;
  ::after {
    content: url(${arrow.src});
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }
`

const StyledSelect = styled.select`
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.form.fieldBorder};
  border-radius: 4px;
  padding: 1rem 1.25rem;
  background: ${(props) => props.theme.color.form.fieldBg};
  appearance: none;
  outline: none;
  ${fontStylesA}
  color: ${(props) => props.theme.color.text.heading};
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s, border 0.3s, background 0.3s;
  :focus {
    border: 1px solid #9277ff;
  }
`
interface SelectInterface {
  label: string
  name: string
  options: { name: string; value: number }[]
}

function Select({ label, name, options, ...rest }: SelectInterface) {
  const [field] = useField(name)
  return (
    <SelectDrop>
      <Label htmlFor={name}>{label}</Label>
      <SelectWrapper>
        <StyledSelect {...field}>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            )
          })}
        </StyledSelect>
      </SelectWrapper>
    </SelectDrop>
  )
}

export default Select
