import { createContext, useEffect, useState } from "react";
import { setStorage } from "../helper/LocalStorage";

export const LanguageContext = createContext([]);


export default function LanguageProvider({children}) 
{
    const [language, setLanguage] = useState("1bb3804b-a858-4249-873e-57dfa12aa3d6");

    useEffect(() => {
        console.log(language)
        setStorage('lenguaje', language)
    },[language])
    
    const value ={
        language,
        setLanguage
    }
    return (
    <LanguageContext.Provider value={value}>
        {children}
    </LanguageContext.Provider>
    )
}