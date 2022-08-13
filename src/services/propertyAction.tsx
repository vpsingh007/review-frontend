import fetch from 'isomorphic-fetch';
import { API } from '../../config';
import queryString from 'query-string';
import { isAuth, handleResponse } from './auth';
import axios from 'axios';

export const addProperty = (payload, token) => {
    return fetch(`${API}/property`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    // let createBlogEndpoint;

    // if (isAuth() && isAuth().role === 1) {
    //     createBlogEndpoint = `${API}/blog`;
    // } else if (isAuth() && isAuth().role === 0) {
    //     createBlogEndpoint = `${API}/user/blog`;
    // }

    // return fetch(`${createBlogEndpoint}`, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         Authorization: `Bearer ${token}`
    //     },
    //     body: blog
    // })
    //     .then(response => {
    //         handleResponse(response);
    //         return response.json();
    //     })
    //     .catch(err => console.log(err));

};

export const listAllProperties = (skip: any, limit: any) => {
    const data = {
        limit,
        skip
    };
    // return axios.get(`${API}/properties`, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    //     .then((response) => {
    //         console.log(response.data);
    //         return response.data;
    //     })
    //     .catch(err => console.log(err));
    return axios.post(`${API}/properties`,  data)
    .then((response) => {
        // console.log(response.data);
        return response.data;
    })
    .catch(err => console.log(err));

};

// export const fetchSingleProperty = (slug) => {
//     return fetch(`${API}/property/${slug}`, {
//         method: 'GET'
//     })
//     .then(response => {
//         console.log("response in action..", response.json())
//         return response.json();
//     })
//     .catch(err => console.log("error mesaage..", err.error));
// };

export const fetchSingleProperty = (_slug: any) => {
    return axios.get(`${API}/property/${_slug}`)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return err.error;
        });
};

// add review comments
// export const addReviewAction = (payload, token) => {
    // console.log("reviewe comment data in action...", payload)
    // return fetch(`${API}/property`, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${token}`
    //     },
    //     body: JSON.stringify(payload)
    // })
    //     .then(response => {
    //         return response.json();
    //     })
    //     .catch(err => console.log(err));
// };