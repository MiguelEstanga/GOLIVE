import styled from "styled-components";
import { FcLike } from "react-icons/fc";
export default function Seguir() {
    return (
       <StyledButton>
            <FcLike />   Seguir
       </StyledButton>
    )
}

const StyledButton = styled.div`
    background-color: #34975d;
    padding: 10px 30px;
   border-radius: 20px;
   color: white;
   font-size: 15px;
   font-weight: bold;
   font-family: Montserrat;
`