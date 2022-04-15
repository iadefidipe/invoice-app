import React from "react"
import DateInput from "./DatePicker"
import Input from "./input/Input"
import Select from "./Select"

interface FormikControlsInterface {
  control: string
  label: string
  name: string
  options: {
    name: string
    value: number
  }[]
}

function FormikControls({
  control,
  label,
  name,
  options,
  ...rest
}: FormikControlsInterface) {
  switch (control) {
    case "input":
      return <Input label={label} name={name} {...rest} />
    case "select":
      return <Select label={label} name={name} options={options} {...rest} />
    case "date":
      return <DateInput label={label} name={name} />
    default:
      return null
  }
}

export default FormikControls
