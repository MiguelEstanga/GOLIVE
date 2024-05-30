import Menu from "../educatorsAndSchedules/components/Menu";
import { Masvisto, StyledOnlivePage } from "./Styled";
import ReactPlayer from 'react-player'
import {imagenes , foring_exchange} from "../../helper/test";
import Swiper from "swiper/react";
import SwiperCustom from "../../components/SwiperCustom";
import Videos from "./Videos";
import Footer2d from '../../components/Footer2d'
import AvatarGlobal  from "../../components/Avatar";
import Seguir from "../../components/Seguir";
export default function OnlivePage() {
    return (
        <StyledOnlivePage
            imagenDeFondo={imagenes.imagen_academia1}
            imagenChat  ={foring_exchange.imagen_fonde}
        >
            <Menu />
            <div  className="container">
                <div className="video" >
                    <div className="inlive">En linea</div>
                    <ReactPlayer
                        url="https://lifeontop.s3.amazonaws.com/binary+edge_spanish.mp4"
                        controls
                        width="95%"
                        height="95%"
                    />
                   
                </div>
                <div className="cartComentario">
                    <div className="chat">

                    </div>
                </div>
            </div>
            <div className="data_teacher">
                <div>
                   <AvatarGlobal
                    data={{
                        nombre:'Juan',
                        profesion:'profesor',
                        academia:'Ingeniería de Software',
                    }}
                   />

                </div>
                <div>
                    <Seguir />
                </div>
             </div>
            <Masvisto
                imgMasvistos={foring_exchange.imagen_fonde}
            >
                <h2>
                    Vídeos favoritos
                </h2>
                
                <SwiperCustom>
                    <Videos />
                    <Videos />
                    <Videos />
                    <Videos />
                </SwiperCustom>
            </Masvisto>
            <Footer2d 
                position="relative"
            />
        </StyledOnlivePage>
    );
}