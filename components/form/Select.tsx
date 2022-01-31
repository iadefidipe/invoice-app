import { Field, ErrorMessage } from "formik";
import React from 'react';
import styled from "styled-components";

const SelectDrop = styled.div``
const Label = styled.label``

function Select(props) {
    const { label, name, options, ...rest } = props
    return(
        <SelectDrop>
            <Label htmlFor={name} >{label}</Label>
            <Field as='select' id={name} name={name} {...rest}>
                {options.map( option => {
                    return(
                        <option key={option.key} value={option.value}>{option.key}</option>
                    )
                } )}
            </Field>
        </SelectDrop>
    )
}

export default Select;
