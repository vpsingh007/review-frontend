import React from 'react'
import { Form, Button } from 'react-bootstrap';



export const returnFormField = (fieldData, setFormValues, formValues, index) => {
    let field;
    if (fieldData.fieldType === 'dropdown') {
        field = <Form.Select name={fieldData.fieldName} onChange={setFormValues} value={formValues[fieldData.fieldName]} aria-label="Default select example">
            <option>{fieldData.fieldHeading}</option>
            {fieldData.options.map((el, i) => {
                return <option key={i} value={el.value}>{el.name}</option>
            })}
        </Form.Select>
    } else if (fieldData.fieldType === 'checkbox') {
        field = <Form.Check
            type={fieldData.fieldType}
            name={fieldData.fieldName}
            value={formValues[fieldData.fieldName]}
            onClick={setFormValues}
            label={fieldData.fieldLabel}
        />

    } else {
        field = <Form.Control
            type={fieldData.fieldType}
            placeholder={'Enter ' + fieldData.fieldHeading}
            autoFocus={index === 0 ? true : false}
            name={fieldData.fieldName}
            value={formValues[fieldData.fieldName]}
            onChange={setFormValues}
        />
    }

    return (<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{fieldData.fieldHeading}</Form.Label>
        {field}
    </Form.Group>)

}