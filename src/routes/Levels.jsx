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
          
            <h1>Build your foundation<br></br>in the Japanese language...</h1>
            <p>learn & practice the fundamentals for free</p>
            <a href="#level-selection"><button className="get-started-btn">Get Started</button></a>
         </div>
        
         <div id="level-selection" className="all-level-cards">
               <LevelLink levelName={'Level One'} description={'Learn your first 5 hiragana (5/71)'} practiceRoute={"/levels/1"} learnRoute={"/learn/level1"}/>
               <LevelLink levelName={'Level Two'} description={'Continue learning gojūon (25/71)'} practiceRoute={"/levels/2"} learnRoute={"/learn/level2"}/>
               <LevelLink levelName={'Level Three'} description={'More gojūon & exceptions (46/71)'} practiceRoute={"/levels/3"} learnRoute={"/learn/level3"}/>
               <LevelLink levelName={'Level Four'} description={'Learn dakuon (61/71)'} practiceRoute={"/levels/4"} learnRoute={"/learn/level4"}/>
               <LevelLink levelName={'Level Five'} description={'More dakuon & handakuon (81/81)'} practiceRoute={"/levels/5"} learnRoute={"/learn/level5"}/>
         </div>
       </div>
    )
}

