import { Link } from "react-router-dom";

import '../styles.css'

function LevelLink(props){

    return(
            <div className="level-card">
                <div className="level-card-left">
                    <h1 className="level-card-name">{props.levelName}</h1>
                    <p className="level-card-desc">{props.description}</p>
                </div>
                <div className="level-card-right">
                    <button className="level-card-btn">
                        <Link className="level-card-btn-text" to={props.learnRoute}>Learn</Link>
                    </button>
                    <button className="level-card-btn">
                        <Link className="level-card-btn-text" to={props.practiceRoute}>Practice</Link>
                    </button>
                </div>
            
            
            </div>
    )
}

export default LevelLink
