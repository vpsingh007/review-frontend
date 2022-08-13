import { useState } from 'react';

export const useForm = initialValue => {
    const [values, setValues] = useState(initialValue);
    const setValuesForm = (e, val) => {
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

