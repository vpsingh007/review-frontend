import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, Button } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';

const Popup = ({ isPopupOpen, setIsPopupOpen, popupData }) => {
    const initialFormData = {};
    popupData.formData.map(el => {
        initialFormData[el.fieldName] = el.initialValue;
    })
    const [formValues, setFormValues] = useForm(initialFormData);

    const returnFormField = (fieldData,index) => {
        let field;
        if (fieldData.fieldType === 'dropdown') {
            field = <Form.Select name={fieldData.fieldName} onChange={setFormValues} value={formValues[fieldData.fieldName]} aria-label="Default select example">
                <option>{fieldData.fieldHeading}</option>
                {fieldData.options.map((el,i) => {
                    return <option key={i} value={el.value}>{el.name}</option>
                })}
            </Form.Select>
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
    return (
        <>
            <Modal show={isPopupOpen} onHide={() => { setIsPopupOpen(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>{popupData?.heading || 'Sample heading'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {popupData.formData.map((el, index) => {
                            return (<div key={index}> {returnFormField(el,index)} </div>)
                        })}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setIsPopupOpen(false) }}>
                        {popupData.buttons[0]}
                    </Button>
                    <Button variant="primary" onClick={() => { popupData.onSubmit(formValues), setIsPopupOpen(false) }}>
                        {popupData.buttons[1]}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

// const samplePopupData = {
//     heading: "Sample Heading",
//     onSubmit: (values) => { console.log(values) },
//     buttons: ['Close', 'Add Property'],
//     formData: [{ fieldHeading: 'Email', fieldName: 'email', fieldType: 'email', initialValue: '' },
//     { fieldHeading: 'Property Type', fieldName: 'propertyType', fieldType: 'dropdown', options: [{ name: 'Outdoor', value: 'outdoor' }, { name: 'Flats', value: 'flats' }], initialValue: '' }]
// }

export default Popup;