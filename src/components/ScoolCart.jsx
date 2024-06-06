import { useContext } from "react";
import { CartContainer, Comenzar, LogoContainer  , LogoScool} from "./Styled";
import ShouldeContext from "../context/ShouldeContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { schedule } from "../helper/Response";
import { GetStorageObjet, SetStorageObjet, getStorage } from "../helper/LocalStorage";

export default function ScoolCart({color , image , titulo , logo_text , items}) 
{
    const { setSchoolId , setShoulde  } = useContext(ShouldeContext);

    const navegation = useNavigate();

    async function  setSchedule(schoolId)
    {
        const response = await schedule();
        try{
            var school = response.data.data.today
            console.log(getStorage('lenguaje'))
            console.log(schoolId)
            var metadata =  school.filter(data => data.language_id === getStorage('lenguaje') && data.school_id === schoolId)
            SetStorageObjet('shoulde', metadata)
            setShoulde(metadata)
            console.log(metadata)
        }catch(error){
          console.log(error);
        }
    }

    const handleClick = () => {
        SetStorageObjet('schoolId', items)        
        setSchedule(GetStorageObjet('schoolId').id )
        navegation("/educators-and-schedules")
    }

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
            <Comenzar onClick={ () => handleClick()} >
                Comenzar
            </Comenzar>
          
       </CartContainer>
    )
}

const Style ={
    container:{
        with:'80px!important',
        height:'100px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
}