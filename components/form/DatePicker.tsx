import  { forwardRef } from "react"
import DatePicker from "react-datepicker"
import { Field, useFormikContext, useField } from "formik"
import "react-datepicker/dist/react-datepicker.css"
import styled from "styled-components"
import Image from "next/image"
import calenderIcon from '../../assets/icon-calendar.svg'

import { fontStylesA } from "../shared/typography"

interface DatePickerStyleInterface {
  valid?: string
}
interface FowardrefInterface {
  value: Date | null
  onClick: () => void
}
interface DatePropInterface{
  label: string
  name: string
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  ${fontStylesA}
  .react-datepicker-wrapper {
    grid-column: 1 / -1;
  }
`

const Label = styled.label<DatePickerStyleInterface>`
  grid-column: 1 / 2;
  margin-bottom: 0.625rem;
  color: ${(props) =>
    props.valid ? props.theme.color.text.formLabel : "#EC5757"};
  transition: color 0.3s;
`

const Button = styled.button<DatePickerStyleInterface>`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  border: 1px solid
    ${(props) => (props.valid ? props.theme.color.form.fieldBorder : "#EC5757")};
  border-radius: 4px;
  padding: 1rem 1.25rem;
  background: ${(props) => props.theme.color.form.fieldBg};
  ${fontStylesA}
  color: ${(props) => props.theme.color.text.heading};
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: color 0.3s, border 0.3s, background 0.3s;
  :focus {
    border: 1px solid #9277ff;
  }
`


function DateInput({ label, name }: DatePropInterface ){
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const CustomInput = forwardRef<HTMLButtonElement, FowardrefInterface > (({ value, onClick }, ref) => (
    <Button type='button' onClick={onClick} ref={ref} valid='true'>
      <span>{value}</span>
      <Image src={calenderIcon}  alt='' />
    </Button>
  ))

  return (
    <Wrapper>
      <Label htmlFor={name} valid='true'>
        {label}
      </Label>
      <DatePicker
        id={name}
        {...field}
        selected={field.value}
        onChange={(value) => setFieldValue(name, value)}
        customInput={<CustomInput />}
        dateFormat='MMM d, yyyy'
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </Wrapper>
  )
}

export default DateInput
