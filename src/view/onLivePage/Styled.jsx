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
        
     
    }
`;

export const CardChat  = styled.div`
   
    width: 25%;
    height: 100%;
    .body{
        background-image: url( ${ (props) => props.imgChat } );
        background-size: cover;
        background-position: center;
        width: 100%;
        height:720px;
        border-radius: 20px;
    }
`
export const OptionVideos = styled.div`
    h2{
        cursor: pointer;
    }
    height: auto;
    margin-bottom: 20px;
    width: 90%;
    margin: 120px auto;
   display: flex;
   flex-direction: row;
   tex-decoration:underline;
   position: relative;
   top: 100px;
   color: white;
   gap: 20px;
`
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
        text-align: start;
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
    border-radius: 10px;
    height: 30px;
    padding: 30px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat( 3, 1fr );
  
    background: ${ (props) => props.divColor ??"" };
   
    gap:10px;
    .uploadBtn{
        border:none;
        padding: 10px 20px;
        border-radius: 10px;
        margin-left: 20px;
        cursor: pointer;
        background-color:   #f1c40f  ;
    }
    .file{
        font-size: 20px;
        color: #fff;
       
        gap: 10px;
    }
    .form_container{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;

        input{
            border:none;
            width: 100%;
            background-color: transparent;
            border-bottom: solid 2px #fff;
            padding: 10px;
            font-size: 20px;
            color: #fff;
            outline: none;
            cursor: pointer;
        }  
    }

    .select_day{
        display: flex;
        
        justify-content: start;
        color: #fff;
        gap: 10px;
        padding-left: 30px;
        label{
            text-align: center;
            display:flex;
            align-items: center;
            
        }
        input{
            width: 30px;
            height: 30px;
            cursor: pointer;
        }
            
    }

    .borrar{
        
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #fff;
       
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

// titulo del chat
export const Title = styled.h2`
   color: white;
   text-align: center;
   font-size: 25px;
   font-weight: 900;
    padding: 10px;
`

// contenido del chat
export const ContainerChat = styled.div`
   
    height: 550px;
    width: 80%;
    margin: 0 auto;
    border-top : solid 1px #34975d;
    border-bottom : solid 1px #34975d;
    overflow-y: hidden;
`
export const ContainerForm = styled.div`
    
    width:100%;
    margin-top: 10px;
    height:90px;
  
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    align-items: center;
    input{
        width: 80%;
        height: 70px;
        border-radius: 10px;
        bockground: black;
        border:none;
        background: ${  props => props.bg ?? ''};
    }
    button{
        bottom: -20px;
        border:none;
        border-radius: 10px;
        width:100px;
        height:50px;
        position: absolute;
    }
`

