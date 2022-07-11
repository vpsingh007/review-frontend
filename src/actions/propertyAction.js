import fetch from 'isomorphic-fetch';
import { API } from '../../config';
import queryString from 'query-string';
import { isAuth, handleResponse } from './auth';
import axios, {AxiosResponse} from 'axios';

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
    return fetch(`${API}/properties`, {
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

export const fetchSingleProperty = (slug) => {
    return axios.get(`${API}/property/${slug}`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        });
};
