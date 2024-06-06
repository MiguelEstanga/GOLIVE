import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ButtonComun({ text }) 
{
    const  navegacion =useNavigate();
    return (
       <Container onClick={() => navegacion('/smart-money')} > 
            {text}
       </Container>
    )
}

const Container = styled.button`
     background-image: linear-gradient(to right,   #fbfcfc  ,   #b3b6b7 );
        width: 120px;
        height: 40px;
        border: none;
        border-radius: 50px;
        color: #000;
        font-weight: 100;
        cursor: pointer;
`