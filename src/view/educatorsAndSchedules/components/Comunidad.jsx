import { GetStorageObjet } from "../../../helper/LocalStorage"
import { ContainerComunidadEvento, H2, Leyenda , Avatar , ContainerComunidad , text} from "./Styled"
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import {  Avatar2 } from "../../../components/AvatarGeneric"
export default function Comunidad({
    BorderColor ,
    TextColor,
    bgImgen,
    academiaImg,
    nextClases
}) {
    const text = {
        color: TextColor,
        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        
    }
    return (
        <Container>
            <div className="comunidad">
            <ContainerComunidadEvento
               
               >
                  <div style={  Style.evento_text} >
                      <h2 style={text}> Comunidad </h2>
                  </div>
                  <div style={Style.container_comunidad}>
  
                      <ContainerComunidad
                          borderColor={  BorderColor  }
                          borderRadius={'30px 0 0 30px'}
                          imagenCart={require(`../../../asset/bg.jpg`)}
                      >
  
                           <div style={Style.container_text}>
                              <h2 style={Style.h2} >
                                  Comunidad
                              </h2>
                              <div style={{
                                  display:'flex',
                                  justifyContent: 'center',
                              }}>
                                  <img width={'130px'} src={require(`../../../${GetStorageObjet("school")?.image ?? ''}`)} alt="img"  />
                              </div>
                          </div>
  
                      </ContainerComunidad>
  
                      <ContainerComunidad
                          borderColor={BorderColor}
                          borderRadius={'0 30px 30px 0'}
                         imagenCart={require(`../../../${GetStorageObjet("school")?.bg_commun}`) }
                      >
                          <div style={Style.container_text_ir}>
                              <H2>
                                  Qué hay de nuevo 
                              </H2>
                              <H2
                                  color={TextColor}
                              >
                                  en tu comunidad?
                              </H2>
                              <Leyenda
                                  color={TextColor}
                              >
                                  Presentamos el curso de divisas de IM Academy,
                                  diseñado para educar a los estudiantes con el 
                                  conocimiento mas completo y práctico en el mundo del 
                                  comercio de devisas.
  
                                  <a  target="_blank" href="https://im.academy/">
                                      ir
                                  </a>
                              </Leyenda>
                          </div>
                      </ContainerComunidad>
  
                  </div>
               </ContainerComunidadEvento>
            </div>
             
             
             <ContainerComunidadEvento>
                <div style={Style.evento_text} >
                    <div  className="text" >Proximas Sesiones</div>
                    <div className="options">
                        <a
                            href="#options"
                            className="text"
                        >
                            See all <IoIosArrowForward size={12} />
                        </a>
                    </div>
                    
                </div>
                <div >

                    <ContainerComunidad
                        width='90%'
                        margin={'auto'}
                       
                    >
                         {
                                nextClases?.map( (res , index) => (
                                    <div
                                        key={index}
                                        style={{
                                        
                                            width: '90%',
                                            height: '70px',
                                            border:`solid 1px  ${GetStorageObjet("school")?.cl_border}`,
                                            margin:'10px',
                                            borderRadius: '5px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding:'10px',
                                        }} >
                                       
                                       <Avatar2
                                            key={index}
                                            id={res.teacherId}
                                        />
                                      
                                       
                                        <div style={{
                                            width:'30px',
                                            height:'30px',
                                            padding:'10px',
                                            border:`solid 1px  ${GetStorageObjet("school")?.cl_border}`,
                                            borderRadius: '50%',
                                            backgroundColor: `${GetStorageObjet("school")?.color}`,
                                            display:"flex",
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        } } >
                                            
                                                 <IoIosArrowForward 
                                                color="#fff"
                                                 size={12} />
                                            
                                           
                                        </div>
                                    </div>
            
                                 

                                ) )
                            }
                       
                    </ContainerComunidad>

                   

                </div>
             </ContainerComunidadEvento>
        </Container>
    )
}


const Container = styled.div`
    
        gap:20px;
        max-width:1600px ;
        margin: auto;
        height:  auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        
        @media (max-width:600px) {
             grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
             gap:70px;
             width: 100vw;
            pleace-items: center;
            justify-content: center;
            alining-items: center;

            .comunidad{
                display: none;
            }
        }
`
const Style = {
    conatiner :{
     
        
    },
 
    container_comunidad :{
        width: '100%',
        height: '220px',
        borderRadius: '30px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
      
    },
    container_comunidad_evento:{
        width: '100%',
        height: '220px',
        borderRadius: '30px',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
    },
    container_comunidad_img :{
        width: '100%',
        height: '100%',
    },
    h2:{
        textAlign: 'center',
        borde: 'solid 1px red',
        width: '100%',
        color: '#fff',
        fontSize: '17px',
        
    },
    container_text:{
       
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap:'80px',
        justifyContent: 'center',
    },

    container_text_ir:{
     
        width: '100%',
        display:'flex',
        alignItems: 'start',
        flexDirection: 'column',
        padding:'20px',
    },
    evento_text:{
        
        width: '100%',
        height: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    }
}