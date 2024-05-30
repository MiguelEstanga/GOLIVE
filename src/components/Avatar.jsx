import styled from "styled-components";

export default function AvatarGlobal({ img, colorBorder  , data }) {
  const Style ={
    container:{
        display:'flex',
        gap:'10px',
    },
    nombre:{
        fontSize:'20px',    
        color:'white',
        fontFamily:'Montserrat',
        fontWeight:'bold',
       
    },
    h2:{
        fontSize:'20px',
        color:"#34975d",
        fontFamily:'Montserrat',
        fontWeight:'bold',
        margin:'2px'
    },
    academia:{
        fontSize:'14px',
        color:"#34975d",
        fontFamily:'Montserrat',
        fontWeight:'bold',
    }
  }
  return (
     <div style={Style.container}>
         <Avatar
            colorBorder={colorBorder}
         >
            <img width={'100%'} src={img} alt="" />  
        </Avatar>   
        <Data>
            <p style={Style.nombre} > {data?.nombre ?? 'nombre'}  </p>
            <h2 style={Style.h2} >{data?.profesion ?? 'profesion'}</h2>
            <p style={Style?.academia ?? 'academia'} >
                {data.academia}
            </p>
        </Data>

     </div>
       
  );
}

const Data = styled.div`

`
const Avatar = styled.div`
    border:solid 1px white;
    width:60px;
    height:60px;
    border-radius:50%;
    border:solid 5px ${ (props) => props.colorBorder || '#34975d' };
    background-color:white;
`