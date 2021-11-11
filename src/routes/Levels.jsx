import { Link } from "react-router-dom";
import LevelLink from './LevelLink.jsx'
import Level from './Level.jsx'
import '../styles.css'
import Navbar from './Navbar'


export default function Levels(){
    return(


       <div>
         <Navbar />

         <div className="landing-page">
          
            <h1>start your language<br></br>learning journey today...</h1>
            <button className="get-started-btn"><a href="#level-selection">Get Started</a></button>
         </div>
        
            <div id="level-selection"></div>
            <LevelLink levelName={'Level One'} description={'Learn your first five hiragana (5/71)'} practiceRoute={"/levels/1"} learnRoute={"/learn/level1"}/>
            <LevelLink levelName={'Level Two'} description={'Continue learning gojūon (25/71)'} practiceRoute={"/levels/2"} learnRoute={"/learn/level2"}/>
            <LevelLink levelName={'Level Three'} description={'More gojūon & exceptions (46/71)'} practiceRoute={"/levels/3"} learnRoute={"/learn/level3"}/>
            <LevelLink levelName={'Level Four'} description={'Learn dakuon (61/71)'} practiceRoute={"/levels/4"} learnRoute={"/learn/level4"}/>
            <LevelLink levelName={'Level Five'} description={'More dakuon & handakuon (81/81)'} practiceRoute={"/levels/5"} learnRoute={"/learn/level5"}/>
  
       </div>
    )
}

