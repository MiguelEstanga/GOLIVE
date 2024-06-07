import { useEffect } from "react";
import styled from "styled-components";

function ProgressBar({ data , level }) {
    useEffect   (() => {
        console.log(level)
    }, [level])
    return (
        <div>
            {data.map((data, index) => (
                <ProgressBarList key={index}  >
                    <span   className={  index === 0 ? "" :"list"}  
                        style={{ backgroundColor: (index + 1) === level ? "#fff" : "" }}
                    ></span>
                    <p>{`${index + 1}. ${data.name}`}</p>
                
                </ProgressBarList>
            ))}
        </div>
    );
}


const ProgressBarList = styled.div`
  position: relative;
    display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  
  
 span{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    border: solid 1px #fff;
    margin-right: 10px;
    position: relative;

    span:not(:first-child) {
        position: relative; /* Reset position for proper before pseudo-element behavior */
     }
    &::before{
       
    }
 }

 .list::before{
     content: "";
        position: absolute;
        bottom: 0;
        width: 1px;
        left: 50%;
        right: 50%;
        bottom: 10px;
        height: 40px;
        background-color: #fff;
 }
`
export { ProgressBar };