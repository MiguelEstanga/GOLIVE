import styled from "styled-components";

export const DivContainer = styled.div`
    
     
    display: flex;
    position: relative;
    flex-direction: column;
    background-image: url(${require('../../asset/main-portada.png')});
    
    background-size:  cover;
    height:100vh;
    max-width: 100%;

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
@media (max-width: 700px) {
   
    width: 100vw;
    height: auto;
    text-align: center;
    font-size: 60px;
`;

export const Subtitle = styled.h2`
    width: 900px;
    color: #c1900d ;
    margin-top: 30px;
    fonst-size: 60px;
    font-weight: 100;
   
   
    text-align: left;

    @media (max-width: 700px) {
      
        width: 100vw;
        margin:auto;
        font-size: 20px;
        font-weight: 100;
        text-align: center;
    }

`

export const ContainerScool = styled.div`
    
    max-width: 1600px;
   
    margin-top:80px;
    display:grid;
    gap:9px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    please-content: center;
  
    @media (max-width: 600px) {
       width: 100%;
       margin-left: 20px;
       display: flex;
       flex-direction: column;
       gap: 20px;
       justify-content: center;
       align-items: center;
    }
    
 `