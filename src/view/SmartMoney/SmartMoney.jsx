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
function SmartMoney()
{
    const data = [1,2,3,4,5,6,7]
    const comments = [1,2,3,4,5];

    return(
        <SmartMoneyContainer
            bgimg={require(`../../${GetStorageObjet('schoolId').background_full}`)}
        >
             <Menu
            logo={ GetStorageObjet("schoolId")?.image }
           />
            <SmartMoneyTitle>
                 <h1>1. Smart Money</h1>
                 <h2>Modules - Smart Money Concepts</h2>
            </SmartMoneyTitle>
            
            <SmartMoneySection>
                    <VideosSection colorBorder={GetStorageObjet('schoolId').cl_border}>


                    </VideosSection>
                    <div className="videos-section"></div>
                    <ProgressBarContainer
                         bgimg={require(`../../${GetStorageObjet('schoolId').bg_educ}`)}
                         borderColor = {GetStorageObjet('schoolId').cl_border}
                    >
                        <h2>My Progress 0%</h2>
                            <p className="lessons-p">1 de 5 lessons</p>
                            <ContainerProgresoBar
                                colorContainer={GetStorageObjet('schoolId').cl_backg}
                            >
                                <Progreso  progreso={10} colorProgreso={GetStorageObjet('schoolId').color} />
                            </ContainerProgresoBar>
                          
                            <div className="progress-class">
                                
                                <ProgressBar data={data} />
                            </div>
                            <div className="buttons-progress">
                                <div>
                                    <button>PREVIOUS</button>
                                    <button>NEXT</button>

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
                    colorInput={GetStorageObjet('schoolId').cl_border}
                />
                <BTN
                     bgimg={require(`../../${GetStorageObjet('schoolId').bg_btns}`)}
                >SEND</BTN>
            </ContainerComentarios>
            <OldComentarios>
                 <Comments comments={comments} />
            </OldComentarios>
            
           
          

            <Footer2d
               position={'relative'}
               mt="50px"
           />
        </SmartMoneyContainer>
    )
}

export { SmartMoney };