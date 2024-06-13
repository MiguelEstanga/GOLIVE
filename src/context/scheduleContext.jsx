import React , { createContext, useEffect, useState } from "react";
import { GetStorageObjet } from "../helper/LocalStorage";

const ScheduleContext = createContext([]); // Array vacío inicial

export function ScheduleProvider({ children }) {
  const [school, setSchool] = useState({});
  const [schedule, setSchedule] = useState([]);
 const [filter, setFilter] = useState([]);

  useEffect(() => {

    const storage = GetStorageObjet('sheldule')

    if(storage === null)
    {
      setSchedule([])
    }else{
      setSchedule(storage)
    }

  } ,[] )

  const value = {
    school,
    setSchool,
    schedule,
    setSchedule,
    filter,
    setFilter,
  };

  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
}

export default ScheduleContext;
