import { useContext, useEffect , useState } from "react";
import { Avatar, CartProfesoresTopContainer , TextData } from "./Styled";
import { getProfesor } from "../../../helper/Response";
import { useNavigate } from "react-router-dom";
import { TeacherContext } from "../../../context/TeacherContext";

export default function CartProfesoresTop( {imagen_cart , color_resena  , colorBorder , avatar , idProfesor})
{
    const [data , setData] = useState([])   
    const navegacion = useNavigate()
    const {setTeacher} = useContext(TeacherContext)
    useEffect( () => {
        getProfesor(idProfesor)
        .then(
            res => {
                setData(res?.data?.data)
            }
        )
    } , [])
    return (
        <CartProfesoresTopContainer
            imagenCart={imagen_cart}
            colorBorder={colorBorder}
        >
            <Avatar 
                onClick={() => {
                    setTeacher(data) 
                    navegacion('/on-live-page')
                    
                }}
            colorborder={colorBorder}>
                <img     width="100%" style={{'border-radius': '50%' }} src={data?.user?.image ?? require(`../../../user/loading.jpeg`) } alt="avatar"/>
            </Avatar>
            
            <div 
              
            >
                <TextData>
                    Nombre del profesor
                </TextData>
                
                <div>
                    Estrllitas
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