import React, { useState } from 'react';
// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MySlider from '../shared/Slider';
import { useForm } from '../hooks/useForm';
import { Form, Button } from 'react-bootstrap';
import { returnFormField } from '../../helpers/createFormField';
import { signup, isAuth } from '../../actions/auth';
const PropertyHomePage = () => {
    const [isExpanded, setIsExpanded] = useState([]);
    console.log('>', isExpanded)
    const removeFromExpanded = (index) => {
        setIsExpanded(isExpanded.filter(item => item !== index));
    }
    const [formData, setFormData] = useForm({ name: '', email: '', password: '', agree: false })
    const signUpForm = [{ fieldHeading: 'Name', fieldName: 'name', fieldType: 'text', initialValue: '' },
    { fieldHeading: 'Email', fieldName: 'email', fieldType: 'email', initialValue: '' },
    { fieldHeading: 'Password', fieldName: 'password', fieldType: 'password', initialValue: '' },
    ]

    const onSignup = () => {
        signup({ email: formData.email, name: formData.email, password: formData.password }).then(data => {
            if (data.error) {
                console.log('error');
            } else {
                console.log('data');
                isAuth() && Router.push(`/`);
            }
        });
    }
    return (
        <div>
            <div className="row">
                <div className="col-sm-12 col-md-8">
                    <h2 className='mb-4'>Reviews on Apartments , builder floors and more</h2>
                    <div className='px-4'>
                        <MySlider />
                    </div>

                    <h2 style={{ marginTop: '3rem' }} className="mb-3">Recently added reviews on properties</h2>

                    <div className='col-sm-12'>
                        {allPropsData.map((data, index) => {
                            return (<div key={index} className='row flex flex-row border rounded p-3 mb-2 mr-2'>
                                <div className='col-3'>
                                    <img alt="ss" style={{ width: '150px', height: '100px' }} className='mx-1' src="https://picsum.photos/200" />
                                </div>
                                <div className='flex flex-column col-5'>
                                    <div className='h6'>{data.name}</div>
                                    <div><small>{data.address}</small></div>
                                    <div>
                                        {isExpanded.includes(index) ? data.description : data.description.substring(0, 90)} &nbsp;{isExpanded.includes(index) ? <div style={{ display: 'inline-block', cursor: 'pointer' }} onClick={() => removeFromExpanded(index)} className='text-primary'>Show Less...</div> : <div style={{ display: 'inline-block', cursor: 'pointer' }} onClick={() => setIsExpanded([...isExpanded, index])} className='text-primary'>Read More...</div>}</div>
                                </div>
                                <div className='col-4' style={{ alignSelf: 'center' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div style={{ color: 'green', fontSize: '20px' }}>12</div>
                                            <div style={{ color: 'green', fontSize: '20px' }}>Reviews</div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div style={{ color: 'orange', fontSize: '20px' }}>*****</div>
                                            <div style={{ color: 'orange', fontSize: '20px' }}>Stars</div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div style={{ color: 'blue', fontSize: '20px' }}>5/10</div>
                                            <div style={{ color: 'blue', fontSize: '20px' }}>Ratings</div>
                                        </div>
                                    </div>

                                </div>
                            </div>)
                        })}

                    </div>
                </div>
                <div className='col-md-1'></div>
                <div className="col-md-3">
                    {!isAuth() && <div>
                        <h6 className="mt-4">Signup to add reviews</h6>
                        <div className='border border-success p-4'>

                            <Form>
                                {signUpForm.map((el, index) => {
                                    return (<div key={index}> {returnFormField(el, setFormData, formData, index)} </div>)
                                })}
                            </Form>
                            <div className='mb-1' style={{ display: 'flex' }}>
                                <input className="me-1" value={formData.agree} type="checkbox" id="agree" name="agree" />
                                <span style={{ marginTop: '-5px' }}>I agree to all the statements in Terms of service</span>
                            </div>

                            <Button className='signup-button border' style={{ width: '100%' }} onClick={() => onSignup()}>
                                Sign-Up
                            </Button>

                        </div>
                    </div>}



                </div>
            </div>
            <style>{
                `.signup-button{
                    color:black;
                    background: rgb(174,216,238);
                    background: radial-gradient(circle, rgba(174,216,238,1) 0%, rgba(148,233,167,1) 100%);
                `}
            </style>

        </div >
    )
}

const allPropsData = [
    {
        name: 'Some Apts',
        description: 'Incididunt veniam cupidatat sit sint exercitation deserunt. Anim consectetur excepteur voluptate non id ipsum. Et ex do eiusmod sunt minim. Quis enim consectetur irure consequat dolor laboris eiusmod veniam officia in ullamco ut veniam cillum. Aliquip magna consequat veniam dolor occaecat labore consequat incididunt laborum occaecat eiusmod amet duis dolor.',
        address: 'Pariatur deserunt consequat id incididunt sint non deserunt aliquip.',
        reviews: 10,
        stars: 3,
        ratings: 12
    },
    {
        name: 'Some Apts',
        description: 'Incididunt veniam cupidatat sit sint exercitation deserunt. Anim consectetur excepteur voluptate non id ipsum. Et ex do eiusmod sunt minim. Quis enim consectetur irure consequat dolor laboris eiusmod veniam officia in ullamco ut veniam cillum. Aliquip magna consequat veniam dolor occaecat labore consequat incididunt laborum occaecat eiusmod amet duis dolor.',
        address: 'Pariatur deserunt consequat id incididunt sint non deserunt aliquip.',
        reviews: 10,
        stars: 3,
        ratings: 12
    },
    {
        name: 'Some Apts',
        description: 'Incididunt veniam cupidatat sit sint exercitation deserunt. Anim consectetur excepteur voluptate non id ipsum. Et ex do eiusmod sunt minim. Quis enim consectetur irure consequat dolor laboris eiusmod veniam officia in ullamco ut veniam cillum. Aliquip magna consequat veniam dolor occaecat labore consequat incididunt laborum occaecat eiusmod amet duis dolor.',
        address: 'Pariatur deserunt consequat id incididunt sint non deserunt aliquip.',
        reviews: 10,
        stars: 3,
        ratings: 12
    },
    {
        name: 'Some Apts',
        description: 'Incididunt veniam cupidatat sit sint exercitation deserunt. Anim consectetur excepteur voluptate non id ipsum. Et ex do eiusmod sunt minim. Quis enim consectetur irure consequat dolor laboris eiusmod veniam officia in ullamco ut veniam cillum. Aliquip magna consequat veniam dolor occaecat labore consequat incididunt laborum occaecat eiusmod amet duis dolor.',
        address: 'Pariatur deserunt consequat id incididunt sint non deserunt aliquip.',
        reviews: 10,
        stars: 3,
        ratings: 12
    }
]

export default PropertyHomePage