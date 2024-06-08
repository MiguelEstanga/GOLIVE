import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginContext = createContext();

export default function  LoginProvider({ children})
{
    const [user, setUser] = useState([]);
    const [login , setLogin] = useState(login);
    const navegacion = useNavigate()
    const value = {
        user,
        setUser
    }
    useEffect( 
        () => {
            if(login === false )
            {
                navegacion('/login')
            }
        },
        [login]
    )
    return (
        <LoginContext.Provider value={{value}}>
            {children}
        </LoginContext.Provider>
    )
}