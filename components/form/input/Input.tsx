import React from "react"
import { Field, useField } from "formik"
import { StyleField, InputWrapper, Label } from "./input.style"

interface InputInterface{
  label: String
  name: any
  hideLabels?: boolean
  disabled?: boolean
  faded?: boolean
}

function Input({ label, name, hideLabels, ...rest }:InputInterface) : JSX.Element{
  // Destructuring field context
  const [field, meta] = useField(name)


  return (
    <InputWrapper hideLabels={hideLabels}>
      <Label htmlFor={name} valid={!(meta.touched && meta.error)}>
        {label}
      </Label>

      <Field name={name}>
        {(props:any) => {
          const { field, form, meta } = props
          return (
            <StyleField
              id={name}
              {...field}
              valid={!(meta.touched && meta.error)}
              {...rest}
            />
          )
        }}
      </Field>
    </InputWrapper>
  )
}

export default Input
