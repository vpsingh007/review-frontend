import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import { Form, Button } from 'react-bootstrap';
// import { useForm } from '../hooks/useForm';
// import { returnFormField } from '../../utils/createFormField';
// import { popupConfig } from '../../utils/PopupConfig';

type ModalPopupProps = {
    isPopupOpen: any;
    setIsPopupOpen: any;
    title: string;
    children: any
}

const ModalPopup = ({ isPopupOpen, setIsPopupOpen, title, children }: ModalPopupProps): JSX.Element => {
    // const res = popupConfig[popupData.actionType];
    
//   const [isPopup, setIsPopup] = useState(isPopupOpen);
    // const [data, setData] = useState(res);
    // const modalData = () => {
        // const res = actionData();
        // console.log(data);
    // }
    return (
        <>
            <Modal show={isPopupOpen} onHide={() => { setIsPopupOpen(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                    {/* {data.childrenData()} */}
                </Modal.Body>
                {/*<Modal.Footer>
                    <Button variant="secondary" onClick={() => { setIsPopupOpen(false) }}>
                        {data.secondryBtnLabel}
                    </Button>
                     <Button variant="primary" onClick={() => { popupData.onSubmit(formValues), setIsPopupOpen(false) }}>
                        {popupData.buttons[1]}
                    </Button> 
                </Modal.Footer>*/}
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

export default ModalPopup;