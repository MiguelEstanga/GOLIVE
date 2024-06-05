import Menu from "../educatorsAndSchedules/components/Menu";
import { LiveEducator, Masvisto, StyledOnlivePage, Upload, VIDEOS } from "./Styled";
import ReactPlayer from 'react-player'
import {imagenes , foring_exchange} from "../../helper/test";

import Videos from "./Videos";
import Footer2d from '../../components/Footer2d'
import AvatarGlobal  from "../../components/Avatar";
import Seguir from "../../components/Seguir";
import { MdFileUpload } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { GetStorageObjet } from "../../helper/LocalStorage";
import { FaUserLarge } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import InLive from "../educatorsAndSchedules/components/inLive";
import { TeacherContext } from "../../context/TeacherContext";

export default function OnlivePage() {
    const [alto , setAlto] = useState(250)
    const [show , setShow] = useState(false)
    const {teacher} = useContext( TeacherContext )


    useEffect(() => {
        console.log(teacher)
    })
    const handleClick = () => {
        setShow(!show)
    }

    return (
        <StyledOnlivePage
            imagenDeFondo={GetStorageObjet('schoolId')?.background_full}
            imagenChat  ={foring_exchange.imagen_fonde}
        >
            <Menu 
                logo={GetStorageObjet('schoolId')?.image}
            />
            <div  className="container">
                <div className="video" >
                    <div className="inlive">En linea</div>
                   {
                    /**
                      <ReactPlayer
                        url="https://lifeontop.s3.amazonaws.com/binary+edge_spanish.mp4"
                       controls
                        width="95%"
                        height="95%"
                    />
                     */
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
                    img={`${teacher?.user?.image}`}
                    data={{
                        nombre:teacher?.user.names + ' ' + teacher?.user.last_names,
                        profesion:teacher.role.role_name,
                        academia:'Ingeniería de Software',
                      
                    }}
                   />

                </div>
                <div>
                    <div className="teacher_compartir">
                            <FaUserLarge
                                color={GetStorageObjet('schoolId')?.color}
                                width={30}
                            />

                            3000
                            <FaShareAlt
                                color={GetStorageObjet('schoolId')?.color}
                                width={30}
                            />
                    </div>
                    <Seguir />
                </div>
            </div>
           
            <Masvisto
                show={show}
                alto={`${alto}px`}
                imgMasvistos={require(`../../${GetStorageObjet('schoolId')?.bg_favorite_video}`)}
            >
                <h2>
                    
                    Favorite Videos
                </h2>
                <div className="ver_todos" onClick={handleClick}>
                    {
                        show ? 'See Less' :'See more' 
                    }
                </div>
                 <div className="favorito_seccion">
                    <VIDEOS>
                        
                    </VIDEOS>
                    <VIDEOS>
                        
                    </VIDEOS>
                    <VIDEOS>
                        
                    </VIDEOS>
                    <VIDEOS>
                        
                    </VIDEOS>
                    <VIDEOS>
                        
                    </VIDEOS>
                    <VIDEOS>
                        
                    </VIDEOS>
                </div>   
            </Masvisto>
            <LiveEducator>
                <h2>
                    Live Educators Tha May Interest You
                </h2>
                <div className="recomendados">
                     <InLive
                        borderColor={'#52be80'}
                        url_avatar={'https://d22yb2tbj8zopv.cloudfront.net/src/user/rvukovic.png'}
                     />
                      <InLive
                        borderColor={'#52be80'}
                        url_avatar={'https://d22yb2tbj8zopv.cloudfront.net/src/user/rvukovic.png'}
                     />
                      <InLive
                        borderColor={'#52be80'}
                        url_avatar={'https://d22yb2tbj8zopv.cloudfront.net/src/user/rvukovic.png'}
                     />
                </div>
            </LiveEducator>
            <Footer2d 
                position="relative"
            />
        </StyledOnlivePage>
    );
}