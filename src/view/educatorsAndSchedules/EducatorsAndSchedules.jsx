import React, { useContext, useEffect, useState } from "react";
import Menu from "./components/Menu";
import SwiperProfesores from "./components/SwiperProfesores";
import {   Option, Style , ContainerAvatars , Avatars , TableClases , EducatorsAndSchedulesContainer, ContainerDias, ContainerOptions, InLiveContainer} from "./Styled";
import Footer2d from "../../components/Footer2d";
import InLive from "./components/inLive";
import Comunidad from "./components/Comunidad";
import ShouldeContext from "../../context/ShouldeContext";
import Cronograma from "../cronograma/Cronograma";
import Clases from "../cronograma/Clases";
import { getCategoria, review } from "../../helper/Response";
import { LanguageContext } from "../../context/languageContext";
import { GetStorageObjet, getStorage } from "../../helper/LocalStorage";
import { useNavigate } from "react-router-dom";
import ModelSmartMoney from "../../components/ModelSmartMoney";
import lang from "../../helper/traduccion";
export default function EducatorsAndSchedules() 
{
   
  
   const [School , setSchool] = useState([])
   const [profesoresTop , setProfesoresTop] = useState([])
   const [proximasClases , setProximasClases] = useState([])
   const [option , setOption] = useState([
       {id:1, title:'ALL SECTIONS'},
   ]);
   const [selected, setSelected] = useState(0);

   const {language} = useContext(LanguageContext);
   const {schoolId, shoulde, setSchoolId } = useContext(ShouldeContext)
   const navegation = useNavigate();

   const dias = [7,1,2,3,4,5,6]
   const dias_semanas =[ 
     `${lang( `${getStorage('prefix') ?? 'EN'}` , 'Lunes' )}` ,
     `${lang( `${getStorage('prefix') ?? 'EN'}` , 'Martes' )}` , 
     `${lang( `${getStorage('prefix') ?? 'EN'}` , 'Miércoles' )}` ,
     `${lang( `${getStorage('prefix') ?? 'EN'}` , 'Jueves' )}` ,
     `${lang( `${getStorage('prefix') ?? 'EN'}` , 'Viernes' )}` , 
     `${lang( `${getStorage('prefix') ?? 'EN'}` , 'Sábado' )}` , 
     `${lang( `${getStorage('prefix') ?? 'EN'}` , 'Domingo' )}` ]
    
   //inicializa las categorias
   async function Categorias()
    {
        const response = await getCategoria();
        let categorias = response?.data?.data;
       
        let parse = [];
        parse.push( {id:0, title:'ALL SESSIONS' , filter:'all'} )
        //filtra las categorias por el schoolId
        parse = categorias?.filter( (data) => data.school_id === GetStorageObjet("schoolId").id  && data.language_id === getStorage("lenguaje") );
        parse.push( {id:0, title:'ALL SESSIONS' , filter:'all'} )
       
       
        setOption(parse)
    }

    //evento para cambiar filtros por academia 
    const  handleClick = (selected) => {
        setSelected(selected);
    }

    //ordena las clases por el dia

    function reordenarMatrices(matriz1, matriz2) {
        const resultado = new Array(matriz2.length).fill(null);
        const resultado2 = new Array(matriz2.length).fill(null);

        matriz1.forEach((valor, indice) => {
            resultado[indice] = valor;
            resultado2[indice] = {valor};
        });

        matriz1.forEach((valor, indice) => {
            resultado[valor - 1] = valor;
            resultado2[valor - 1] = {valor};
        });
    
        return [resultado, resultado2];
    }


    useEffect(() => { 
            Categorias();
            //llamamos al top de profesores
            review({
                schoolId: schoolId.id,
                languageId: language
            })
            .then(
                res => {
                    setProfesoresTop(res?.data?.data)
                }
            )
     } , [])

    useEffect(() => {
       
        //filtramos los sheulder para que no se repitan los profesores
        let filteredSchools =[];
        if(selected === 0){
            //filtramos por todas las escuelas
             filteredSchools = shoulde?.filter( (data) => data.school_id === schoolId.id   );
             setProximasClases(filteredSchools.slice(0,4))
        }else{
            //filtramos por categorias
            filteredSchools = shoulde?.filter( (data) => data.school_id === schoolId.id  && data.category_id === selected  );
        }
        var ordenarMetadata = {}; //ordenamos la metada en un array vacio 
      
        filteredSchools.forEach((res , index) => {
            const {teacher_id , weekday , start_time , title , final_hour} = res;
            if( !ordenarMetadata[teacher_id])
            {
                ordenarMetadata[teacher_id] = {
                    title:[title],
                    weekdays: [weekday],
                    start_time :[start_time],
                    final_hour: [final_hour],
                    teacher_id: teacher_id,
                 
                    diasOrdenados:[{
                        weekday: weekday,
                        start_time: start_time,
                        title: title,
                        final_hour: final_hour,
                    }],
                   
                  };
            }else
            {
                ordenarMetadata[teacher_id].weekdays.push(weekday);
                ordenarMetadata[teacher_id].title.push(title); 
                ordenarMetadata[teacher_id].start_time.push(start_time);
                ordenarMetadata[teacher_id].diasOrdenados.push({
                    weekday: weekday,
                    start_time: start_time,
                    title: title,
                    final_hour: final_hour,
                })
            }
  
        })
        

        const result = Object.values(ordenarMetadata)
       
        const array = Array(7).fill(null)
        var test = []

        result.forEach((res , index) => {
            res.weekdays = reordenarMatrices(  res.weekdays, array )[0]
          // res.diasOrdenados = orden(res.diasOrdenados)
        })
        setSchool(result)
        console.log('result')
        console.log(result)
    } , [selected])

    // esto va fuera a otro componente
    function Matriz({res})
    {
        
            // Extrae el último elemento de res.weekdays
            const lastElement = res.weekdays[res.weekdays.length - 1];
        
            // Crea un nuevo arreglo con el último elemento en primer lugar
            const reorderedWeekdays = [lastElement, ...res.weekdays.slice(0, -1)];
        
            // Mapea los elementos reorganizados
            return (
                <>
                
                    {
                        reorderedWeekdays.map((dia, indexDay) => (
                            <Clases
                                key={indexDay}
                                title={dia === null ? '' : res.diasOrdenados.filter( data => data.weekday === dia )  }
                                bgCalendar={
                                    dia !== null
                                        ?   require(`../../${GetStorageObjet("schoolId")?.bg_acad}`)
                                        :  require( `../../${GetStorageObjet("schoolId")?.bg_send_preg}`) 
                                }
                            />
                    ))
                    }
                </>
            )
        
    }
    return (
        <EducatorsAndSchedulesContainer
            fullImage={ require(`../../${GetStorageObjet("schoolId")?.background_full }`)  }
        >
           <Menu
            logo={ GetStorageObjet("schoolId")?.image }
           />
           <div className="container-educators-top">
                <h2
                    className="title-educators"
                >
                    EDUCADORES MÁS VISTOS
                </h2>
                <SwiperProfesores
                    imagen_cart={require(`../../${GetStorageObjet("schoolId")?.bg_commun }`) ?? ''}
                    colorBorder={`${GetStorageObjet("schoolId")?.cl_border}`}
                    profesores={profesoresTop}
                    ctext={`${GetStorageObjet("schoolId")?.color }`}
                />
           </div>
           <div className="selector-session-foreing">
              <div  style={{ 
                    width:'100%',
                    display:'grid',
                    gridTemplateColumns:'repeat(1,1fr)',
                    gridTemplateRows:'20% auto',
                 
                    justifyContent:'center',
              }} >
                <h2  style={{ color:'#fff', fontSize:'15px', margin:'0px' , textAlign:'center' , marginTop:'20px' }}>
                    {
                      lang( `${getStorage('prefix') ?? 'EN'}` , 'ViveAhora')
                    }
                </h2>
                <InLiveContainer>
                   
                    <InLive
                        borderColor={'#52be80'}
                        url_avatar={'https://d22yb2tbj8zopv.cloudfront.net/src/user/rvukovic.png'}
                    />
                </InLiveContainer>
                
              </div>

              <div style={{width:'100%'}} >
                <ContainerOptions
                    id="options"
                >
                   {
                        option?.slice().reverse().map( (option, index) => (
                            <Option
                                key={index}
                                onClick={() => handleClick(option.id)}
                                selectedColor={ option.id == selected ? require(`../../${GetStorageObjet("schoolId")?.bg_send_preg}`): ""}
                            >  
                                
                                <p 
                                    style={ { 
                                        color: option.id == selected ? '#fff': '',
                                     } }
                                >
                                    {option.title}
                                </p>
                                
                            </Option>
                        ))
                        
                    }
                </ContainerOptions>
             
                <TableClases
                    bimg={ require(`../../${GetStorageObjet("schoolId")?.bg_calendar }`) ?? ''}
                    bgb={ GetStorageObjet("schoolId")?.cl_border  }
                >
                    <ContainerDias>
                        <div className="space" >
                        </div>
                        <div className="dias_semanas" >
                            {
                                dias.map( (dia , index) => (
                                    <div key={index} className="data"><p>{dias_semanas[dia -1]}</p></div>
                                ))
                            }
                          
                        </div>
                    </ContainerDias>
                    <ContainerAvatars>
                       
                        {
                            School?.map((res , index) => (
                                <Cronograma
                                     key={index}
                                     name={ res.teacher_id }
                                >
                                    
                                   <Matriz res={res}/>
                                </Cronograma>
                            
                            
                            
                            ))
                        }
                    </ContainerAvatars>
                   
                </TableClases>
                    
              </div>
                    
           </div>
           {
            GetStorageObjet("schoolId")?.title === 'Foreign exchange' ? (
                <ModelSmartMoney
                    bgColorFondo={GetStorageObjet('schoolId').cl_border} 
                    bgFondo={require(`../../${GetStorageObjet('schoolId').bg_btns}`)}
                    academia={GetStorageObjet('schoolId').title}
                    iconColor={GetStorageObjet('schoolId').color}
                />
            ) :""
           }
           
           <Comunidad
                BorderColor={ GetStorageObjet("schoolId")?.cl_border }
                TextColor={ GetStorageObjet("schoolId")?.color }
                bgImgen={ GetStorageObjet("schoolId")?.bg_commun }
                academiaImg={ GetStorageObjet("schoolId")?.image }
                nextClases={proximasClases}
           />
           <Footer2d
               position={'relative'}
               mt="50px"
           />
        </EducatorsAndSchedulesContainer>
    )
}

