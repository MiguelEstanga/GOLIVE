import { useEffect, useState } from "react";
import { AvatarInlive } from "./Styled";
import { profesoresTest } from "../../../helper/Response";
import { SetStorageObjet } from "../../../helper/LocalStorage";

export default function InLive({data , borderColor}) {
     const [teacher , setTeacher] = useState()

     useEffect( () => {
          profesoresTest(data.teacherId).then(res => res.json())
          .then(data => {
           
               SetStorageObjet('live' , data.data)
               setTeacher(data.data)
               
          })
     },[])
    return (
       <AvatarInlive
            colorborder={borderColor}
       >
            <img  width={'100%'}  style={{'border-radius': '50%'}}  src={teacher?.user?.image} alt="avatar"/>
       </AvatarInlive>
    )
}