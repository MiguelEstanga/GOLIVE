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
  
`;

export const ContainerInfo = styled.div`
   
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;
`;

export const ContainerAvatar = styled.div`
    width: 20%;
    height: 100%;
   
    display: flex;
    
    flex-direction: row;
    align-items: start;
    justify-content: flex-start;
    gap: 10px;
`;

export const Dias = styled.div`
       
        width: 80%;
        height: 110px;
        display: flex;
        flex-direction: row;
        gap: 10px;
`;

export const Clases = styled.div`
  
    width: 150px;
    height: 100%;
`;