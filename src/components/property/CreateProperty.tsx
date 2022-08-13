import React, { useState } from 'react';
// import JoditEditor from "jodit-react";
import { getCookie } from '../../services/auth';
import { addProperty } from '../../services/propertyAction';
// import Router from 'next/router';

// import dynamic from 'next/dynamic';
// const importJodit = () => import('jodit-react');
// const JoditEditor = dynamic(importJodit, {
//     ssr: false,
// });

const CreateProperty = () => {
    const [values, setValues] = useState({
        propertyname: '',
        sector: '',
        city: '',
        content: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { propertyname, sector, city, error, loading, message, showForm } = values;
    const token = getCookie('token');
    // const editor = useRef(null);
    // const config = useMemo({
	// 	readonly: false,
	// 	placeholder: 'Start typings...'
	// }, [])
    // useEffect(() => {
    //     isAuth() && Router.push(`/`);
    // }, []);

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, sector, city, error, loading, message, showForm });
        setValues({ ...values, loading: true });
        const property = { propertyname, sector, city };

        addProperty(property, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                setValues({
                    ...values,
                    propertyname: '',
                    sector: '',
                    city: '',
                    content: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: true
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, [name]: e.target.value });
    };

    // const updateContent = name => e => {
    //     setValues({ ...values, [name]: e });
    // };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    const signupForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        value={propertyname}
                        onChange={handleChange('propertyname')}
                        type="text"
                        className="form-control"
                        placeholder="Type here propertyname"
                        autoComplete="off"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={sector}
                        onChange={handleChange('sector')}
                        type="text"
                        className="form-control"
                        placeholder="Type here sector"
                        autoComplete="off"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={city}
                        onChange={handleChange('city')}
                        type="text"
                        className="form-control"
                        placeholder="Type here city name"
                    />
                </div>

                {/* <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={updateContent('content')} // preferred to use only this option to update the content for performance reasons

                /> */}

                <div>
                    <button className="btn btn-primary">Add Property</button>
                </div>
            </form>
        );
    };

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signupForm()}
        </React.Fragment>
    );
};

export default CreateProperty;
