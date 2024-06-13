import styled from "styled-components";
export const DivContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  background-image: url(${require('../../asset/bg.jpg')});
  background-size: cover;
`;

export const LoginContainer = styled.div`
position: relative;
max-width: 460px;
height: 560px;
border-radius: 40px;
background-color: #fdfefe;
padding: 20px;


`;

export const ContainerForm = styled.div`
  display: flex;
  width: 100%;
  height:auto;
  justify-content: center;
  margin-top: 40px;


   
` 

export const LoginInput = styled.input`
  height: 50px;
  padding:  10px  10px 10px 30px;
  border-radius: 100px;
  width: 350px;
  border:solid 1px black;

  margin:20px 0;
  fonst-size: 50px;
`

export const Radio = styled.input`
  height: 20px;
  width: 20px;
  appearance: none;
  background-color: #fff;
  border: 2px solid #909497;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;

  &:hover {
   
    box-shadow: 0 0 0 10px rgba( 208, 211, 212 , .2);  
  }
 
  &[type='radio']:checked {
   

  
  }



`

export const ButtonCustom = styled.button`
  height: 60px;
  background: linear-gradient(to right,  #FCD535,   rgba( 154, 125, 10 , .7)  );
  border-radius: 100px;
  width: 250px;
  font-size: 14px;
  font-weight: 100;
  border:none;

  margin:20px 0;
  fonst-size: 50px;
  cursor: pointer;
  
  transition: all 0.5ms  lineal;
  &:hover{
    font-weight: bold;
    background: linear-gradient(to left,   #f4d03f ,   rgba( 154, 125, 10 , .7)  );
  }
`
