import React from "react"
import { Field, useField } from "formik"
import { StyleField, InputWrapper, Label } from "./input.style"

function Input({ label, name, hideLabels, ...rest }) {
  // Destructuring field context
  const [field, meta] = useField(name)
  // const valid = !(meta.touched && meta.error)

  // console.log(valid)

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

      {/* <StyleField
        id={name}
        {...field}
        
        valid={!(meta.touched && meta.error)}
        {...rest}
      /> */}
    </InputWrapper>
  )
}

export default Input
