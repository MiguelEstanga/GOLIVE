import ScoolCart from "../../components/ScoolCart";
import Footer2d from "../../components/Footer2d";
import { DivContainer, Welcome , Subtitle, ContainerScool } from "./Styled";
import Menu from "../../components/Menu";
import {escuelas, schedule} from "../../helper/Response";
import { useContext, useEffect, useState } from "react";
import { endpoints } from "../../helper/Api";
import ShouldeContext from "../../context/ShouldeContext";
import  { LanguageContext } from "../../context/languageContext";
import { GetStorageObjet, SetStorageObjet, getStorage, setStorage } from "../../helper/LocalStorage";
import Loading from "../../components/Loading";
import lang from "../../helper/traduccion";
export default function Welcome2d() {
  const [school ,setSchool] = useState([]);
  const [loading ,setLoading] = useState(true);
  const [selectLanguage ,setSelectLanguage] = useState('b18847d2-bb5d-4aeb-915f-b4310eb3999d');
  const { setShoulde } = useContext(ShouldeContext);
  const { language  } = useContext(LanguageContext);  

  //recuperamos las escuelas y guardamos en localStorage
  async function  setEscuelas()
  {
      try {
        const response = await escuelas();
        if(response.data.status_code === 200)
        {
            SetStorageObjet('school', response.data.data);
            setSchool(response.data.data);
        }
      } catch (error) {
        
      }finally {
        setLoading(false);
        
      }
     
  }

  async function  setSchedule()
  {
    const response = await schedule();
    try{
      var school = response.data.data.other_day
      var metadata =  school.filter(data => data.language_id === language)
      SetStorageObjet('shoulde', metadata)
      setShoulde(metadata)
    }catch(error){
      console.log(error);
    }
  }

  useEffect( () => {
      setStorage('lenguaje', language)
      setEscuelas()
      console.log( 'lenguaje ' , language )
       
     // setSchedule()
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
                            titulo={items.titulo}
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