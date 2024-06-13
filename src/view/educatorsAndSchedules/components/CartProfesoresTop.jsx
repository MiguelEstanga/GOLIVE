import { useContext, useEffect , useState } from "react";
import { Avatar, CartProfesoresTopContainer , TextData } from "./Styled";
import { getProfesor, profesoresTest, review } from "../../../helper/Response";
import { useNavigate } from "react-router-dom";
import { TeacherContext } from "../../../context/TeacherContext";
import Star from "./Start";
import { GetStorageObjet, SetStorageObjet } from "../../../helper/LocalStorage";

export default function CartProfesoresTop( {imagen_cart , color_resena  , colorBorder , name , avatar  , data})
{
    
    const navegacion = useNavigate()
    const {setTeacher , teacher} = useContext(TeacherContext)
    const [profesor , setProfesor] = useState({})
    //para navegar a la pagina de on-live

    useEffect(  () => {
        profesoresTest(data.teacherId)
        .then(res=> res.json())
        .then(res => {
            console.log(res.data)
           setProfesor(res.data)
         })
    } , [])
    const navegarOnlnePage = () => {
        setTeacher(profesor)
        SetStorageObjet('teacher', profesor)
        navegacion('/on-live-page')
    }
    return (
        <CartProfesoresTopContainer
            imagenCart={require(`../../../${imagen_cart}`)}
            colorBorder={colorBorder}
        >
            <Avatar o
                onClick={() => navegarOnlnePage()  }
                colorborder={colorBorder}
            >
                <img     
                    width="100%" 
                    style={{'border-radius': '50%' }} 
                    src={profesor?.user?.image ?? require('../../../user/loading.jpeg')}
                    alt="avatar"/>
            </Avatar>
            
            <div>
                <TextData>{profesor?.user?.names}</TextData>
                
                <div>
                    <Star 
                        numero={5}  
                        color={ `${GetStorageObjet('schoolId').color}` } 
                    />
                </div>
                <TextData
                    colorTexto={color_resena}
                >
                    5/5 Reseñas
                </TextData>
                
            </div>
        </CartProfesoresTopContainer>
    )
}