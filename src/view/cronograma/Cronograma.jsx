import Clases from "./Clases";
import { Container ,  ContainerInfo,  CronogramaStyle , ContainerAvatar , Dias } from "./styled";
import AvatarGeneric from "../../components/AvatarGeneric";
import { useEffect , useState } from "react";
import { getProfesor } from "../../helper/Response";
export default function Cronograma({ children , name }) 
{
    const [data , setData] = useState([])

    useEffect( () => {
        getProfesor(name)
        .then(res => { 
            console.log('profesores')
            setData(res.data.data)
            console.log(res.data.data)
        })
    },[])
    return (
       
            <CronogramaStyle>
                <ContainerInfo>
                    <ContainerAvatar>
                        <AvatarGeneric
                            width={'100px'}
                            height={'100px'}
                            avatar={data?.user?.image }
                        />

                        <div style={Style.containerData}>
                            <p style={Style.p}>
                                <span style={Style.nombre} > {data?.user?.names ?? 'loading ...'} </span> <br/>
                                <span style={Style.role} > {data?.role?.role_name ?? 'loading ...'} </span>
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
        fontSize: '15px',
        fontWeiht: '100',
    },
    role:{
        fontSize: '15px',
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