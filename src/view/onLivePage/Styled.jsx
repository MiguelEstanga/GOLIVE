import styled from "styled-components";

export const StyledOnlivePage = styled.div`
    background-image: url( ${ (props) =>  require(`../../${ props.imagenDeFondo }`)  } );
    background-size: cover;
    background-position: center;
    @media(max-width:600px){
       height: auto;
    }
    width: 100vw;
    margin: 0 ;
    .data_teacher{
        width: 95%;
         padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        height: 100px;
        border-bottom:solid 1px rgba(255 ,255 ,255 , 0.1);
        border-left:solid 1px rgba(255 ,255 ,255 , 0.1);
        border-right:solid 1px rgba(255 ,255 ,255 , 0.1);
       
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
        gap: 40px;
        display: flex;
        pleace-content: center;
        pleace-items: center;
        

       
        .video_container{
            width: 100%;
            height: 100%;
           
        }
        .video{
           
            position: relative;
            width: 100%;
            padding: 5px;
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
        
        @media(max-width:1400px){

           
        }
        @media(max-width:1200px){
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(1, 1fr);
            gap: 10px;
           
            .video{
                height: 300px;
                border-radius: 20px;
            }

             .data_teacher{
                width: 95%;
                padding: 5px;
                display: flex;
                justify-content: space-between;
                align-items: end;
                height: 100px;
                border:none;
       
            }
        }
     
    }
`;

export const CardChat  = styled.div`
   
    width: 25%;
    height: 700px;
    .body{
        background-image: url( ${ (props) => props.imgChat } );
        background-size: cover;
        background-position: center;
        width: 100%;
        height:720px;
        border-radius: 20px;
    }
    @media(max-width:1400px){
        width: 40%;
        height: auto;
    }
    @media(max-width:1200px){
        width: 100%;
        height: auto;
    }
    @media(max-width:600px){
        width: 100%;
        height: auto;
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

   @media(max-width:600px){
      position: relative;
      top: 5px;
      justify-content: center;
      align-items: center;
      margin: 10px auto;
      .option{
        fonst-size: 10px!important;
         
       
      }
   }
`
export const Masvisto = styled.div`
    border:solid 1px ${ (props) => props.borderColor };
    height: auto;
    margin-bottom: 20px;
    width: 90%;
    margin: 120px auto;
    padding: 10px;
    border-radius: 10px;
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

        @media(max-width:800px){
            
            overflow:scroll;
           display: flex;
           flex-wrap: wrap;
           flex-direction: column;
          
           justify-content: center;
           align-items: center;
        }
    }

     @media(max-width:800px){
        height: auto;
        width: 100%;
        display: grid;

        margin: 0 auto;
        padding: 10px;
        width: 90vw;

        h2{
            text-align: center;
        }
            
    }
`

export const VIDEOS = styled.div`
  border:solid 1px #34975d;
  height: 180px;
  zindex: 100;
  border-radius: 10px;
  @media(max-width:800px){
     display: flex;
     justify-content: center;
     align-items: center;
     width:200px;
  }
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

   @media(max-width:600px){
      display: none;
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
       
        margin-top: 50px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    @media(max-width:1000px){
        width: 90vw;
        
        .recomendados{
            
            height: 100px;
        }
        .avatar{  
            border:solid 1px ${ (props) => props.avatarBorder };
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
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
    
    height: 460px;
    width: 80%;
    margin: 0 auto;
    border-top : solid 1px #34975d;
    border-bottom : solid 1px #34975d;
    overflow-y: hidden;
   
    
    .chat-comentarios{
        height: auto;
        width: 90%;
        display: grid;
        grid-template-columns: 10% 90%;
        padding: 10px;
        gap: 20px;
        
        border-radius: 10px;

        .comentarios{
            height: auto;
            border-radius: 10px;
            padding: 10px;
            margin-right: 10px;
            width: 94%;
            font-size: 12px;
            background-image: url(${ props => props.bgChatUser ?? ''}) ;
            background-size: cover;
            background-position: center;
            overflow-wrap: word-break;
            color: ${ props => props.text ?? '#fff'};
            display: flex;
            alinig-items: center;
           

           
        }
       
    }   
   

`

export const ContainerLike = styled.div`
        
        width: 90%;
        margin: 5px auto;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .leyenda{
            p{
                font-size: 16px;
                color: white;
            }
        }
       
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
        border-radius: 20px;
        bockground: black;
        border:none;
        background: ${  props => props.bg ?? ''};
        color: white;
        padding: 10px;
        border:solid 1px #fff;
    }
    .btn-chat{
        bottom: -10px;
        border:none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 10px;
        width:150px;
        height:30px;
        position: absolute;
        background-image: url( ${ (props) => props.btnImg  } );
        background-size: cover;
        background-position: center;
    }
`

export const ModulesLeyenda = styled.div`
   
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    

    @media(max-width:600px){
       width: 90%;
       height: auto;
       
    }
    div{
        display: flex;
        
        align-items: center;
        color: white;
        font-size: 12px;
        gap: 10px;
       
        width: 200px;
        height: 50px;
    }
`