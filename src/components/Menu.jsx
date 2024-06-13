import { useContext, useEffect, useState } from "react";
import { Containerflex ,  ItemMenuCircular,  MenuContainer } from "./Styled";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa";
import { getLanguage } from "../helper/Response";
import { LanguageContext } from "../context/languageContext";
import { GetStorageObjet, getStorage, setStorage } from "../helper/LocalStorage";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import  { lenguajes}  from  '../metadata/lenguaje'

export default function Menu() {
    const [lenguaje , setLenguaje] = useState(false)
    const [languages , setLanguages] = useState([])
    const [loading ,setLoading] = useState(false);
    const [selectedmenu , setSelectedmenu] = useState('2D')
    const { setLanguage } = useContext(LanguageContext)
    const navegacion = useNavigate()


    //setea el lenguaje de la pagina
    function handleChange() {
        setLenguaje(!lenguaje);        
    }

    //abre la barra donde estan los lenguajes
    const handleChangeLanguage = (idLanguage) => {
        setLanguage(idLanguage)
        setLenguaje(!lenguaje);
       
    }

    useEffect(() => {
        setLanguages(lenguajes)
    } , [])
        
    const color = {
        backgroundColor: 'linear-gradient(to right,  #f1c40f ,    #7d6608   )',
    }
    return (
        <MenuContainer>
            <Containerflex>
                <div className="menu-logo">
                    <img src={`${require('../asset/icon.png')}`} alt="logo" width={'60px'} />
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
                                        style={ {backgroundColor: `${ item?.id === getStorage('lenguaje')? '#2e86c1' :'' }`  }}
                                        key={item.id}
                                        onClick={() =>{
                                             handleChangeLanguage(item?.id)
                                             console.log(item?.prefix)
                                             setStorage('prefix', item?.prefix)
                                             setStorage('lenguaje', item?.id)
                                        }}
                                    >
                                       
                                       
                                        <a onClick={() => handleChangeLanguage(item.id)} >
                                           {
                                              item?.lang_name?.toUpperCase() ?? "loading..."
                                           }
                                        </a>
                                    </li>
                                ) )
                            }
                                
                              
                        </ul>
                    ):''
                }
                  
                       
               
                    <div className="mode_responsive">
                        <div className="menu">
                            <div className="item-menu" style={ {backgroundImage:selectedmenu === "2D" ? color.backgroundColor :""  } }  >
                                2D
                            </div>
                            <div className="item-menu" style={ {backgroundImage:selectedmenu === "3D" ? color.backgroundColor :""  } }  >
                                3D
                            </div>
                        </div>
                        
                    </div>
                
                  
               <ItemMenuCircular 
                color="linear-gradient(to right, #fff,   #b3b6b7  )"
                onClick={handleChange}
                >

                    <div style={{ "height" :"30px" , "width" : "30px" , 'margin': 'auto'}}>
                      <FaLanguage size={30} color= "#626567" />
                    </div>
              </ItemMenuCircular>
              <ItemMenuCircular
                onClick={() => {
                    localStorage.clear();
                  navegacion('/login')
                }}
              >
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