import { SetStorageObjet } from "../../helper/LocalStorage";
import {escuelas} from "../../helper/Response"


export async function  setEscuelas(setLoading , setSchool)
  {
      try {
        setLoading(true)
        const response = await escuelas();
        console.log('escuelas')
        console.log(response.data)
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
