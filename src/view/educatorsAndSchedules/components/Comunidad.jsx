import { ContainerComunidadEvento, H2, Leyenda , Avatar , ContainerComunidad} from "./Styled"
export default function Comunidad() {
    const text = {
        color: '#fff',
        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
    }
    return (
       
        <div style={Style.conatiner}>
             <ContainerComunidadEvento>
                <div style={  Style.evento_text} >
                    <h2     style={text}  >Comunidad</h2>
                </div>
                <div style={Style.container_comunidad}>

                    <ContainerComunidad
                        borderColor={'#52be80'}
                         borderRadius={'30px 0 0 30px'}
                        imagenCart={"https://golive.softus.de/assets/assets/images/img_bg_community_socialM.png"}
                    >

                         <div style={Style.container_text}>
                            <h2 style={Style.h2} >Comunidad</h2>
                            <div>
                                <img width={'130px'} src="https://imapi.softus.de/school/foreign_ex.png" alt="img"  />
                            </div>
                        </div>

                    </ContainerComunidad>

                    <ContainerComunidad
                        borderColor={'#52be80'}
                        borderRadius={'0 30px 30px 0'}
                        imagenCart={"https://d22yb2tbj8zopv.cloudfront.net/src/school/bg-btns-menu-foreing-fex.png"}
                    >
                        <div style={Style.container_text_ir}>
                            <H2>
                                Qué hay de nuevo 
                            </H2>
                            <H2
                                color=" #27ae60 "
                            >
                                en tu comunidad?
                            </H2>
                            <Leyenda>
                                Presentamos el curso de divisas de IM Academy,
                                diseñado para educar a los estudiantes con el 
                                conocimiento mas completo y práctico en el mundo del 
                                comercio de devisas.

                                <a href="https://im.academy/">
                                    ir
                                </a>
                            </Leyenda>
                        </div>
                    </ContainerComunidad>

                </div>
             </ContainerComunidadEvento>
             
             <ContainerComunidadEvento>
                <div style={Style.evento_text} >
                    <h2  style={text}  >Eventos</h2>
                    <a
                        style={text}
                    >
                        Ver todos {'>'}
                    </a>
                </div>
                <div >

                    <ContainerComunidad
                        imagenCart={"https://golive.softus.de/assets/assets/images/img_bg_community_socialM.png"}
                    >

                        <div style={{
                            width: '100%',
                            height: '70px',
                            border: 'solid 1px  #34975d ',
                            margin:'10px',
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding:'10px',
                        }} >
                            <div>
                                
                                <img width={'70px'} src="https://d22yb2tbj8zopv.cloudfront.net/src/user/rvukovic.png" alt="img" style={{
                                    borderRadius: '50%',
                                }}  />

                               
                            </div>
                           
                            <div style={{
                                width:'30px',
                                height:'30px',
                                padding:'10px',
                                border:'solid 1px  #34975d ',
                                borderRadius: '50%',
                                backgroundColor: '#34975d',
                                display:"flex",
                                justifyContent: 'center',
                                alignItems: 'center',
                            } } >
                                <a  style={{ fontSize:'20px'  }} >
                                     {">"}
                                </a>
                               
                            </div>
                        </div>

                    </ContainerComunidad>

                   

                </div>
             </ContainerComunidadEvento>
        </div>
    )
}

const Style = {
    conatiner :{
        border:'solid 1px  red ;',
        gap:'20px',
        width: '80%',
        margin: 'auto',
        height:  "auto",
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        
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
        
      
       
        border: 'solid 1px red',
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