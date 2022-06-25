import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, Button } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { returnFormField } from '../../helpers/createFormField';
const Popup = ({ isPopupOpen, setIsPopupOpen, popupData }) => {
    const initialFormData = {};
    popupData.formData.map(el => {
        initialFormData[el.fieldName] = el.initialValue;
    })
    const [formValues, setFormValues] = useForm(initialFormData);
    return (
        <>
            <Modal show={isPopupOpen} onHide={() => { setIsPopupOpen(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>{popupData?.heading || 'Sample heading'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {popupData.formData.map((el, index) => {
                            return (<div key={index}> {returnFormField(el, setFormValues, formValues, index)} </div>)
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