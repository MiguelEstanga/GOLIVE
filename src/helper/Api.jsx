import { getProfesor } from "./Response"

export const Api = {
    defaultUrl: 'http://62.171.167.21/node/api/',
}

export const endpoints = {
    getUserInfo: 'user/info',
    escuelas:  "school", 
    schedule:  `${Api.defaultUrl}schedule`,
    language:  `${Api.defaultUrl}initial-language`,
    profesor:  `${Api.defaultUrl}user/`,
    review:    `${Api.defaultUrl}review`,
    categoria: `${Api.defaultUrl}school-category`,
}



export const settings = {
    headers:{},
    Token:'',
}