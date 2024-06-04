import React , { createContext, useEffect, useState } from "react";
import { GetStorageObjet } from "../helper/LocalStorage";

const ShouldeContext = createContext([]); // Array vacío inicial

export function ShouldeProvider({children }) {
  const [schoolId, setSchoolId] = useState({});
  const [shoulde, setShoulde] = useState([]);


  useEffect(() => {
   const data = GetStorageObjet('shoulde');
   const school = GetStorageObjet('schoolId');
   
   if(data === null) {
     setSchoolId({});
     setShoulde([]);
   }else{
    setSchoolId(school);
    setShoulde(data);
   }
  } ,[] )
  const value = {
    schoolId,
    setSchoolId,
    shoulde,
    setShoulde,
  };

  return (
    <ShouldeContext.Provider value={value}>
      {children}
    </ShouldeContext.Provider>
  );
}

export default ShouldeContext;
