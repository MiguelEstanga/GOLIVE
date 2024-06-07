import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const CronogramaStyle = styled.div`
  display: flex;
  flex-direction: column; 
  height: auto;
  width: 100%;
  gap: 10px;
  @media (max-width:600px) {
      position: relative;
      right: 20px;
  }
`;

//contendor de los dias de la semana
export const ContainerInfo = styled.div`
    
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;

    @media (max-width:600px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        height: auto;
        
        border-radius: 20px;
       
       
        justify-content: center;
        align-items: center;
      
        background-image: url(${ (props) => props.bgb });
        background-position: center;
        background-size: cover;
    }
`;

export const ContainerAvatar = styled.div`
    width: 20%;
    height: 100%;
    cursor: pointer;
    display: flex;
    
    flex-direction: row;
    align-items: start;
    justify-content: flex-start;
    gap: 10px;

    @media (max-width:600px) {
      
      width: 100%;
      display:flex;
      gap: 10px;
      justify-content: center;
      alining-items: center;
      
     
`;

export const Dias = styled.div`
       
        width: 80%;
        height: 110px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        @media (max-width:600px) {
            display: grid;
            
            width: 100%;
           
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
            grid-template-rows: repeat(2, 1fr);
            height: auto;
            gap:10px;
        }
`;

export const Clases = styled.div`
   
    width: 150px;
    height: 100%;
`;