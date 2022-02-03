import React from 'react';
import DateInput from './DatePicker';
import Input from './input/Input';
import Select from './Select';

interface FormikControlsInterface extends React.DetailedHTMLProps<
React.LabelHTMLAttributes<HTMLLabelElement>,
HTMLLabelElement
> {
    control: string
    
}
type P = FormikControlsInterface

function FormikControls({control, ...rest}:FormikControlsInterface) {
    
    
    switch(control){
        case 'input':
            return <Input {...rest}/>
        case 'select':
            return <Select {...rest}/>
        case 'date':
            return <DateInput{...rest}/>
        default:
            return null
    } 
}

export default FormikControls;
