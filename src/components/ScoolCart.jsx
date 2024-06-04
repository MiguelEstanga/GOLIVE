import { useContext } from "react";
import { CartContainer, Comenzar, LogoContainer  , LogoScool} from "./Styled";
import ShouldeContext from "../context/ShouldeContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GetStorageObjet, SetStorageObjet } from "../helper/LocalStorage";
export default function ScoolCart({color , image , titulo , logo_text , items}) {
    const { setSchoolId   } = useContext(ShouldeContext);
    const navegation = useNavigate();
    return (
       <CartContainer
        color={color}
        image={require(`../${items.bacground_img}`)}
       >
            <LogoContainer> 
               
                <div style={Style.container}>
                    <LogoScool 
                        width={'100%'}
                        height={'70%'}
                        src={require(`../${items.image}`)}  
                    />
                </div>
               
            </LogoContainer>
            <Comenzar
                onClick={() => {
                  
                    SetStorageObjet('schoolId', items)
                   // setSchoolId(items)
                   console.log(GetStorageObjet('schoolId'))
                   navegation("/educators-and-schedules")
                   
                }}
            >
                Comenzar
            </Comenzar>
          
       </CartContainer>
    )
}

const Style ={
    container :{
     
        with:'80px!important',
        height:'100px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
}