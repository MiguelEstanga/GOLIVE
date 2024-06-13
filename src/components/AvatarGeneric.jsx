import { useEffect , useState} from "react";
import { getProfesor, profesoresTest } from "../helper/Response";
import styled from "styled-components";
import { GetStorageObjet, SetStorageObjet } from "../helper/LocalStorage";
import { useNavigate } from "react-router-dom";
import { profesor } from "../view/educatorsAndSchedules/http";

export default function AvatarGeneric({ name, avatar, width ,height }) 
{
  return (
        <Container width={width} height={height} color={avatar}  >
            <img   src={avatar ?? require("../user/loading.jpeg")}  />
        </Container>    
    )
}

export const Avatar2 = ({id})=>{


  const [data , setData] = useState({})
  const navegacion = useNavigate()


  async function profesor(){
    const response  = await profesoresTest(id)
    const profesor = await response.json()
    setData(profesor.data)
  }
   


  useEffect(  function(){
    profesor()
    console.log('proximos',id)
  } ,[] ) 
   
  return (
      <div
        onClick={() => {navegacion('/on-live-page')}}
        style={ {cursor: 'pointer',} }
      >                          
          <img 
            width={'70px'} 
            src={  data?.user?.image ??  require("../user/loading.jpeg")}
            style={{borderRadius: '50%',}} 
          />
      </div>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50%;
  background-color: ${props => props.color ?? ''};    
  border: 1px solid #fff;

  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media (max-width:600px) {

  `