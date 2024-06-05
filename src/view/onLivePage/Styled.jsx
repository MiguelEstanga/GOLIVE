import styled from "styled-components";

export const StyledOnlivePage = styled.div`
    background-image: url( ${ (props) =>  require(`../../${ props.imagenDeFondo }`)  } );
    background-size: cover;
    background-position: center;
    
    width: 100vw;
    margin: 0 ;
    .data_teacher{
        
       
        width: 67%;
        display: flex;
        justify-content: space-between;
        align-items: end;
        height: 100px;
        margin-top: 10px;
        position: relative;
        top: -1%;
        left: 5%;
       
        
    }

    .teacher_compartir{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        gap: 10px;
        color: white;
       
        padding: 5px;
       margin-bottom: 10px;
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
            border-radius: 10px;
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
   
    height: auto;
    margin-bottom: 20px;
    width: 90%;
    margin: 120px auto;
    padding: 5px;
    background-image: url( ${ (props) => props.imgMasvistos } );
    background-size: cover;
    background-position: center;
    h2{
        margin:20px;
        font-size: 30px;
        font-weight: 900;
        color: white;
        text-align: center;
    }

    .ver_todos{
        padding: 10px;
        color: white;
        text-align: end;
        cursor: pointer;
    }

    .favorito_seccion{
      
        display: grid;
        width: 100%;
        max-height: ${props => props.show ? 'auto' : '190px'};
   
        overflow:hidden;
        gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
`

export const VIDEOS = styled.div`
  border:solid 1px #34975d;
  height: 180px;
  border-radius: 10px;
`

export const Upload = styled.div`
    max-width:105rem;
    
    height: 10px;
    padding: 20px;
    margin: 20px auto;

    .form_container{
        display: flex;
        flex-direction: row;
        align-items: space-between;
        justify-content: space-between;
    }

`

export const LiveEducator = styled.div`
    width:1400px;
  
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 20px auto;

    h2{
        margin:20px;
        font-size: 20px;
        font-weight: 900;
        color: white;
        text-align: center;
    }

    div{
       
        display: flex;
        height: 100px;
        margin-top: 50px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`