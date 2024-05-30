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
        "font-family": "Montserrat",
       
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
    tableClases:{
        border: 'solid 1px white',
        width: '100%',
        height: "10px",
        margin: '45px 0',
        borderRadius: '20px',
    },

}

export const Option = styled.div`
  
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-image: ${ (props) => props.selectedColor };
    display: flex;
    gap: 10px;
    font-size: 15px;
    font-weight: 100;
    font-family: Arial;
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





