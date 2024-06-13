import styled from "styled-components";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
export default function LikeDislike({top,right}) {
     return (
        <Container
            top={top}
            right={right}
        >
            <div className="like">
                <AiOutlineLike 
                 color={" #797d7f "}                    
            />
        </div>
         <div className="dislike">
             <AiOutlineDislike 
                color={"#797d7f"}
            />
         </div>
        </Container>
     )
}

const Container = styled.div`
        position: relative;
        top: -15px;
        width: 120px;
        gap: 10px;
        display: flex;
        flex-direction: row;
       
        position:relative;
        top: ${props => props.top ?? 0};
        right: ${props => props.right ?? 0};
        
        right:0;
        justify-content: center;
        alining-items: center;
        .texto{
            font-weight:100;
            display: flex;
            justify-content: center;    
            align-items: center;
        }
        .buttons{
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;    
        }
        .like , .dislike{
            background-image:  linear-gradient(to right,   #fbfcfc  ,   #b3b6b7 );
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            
        }
   
`