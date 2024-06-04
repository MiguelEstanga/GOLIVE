import { useContext, useEffect, useState } from "react";
import { Containerflex ,  ItemMenuCircular,  MenuContainer } from "./Styled";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa";
import { getLanguage } from "../helper/Response";
import { LanguageContext } from "../context/languageContext";
import { GetStorageObjet, getStorage } from "../helper/LocalStorage";
import Loading from "./Loading";
export default function Menu() {
    const [lenguaje , setLenguaje] = useState(false)
    const [languages , setLanguages] = useState([])
    const [loading ,setLoading] = useState(true);
    const { setLanguage } = useContext(LanguageContext)
    function handleChange() {
        setLenguaje(!lenguaje);
      
        getLanguage() .then(res => { 
            
            GetStorageObjet('language', res.data.data.languages )
            setLanguages(res.data.data.languages )
        })
        .finally(() => setLoading(false))
      
       
    }

    const handleChangeLanguage = (idLanguage) => {
        setLanguage(idLanguage)
        setLenguaje(!lenguaje);
        console.log(idLanguage)
    }

    return (
        <MenuContainer>
            <Containerflex>
                <div className="menu-logo">
                    <img src="https://golive.softus.de/assets/assets/images/IM-logo.png" alt="logo" width={'60px'} />
                </div>
               
                <div className="menu-options">
                    2D 
                        <div className="switch">
                            <input type="checkbox" id="mySwitch" className="switch-checkbox" />
                            <label htmlFor="mySwitch" className="switch-label"></label>
                        </div>
                    3D
                </div>
            </Containerflex>
           
            <Containerflex
                direccion="end"
            >
               
                
                {
                    lenguaje ? (
                        <ul>
                           
                             { loading ? <Loading/> : ''}
                            {
                                languages?.map( item => (
                                    <li  
                                        style={ {backgroundColor: `${ item.id === getStorage('lenguaje')? '#2e86c1' :'' }`  }}
                                        key={item.id}
                                        onClick={() => handleChangeLanguage(item.id)}
                                    >
                                       
                                       
                                        <a onClick={() => handleChangeLanguage(item.id)}>
                                           {
                                            item.lang_name
                                           }
                                        </a>
                                    </li>
                                ) )
                            }
                                
                              
                        </ul>
                    ):''
                }
                  
                       
                    
                  
               <ItemMenuCircular 
                color="linear-gradient(to right, #fff,   #b3b6b7  )"
                onClick={handleChange}
                >

                    <div style={{ "height" :"30px" , "width" : "30px" , 'margin': 'auto'}}>
                      <FaLanguage size={30} color= "#626567" />
                    </div>
              </ItemMenuCircular>
              <ItemMenuCircular>
                    <div style={{ "height" :"30px" , "width" : "30px" , 'margin': 'auto'}}>
                        <RiLogoutBoxRLine
                            size={30}
                        />
                    </div>
                    
              </ItemMenuCircular>
            </Containerflex>
        </MenuContainer>
    )
}