import { BsJustify } from "react-icons/bs"
import styled from "styled-components"
export const Style = {
    section_meenu :{
        
        "width": "100%",
        "display": "flex",
        "height": "60px",
        "background-color": " #d0d3d4 ",
        "border-radius": "30px",
    },
    h2 :   {
        "color": '#fff',
        "font-size": "18px",
        "font-weight": "bold",
       
       
    },
    option : {  
        "border": "solid 1px #1d8348",
        "width": "100%",
        "height": "100%",
    },
    inlive:{
       
        margin: '90px 10px',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: 'auto',
        padding:"50px",
       
    },
   

}

export const EducatorsAndSchedulesContainer = styled.div`
        background-image: url(${ (props) => props.fullImage });
        background-position: center;
        background-size: cover;
        height: auto;

        width: 100vw;
`
export const TableClases = styled.div`
    border:solid 1px ${ (props) => props.bgb }; 
   border-radius: 50px;
   margin-top: 20px;
   background-image: url(${ (props) => props.bimg });
   background-position: center;
   background-size: cover;
    width: 100%;
    
`


export const ContainerAvatars = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: center;
   gap: 20px;
   padding: 40px 20px;
  
`
export const Avatars = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: solid 1px #1d8348;
`


export const Cronograma = styled.div`
    border: solid 1px #1d8348;
    width: 100%;
    height: 100px;
    margin-right: 40px;
` 
// contiene los dias de la semana de cada fila de educadores aqui se anida los did con el fin de que quede como un cronograma
export const ContainerDias = styled.div`
    width: 100%;
 
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: flex-end;
    gap: 20px;
    position: relative;
    top: 18px;
    .space{
       
        width: 20%;
    }
    .dias_semanas{
        width: 80%;
        height: 20px;
      
        display: flex;
        
        flex-direction: row;
       gap: 10px;
        .data{
            width: 150px;
            height: 20px;
           
            display: grid;
            position: relative;
            p{
                position: absolute;
                bottom: 0;
                width: 100%;
                text-align: center;
                font-size: 17px;
                font-weight: bold;
                color: #fff;
              
                height: 20px;
            }
        }
    }
`

// para el contenedor de opciones 
export const ContainerOptions = styled.div`
    width:100%;
    display: flex;
    height: 60px;
    background-color: #d0d3d4;
    border-radius: 30px;
    background-image: url(${ (props) => props.bgb });
`   

// para las filtros de la seccion de opciopes
export const Option = styled.div`
  
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-image: url(${ (props) => props.selectedColor }  );
    background-position: center;
    background-size: cover;
    display: flex;
    gap: 10px;
    font-size: 15px;
    font-weight: 100;
    
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p{
       
        display: flex;
        justify-content: center;
        justify-content: center;
        height: 16px;
        text-vertical-align: center;
    }
`