import { getProfesor } from "./Response"

export const Api = {
    defaultUrl: 'http://localhost:3002/api/',
}

export const endpoints = {
    getUserInfo: 'user/info',
    escuelas:  `${Api.defaultUrl}school`, 
    schedule:  `${Api.defaultUrl}schedule`,
    language:  `${Api.defaultUrl}initial-language`,
    profesor:  `${Api.defaultUrl}user/`,
    review:    `${Api.defaultUrl}review`,
    categoria: `${Api.defaultUrl}school-category`,
    favoriteVideo: `${Api.defaultUrl}/lesson-by-teacher`,
    subida  : `${Api.defaultUrl}Upload`,  
    smartMoney: `${Api.defaultUrl}get-video`,
    nexVideo: `${Api.defaultUrl}next-video`,
}



export const settings = {
    headers:{},
    Token:'',
}