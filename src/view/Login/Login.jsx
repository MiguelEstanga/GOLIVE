
import { ButtonCustom, ContainerForm, DivContainer, LoginContainer, LoginInput, Radio } from "./Styled";



export default function Login() {
    return (
        <DivContainer>
            <LoginContainer>
                <div className="container-logo-main">
                    <img  src="https://golive.softus.de/assets/assets/images/IM-logo.png"  alt="logo-mastery-academy" />
                </div>
                <ContainerForm>

                    <form action="">
                      
                             <LoginInput name="username" type="text" placeholder="nombre de usuario" />
                             <div className="required">Se require este campo</div>
                       
                      
                            <LoginInput name="password" type="text" placeholder="Contraseña" />
                            <div className="required">Se require este campo</div>
                        <div  style={{'display':'flex' , 'justify-content':'center' , 'align-items':'center' , 'gap':'10px'}}>
                               
                                <label className="recordarme" htmlFor="recuerdame">
                                    <Radio type="checkbox" name="flexRadioDefault1" id="recuerdame" />
                                    Recordarme
                                </label>
                        </div>
                        <div style={style.botonContainer}>
                            <ButtonCustom >
                                Iniciar sesión
                            </ButtonCustom>
                        </div>
                       
                    </form>
                </ContainerForm>
            
                <div  style={style.footer} className="footer-login-mastery-leyenda-container">
                    <img src="https://golive.softus.de/assets/assets/images/mastery-IM.png" alt="mastery-academy-logo" />
                </div>
            </LoginContainer>

        </DivContainer>
    );
}

const style ={
    footer:{
      
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    botonContainer:{
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '10px',
        marginTop: '20px',
        width: '100%',
        height: '60px',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#000000',
    }
}