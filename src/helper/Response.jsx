import { Api , endpoints, settings } from './Api';
import axios from 'axios';

export async function  escuelas() 
{
   const  response = await axios.get(`${endpoints.escuelas}`)
   console.log('escuelas')
   console.log(response.data)
   return response;
}

export async function  getschedule() 
{
   
    const  response = await axios.get(`${endpoints.schedule}`)
    return response;
}

export async function  getLanguage()
{  
    const  response = await axios.get(`${endpoints.language}`)
    return response;
}

export async function  getProfesor(id)
{
    const  response = await axios.get(`${endpoints.profesor}${id}`)
    return response;
}

export async function  review({schoolId,  languageId})
{
    const response = await axios.post(`${endpoints.review}` , {
        body:{
            "id_lenguage":languageId,
            "school_id":schoolId
        }
    })

    return response;
}

export async function  getCategoria()
{
    const  response = await axios.get(`${endpoints.categoria}`)
    return response;
}

export async function  getFavoriteVideo({id_teacher, id_school, id_language})
{
    const  response = await axios.post(`${endpoints.favoriteVideo}` ,{
        body:{
            id_teacher:id_teacher,
            id_school:id_school,
            id_language:id_language,
        }
    }
    )
    return response;
}

export async function  SmartMoneyModule()
{
    const  response = await axios.get(`${endpoints.smartMoney}` )
    return response;
}

export async function  getNextVideo(action , level)
{
    const data = new FormData()
    data.append('action', action)
    data.append('level', level)
    const  response = await axios.put(`${endpoints.nexVideo}`, {  action, level })
    return response;
}

export async function profesoresTest(teacherId)
{
   const response = await fetch(`http://62.171.167.21/node/api/user/${teacherId}`)
    return response;
}