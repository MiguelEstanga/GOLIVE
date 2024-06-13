import Menu from "../educatorsAndSchedules/components/Menu";
import {ContainerForm ,ContainerLike, CardChat, ContainerChat, LiveEducator, Masvisto, Upload,StyledOnlivePage, Title, VIDEOS, OptionVideos, ModulesLeyenda } from "./Styled";
import ReactPlayer from 'react-player'
import lang from '../../helper/traduccion'
import Footer2d from '../../components/Footer2d'
import AvatarGlobal  from "../../components/Avatar";
import Seguir from "../../components/Seguir";

import {  useEffect, useState } from "react";
import { GetStorageObjet, getStorage } from "../../helper/LocalStorage";
import { FaUserLarge } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import InLive from "../educatorsAndSchedules/components/inLive";
import { FaFileUpload } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { FaUpload } from "react-icons/fa";
import Loading from "../../components/Loading";
import { videoTest } from "../../metadata/vide";
import AvatarGeneric from "../../components/AvatarGeneric";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsPeopleFill } from "react-icons/bs";
import LikeDislike from "../../components/LikeDislike";
export default function OnlivePage() {
    const [alto ] = useState(250)
    const [show , setShow] = useState(false)

    const [videos , setVideos] = useState([])
    const [form , setForm] = useState({})
    const [videoOption, setVideosOption]  = useState(1)
    const [loading] = useState(false)
  
    const [url , setUrl] = useState('https://lifeontop.s3.amazonaws.com/binary+edge_spanish.mp4')
    const [like, setLike] = useState(1)
    useEffect(() => {     
      setVideos(videoTest)   
    },[loading])
    const handleClick = () => {
        setShow(!show)
    }

    return (
        <StyledOnlivePage
            imagenDeFondo={GetStorageObjet('school')?.background_full}
           
        >
            { loading ? <Loading/> : null }
         
            <Menu 
                logo={GetStorageObjet('school')?.image}
                 color={ GetStorageObjet("school")?.cl_text}
            /> 
                    <ModulesLeyenda>
                            <div style={ { justifyContent:'flex-end'} } >
                                 <RxHamburgerMenu  color={GetStorageObjet("school")?.color}  size={15} />  Modules
                            </div>
                            <div style={ { justifyContent:'flex-start'} } >
                                     <BsPeopleFill color={GetStorageObjet("school")?.color}  size={15} /> Community/Events
                            </div>
                    </ModulesLeyenda>
            <div  className="container">
                    
                    <div clas="video_container">
                        <div className="video" >
                            <div className="inlive">En linea</div>
                                {
                                    <ReactPlayer
                                        url={url}
                                        controls
                                        width="100%"
                                        height="99%"
                                    />
                                }
                        </div>  
                        <div className="data_teacher">
                            
                            <div>
                                <AvatarGlobal
                                    img={GetStorageObjet('teacher')?.user?.image}
                                    data={{
                                        nombre:GetStorageObjet('teacher')?.user?.names + ' ' + GetStorageObjet('teacher')?.user?.last_names,
                                        profesion:'Profesor',
                                        academia:GetStorageObjet('teacher')?.role?.role_name,
                                    
                                    }}
                                />

                            </div>
                            <div>
                                <div className="teacher_compartir">
                                        <FaUserLarge
                                            color={GetStorageObjet('school')?.color}
                                            width={30}
                                        />

                                        0
                                        <FaShareAlt
                                            color={GetStorageObjet('school')?.color}
                                            width={30}
                                        />
                                </div>
                                <Seguir />
                            </div>
                        </div>
                    </div>
                
                <CardChat imgChat={require(`../../${GetStorageObjet('school')?.bg_stream_chat}`)} >
                  <div className="body">
                    <Title>STREAM CHAT</Title>
                    <ContainerChat
                        bgChatUser={require(`../../${GetStorageObjet('school')?.bg_comment_edu}`)}
                        text={GetStorageObjet('teacher')?.cl_text}
                    >
                        <div className="chat-comentarios">
                           <AvatarGeneric
                               avatar={GetStorageObjet('teacher')?.user?.image}
                                width={'40px'}
                                height={'40px'}
                           />
                           <div className="comentarios">
                              <p>
                                    test1
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
                            <LikeDislike/>
                        </div>
                    </ContainerLike>
                    <ContainerForm
                        btnImg={require(`../../${GetStorageObjet('school')?.bg_pro}`)}
                        bg={GetStorageObjet('schoolId').cl_text}
                    >
                        <input type="text" />
                        <div className="btn-chat" >Send dd</div>
                    </ContainerForm>
                  </div>
                </CardChat>

            </div> 

           
            <Upload>
                <div className="file">
                    <FaUpload 
                         style={{cursor:'pointer'}}
                         size={20} color=" #d68910 " 
                    /> 
                        <span>
                            Upload file
                        </span>
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
                divColor={GetStorageObjet('school').cl_backg}
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
                    
                    <label>Select Day</label>
                </div>
                <div className="borrar">
                   <span><MdDeleteForever size={20} color=" #78281f " /></span>
                </div>
            </Upload>      

            <OptionVideos>
                <div
                    className="option"
                    onClick={() =>{ 
                        setVideosOption(1)
                        setLike(1)
                    }}
                    style={{
                        color: videoOption === 1 ? GetStorageObjet('school').color : '#fff',cursor:'pointer',
                    }}
                >
                    Favorite Videos
                </div>
                <div
                    className="option"
                     onClick={() => {
                        setVideosOption(2)
                        setLike(0)
                    }}
                     style={{
                         color: videoOption === 2 ? GetStorageObjet('school').color : '#fff',cursor:'pointer',
                     }}
                >
                    Recorded Session
                </div>
            </OptionVideos>
            <Masvisto
                borderColor={GetStorageObjet('school').cl_border}
                show={show}
                alto={`${alto}px`}
                imgMasvistos={require(`../../${GetStorageObjet('school')?.bg_favorite_video}`)}
            >
                <h2>
                    {
                        videoOption === 1 ? 'Favorite Videos' : 'Recorded Session'
                    }
                   
                </h2>
                <div className="ver_todos" onClick={handleClick}>
                    {
                        show ? 'See less' : lang( getStorage('lenguaje'), 'See more') 
                    }
                </div>

                 <div className="favorito_seccion">
                    {
                        //si hay videos renderizarlos
                        like === 1 ?(
                            videos.filter( data => data.like === 1 ).map((res,index )=> (
                                <VIDEOS
                                   onClick={() => setUrl(res.url) }
                                >
                                    <ReactPlayer
                                        url={res.url}
                                        controls
                                        width="95%"
                                        height="95%"
                                    />
                                </VIDEOS>
                            ) )
                        ) : (
                            videos.filter( data => data.like === 0 ).map((res,index )=> (
                                <VIDEOS
                                    onClick={() => setUrl(res.url) }
                                >
                                    <ReactPlayer
                                        style={{zIndex:0}}
                                        url={res.url}
                                        
                                        width="100%"
                                        height="99%"
                                    />
                                </VIDEOS>
                            ) )
                        )
                        
                    }
                   
                </div>   
            </Masvisto>
            <LiveEducator>
                <h2>
                    Live Educators Tha May Interest You
                </h2>
                <div className="recomendados">
                    
                    {
                        GetStorageObjet('enlinea')?.map( (item,index) => (
                            <InLive
                                key={index}
                                borderColor={'#52be80'}
                                data={item}
                             />
                            
                        ))
                    }
                   
                </div>
            </LiveEducator>
            <Footer2d 
                position="relative"
            />
        </StyledOnlivePage>
    );
}