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
        VideosSection,
        PreguntasYComentarios
    } from "./styled";
import { GetStorageObjet } from "../../helper/LocalStorage";
import Footer2d from "../../components/Footer2d";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import Menu from "../educatorsAndSchedules/components/Menu";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

import ReactPlayer from "react-player";

import {SmartMoneyVideoTest} from "../../metadata/smartMoney";
function SmartMoney()
{
    const data = [1,2,3,4,5,6,7]
    
    const [level , setLevel] = useState(0)
    const [inputFile , setInputFile] = useState('')
    const  [loading , setLoading] = useState(false)
    const [videoSmartMoney , setVideoSmartMoney] = useState([])
    const [questionsSelected , setQuestionsSelected] = useState(0)
    const [progreso , setProgreso] = useState(0)

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
          
            if(level < videoSmartMoney.length - 1){
                setLevel(level + 1)
            }

    }

    const handlePrev = () => {
       if(level > 0  ){ 
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
        setProgreso( level > 0 ? Math.trunc((level/videoSmartMoney.length) * 100) : 0 )
        if(level === videoSmartMoney.length - 1){
            setProgreso(100)
        }
        setVideoSmartMoney(SmartMoneyVideoTest)
        
    } , [ level   ] ) 
    return(
        <SmartMoneyContainer
            bgimg={require(`../../${GetStorageObjet('schoolId').background_full}`)}
        >
             <Menu
                color={ GetStorageObjet("schoolId")?.cl_border}
                logo={ GetStorageObjet("schoolId")?.image }
            />
           {loading && <Loading/>}
         
            <SmartMoneyTitle>
                 <h1>{level + 1}. {videoSmartMoney[level]?.description ?? ''}</h1>
                 <h4>Modules {'->'} Smart Money Concepts</h4>
            </SmartMoneyTitle>
            
            <SmartMoneySection>
                    <VideosSection colorBorder={GetStorageObjet('schoolId').cl_border}>
                        {
                            videoSmartMoney?.length > 0 ? ( 
                                <ReactPlayer
                                    url={`${videoSmartMoney[level].url}` ??''}
                                    controls
                                    width="100%"
                                    height="100%"
                            />
                            ) :""
                        }
                       

                    </VideosSection>
                   
                    <ProgressBarContainer
                         bgimg={require(`../../${GetStorageObjet('schoolId').bg_educ}`)}
                         borderColor = {GetStorageObjet('schoolId').cl_border}
                    >
                        <h2>My Progress {progreso }%</h2>
                            <p className="lessons-p">{level} de {videoSmartMoney.length} lessons</p>
                            <ContainerProgresoBar
                                colorContainer={GetStorageObjet('schoolId').cl_backg}
                            >
                                <Progreso  progreso={ progreso } colorProgreso={GetStorageObjet('schoolId').color} />
                            </ContainerProgresoBar>
                          
                            <div className="progress-class">
                                
                                <ProgressBar data={videoSmartMoney } level={level} />
                            </div>
                            <div className="buttons-progress">
                                <div>
                                    <button 
                                        style={{cursor:"pointer"}}
                                        onClick={ () => handlePrev() }
                                     >
                                    {progreso > 0 ? "PREVIOUS" : "START"}
                                    </button>
                                    <button
                                         style={{cursor:"pointer"}}
                                         onClick={ () => handleNext() }
                                    >
                                        {progreso < 100 ? "NEXT" : "FINISH"}
                                    </button>

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
            <PreguntasYComentarios
                colorBorder={GetStorageObjet('schoolId').cl_border ?? "#fff"}
            >
                 <div
                    onClick={() => setQuestionsSelected(1)}
                    style={
                        {cursor:"pointer" ,   
                        borderBottom: questionsSelected ===1 ? `solid 6px ${GetStorageObjet('schoolId').color} ` :"",
                        color: questionsSelected ===1 ? GetStorageObjet('schoolId').color : "#fff"
                    }}
                    className="comments">
                    COMMENT
                </div>       
                <div
                  onClick={() => setQuestionsSelected(2)}
                     
                    style={
                        {cursor:"pointer" ,   
                        borderBottom: questionsSelected ===2 ? `solid 6px ${GetStorageObjet('schoolId').color} ` :""
                            , color: questionsSelected ===2 ? GetStorageObjet('schoolId').color : "#fff"
                       }}
                    className="questions">
                    DOUBTS
                </div>    
            </PreguntasYComentarios>
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
            {
                questionsSelected === 1 ? (
                    <OldComentarios>
                            <Comments comments={comentario} />
                    </OldComentarios>
                ):""
            }
           
            
           
          

            <Footer2d
               position={'relative'}
               mt="50px"
           />
        </SmartMoneyContainer>
    )
}

export { SmartMoney };