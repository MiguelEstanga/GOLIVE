import { useEffect, useState } from "react"
import styled from "styled-components"
import { GetStorageObjet, SetStorageObjet } from "../../../helper/LocalStorage"
import { useNavigate } from "react-router-dom"
import { profesoresTest } from "../../../helper/Response"
export default function Calendario({
    bgCalendar,
    bgCalendarContainer,
    BorderCalendar,
    data,
    show,
    teacherId
}) {

    
    const [diasEstate, setDiasState] = useState([])
    const [teacher , setTeacher] = useState({})
    const navegacion = useNavigate()
    async function getTeacher()
    {
        const response = await profesoresTest(teacherId)
        const profesor = await response.json()
        setTeacher(profesor.data)
    }
    useEffect(() =>{
        getTeacher()
    },[])
    return (
       <CalendarioContainer
       bgCalendarContainer={bgCalendarContainer}
       BorderCalendar={BorderCalendar}
        bgCalendar={bgCalendar}
       >
            
            <div class="container">
               
                    <div class="fila">
                        <div class="avatar">
                            <span  className="image" 
                                onClick={()=> {
                                    SetStorageObjet('teacher', teacher)
                                    
                                   
                                    navegacion('/on-live-page')
                                }}
                            >
                                <img
                                    src={teacher?.user?.image ?? require('../../../user/loading.png')}
                                    width={'100%'} 
                                    height={'100%'} 
                                    style={{ borderRadius:"50%"}}   
                                    alt="avatar" />
                            </span>
                               
                            <span className="nombre"   >
                                {
                                    teacher?.user?.names ?? 'name'
                                }
                                <br/>
                                 {
                                    teacher?.role?.role_name ?? 'rol_name'
                                }
                            </span>
                        </div>
                        <div class="dias">
                         
                           
                           <div className="dias_semanas">
                                <p>Domingo</p>
                                {
                                    show == true ? (<div className="dias__" >Domingo</div>) :""
                                }
                                <ContentMetadata 
                                    bgCalendarContainer={data.metadata.data.some((data) => data.weekday === 7 ) ?  require(`../../../${GetStorageObjet('school')?.bg_acad }`) : require(`../../../${GetStorageObjet('school')?.bg_pro }`) }
                                   
                                    >
                                    {
                                        data.metadata.data.filter( (data) => data.weekday === 7 ).map(  (data , index) => ( 
                                        
                                                <div
                                                
                                                className="titulo_container">
                                                <span className="titulo"> {data.title} </span> <br/>
                                                <span className="titulo" > {data.start_time}  </span>
                                                
                                                <br/>
                                                </div>
                                            
                                        ) ) 
                                    }   
                                </ContentMetadata>
                           </div>
                            <div className="dias_semanas">
                                <p>Lunes</p>
                                {
                                    show == true ? (<div className="dias__" >Lunes</div>) :""
                                }
                                <ContentMetadata 
                                    bgCalendarContainer={data.metadata.data.some((data) => data.weekday === 1 ) ?  require(`../../../${GetStorageObjet('school')?.bg_acad }`) : require(`../../../${GetStorageObjet('school')?.bg_pro }`) }

                                    
                                >
                                {
                                    data.metadata.data.filter( (data) => data.weekday === 1 ).map(  (data , index) => ( 
                                      
                                        <div
                                          
                                          className="titulo_container">
                                          <span className="titulo"> {data.title} </span> <br/>
                                          <span className="titulo" > {data.start_time}  </span>
                                         
                                          <br/>
                                        </div>
                                   
                                     ) ) 
                                }   
                                 </ContentMetadata>
                            </div>
                            <div className="dias_semanas">
                                <p>Martes</p>
                                {
                                    show == true ? (<div className="dias__" >Martes</div>) :""
                                }
                                <ContentMetadata 
                                    bgCalendarContainer={data.metadata.data.some((data) => data.weekday === 2 ) ?  require(`../../../${GetStorageObjet('school')?.bg_acad }`) : require(`../../../${GetStorageObjet('school')?.bg_pro }`) }

                                    
                                >
                                 {
                                    data.metadata.data.filter( (data) => data.weekday === 2 ).map(  (data , index) => ( 
                                        
                                            <div
                                              
                                              className="titulo_container">
                                              <span className="titulo"> {data.title} </span> <br/>
                                              <span className="titulo" > {data.start_time}  </span>
                                             
                                              <br/>
                                            </div>
                                       
                                     ) ) 
                                }   
                                 </ContentMetadata>
                            </div>                                                                
                            <div className="dias_semanas">
                                <p>Miércoles</p>
                                {
                                    show == true ? (<div className="dias__" >Miercoles</div>) :""
                                }
                                <ContentMetadata 
                                    bgCalendarContainer={data.metadata.data.some((data) => data.weekday === 3 ) ?  require(`../../../${GetStorageObjet('school')?.bg_acad }`) : require(`../../../${GetStorageObjet('school')?.bg_pro }`) }

                                    
                                >
                                {
                                    data.metadata.data.filter( (data) => data.weekday === 3 ).map(  (data , index) => ( 
                                        
                                        <div
                                          
                                          className="titulo_container">
                                          <span className="titulo"> {data.title} </span> <br/>
                                          <span className="titulo" > {data.start_time}  </span>
                                         
                                          <br/>
                                        </div>
                                  
                                    ) ) 
                                }    
                                  </ContentMetadata>
                            </div>
                            <div className="dias_semanas ultimo">
                                <p>Jueves</p>
                                {
                                    show == true ? (<div className="dias__" >Jueves</div>) :""
                                }
                                <ContentMetadata 
                                    bgCalendarContainer={data.metadata.data.some((data) => data.weekday === 4 ) ?  require(`../../../${GetStorageObjet('school')?.bg_acad }`) : require(`../../../${GetStorageObjet('school')?.bg_pro }`) }

                                    
                                >
                             {
                                    data.metadata.data.filter( (data) => data.weekday === 4 ).map(  (data , index) => ( 
                                        
                                        <div
                                          
                                          className="titulo_container">
                                          <span className="titulo"> {data.title} </span> <br/>
                                          <span className="titulo" > {data.start_time}  </span>
                                         
                                          <br/>
                                        </div>
                                    
                                     ) ) 
                                }   
                                </ContentMetadata>
                            </div>
                            <div className="dias_semanas ultimo">
                                <p>Viernes</p>
                                {
                                    show == true ? (<div className="dias__" >Viernes</div>) :""
                                }
                                <ContentMetadata 
                                    bgCalendarContainer={data.metadata.data.some((data) => data.weekday === 5 ) ?  require(`../../../${GetStorageObjet('school')?.bg_acad }`) : require(`../../../${GetStorageObjet('school')?.bg_pro }`) }

                                    
                                >
                                {
                                    data.metadata.data.filter( (data) => data.weekday === 5 ).map(  (data , index) => ( 
                                        
                                        <div
                                          
                                          className="titulo_container">
                                          <span className="titulo"> {data.title} </span> <br/>
                                          <span className="titulo" > {data.start_time}  </span>
                                         
                                          <br/>
                                        </div>
                                    
                                     ) ) 
                                }   
                                </ContentMetadata>
                            </div>
                            <div className="dias_semanas ultimo">
                                <p>Sábado</p>
                                {
                                    show == true ? (<div className="dias__" >Sábado</div>) :""
                                }
                                <ContentMetadata 
                                    bgCalendarContainer={data.metadata.data.some((data) => data.weekday === 6 ) ?  require(`../../../${GetStorageObjet('school')?.bg_acad }`) : require(`../../../${GetStorageObjet('school')?.bg_pro }`) }

                                    
                                >
                                {
                                    data.metadata.data.filter( (data) => data.weekday === 6 ).map(  (data , index) => (
                                        
                                        <div
                                          
                                          className="titulo_container">
                                          <span className="titulo"> {data.title} </span> <br/>
                                          <span className="titulo" > {data.start_time}  </span>
                                         
                                          <br/>
                                        </div>
                                   
                                    ) ) 
                                }   
                                 </ContentMetadata>
                            </div>
                           
                          
                        </div>
                        
                   
                
                </div>
            </div>
       </CalendarioContainer>
    )
}

// Calendario con los dias de la semana
const ContentMetadata = styled.div`
       
        background-image: url( ${ props => props.bgCalendarContainer } );
        background-size: cover;
        background-position: center;
        height: 100%;
        width: 100%;
        border-radius: 10px;

        @
`
const CalendarioContainer = styled.div`


.dias .dias_semanas p{
    color:#fff;
}
.container{
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
}

.table{
    
    width: 90%;
   
    border-radius: 20px;
}

.fila{
    padding: 20px;
    width: 95%;
    min-height: 300px;
    border:solid 2px ${ props => props.BorderCalendar };
    background-image: url( ${ props => props.bgCalendarContainer } );
    margin-top: 10px;
     gap: 15px;
    background-size: cover;
    background-position: center;
    display: grid;
    grid-template-columns: 15% 85%;
    
    border-radius: 20px;
    margin-bottom: 20px;
    align-items: center;
   
    
}
.nombre{
    font-size: 9px;
    text-align: center;
}
.avatar{
    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    justify-items: center;
    align-items: center;

    .nombre{
        fonst-size: 5px;
        color: #fff;
    }
    .image{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
    }


}
.dias{
    
    width: 100%;
    min-height: 100px;
    display: grid;
    grid-template-columns:repeat(4,1fr) ;
    position: relative;
    gap: 5px;
}

.dias_semanas{
  
    background-image: url( ${ props => props.bgCalendar } );
        
    background-size: cover;
    background-position: center;
    
    position: relative;
    width: 85px;
        
    min-height: 100px;
    border-radius: 10px;

    .titulo_container{
        padding: 2px;
        text-align: center;
        color: #000;
    }
    .titulo{
        color: #000;
        font-size: 8px;
        text-align: center;
    }


}
.ultimo{
    left: 50px;
    top: 20px;
}

.dias_semanas p{
    position: absolute;
    top: -20px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #000;
}

.dias__{
    display: none;
}

@media (min-width:700px) {
    .dias__{
        position: absolute;
        top: -30px;
        width: 100%;
        color:#fff;
        text-align: center;
        display:block;
    }
    .dias{
        grid-template-columns: repeat(7,1fr);
        height: auto;
    }
    .nombre{
        font-size: 12px;
    }
    .dias_semanas .titulo_container{
        padding: 5px;
        text-align: start;
        color: #000;
    }
    .dias_semanas .titulo{
        color: #000;
        font-size: 10px;
        text-align: start;
    }

    .ultimo{
        top: 0;
        left: 0;
    }

    .dias_semanas p{
        display: none;
    }

    .fila{
        
      
        display: grid;
        min-height: 100px;
        grid-template-columns: 15% 80%;
        background-color: none;
        background-image: none;
        border:none;

        .avatar{
            display: flex;
            flex-direction: row;
            width:100%;
            justify-content: start;
            position: relative;
            left: -30px;
            .image{
                width: 100px;
                height: 100px;
                
            }
        }
    }

    .dias_semanas{
         width: 100%;
    }
    .table{
        
        padding: 20px;
        grid-template-columns: 30% 70%;
        gap:0;
    }
    
}   
`