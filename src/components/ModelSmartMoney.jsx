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
    height:auto;
    margin: 20px auto;
`