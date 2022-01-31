import React from 'react';
import DatePicker from './DatePicker';
import Input from './Input';
import Select from './Select';

function FormikControls(props) {
    const {control, ...rest} = props
    
    switch(control){
        case 'input':
            return <Input {...rest}/>
        case 'select':
            return <Select {...rest}/>
        case 'date':
            return <DatePicker{...rest}/>
        default:
            return null
    } 
}

export default FormikControls;
