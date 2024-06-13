import ScoolCart from "../../components/ScoolCart";
import Footer2d from "../../components/Footer2d";
import { DivContainer, Welcome , Subtitle, ContainerScool } from "./Styled";
import Menu from "../../components/Menu";
//import {escuelas, getschedule} from "../../helper/Response";
import { useContext, useEffect, useState } from "react";


import  { LanguageContext } from "../../context/languageContext";
import { getStorage } from "../../helper/LocalStorage";
import Loading from "../../components/Loading";
import lang from "../../helper/traduccion";

import { escuelas } from "../../metadata/escuelas";
//import Alert from "../../components/Alerta";

export default function Welcome2d() {
  const [school ,setSchool] = useState([]);
  const [loading ,setLoading] = useState(false);
  const { language  } = useContext(LanguageContext);  
  
  //recuperamos las escuelas y guardamos en localStorage
  


  useEffect( () => {
        
         setSchool(escuelas)
  }, [language])
  return (
    <>
    {loading ? <Loading/> : ''}
   
    <DivContainer>
         <Menu/>
        
        <div className="container-welcome">
            <div className="container-titulo-welcome">
                <Welcome>
                    { lang( `${getStorage('prefix') ?? 'EN'}` , 'BIENVENIDO' )}
                </Welcome>
                <Subtitle>
                    Oran Wright
                </Subtitle>
                
            </div>
            <ContainerScool>
                    {
                      school?.map(  items => (
                        <ScoolCart  
                            key={items.id}
                            items={items}
                            color={items.color}
                            titulo={items.title}
                            logo_text={'https://golive.softus.de/assets/assets/images/IM-logo.png'}
                            
                        />
                      ) )
                    }
            </ContainerScool>
            
        </div>
        <Footer2d
          mt="90px"
          position="relative"
        />
    </DivContainer>
    </>
  );
}