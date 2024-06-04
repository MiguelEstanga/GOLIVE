import styled from "styled-components";

export const MenuContainer = styled.div`
    
    display: flex;
     border:solid 1px black;
     height: 150px;
     width: 100vw;
    color: white;
`;

// CartProfesoresTop

export const CartProfesoresTopContainer = styled.div`
    position: relative;
    border:solid 1px  ${ (props) => props.colorBorder } ;
    border-radius: 30px;
    background-color: ${ (props) => props.colorFondo};
    width: 160px;
    display: flex;
    align-items: end;
    justify-content: center;
    padding: 20px;
    height: 160px;
    background-image: url(${(props) => props.imagenCart});
    background-size: cover;
    background-position: center;
    opacity: 0.8;
`;

export const TextData = styled.p`
    color: ${ (props) => props.colorTexto ?? '#fff'} ;
    margin: 5px 0;
    
    font-weight: bold;
    font-size: 15px;
`

export const Avatar = styled.div`
    border:solid 1px ${ (props) => props.colorborder } ;
    border-radius: 50%;
    width:  ${ (props) => props.width ?? '130px'};
    height:  ${ (props) => props.height ?? '130px'};
    position: absolute;
    top: -66px;

`
export const AvatarInlive = styled.div`
    border:solid 5px ${ (props) => props.colorborder ?? '#fff'} ;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position:relative;
    top: -60px;     

    &:before {
        content: "";
        position: absolute;
        bottom: 5px;
        right: 0;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        background-color: red ;
    }
`

export const ContainerComunidad = styled.div`
    width: 100%;
    height: ${  (props) => props.height ?? '250px'};
    border:solid 1px ${ (props) => props.borderColor ?? 'transparent'} ;
    background-image: url(${(props) => props.imagenCart});
    background-size: cover;
    background-position: center;
    border-radius:  ${ (props) => props.borderRadius ?? '30px'};
    display: flex;
    aling-items: center;
    justify-content: center;
`

export const Leyenda = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    text-align: start;
    color: #fff;
    font-size: 12px;
    margin-top: 15px;
    
    a{
        font-size: 20px;
        color: #000;
        text-decoration: none;
        padding: 10px 40px;
        margin-top: 10px;
        
        background: ${ (props) => props.color ??  '#27ae60'};
        border-radius: 40px;
    }
`
export const H2 = styled.h2`
    color: ${ (props) => props.color ??  '#fff'};
    font-size: 20px;
    font-weight: bold;
    
`

export const ContainerComunidadEvento = styled.div`
    width: '100%';
    height: '100%';
    display: 'flex';
    flexDirection: 'column';
    border-radius: 30px;
    gap:'10px';
    background-image: url(${(props) => props.imagenCart});
    background-size: cover;
    background-position: center;


`

export const ContainerEvento = styled.div`
    border:'solid 1px '
    width: '100%';
    height: '40px';
`