import { useState } from "react";
import { Containerflex ,  ItemMenuCircular,  MenuContainer } from "./Styled";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa";
export default function Menu() {
    const [lenguaje , setLenguaje] = useState(false)

    function handleChange() {
        setLenguaje(!lenguaje);
    }

    return (
        <MenuContainer>
            <Containerflex>
                <div className="menu-logo">
                    <img src="https://golive.softus.de/assets/assets/images/IM-logo.png" alt="logo" width={'60px'} />
                </div>
               
                <div className="menu-options">
                    2D 
                        <div class="switch">
                            <input type="checkbox" id="mySwitch" class="switch-checkbox" />
                            <label for="mySwitch" class="switch-label"></label>
                        </div>
                    3D
                </div>
            </Containerflex>
           
            <Containerflex
                justifyContent="end"
            >
                {
                    lenguaje === true ? ( 
                        <div className="select" id="select-language">
                            <select name="" id="">
                                <option  value="1">Ingles</option>
                                <option value="1">Ingles</option>
                                <option value="1">Ingles</option>
                            </select>
                        </div>
                     ) : null
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