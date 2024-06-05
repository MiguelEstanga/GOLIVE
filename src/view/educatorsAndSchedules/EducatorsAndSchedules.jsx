import React, { useContext, useEffect, useState } from "react";
import Menu from "./components/Menu";
import SwiperProfesores from "./components/SwiperProfesores";
import {   Option, Style , ContainerAvatars , Avatars , TableClases , EducatorsAndSchedulesContainer, ContainerDias, ContainerOptions} from "./Styled";
import { LiaBuromobelexperte } from "react-icons/lia";
import Footer2d from "../../components/Footer2d";
import InLive from "./components/inLive";
import Comunidad from "./components/Comunidad";
import ShouldeContext from "../../context/ShouldeContext";
import Cronograma from "../cronograma/Cronograma";
import Clases from "../cronograma/Clases";
import FormatiarHora from "../../helper/FormatiarHora";
import { getCategoria, review } from "../../helper/Response";
import { LanguageContext } from "../../context/languageContext";
import { GetStorageObjet, getStorage } from "../../helper/LocalStorage";
import { useNavigate } from "react-router-dom";
export default function EducatorsAndSchedules() 
{
   
  
   const [School , setSchool] = useState([])
   const [profesoresTop , setProfesoresTop] = useState([])
   const [option , setOption] = useState([
       {id:1, title:'ALL SECTIONS'},
   ]);
   const [selected, setSelected] = useState(0);

   const {language} = useContext(LanguageContext);
   const {schoolId,shoulde,setSchoolId } = useContext(ShouldeContext)
   const navegation = useNavigate();

   const dias = [7,1,2,3,4,5,6]
   const dias_semanas =['Lunes','Martes','Miércoles','Jueves','Viernes' , 'Sábado','Domingo']
    
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
    
        matriz1.forEach((valor, indice) => {
            resultado[valor - 1] = valor;
        });
    
        return resultado;
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
        let filteredSchools =[];
        if(selected === 0){
             filteredSchools = shoulde?.filter( (data) => data.school_id === schoolId.id   );
        }else{
            filteredSchools = shoulde?.filter( (data) => data.school_id === schoolId.id  && data.category_id === selected  );
        }
        console.log('filter')
        console.log(filteredSchools)

                 
        var hash = {};
        var result2 = [];

        shoulde.forEach(function(current) {
            if (!hash[current.teacher_id]) {
                hash[current.teacher_id] = true;
                result2.push({
                    teacher_id: current.teacher_id,
                    days_of_class: [current.weekday],
                    titles: [current.title],
                    start_time: current.start_time,
                    final_hour: current.final_hour
                });
            } else {
                var existingTeacher = result2.find(t => t.teacher_id === current.teacher_id);
                existingTeacher.days_of_class.push(current.weekday);
                existingTeacher.titles.push(current.title);
            }
        });
        console.log('result2')
        console.log(result2)

        var ordenarMetadata = {};

        filteredSchools.forEach((res , index) => {
            const {teacher_id , weekday , start_time , title} = res;
            if( !ordenarMetadata[teacher_id])
            {
                ordenarMetadata[teacher_id] = {
                    title:[title],
                    weekdays: [weekday],
                    start_time :[start_time],
                    teacher_id: teacher_id,
                 
                    diasOrdenados:[],
                   
                  };
            }else
            {
                ordenarMetadata[teacher_id].weekdays.push(weekday);
                ordenarMetadata[teacher_id].title.push(title); 
                ordenarMetadata[teacher_id].start_time.push(start_time);
               
            }


            
        })
        

        const result = Object.values(ordenarMetadata)
        console.log(result)
        const array = Array(7).fill(null)
        var test = []
        result.forEach((res , index) => {
            
            res.weekdays = reordenarMatrices(  res.weekdays, array )
            //res.diasOrdenados = test
          
        })
        
       
        setSchool(result)
        console.log('test')
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
                                title={dia === null ? '' : res.title}
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
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
              }} >
                <h2 style={Style.h2}>
                    Vive ahora
                </h2>
                <div style={Style.inlive}>
                   
                    <InLive
                        borderColor={'#52be80'}
                        url_avatar={'https://d22yb2tbj8zopv.cloudfront.net/src/user/rvukovic.png'}
                    />

                   
                </div>
              </div>

              <div style={{width:'100%'}} >
                <ContainerOptions>
                   {
                        option?.slice().reverse().map( (option, index) => (
                            <Option
                                key={index}
                                onClick={() => handleClick(option.id)}
                                selectedColor={ option.id == selected ? require(`../../${GetStorageObjet("schoolId")?.bg_send_preg}`): ""}
                            >  
                                
                                <p>
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
                    
           <Comunidad
                BorderColor={ GetStorageObjet("schoolId")?.cl_border }
                TextColor={ GetStorageObjet("schoolId")?.color }
                bgImgen={ GetStorageObjet("schoolId")?.bg_commun }
                academiaImg={ GetStorageObjet("schoolId")?.image }
              
           />
           <Footer2d
               position={'relative'}
               mt="50px"
           />
        </EducatorsAndSchedulesContainer>
    )
}

