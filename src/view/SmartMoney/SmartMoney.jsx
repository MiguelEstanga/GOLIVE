import Menu from "../../components/Menu"
import { ProgressBar } from "./components/ProgressBar";
import { Comments } from "./components/Comments";

function SmartMoney(){
    const data = [1,2,3,4,5]
    const comments = [1,2,3,4,5];

    return(
        <>
            <Menu />
            <div className="smart-money-title">
                <h1>1. Smart Money</h1>
                <h2>Modules - Smart Money Concepts</h2>
            </div>
            <div className="smart-money">
                <div className="videos-section"></div>
                <div className="progress-section">
                    <h2>My Progress 20%</h2>
                    <p className="lessons-p">1 de 5 lessons</p>
                    <div className="bar-progress">
                        <div className="bar-progress-completed"></div>
                    </div>
                    <div className="progress-class">
                        <div className="progress-class-line"></div>
                        <ProgressBar data={data} />
                    </div>
                    <div className="buttons-progress">
                        <button>PREVIOUS</button>
                        <button>NEXT</button>
                    </div>
                </div>
            </div>

            <div className="smart-money-comments">
                <h2>COMMENTS</h2>
                <textarea className="custom-textarea"></textarea>
                <button>SEND</button>
            </div>

            <div className="old-comments">
                <Comments comments={comments} />
            </div>
        </>
    )
}

export { SmartMoney };