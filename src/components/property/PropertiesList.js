import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { getCookie } from '../../actions/auth';
import { listAllProperties } from '../../actions/propertyAction';

const PropertiesList = ({ propertiesList }) => {
    const [values, setValues] = useState({
        error: false,
        properties: []
    });
    console.log('List is here..', propertiesList)
    // const { error, properties } = values;
    // const token = getCookie('token');

    // useEffect(() => {
    //     loadPropertiesList();
    // }, [reload]);

    // const loadPropertiesList = () => {
    //     listAllProperties().then(data => {
    //         if (data.error) {
    //             console.log(data.error);
    //         } else {
    //             setValues({ ...values, properties: data });
    //         }
    //     });
    // };


    const showError = () => {
        if (error) {
            return <p className="text-danger">Tag already exist</p>;
        }
    };


    return (
        <React.Fragment>
        <div>
        <button type="submit" className="btn btn-primary">
            All Properties List here....
        </button>
    </div>
        </React.Fragment>
        // <React.Fragment>
        //     {showSuccess()}
        //     {showError()}
        //     {showRemoved()}
        //     <div onMouseMove={mouseMoveHandler}>
        //         {newTagFom()}
        //         {showTags()}
        //     </div>
        // </React.Fragment>
    );
};

// PropertiesList.getInitialProps = () => {
//     let skip = 0;
//     let limit = 2;
//     return listAllProperties(skip, limit).then(data => {
//         if (data.error) {
//             console.log(data.error);
//         } else {
//             console.log("DATA", data)
//             return {
//                 list: data
//             };
//         }
//     });
// };

export default PropertiesList;
