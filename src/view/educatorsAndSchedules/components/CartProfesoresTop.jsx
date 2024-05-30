import { Avatar, CartProfesoresTopContainer , TextData } from "./Styled";

export default function CartProfesoresTop( {imagen_cart , color_resena  , colorBorder , avatar })
{
    return (
        <CartProfesoresTopContainer
            imagenCart={imagen_cart}
        >
            <Avatar colorborder={colorBorder}>
                <img width="100%" style={{'border-radius': '50%'}} src={avatar} alt="avatar"/>
            </Avatar>
            <div className="mas-visto-container">
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