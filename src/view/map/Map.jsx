import styled from "styled-components"
import { GetStorageObjet, SetStorageObjet } from "../../helper/LocalStorage"
import { useEffect , useState } from "react"
import { escuelas } from "../../metadata/escuelas"
import { useNavigate } from "react-router-dom"
export default function Mapa()
{
    const [escuela , setEscuelas ] = useState(escuelas)
    const navegacion = useNavigate()
    return (
        <Container>
          <iframe
            width="100%"
            height="100%"
            src="http://62.171.167.21:8080">
            </iframe>
            <div className="foreing"
                onClick={()=>{
                   let data = escuela.filter( escula => escula.id === '95025c1b-e976-4bb6-96ca-d6e8f770afcb')
                   console.log(data[0])
                   SetStorageObjet('school', data[0])
                   navegacion("/educators-and-schedules")
                }}
            ></div>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    .foreing{
        curso:pointer;
        border:solid 1px red;
        position:absolute;
        top: 97px;
        left: 443px;
        width: 100px;
        height: 100px;
        z-index: 100;
    }
    width:100%;
    height:1000px;
    margin:auto;
`