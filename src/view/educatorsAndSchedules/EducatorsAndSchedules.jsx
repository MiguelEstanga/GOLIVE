import { useState } from "react";
import Menu from "./components/Menu";
import SwiperProfesores from "./components/SwiperProfesores";
import { Option, Style } from "./Styled";
import { LiaBuromobelexperte } from "react-icons/lia";
import Footer2d from "../../components/Footer2d";
import InLive from "./components/inLive";
import Comunidad from "./components/Comunidad";

export default function EducatorsAndSchedules() 
{
    const options = [
        {
            id:1,
            select : true,
            text: "ALL SESSIONS"
        },
        {
            id:2,
            select : false,
            text: "FORING EXCHANGE ACADEMY"
        },
        {
            id:3,
            select : false,
            text: "FORING EXCHANGE BPRO"
        }
    ]
    const [selected, setSelected] = useState(1);
    
    const profesores = [
        {
            id: 1,
            nombre: "Juan",
            apellido: "Perez",
            edad: 25,
            profesor: true,   
                  
        },
        {
            id: 2,
            nombre: "Maria",
            apellido: "Perez",
            edad: 25,
            profesor: true,
        },
        {
            id: 3,
            nombre: "Juan",
            apellido: "Perez",
            edad: 25,
            profesor: true,
        },
        {
            id: 1,
            nombre: "Juan",
            apellido: "Perez",
            edad: 25,
            profesor: true,            
        },
        {
            id: 2,
            nombre: "Maria",
            apellido: "Perez",
            edad: 25,
            profesor: true,
        },
        {
            id: 3,
            nombre: "Juan",
            apellido: "Perez",
            edad: 25,
            profesor: true,
        },
    ];

    const  handleClick = (selected) => {
        setSelected(selected);
    }
    return (
        <div className="EducatorsAndSchedules">
           <Menu/>
           <div className="container-educators-top">
                <h2
                    className="title-educators"
                >
                    EDUCADORES MÁS VISTOS
                </h2>
                <SwiperProfesores
                    profesores={profesores}
                />
           </div>
           <div className="selector-session-foreing">
              <div>
                <h2 style={Style.h2}>
                    Vive ahora
                </h2>
                <div style={Style.inlive}>
                   
                    <InLive
                        
                        borderColor={'#52be80'}
                        url_avatar={'https://d22yb2tbj8zopv.cloudfront.net/src/user/rvukovic.png'}
                    />

                   
                </div>
              </div>
              <div>
                <div style={Style.section_meenu}>
                    {
                        options.map( (option, index) => (
                            <Option
                                key={index}
                                onClick={() => handleClick(option.id)}
                                selectedColor={ option.id == selected ? 'linear-gradient(to right,  #52be80 ,   #27ae60  )' : ""}
                                
                            >  
                                <p >
                                    <LiaBuromobelexperte
                                        size={20}
                                    />
                                </p>
                                <p>
                                    {option.text}
                                </p>
                                
                            </Option>
                        ))
                        
                    }

                    
                </div>
                
                <div style={Style.tableClases}>

                </div>
              </div>
          
           </div>
         
           <Comunidad/>
           <Footer2d
               position={'relative'}
               marginTop="50px"
           />
        </div>
    )
}

