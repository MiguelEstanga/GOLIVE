import styled from "styled-components";
export default function AvatarGeneric({ name, avatar, width ,height }) 
{
  return (
        <Container width={width} height={height} color={avatar}  >
            <img   src={avatar ?? require("../user/loading.jpeg")}  />
        </Container>    
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50%;
  background-color: ${props => props.color ?? ''};    
  border: 1px solid #fff;

  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  `