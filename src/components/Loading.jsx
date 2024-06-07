import styled from "styled-components";
export default function Loading() {
    return (
        
        <ContainerLoading>
            <img src={require('../asset/loading.gif')} alt="loading" />
        </ContainerLoading>
    )
}

const ContainerLoading = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 100;
`