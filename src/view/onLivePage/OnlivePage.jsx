import Menu from "../educatorsAndSchedules/components/Menu";
import {ContainerForm ,ContainerLike, CardChat, ContainerChat, LiveEducator, Masvisto, Upload,StyledOnlivePage, Title, VIDEOS, OptionVideos } from "./Styled";
import ReactPlayer from 'react-player'
import {imagenes , foring_exchange} from "../../helper/test";
import lang from '../../helper/traduccion'
import Videos from "./Videos";
import Footer2d from '../../components/Footer2d'
import AvatarGlobal  from "../../components/Avatar";
import Seguir from "../../components/Seguir";

import { useContext, useEffect, useState } from "react";
import { GetStorageObjet, getStorage } from "../../helper/LocalStorage";
import { FaUserLarge } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import InLive from "../educatorsAndSchedules/components/inLive";
import { TeacherContext } from "../../context/TeacherContext";
import { getFavoriteVideo } from "../../helper/Response";
import { FaFileUpload } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { FaUpload } from "react-icons/fa";
import { Api, endpoints } from "../../helper/Api";
import axios from "axios";
import Loading from "../../components/Loading";

import AvatarGeneric from "../../components/AvatarGeneric";

export default function OnlivePage() {
    const [alto , setAlto] = useState(250)
    const [show , setShow] = useState(false)
    const {teacher} = useContext( TeacherContext )
    const [videos , setVideos] = useState([])
    const [form , setForm] = useState({})
    const [videoOption, setVideosOption]  = useState(1)
    const [loading, setLoading] = useState(false)
    const handleUpload = () => {
        setLoading(true)
        const data  = new  FormData()
      
        console.log(form.video)
        console.log(teacher.teacher.teacher_id)
        console.log(GetStorageObjet('schoolId').id)
        console.log(getStorage('lenguaje'))
        console.log('formadata')

        console.log(data)
        data.append('name', form.video)
        data.append('teacher_id', teacher.teacher.teacher_id)
        data.append('school_id', GetStorageObjet('schoolId').id)
        data.append('language_id', getStorage('lenguaje'))

        axios.post(`${endpoints.subida}`, data , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => {
          
            const uploadProgress = res.data.uploadProgress; // Assuming progress data is in res.data
            console.log(uploadProgress)
            console.log(res)
        })
        .catch((err) => {
            console.error('error', err)
        })
        .finally(() => {
            setLoading(false)
            console.log('Upload finished')
        })
       

    }

    async function Videos() {
        const response =  await getFavoriteVideo(
             teacher.teacher.teacher_id,
             GetStorageObjet('schoolId').id,
             getStorage('lenguaje')
        )
        console.log(response.data)
        setVideos(response.data)
       
    }

    useEffect(() => {     
       Videos()
      
    },[loading])
    const handleClick = () => {
        setShow(!show)
    }

    return (
        <StyledOnlivePage
            imagenDeFondo={GetStorageObjet('schoolId')?.background_full}
            imagenChat={require(`../../${GetStorageObjet('schoolId')?.bg_btns}`)}
        >
            { loading ? <Loading/> : null }
         
            <Menu 
                logo={GetStorageObjet('schoolId')?.image}
            />
            <div  className="container">

                <div className="video" >
                    <div className="inlive">En linea</div>
                   {
                    
                      <ReactPlayer
                        url="https://lifeontop.s3.amazonaws.com/binary+edge_spanish.mp4"
                       controls
                        width="95%"
                        height="95%"
                    />
                     
                   }
                   
                </div>
                <CardChat imgChat={require(`../../${GetStorageObjet('schoolId')?.bg_btns}`)} >
                  <div className="body">
                    <Title>STREAM CHAT</Title>
                    <ContainerChat
                        bgChatUser={GetStorageObjet('schoolId').cl_backg}
                    >
                        <div className="chat-comentarios">
                           <AvatarGeneric
                                width={'40px'}
                                height={'40px'}
                           />
                           <div className="comentarios">
                              <p>
                              ggg
                              </p>  
                            
                           </div>
                        </div>
                       
                    </ContainerChat>
                    <ContainerLike>
                        <div className="leyenda">
                            <p  style={{color:'white' , fontSize:'14px'}} >
                                Te gusta lo que ves ?
                            </p>
                        </div>
                        <div className="botones">

                        </div>
                    </ContainerLike>
                    <ContainerForm
                        btnImg={require(`../../${GetStorageObjet('schoolId')?.bg_btns}`)}
                        bg={GetStorageObjet('schoolId').cl_backg}
                    >
                        <input type="text" />
                        <button>Send</button>
                    </ContainerForm>
                  </div>
                </CardChat>

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
            <Upload>
                <div className="file">
                    <FaUpload 
                    style={{cursor:'pointer'}}
                    onClick={ () => handleUpload() }
                    size={20} color=" #d68910 " /> <span>Upload file</span>
                     <button  
                        className="uploadBtn"
                        onClick={ () => {
                            document.getElementById('fileUload').click()
                        } }
                     >
                        Upload
                    </button>
                    <input hidden id="fileUload" type="file" accept="video/*" name="name" onChange={ (event) => {
                        setForm({...form, video:event.target.files[0]  })
                        console.log(form)
                    } }  />
                </div>
            </Upload>
            <Upload
                divColor={GetStorageObjet('schoolId').cl_backg}
            >
                <div className="form_container">
                    <span><FaFileUpload size={20}  color=" #d68910  " /></span>
                   
                    <input 
                       
                        type="text" 
                        name="video" 
                        placeholder="file name" 
                        onChange={(event) => {
                            setForm({...form, video_name:event.target.value } )
                            console.log(form)
                        }}
                    />
                </div>
                <div className="select_day">
                  
                    <CgCalendarDates 
                        size={40 } 
                        color=" #d68910 " 
                        onChange={ () => {
                            console.log('click')
                            document.getElementById('fecha').click()
                        } }
                    />
                    <input id="fecha" type="date" itemScope={true} />
                    <label>Select Day</label>
                </div>
                <div className="borrar">
                   <span><MdDeleteForever size={20} color=" #78281f " /></span>
                </div>
            </Upload>      

            <OptionVideos>
                <h2
                    onClick={() => setVideosOption(1)}
                    style={{
                        color: videoOption === 1 ? GetStorageObjet('schoolId').color : '#fff',
                    }}
                >Favorite Videos</h2>
                <h2
                     onClick={() => setVideosOption(2)}
                     style={{
                         color: videoOption === 2 ? GetStorageObjet('schoolId').color : '#fff',
                     }}
                >RECORDED SESSION</h2>
            </OptionVideos>
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
                        show ? 'See less' : lang( getStorage('lenguaje'), 'See more') 
                    }
                </div>

                 <div className="favorito_seccion">
                    {
                        //si hay videos renderizarlos
                        videos.length > 0 ? videos.map( (video,index) => (<VIDEOS key={index} ></VIDEOS>  )) : <p>there is no video</p>
                    }
                   
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
                    
                </div>
            </LiveEducator>
            <Footer2d 
                position="relative"
            />
        </StyledOnlivePage>
    );
}