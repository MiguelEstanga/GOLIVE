import styled from "styled-components";

export default function Alerta(props) {
  return (
    <Container>
        <div className="alerta">
            <div className="titulo">
                    <h2>
                        WELCOME
                    </h2>
            </div>
        </div>
    </Container>
  );
}


const Container = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,0.5);
    display: grid;
    justify-content: center;
    align-items: center;

    .alerta{
        width: 50vw;
        height: 600px;
        border:solid 2px red;
        border-radius: 10px;

        .titulo{
            border: solid 2px #fff;
            width: 70%;
            height: 300px;
            margin:auto;   
            
           
        }

         
    }
`