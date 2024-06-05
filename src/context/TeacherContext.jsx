const { createContext, useState } = require("react");


export const TeacherContext = createContext();

export default function TeacheProvider({ children }) {
    const [teacher , setTeacher] = useState({})

    const values = {
        teacher,
        setTeacher
    }
  return (
    <TeacherContext.Provider value={values}>
      {children}
    </TeacherContext.Provider>
  );
}

