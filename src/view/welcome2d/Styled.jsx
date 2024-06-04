import styled from "styled-components";

export const DivContainer = styled.div`
    
     
    display: flex;
    position: relative;
    flex-direction: column;
    background-image:url('https://golive.softus.de/assets/assets/images/bg-welcome.png') ;
    background:  black;
    background-size:  cover;
    height:100vh;
    width: 100%;

    color: white;

    @media (max-width: 1600px) {
       height: auto;
    }
`;

export const Welcome = styled.h1`
width: 300px;
height: 150px;
text-align: left;
font-size: 140px;
font-weight: bold;

`;

export const Subtitle = styled.h2`
    width: 900px;
    color: #c1900d ;
    margin-top: 30px;
    fonst-size: 60px;
    font-weight: 100;
   
   
    text-align: left;
`

export const ContainerScool = styled.div`
  
    width: 100%;
    margin-top:80px;
    display:grid;
    gap:9px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    please-content: center;
 `