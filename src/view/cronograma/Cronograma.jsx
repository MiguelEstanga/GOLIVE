import Clases from "./Clases";
import { Container ,  ContainerInfo,  CronogramaStyle , ContainerAvatar , Dias } from "./styled";
import AvatarGeneric from "../../components/AvatarGeneric";
import { useContext, useEffect , useState } from "react";
import { getProfesor } from "../../helper/Response";
import { TeacherContext } from "../../context/TeacherContext";
import { useNavigate } from "react-router-dom";
import { GetStorageObjet, SetStorageObjet } from "../../helper/LocalStorage";
export default function Cronograma({ children , name }) 
{
    const [data , setData] = useState([])
    const {setTeacher} = useContext(TeacherContext)
    const navegacion = useNavigate()
    useEffect( () => {
        getProfesor(name)
        .then(res => { 
             
            setData(res.data.data)
            SetStorageObjet('teacher', res.data.data)
               
        })
    },[])
    return (
            <CronogramaStyle>
                <ContainerInfo
                    bgb={ require(`../../${GetStorageObjet("schoolId")?.bg_btns}`)  }
                >
                    <ContainerAvatar
                        onClick={() => {
                            setTeacher(data ?? {} ) 
                            navegacion('/on-live-page')
                           
                        }}
                    >
                        <AvatarGeneric  
                            width={'100px'}
                            height={'100px'}
                            avatar={GetStorageObjet('teacher')?.user?.image }
                        />

                        <div style={Style.containerData}>
                            <p style={Style.p}>
                                <span style={Style.nombre} > {GetStorageObjet('teacher')?.user?.names ?? 'loading ...'} </span> <br/>
                                <span style={Style.role} > {GetStorageObjet('teacher')?.role?.role_name ?? 'loading ...'} </span>
                            </p> 
                         
                        </div>    
                       
                    </ContainerAvatar>
                    <Dias>
                       {children}
                    </Dias>
                </ContainerInfo>
               
            </CronogramaStyle>
        
    );
}

const Style = {
    nombre:{
        fontSize: '10px',
        fontWeiht: '100',
    },
    role:{
        fontSize: '10px',
        fontWeiht: 'bold',
    },
    containerData:{
       
        height: '100%',
        display: 'flex',
        flexDirection: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
    },
    p:{
        
        fontSize: '16px',
        color: 'white',
        textAlign: 'center',
        marginTop: '10px',
        marginBottom: '10px',
        textAlign: 'start',
        
    }
}