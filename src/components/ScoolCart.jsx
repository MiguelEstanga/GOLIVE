import { CartContainer, Comenzar, LogoContainer  , LogoScool} from "./Styled";
export default function ScoolCart({color , image , titulo , logo_text}) {
    return (
       <CartContainer
        color={color}
        image={image}
       >
            <LogoContainer> 
                <LogoScool 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"  
                />
                <div  className="scuela-titulo-container-logo">
                    <LogoScool 
                        borderRadius={'1px'}
                        width={'15px'}
                        height={'15px'}
                        src={logo_text} 
                    />
                   
                        {titulo}
                    
                </div>
               
            </LogoContainer>
            <Comenzar>
                Comenzar
            </Comenzar>
          
       </CartContainer>
    )
}