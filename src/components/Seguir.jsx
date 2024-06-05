import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { GetStorageObjet } from "../helper/LocalStorage";
export default function Seguir() {
    return (
       <StyledButton
       fullImage={require(`../${GetStorageObjet("schoolId").bg_btn_follow}`)}
       >
            <FcLike  />   Follow
       </StyledButton>
    )
}

const StyledButton = styled.div`
    background-image: url(${ (props) => props.fullImage });
   
    background-size: cover;
    background-position: center;
    
    padding: 10px 30px;
    border-radius: 20px;
    color: white;
    font-size: 15px;
    font-weight: bold;
  
`