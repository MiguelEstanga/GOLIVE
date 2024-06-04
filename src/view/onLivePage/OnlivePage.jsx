import Menu from "../educatorsAndSchedules/components/Menu";
import { Masvisto, StyledOnlivePage, Upload } from "./Styled";
import ReactPlayer from 'react-player'
import {imagenes , foring_exchange} from "../../helper/test";
import Swiper from "swiper/react";
import SwiperCustom from "../../components/SwiperCustom";
import Videos from "./Videos";
import Footer2d from '../../components/Footer2d'
import AvatarGlobal  from "../../components/Avatar";
import Seguir from "../../components/Seguir";
import { MdFileUpload } from "react-icons/md";
import Streming from "./Streming";
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
                    <Streming/>
                   {// <ReactPlayer
                   //     url="https://lifeontop.s3.amazonaws.com/binary+edge_spanish.mp4"
                     //   controls
                       // width="95%"
                        //height="95%"
                    ///>
                }
                   
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
             <Upload >
                <form action="">
                    <div className="form_container">
                        <div>
                            <span>
                                 <MdFileUpload
                                     size={'40px'}
                                 />
                            </span>
                            <input type="file" name="file" id="file" />
                        </div>
                        <div>
                        <button type="submit">Subir</button>
                        </div>
                    </div>
                </form>
             </Upload>
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