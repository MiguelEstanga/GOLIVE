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
    favoriteVideo: `${Api.defaultUrl}/lesson-by-teacher`,
    subida  : `${Api.defaultUrl}upload`,  
    smartMoney: `${Api.defaultUrl}get-video`,
    nexVideo: `${Api.defaultUrl}next-video`,
}



export const settings = {
    headers:{},
    Token:'',
}