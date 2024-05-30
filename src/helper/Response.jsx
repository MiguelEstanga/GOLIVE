import { Api , settings } from './Api';
import axios from 'axios';

export function get(url, is_params = false, params = {}) {
    if(is_params) {
        return axios.get(  `${Api.defaultUrl}${url}`, params)
    }
    return   axios.get(  `${Api.defaultUrl}${url}`)
}

export function post(url, data = {} ) {
    return axios.post(`${Api.defaultUrl}${url}`, {
        headers: settings.headers,
        data: data
    })
}