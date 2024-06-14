import { useContext } from "react";
import { CartContainer, Comenzar, LogoContainer  , LogoScool} from "./Styled";
import { useNavigate } from "react-router-dom";
import { GetStorageObjet, SetStorageObjet, getStorage } from "../helper/LocalStorage";
import lang from "../helper/traduccion";
import {schedule}  from "../metadata/schedule";
import { LanguageContext } from "../context/languageContext";
import ScheduleContext from "../context/scheduleContext";
export default function ScoolCart({color , items}) 
{
   
    const { setSchedule } = useContext(ScheduleContext);
    const { language } = useContext(LanguageContext);
    const navegation = useNavigate();

    const handleClick = () => {
        SetStorageObjet('school', items)
        setSchedule(schedule.filter( profesores => profesores.language_id === language && profesores.school_id === items.id ) )
        navegation("/educators-and-schedules")
    }

    return (
       <CartContainer
            color={items.color}
            image={require(`../${items.bacground_img}`)}
       >
            <LogoContainer> 
                <div style={Style.container}>
                    <LogoScool
                         width={'100px'}
                         height={'50px'}
                        
                    >
                        <img width={'100%'} height={'100%'} src={require(`../${items.image}`)} alt="logo" />
                    </LogoScool>
                    
                </div>
               
            </LogoContainer>
            <Comenzar onClick={ () => handleClick()} >
                { lang( `${getStorage('prefix') ?? 'EN'}` , 'Comenzar' )}
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