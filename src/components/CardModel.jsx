import styled from "styled-components";
import { MdLayers } from "react-icons/md";
import { PiVideoLight } from "react-icons/pi";
import ButtonComun from "./ButtonComun";
export default function CardModel({
    bgFondo,
    bgColorFondo,
    academia,
    iconColor
}) 
{
    return (
        <Container
            bgColorFondo={bgColorFondo}
            bgFondo={bgFondo}
        >
            <div className="img" >
                <div>
                    <img src={require(`../asset/${academia}/linterna.png`) } alt="" />
                </div>
                <h2>
                    1. Smart Money
                </h2>
                <div className="descripcion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident voluptatibus maiores nihil, eveniet qui earum, nesciunt error suscipit cum deserunt at doloribus quae. Aperiam laborum obcaecati aspernatur eaque sapiente.
                </div>
                <div className="info">
                    <div className="level">
                       <span> <MdLayers color={iconColor} /> </span>  <p>Level</p> <span>Junior</span>
                       <span> <PiVideoLight  color={iconColor} /> </span>  <p>Classes</p> <span>5</span>
                    </div>
                </div>
                <div className="btn_">
                    <ButtonComun    text="START" />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    border:solid 2px ${ (props) => props.bgColorFondo  };
    width:400px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
    border-radius:10px;
    height:400px;
    background-image: url(${(props) => props.bgFondo   });
    background-size: cover;
    padding:10px;
    background-position: center;
   
    .btn_{
        margin-top:20px;
}
    .img{
       
        height:100px;
        width:100%;
    }
    .descripcion{
        color:white;
        font-size:14px;
        font-family:Montserrat ;
        font-weight:100;
        margin-top:20px;
    }
    h2{
        font-size:30px;
        color:white;
        margin-top:20px;
    }
    .info{
       
        width:100%;
        height:auto;
        margin-top:20px;

        .level{
            display:flex;
            gap:10px;
            align-items:center;
            p{
                font-size:20px;
                color:white;
                fonw-weight:bold;
            }

            span{
                font-family:Arial;
                font-size:20px;
                color:white;
                fonw-weight:100px;
            }
    }  
            
    
`

