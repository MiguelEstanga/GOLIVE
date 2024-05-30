import styled from "styled-components";

export const StyledOnlivePage = styled.div`
    background-image: url( ${ (props) => props.imagenDeFondo || '' } );
    background-size: cover;
    background-position: center;
    
    width: 100vw;
    margin: 0 ;
    .data_teacher{
        border: solid 1px rgba( 244, 246, 247 , .7);
        width: 67%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        margin-top: 10px;
        position: relative;
        top: -1%;
        left: 5%;
       
        
    }
    .container{
       
        width:90%;
        margin: 0 auto;
        display: grid;
        margin-top: 5px;
        gap: 10px;
        display: flex;
        pleace-content: center;
        pleace-items: center;
       
        .video{
            position: relative;
            width: 75%;
            height: 720px;
            border: solid 2px  #34975d ;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .inlive{
                position: absolute;
                top: 10px;
                left: 10px;
                font-size: 16px;
                color: white;
                background-color: red;
                padding: 5px;
                border-radius: 5px;
            }

            
        }
        
        .cartComentario{
            width: 25%;
            height: 100px;
          
            display: flex;
            alinig-items: center;
            justify-content: center;
            .chat{
                border: solid 1px   #34975d  ;
                width: 400px;
                height: 700px;
                border-radius: 10px;
                background-image: url( ${ (props) => props.imagenChat || '' } );
                background-size: cover;
                background-position: center;
            }
        }
    }
`;

export const Masvisto = styled.div`
   
    height: 250px;
    margin-bottom: 20px;
    width: 90%;
    margin: 120px auto;
   
    background-image: url( ${ (props) => props.imgMasvistos } );
    background-size: cover;
    background-position: center;
    h2{
        margin:20px;
        font-size: 30px;
        font-weight: 900;
        color: white;
        font-family: Montserrat;
    }
`

export const VIDEOS = styled.div`
    background-image: url( ${ (props) => props.imagenenContainerVideo || '' } );
    background-size: cover;
    background-position: center;
    width: 500px;
    height: 100%;
    background-color: #34975d;
    border-radius: 20px;
    border: solid 1px #34975d;
`