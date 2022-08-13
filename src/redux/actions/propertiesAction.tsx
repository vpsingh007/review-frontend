import axios from 'axios';
import { API } from '../../../config';
import { AppThunk } from '../thunk';
import { SET_ALL_PROPERTIES, propertiesData, SET_SINGLE_PROPERTY, SET_LOADER, COMMON_ERROR } from '../types';

// set loader
export const setLoader = () => {
    console.log("SET LOADER ACTION..")
    return {
      type: SET_LOADER
    };
};

// clear errors
export const clearErrors = () => {
    // console.log("SET LOADER ACTION..")
    return {
      type: SET_LOADER
    };
};

// set all properties data
export const setAllPropertyData = (propertiesData: propertiesData) => (
    dispatch: any
) => {
    dispatch({
        type: SET_ALL_PROPERTIES,
        payload: propertiesData,
    });
};

// set single property data
export const setSinglePropertyData = (propertyData) => (
    dispatch: any
) => {
    dispatch({
        type: SET_SINGLE_PROPERTY,
        payload: propertyData,
    });
    
};
// export const fetchSingleProperty = (_slug: any) => (
//     dispatch: any
// ) => {
//     return axios.get(`${API}/property/${_slug}`)
//         .then((response) => {
//             dispatch({
//                 type: SET_SINGLE_PROPERTY,
//                 payload: response.data,
//             });
//             // return response.data;
//         })
//         .catch((err) => {
//             dispatch({
//                 type: COMMON_ERROR,
//                 payload: err.error,
//             });
//         });
// };

// add review comment
// export const addReviewComment = (payload: propertiesData) => (
//     dispatch: any
// ) => {
//     console.log("reviewe comment data in action...", payload)
//     dispatch({
//         type: ADD_REVIEW_COMMENT,
//         payload: payload,
//     });
// };

// export const updateSingleProperty = (payload, token) => {
//     console.log("update property data...", payload)
//     return fetch(`${API}/review`, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(payload)
//     })
//         .then(response => {
//             return {
//                 response: response.json(),
//                 status: 'success'
//             };
//         })
//         .catch(err => console.log(err));
// };

export const updateSingleProperty = (_slug: any, payload, token) => (
    dispatch: any
) => {
    dispatch({
        type: SET_LOADER,
        payload: true,
    });

    return axios.put(`${API}/property/${_slug}`,  payload, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }       
            })
            .then((response) => {
                dispatch({
                    type: SET_SINGLE_PROPERTY,
                    payload: response.data,
                });
                // return response.data;
            })
            .catch(err => console.log(err));
};

// export const updateSingleProperty = (_slug: any, payload, token) => dispatch => {
//     // return axios.put(`${API}/property/${_slug}`)
//     // dispatch(setLoader());
//     dispatch({
//         type: SET_LOADER,
//     });
//     return axios.put(`${API}/property/${_slug}`,  payload, {
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`
//         }       
//     })
//     .then((response) => {
//         return response.data;
//     })
//     .catch(err => console.log(err));
// };