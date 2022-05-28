import fetch from 'isomorphic-fetch';
import { API } from '../../config';
import queryString from 'query-string';
import { isAuth, handleResponse } from './auth';

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

export const listAllProperties = (skip, limit) => {
    const data = {
        limit,
        skip
    };
    return fetch(`${API}/property/list`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleProperty = slug => {
    return fetch(`${API}/property/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};