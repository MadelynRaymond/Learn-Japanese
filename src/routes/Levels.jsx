import { Link } from "react-router-dom";
import LevelLink from './LevelLink.jsx'
import Level from './Level.jsx'
import '../styles.css'


export default function Levels(){
    return(


       <div className="level-list-container">
           
           <div className="nav-bar">
               <div className="logo">
                    <h1>Learn Japanese</h1>
                    
               </div>
               <div class="nav-login">
                    <button>Login</button>
                    <button>Sign up</button>
               </div>
            </div>
           
                <LevelLink levelName={'Level One'} description={'Learn your first five hiragana (5/71)'} practiceRoute={"/levels/1"} learnRoute={"/learn/level1"}/>
                <LevelLink levelName={'Level Two'} description={'Continue learning gojūon (25/71)'} practiceRoute={"/levels/2"} learnRoute={"/learn/level2"}/>
                <LevelLink levelName={'Level Three'} description={'More gojūon & exceptions (46/71)'} practiceRoute={"/levels/3"} learnRoute={"/learn/level3"}/>
                <LevelLink levelName={'Level Four'} description={'Learn dakuon (61/71)'} practiceRoute={"/levels/4"} learnRoute={"/learn/level4"}/>
                <LevelLink levelName={'Level Five'} description={'More dakuon & handakuon (81/81)'} practiceRoute={"/levels/5"} learnRoute={"/learn/level5"}/>
       </div>
    )
}

