import styled from "styled-components";

export const SmartMoneyContainer = styled.div`
   
    background-image: url(${ props => props.bgimg });
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `   

export const SmartMoneyTitle = styled.div`
padding: 50px;
color: white;
    @media (max-width:600px) {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const SmartMoneySection = styled.div`
        display: flex;
        align-items: start;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
       .videos-section{
        padding: 10px;
       }
`;

export const SmartMoneyComentarios = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-bottom: 30px;
   
   
`

export const ProgressBarContainer = styled.div`
background-image: url(${ props => props.bgimg });
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    width: 400px;
    height: 700px;
    border-radius: 10px;
    border: 1px solid ${ props => props.borderColor };
    @media (max-width:600px) {
        width: 350px;
        padding: 20px;
        height: 400px;
    }
    margin-bottom: 40px;
    color: white;
    padding: 20px;
    position: relative;
     .buttons-progress{
       
        padding: 10px;
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      
        position: absolute;
        bottom: 0;
        width: 95%;
        left: 0;
        gap: 10px;
        cursor: pointer;
    }

    .buttons-progress button{
        background-image: linear-gradient(to right,   #fbfcfc  ,   #b3b6b7 );
        width: 120px;
        height: 40px;
        border: none;
        border-radius: 50px;
       
        color: #000;
        font-weight: 100;
    }

    .like-dislike{
        position: relative;
        top: -15px;
        width: 120px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        alining-items: center;
        .texto{
            font-weight:100;
            display: flex;
            justify-content: center;    
            align-items: center;
        }
        .buttons{
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;    
        }
        .like , .dislike{
            background-image:  linear-gradient(to right,   #fbfcfc  ,   #b3b6b7 );
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            
        }
    }
`

export const ContainerProgresoBar = styled.div`
    margin-top: 50px;
  margin: 0 auto;
  background-color: ${ props => props.colorContainer }  ;
  width: 400px;
  height: 20px;
  border-radius: 50px;
     @media (max-width:600px) {
        width:350px;
        padding: 2px;
        height: auto;
    }
  

`

export const Progreso = styled.div`
    background-color: ${ props => props.colorProgreso };
    width: ${ props => props.progreso ?? 1 }%;
    height: 20px;
    border-radius: 50px;
`

export const IndividualComentario = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    width: 1200px;
    height:auto;
    @media (max-width:600px) {
        width: 65%;
        
    }
   
`
export const IndividualComentarioText = styled.div`
    width: 100%;
    height: 50px;
    padding: 20px;
    background-image: url(${ props => props.bgimg });
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
     border: solid 2px ${ props => props.colorBorder };
    border-radius: 10px;

    button{
        height: 140px!important;
    }
`

export const ContainerComentarios = styled.div`
     display: flex;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
    margin-bottom: 0px;
  align-items: center;
  justify-content: center;
  height: 40px;
  flex-direction: row;
  position: relative;
  margin-bottom: 30px;
  height: 71px;
`

export const BTN = styled.button`
    background-color: black;
    width: 200px;
    position: absolute;
   
    top: 0;
    right: 0;
    border:none;
    color: white;
    height: 100%;
    padding: 8px;
    color: white;
    cursor: pointer;
    border-radius: 50px;  
    background-image: url(${ props => props.bgimg });
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`



export const CustomInput = styled.input`
    border-radius: 40px;
    width: 100%;
    border: silver 1px solid;
    position: relative;
    height: 100%;
    padding: 0 0 0 30px;

    background:${ props => props.colorInput };
    color: white;
    &:focus{
        outline: none;
        border: solid 1px white;
        
        color: white;
    }
`

// old comentarios
export const OldComentarios = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const VideosSection = styled.div`
    width: 60%;
  height: 700px;
  border-radius: 8px;
  border: 4px solid ${ props => props.colorBorder };
  @media (max-width:600px) {
    width: 90%;
    height: 300px;
  }
`

export const PreguntasYComentarios = styled.div`
    border-bottom: solid 1px ${ props => props.colorBorder ?? "#fff" };
    width: 100%;
    height: 50px;   
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    @media (min-width:600px) {
       width: 70%;
       margin: 40px auto;
    }
    div{
    
         display: flex;
        justify-content: center;
        align-items: end;
        fonsize: 20px;
     
      
    }
    .comments{
        width: 50%;
        height: 100%;
        border-right: solid 1px ${ props => props.colorBorder ?? "#fff" };
       color: ${ props => props.colorSelect  ?? "#fff" };
    }
    .questions{
       color: ${ props => props.colorSelect  ?? "#fff" };
        width: 50%;
        height: 100%;
        border-left: solid 1px ${ props => props.colorBorder ??  "#fff" };
    }
`