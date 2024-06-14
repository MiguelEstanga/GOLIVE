import styled from "styled-components";

// ---- aqui eran los styled de todos los componentes de la carpera components

// container  de ScoolCart
export const CartContainer = styled.div`
    background-image: url(${props => props.image || 'https://d22yb2tbj8zopv.cloudfront.net/src/school/bg-card-foreing.jpg'});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 1px;
    border-color: ${props => props.color || '#007bff'} ;
    border-style: solid;
    
    border-radius: 50px;
    height: 340px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-estart;
    gap: 10px;
    
`

export const LogoContainer = styled.div`
 
   
    height: 75%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
`

export const LogoScool = styled.div`

    width: ${props => props.width || '30%'};
    height: ${props => props.height || '30%'};
    border-radius: ${props => props.borderRadius || '20px'};
    z-index: '50000000';
   
    @media (max-width: 768px) {
        padding:10px;
        width: 100px;
        height: 50px;
       
    }
`

export const Comenzar = styled.button`
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    width:140px;
    height: 40px;
    
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    background-image : linear-gradient(to left,  #fdfefe ,   #7b7d7d  );
    cursor: pointer;
    fonsize: 16px;
    position: relative;
    top: 15px;
`

// estilos del footer
export const FoooterContainer = styled.div`
    position: ${ (props) => props.position || 'absolute'};
    margin-top: ${(  props => props.mt || 'auto')};
    background-color:transparent;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 200px;
  
    img{
        width: 400px;
        height: 130px;
    }
    @media (max-width: 768px) {
        width: 98vw;
        height: 140px;
    }
`

// estilos Menu

export const MenuContainer = styled.div`
   
    height: 30px;
    width: 100%;
    display: flex;
    background-color: transparent;
    height: 145px;
    justify-content: space-between;
    align-items: center;
    

    @media (max-width: 768px) {
       width: 100vw;
    }    
`

export const Containerflex = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: ${ props => props.direccion || 'start'};
    aling-items: center;
    padding-right: 60px;
    padding-left: 60px;

    gap: 20px;

    @media (max-width: 768px) {
        padding-right: 0;
        padding-left: 0;
        
        alining-items: center;
      }
    & > ul {
        background-color: rgba(0, 0, 0, 0.7); /* Set semi-transparent black background */
        backdrop-filter: blur(10px); /* Apply blur effect */
        border-radius: 10px; /* Add rounded corners for a smooth glass-like look */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 1); 
        position:relative;
        top:50px;
        width: 300px;
        gap: 5px;
        position: relative;
        cursor: pointer;
        z-index: 10;
        padding: 10px;
        display: flex;
        flex-direction: column;
        alining-items: center;
        overflow-y: scroll;
        height: 500px;
        z-index: 10;
       &::-webkit-scrollbar {
        width: 1px;
        }
        &::-webkit-scrollbar-track {
             background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background-color:  #058dd1 ;
            border-radius: 10px;
        }
       li{
        flex-grow: 0;
        box-sizing: border-box;
        padding: 2px;
        list-style: none;
       
        &:hover{
            background-color:  #0ba4f0  ;
            border-radius: 4px;
        }
        a{
            margin-left: 10px;
            color: white;
            font-size: 16px;
            font-weight: bold;
           
            text-decoration: none;
        }
       }
    }
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

    @media (max-width: 768px) {
        display: ${ props => props.displayResponsive || 'none'};
    }
`



