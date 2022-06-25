import React, { useState } from 'react';

export const useForm = initialValue => {
    const [values, setValues] = useState(initialValue);
    console.log(values)

    const setValuesForm = (e, val) => {
        console.log('custOmVal',val);
        let value;
        if(val!== undefined){
            value = val
        } else {
            value = e.target.value
        }

        setValues({ ...values, [e.target.name]: value })
    }
    return [values, setValuesForm]
};

