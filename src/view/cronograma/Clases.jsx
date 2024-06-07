import { useEffect, useState } from "react";
import styled from "styled-components";
import FormatiarHora from "../../helper/FormatiarHora";
export default function Clases( {
    bgCalendar,
    dia,
    title,
    timeStart,
    timeEnd,
}  ) 
{
    useEffect( () => {
       
    } ,[])
    return (
       <ClaseContainer
           bgCalendar={bgCalendar}
       >
           <div className="text-container" >
           {
                        title.length === 0 ? '': title.map( data => 
                        <>
                            <p >
                                { data.title } <br />
                                {FormatiarHora(data.start_time)} - {FormatiarHora(data.final_hour)} <br />
                                
                            </p>
                            <br /> 
                        </>
                       
                  
                        )
            }
              
              
           </div>
        </ClaseContainer>
    );
}

const ClaseContainer = styled.div`
    border-radius: 20px;
    background-image: url( ${ props => props.bgCalendar } );
    background-size: cover;
    background-position: center;

   
    width: 140px;
    height: auto;
    @media (max-width:600px) {
        width: 100%;
        height: auto;
    }
    .text-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
       
        p{
            
            font-size: 11px;
            font-weight: 100;
            text-align: start;
            width: 100%;
            padding: 5px;
            color: #000;
           

            @media (max-width:600px) {
                font-size: 10px;
                margin-top: 5px;
            }
        }
    }
`