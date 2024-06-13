import React, { useContext, useEffect, useState } from "react";
import Menu from "./components/Menu";
import SwiperProfesores from "./components/SwiperProfesores";
import {   Option, Style , ContainerAvatars , Avatars , TableClases , EducatorsAndSchedulesContainer, ContainerDias, ContainerOptions, InLiveContainer, ContainerProfesoresTop} from "./Styled";
import Footer2d from "../../components/Footer2d";
import InLive from "./components/inLive";
import Comunidad from "./components/Comunidad";
import ScheduleProvider from "../../context/scheduleContext";

import { LanguageContext } from "../../context/languageContext";
import { GetStorageObjet, SetStorageObjet, getStorage, setStorage } from "../../helper/LocalStorage";
import ModelSmartMoney from "../../components/ModelSmartMoney";
import lang from "../../helper/traduccion";
import { RxHamburgerMenu } from "react-icons/rx";
import Calendario from "./components/Calendario";
import { review } from "../../metadata/review";
import { categorias } from "../../metadata/escuelas_categoria";
import { BarraAcademyProfesional } from "./components/Styled";

export default function EducatorsAndSchedules() 
{
   
   const [profesoresTop , setProfesoresTop] = useState([])
   const [proximasClases , setProximasClases] = useState([])
   const [enlinea , setEnlinea] = useState([])
   const [escuelas , setEscuelas] = useState([])
   const [option , setOption] = useState([ { id: 0, title: 'ALL' } ]);
   const [selected, setSelected] = useState(0);
   const {language} = useContext(LanguageContext);
   const { schedule  , setSchedule } = useContext(ScheduleProvider)
    

   
    
   
    //evento para cambiar filtros por academia 
    const  handleClick = (selected) => {
        setSelected(selected);
      
        if(selected === 0)
        {
            setEscuelas(GetStorageObjet('result'))
        }else{  
            setEscuelas(GetStorageObjet('result').filter( (item) => item.category_id === selected))
        }
        
    
    }

  
    
    useEffect(() => { 
            //seleccion por defecto la opcion 0 (todas las academias) 
                 setSelected(0)
            //categoria
            //filtramos solo las que necesitamos
                 let filter = categorias.filter( categoria => categoria.school_id === GetStorageObjet('school')?.id && categoria.language_id === language )
            //creamos un categoria para filtrar por todos 
                 filter.push( {id:0, title:'ALL SESSIONS' , filter:'all'} )
                 setOption(filter)
            //setando top profesores
                setProfesoresTop(review)
            //setando enlinea
                setEnlinea(review.slice( 0,5 ))
                SetStorageObjet('enlinea', review.slice( 0,5 ))
            

               
            var ordenarMetadata = {}; //creamos un array vacio
            schedule.forEach(res  => { //recorremos el array de clases
                const {teacher_id, weekday, start_time, title, final_hour, school_id , category_id } = res;
                if( !ordenarMetadata[teacher_id]) //nos aseguramos de que no se repita ningun profesor 
                {
                    ordenarMetadata[teacher_id] = {  
                        category_id:category_id,
                        school_id:school_id,
                        teacherId: teacher_id,
                        schoolId: school_id,
                        metadata:{
                           data:[{
                                title,
                                weekday,
                                start_time,
                                final_hour,
                           }],  
                        }
                      };
                }else{
                    ordenarMetadata[teacher_id].metadata.data.push({ title, weekday, start_time, final_hour })
                }
            })
            const result = Object.values(ordenarMetadata)//combertimos el array a un objero ordenado con la metadata que necesitamos
            setEscuelas(result) // setiamos el array de escuelas con ordenado 
            SetStorageObjet('result', result)//lo guardamos en el local storage
            setProximasClases(GetStorageObjet('result').slice(0,5) ?? [])//setiamos el array de proximas clases
          
     } , [ schedule])

   
  
   
    return (
        <EducatorsAndSchedulesContainer
            fullImage={ require(`../../${GetStorageObjet("school")?.background_full }`)  }
        >
           <Menu logo={ GetStorageObjet("school")?.image } color={GetStorageObjet("school")?.cl_text} />
           <ContainerProfesoresTop>
                    <h2
                        className="title-educators"
                    >
                        EDUCADORES MÁS VISTOS
                    </h2>
                    <SwiperProfesores
                        imagen_cart={require(`../../${GetStorageObjet("school")?.bg_commun }`) ?? ''}
                        colorBorder={`${GetStorageObjet("school")?.cl_border}`}
                        profesores={profesoresTop}
                        ctext={`${GetStorageObjet("school")?.color }`}
                    />
           </ContainerProfesoresTop>
          

           <div className="selector-session-foreing">
              <div  style={{ 
                    width:'100%',
                    display:'grid',
                    gridTemplateColumns:'repeat(1,1fr)',
                    gridTemplateRows:'5% 95%',
              }} >
                <h2  style={{ color:'#fff', fontSize:'15px', margin:'0px' , textAlign:'center' , marginTop:'20px' }}>
                    {
                      lang( `${getStorage('prefix') ?? 'EN'}` , 'ViveAhora')
                    }
                </h2>
                <InLiveContainer>
                    {
                       
                        enlinea.map( (item,index) => (
                              <InLive
                                key={index}
                                borderColor={'#52be80'}
                                data={item}
                             />
                            
                        ))
                    }
                
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
                                selectedColor={ option.id == selected ? require(`../../${GetStorageObjet("school")?.bg_send_preg}`): ""}
                            >  
                                <p>
                                <RxHamburgerMenu size={10} />
                                </p>
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
                    bimg={ require(`../../${GetStorageObjet("school")?.bg_calendar }`) ?? ''}
                    bgb={ GetStorageObjet("school")?.cl_border  }
                >
                    <BarraAcademyProfesional
                        colorProfesional={GetStorageObjet("school")?.cl_border}
                        colorAcademy={GetStorageObjet("school")?.color}
                    >
                        <div className="academy">
                               <div className="color_academy">
                                </div>
                                <p>
                                    ACADEMY
                                </p> 
                        </div>
                        <div className="propfesional">
                            <div className="color_profesional">

                            </div>
                            <p>
                                PROFESIONAL
                            </p>
                        </div>
                    </BarraAcademyProfesional>
                    {
                        escuelas?.map( (sheulder, index) => (
                            <Calendario 
                                show= { index == 0 ? true : false }
                                key={index}
                                start_time={sheulder.start_time}
                                final_time={sheulder.final_time}
                                titulo={sheulder.title}
                                dias={sheulder.weekdays}
                                data={sheulder}
                                bgCalendar={ require(`../../${GetStorageObjet("school")?.bg_send_preg }`) ?? ''}
                                bgCalendarContainer={ require(`../../${GetStorageObjet("school")?.bg_calendar }`) ?? ''}
                                BorderCalendar={ GetStorageObjet("school")?.cl_border ?? 'black'  }
                                teacherId={sheulder.teacherId}
                            />
                        ))
                    }
                   

                    
                    
                </TableClases>
              
                    
              </div>
                    
           </div>
           {
            GetStorageObjet("school")?.title === 'Foreign exchange' ? (
                <ModelSmartMoney
                    bgColorFondo={GetStorageObjet('school').cl_border} 
                    bgFondo={require(`../../${GetStorageObjet('school').bg_btns}`)}
                    academia={GetStorageObjet('school').title}
                    iconColor={GetStorageObjet('school').color}
                />
            ) :""
           }
           
           <Comunidad
                BorderColor={ GetStorageObjet("school")?.cl_border }
                TextColor={ GetStorageObjet("school")?.color }
                bgImgen={ GetStorageObjet("school")?.bg_commun }
                academiaImg={ GetStorageObjet("school")?.image }
                nextClases={proximasClases}
           />
           <Footer2d
               position={'relative'}
               mt="50px"
           />
        </EducatorsAndSchedulesContainer>
    )
}

