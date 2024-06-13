import styled from "styled-components";
import CardModel from "./CardModel";
export default function ModelSmartMoney({
    bgFondo,
    bgColorFondo,
    academia,
    iconColor
}) {
    return (
        <Container>
           <CardModel 
            bgFondo={bgFondo}
            bgColorFondo={bgColorFondo}
            academia={academia}
            iconColor={iconColor}
         />
        </Container>
    )
}

const Container = styled.div`
    padding:10px;
    width: 1600px;
    height:500px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(400px, 1fr) );
    justify-content: center;
    align-items: center;
    
    @media (max-width:600px) {
       width:90vw;
        justify-content: center;
    }
`