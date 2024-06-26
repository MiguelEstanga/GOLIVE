import styled from "styled-components";

export const MenuContainer = styled.div`
    
    display: flex;

    height: 150px;
    width: 100vw;
    color: white;
    
    @media (max-width: 700px) {
        width: 100%;
        
        height: auto;
        align-items: end;
        padding: 0;
    }
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
    
    @media (max-width:800px) {
        width: 100px;
        height: 120px;
    }
    
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
    cursor: pointer;

    @media (max-width:800px) {
        width: 100px;
        height: 100px;
    }

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

    @media (max-width:600px) {
        width: 60px;
        height: 60px;
        top: 0;
       
        position: none;

        &:before {
        content: "";
        position: absolute;
        bottom: 5px;
        right: 0;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background-color: red ;
    }
    }

`
//container proximas clases y c
export const ContainerComunidad = styled.div`
    width: 100%;
    height: ${  (props) => props.height ?? '250px'};
    border:solid 1px ${ (props) => props.borderColor ?? 'transparent'} ;
    background-image: url(${(props) => props.imagenCart});
    background-size: cover;
    background-position: center;
    border-radius:  ${ (props) => props.borderRadius ?? '10px'};
    display: flex;
    aling-items: center;
    justify-content: center;
    flex-direction: column;
    height: auto;
    background-color: ${ (props) => props.bgColorFondo ?? 'rgba( 23, 32, 42 , 0.5)'};
    @media (max-width:600px) {
        height: auto;
        gap:20px;
        width: ${ (props) => props.width ?? '100%'};
        margin:${ (props) => props.margin ?? 'center'};
        margin-top:center;
    }
`

export const Leyenda = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 90%;
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
    border-radius: 50px;
    gap:'10px';
    background-image: url(${(props) => props.imagenCart});
    background-size: cover;
    background-position: center;
    
    .text{
        color: #fff;
        font-size: 20px;
        @media (max-width:600px) {
            font-size: 12px;
           
            margin:33px;
            text-align: center;
            
        }
    }
    @media (max-width:600px) {
       
        width: 100%;
        margin-top:30px;
        height: auto;
    }

    .option{
       
    }

    
`

export const ContainerEvento = styled.div`
    border:'solid 1px '
    width: '100%';
    height: '40px';
`

export const Schedule = styled.div`
    border:solid 1px #fff};
    width: 100%;
    height: 50px;
`

export const BarraAcademyProfesional = styled.div`
   
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:20px;
    .propfesional{
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
        color: #fff;
        .color_profesional{
            background-color: ${ prop => prop.colorProfesional};
            width: 20px;
            height: 20px;
            border-radius: 50%;
          
        }
    }
    .academy{
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 10px;
        color: #fff;
        .color_academy{
            background-color: ${ prop => prop.colorAcademy};
            width: 20px;
            height: 20px;
            border-radius: 50%;
          
        }
    }
    div{
      
        height: 50px;
        width: 300px;
    }

    @media (max-width:800px) {
       
    }
        
`