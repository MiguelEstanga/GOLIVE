import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Clases( {
    bgCalendar,
    dia,
    title,
    timeStart,
    timeEnd,
}  ) 
{
   
    return (
       <ClaseContainer
           bgCalendar={bgCalendar}
       >
           <div className="text-container" >
               <p>
                   {title}
               </p>
               <p>
                 { timeStart }  
               </p>
           </div>
        </ClaseContainer>
    );
}

const ClaseContainer = styled.div`
    border-radius: 20px;
    background-image: url( ${ props => props.bgCalendar } );
    background-size: cover;
    background-position: center;
   
    width: 150px;
    height: 110px;

    .text-container{
        width: 100%;
        height: 40%;
       
        margin-top: 20px;

        p{
            font-size: 12px;
            font-weight: bold;
        
            text-align: start;
            color: #000;
            padding-left: 5px;
            margin-top: 10px;
        }
    }
`