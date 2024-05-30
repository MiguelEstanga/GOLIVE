import styled from "styled-components";

export const DivContainer = styled.div`
    
    display: flex;
    position: relative;
    flex-direction: column;
    background-image:url('https://golive.softus.de/assets/assets/images/bg-welcome.png');
    background-size: cover;
    height: 100vh;
    width: 100%;
   
    color: white;
`;

export const Welcome = styled.h1`
width: 300px;
   height: 150px;
   text-align: left;
  font-size: 140px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
`;

export const Subtitle = styled.h2`
    width: 900px;
    color: #c1900d ;
    margin-top: 30px;
    fonst-size: 60px;
    font-weight: 100;
    font-family: 'Montserrat', sans-serif;
   
    text-align: left;
`

export const ContainerScool = styled.div`

    width: 90%;
    margin-top:80px;
    display:grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    please-content: center;
 `