import { getCategoria , getProfesor} from "../../helper/Response";

export async function  Categorias(school , lenguajeId , setOption)
{
    const response = await getCategoria();
    let categorias = response?.data?.data;
    let parse = [];
    parse.push( {id:0, title:'ALL SESSIONS' , filter:'all'} )
    parse = categorias?.filter( (data) => data.schooldId === school.id  && data.languageId === lenguajeId );
    parse.push( {id:0, title:'ALL SESSIONS' , filter:'all'} )
    console.log('categorias')
    console.log(parse)
    setOption(parse)
}

export async function  profesor(id , setTeacher)
{
    const response = await getProfesor(id);
    let profesor = response?.data;
    console.log('profesor')
    console.log(profesor)
    setTeacher(profesor.data)  
}