import { useEffect , useState } from "react";
import { Avatar, CartProfesoresTopContainer , TextData } from "./Styled";
import { getProfesor } from "../../../helper/Response";

export default function CartProfesoresTop( {imagen_cart , color_resena  , colorBorder , avatar , idProfesor})
{
    const [data , setData] = useState([])   

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
            <Avatar colorborder={colorBorder}>
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
                    5/5 Resenas
                </TextData>
                
            </div>
        </CartProfesoresTopContainer>
    )
}