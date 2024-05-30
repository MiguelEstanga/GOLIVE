import styled from "styled-components";

// ---- aqui eran los styled de todos los componentes de la carpera components

// container  de ScoolCart
export const CartContainer = styled.div`
    background-image: ${ props => props.image || 'url("https://d22yb2tbj8zopv.cloudfront.net/src/school/bg-card-foreing.jpg")'};
    background-size: cover;
    border-color: ${props => props.color || '#007bff'} ;
    border-style: solid;
    background-color: white;
    border-radius: 50px;
    height: 400px;
    width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    
`

export const LogoContainer = styled.div`
 
    margin-bottom: 50px;
    width: 60%;
    display: flex;
    height: 100px;
    padding: 10px;
    word-wrap: break-word;
`

export const LogoScool = styled.img`
    width: ${props => props.width || '80px'};
    height: ${props => props.height || '80px'};
    border-radius: ${props => props.borderRadius || '20px'};
    z-index: '50000000';
   
`

export const Comenzar = styled.button`
  
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    width:140px;
    height: 40px;
    font-family: 'Montserrat';
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    background-image : linear-gradient(to left,  #fdfefe ,   #7b7d7d  );
    cursor: pointer;
    fonsize: 16px;
    position: relative;
    top: -40px;
`

// estilos del footer
export const FoooterContainer = styled.div`
    position: ${ (props) => props.position || 'absolute'};
    margin-top: ${(  props => props.marginTop || 'auto')};
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
    
`

// estilos Menu

export const MenuContainer = styled.div`
    background-color: transparent;
    height: 30px;
    width: 100%;
    display: flex;
  
    height: 145px;
    justify-content: space-between;
    align-items: center;
    
`

export const Containerflex = styled.div`
 
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: ${ props => props.justifyContent || 'start'};
    aling-items: center;
    padding-right: 60px;
    padding-left: 60px;

    gap: 20px;
 `
export const ItemMenuCircular = styled.div`
    display : grid;
    pleace-content: center;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    border:solid 1px white;
    margin: auto 0;
    cursor: pointer;
    background-image: ${ props => props.color || ''};
`



