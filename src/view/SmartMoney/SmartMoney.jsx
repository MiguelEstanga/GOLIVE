import { ProgressBar } from "./components/ProgressBar";

import { Comments } from "./components/Comments";
import { 
        CustomInput, 
        SmartMoneyContainer, 
        SmartMoneyTitle , 
        SmartMoneySection, 
        ProgressBarContainer , 
        Progreso, 
        BTN, 
        ContainerComentarios,
        ContainerProgresoBar,
        OldComentarios,
        VideosSection
    } from "./styled";
import { GetStorageObjet } from "../../helper/LocalStorage";
import Footer2d from "../../components/Footer2d";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import Menu from "../educatorsAndSchedules/components/Menu";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { SmartMoneyModule } from "../../helper/Response";
import ReactPlayer from "react-player";
function SmartMoney()
{
    const data = [1,2,3,4,5,6,7]
    
    const [level , setLevel] = useState(1)
    const [inputFile , setInputFile] = useState('')
    const  [loading , setLoading] = useState(false)
    const [videoSmartMoney , setVideoSmartMoney] = useState([])
    async function GetVideos()
    {
        try{
            setLoading(true)
            const response = await SmartMoneyModule()
            console.log(response.data.data)
            setVideoSmartMoney(response.data.data)
        }catch(error){
            console.log(error)
        }
        finally{
            setLoading(false)
            console.log(videoSmartMoney)
        }
       
    }

    const [comentario , seComnetario] = useState([
        {
            id: 1,
            comentarion: 'test',
            date: '2022-01-01',
            img:'',
            user:'User',
        }
    ])

    const handleNext = () => {
        console.log(level)
        if(level > videoSmartMoney.length ) {
            console.log('no hay mas')
        }else{
            setLevel(level + 1)
        }
        
    }

    const handlePrev = () => {
        if(level === 1) {
            console.log('no hay mas')
        }else{
            setLevel(level - 1)
        }
    }
    const handleClik = () => {
        if(inputFile){
            seComnetario([...comentario,{
                id: comentario.length + 1,
                comentarion: inputFile,
                date: new Date().toLocaleDateString(),
                img:'',
                user:'User',
            }])

            setInputFile('')
        }
    }

    useEffect( () => {
        GetVideos()
        console.log('level')
        console.log((level +1) * videoSmartMoney.length / 100)
    } , [  level ] ) 
    return(
        <SmartMoneyContainer
            bgimg={require(`../../${GetStorageObjet('schoolId').background_full}`)}
        >
             <Menu
            logo={ GetStorageObjet("schoolId")?.image }
           />
           {loading && <Loading/>}
         
            <SmartMoneyTitle>
                 <h1>1. Smart Money</h1>
                 <h2>Modules - Smart Money Concepts</h2>
            </SmartMoneyTitle>
            
            <SmartMoneySection>
                    <VideosSection colorBorder={GetStorageObjet('schoolId').cl_border}>
                        {
                            videoSmartMoney.length > 0 ? ( 
                                <ReactPlayer
                                url={`${videoSmartMoney[level - 1].image}` ??''}
                                controls
                                width="95%"
                                height="95%"
                            />
                            ) :""
                        }
                       

                    </VideosSection>
                   
                    <ProgressBarContainer
                         bgimg={require(`../../${GetStorageObjet('schoolId').bg_educ}`)}
                         borderColor = {GetStorageObjet('schoolId').cl_border}
                    >
                        <h2>My Progress {(level/videoSmartMoney.length) * 100}%</h2>
                            <p className="lessons-p">{level} de {videoSmartMoney.length} lessons</p>
                            <ContainerProgresoBar
                                colorContainer={GetStorageObjet('schoolId').cl_backg}
                            >
                                <Progreso  progreso={(level/videoSmartMoney.length) * 100} colorProgreso={GetStorageObjet('schoolId').color} />
                            </ContainerProgresoBar>
                          
                            <div className="progress-class">
                                
                                <ProgressBar data={videoSmartMoney } level={level} />
                            </div>
                            <div className="buttons-progress">
                                <div>
                                    <button 
                                        style={{cursor:"pointer"}}
                                        onClick={ () => handlePrev() }
                                     >PREVIOUS
                                    </button>
                                    <button
                                         style={{cursor:"pointer"}}
                                         onClick={ () => handleNext() }
                                    >NEXT</button>

                                </div>
                                <div className="like-dislike">
                                    <div className="texto">
                                       Mark as read
                                    </div>
                                    <div className="buttons">
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
                                    </div>
                                    
                                </div>

                            </div>
                    </ProgressBarContainer>
                   
            </SmartMoneySection>
            <ContainerComentarios>
                <CustomInput
                    type="text"
                    onChange={(e) => setInputFile(e.target.value)}
                    colorInput={GetStorageObjet('schoolId').cl_border}
                />
                <BTN
                    onClick={ () => handleClik()  }
                    bgimg={require(`../../${GetStorageObjet('schoolId').bg_btns}`)}
                >
                    SEND
                </BTN>
            </ContainerComentarios>
            <OldComentarios>
                 <Comments comments={comentario} />
            </OldComentarios>
            
           
          

            <Footer2d
               position={'relative'}
               mt="50px"
           />
        </SmartMoneyContainer>
    )
}

export { SmartMoney };