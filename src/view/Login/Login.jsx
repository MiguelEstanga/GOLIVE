
import { useState } from "react";
import { ButtonCustom, ContainerForm, DivContainer, LoginContainer, LoginInput, Radio } from "./Styled";
import { useNavigate } from "react-router-dom";



export default function Login() {
    const [login , setLogin ] = useState({})
    const [error , setError ] = useState('')
    const navegacion  = useNavigate()
    return (
        <DivContainer>
            <LoginContainer>
                <div className="container-logo-main">
                    <img  src={require('../../asset/icon.png')}  alt="logo-mastery-academy" />
                </div>
                <ContainerForm>

                    <form action="">
                      
                             <LoginInput
                                onChange={(e) => setLogin({...login, username: e.target.value})}
                                name="username" type="text" placeholder="nombre de usuario" />
                             <div className="required">{error}</div>
                       
                      
                            <LoginInput 
                                
                                onChange={(e) => setLogin({...login, password: e.target.value})}
                                name="password" type="password" placeholder="Contraseña" />
                            <div className="required">{error}</div>
                        <div  style={{'display':'flex' , 'justify-content':'center' , 'align-items':'center' , 'gap':'10px'}}>
                               
                                <label className="recordarme" htmlFor="recuerdame">
                                    <Radio type="checkbox" name="flexRadioDefault1" id="recuerdame" />
                                    Recordarme
                                </label>
                        </div>
                        <div style={style.botonContainer}>
                            <ButtonCustom 
                                onClick={(event) => {
                                    event.preventDefault()
                                    if(login.username === '' || login.password === ''){
                                        setError('Se requiere este campo')
                                    }
                                    
                                    if( login.username === 'lars' && login.password === '123456'){
                                        console.log('usuario correcto')
                                        navegacion('/Welcome2d')
                                    }else{

                                        setError('Usuario o contraseña incorrectos')
                                    }
                                    
                                }}
                            >
                                Iniciar sesión
                            </ButtonCustom>
                        </div>
                       
                    </form>
                </ContainerForm>
            
                <div  style={style.footer} className="footer-login-mastery-leyenda-container">
                    <img src="https://golive.softus.de/assets/assets/images/mastery-IM.png" alt="" />
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