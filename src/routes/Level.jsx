import '../assets/kana'
import {kana} from '../assets/kana'
import * as x from '../assets/kanaArr'
import {useState} from 'react'
import '../styles.css'
import Navbar from './Navbar'

import 'animate.css'

function Level({number}){
    const allHiragana = x.allHiragana

    const [hiragana, setHiragana] = useState(allHiragana[Math.floor(Math.random() * 5)])
    const [streak, setStreak] = useState(0)
    const [isIncorrect, setIsIncorrect] = useState(false)


     function updateHiragana(){
         setIsIncorrect(false)
        let newHiragana
        switch(number){
            case 1:
                newHiragana = allHiragana[Math.floor(Math.random() * 5)]
                setHiragana(newHiragana)
                break
            case 2:
                newHiragana = allHiragana[Math.floor(Math.random() * 25)]
                setHiragana(newHiragana)
                break
            case 3:
                newHiragana = allHiragana[Math.floor(Math.random() * 46)]
                setHiragana(newHiragana)
                break
            case 4:
                newHiragana = allHiragana[Math.floor(Math.random() * 59)]
                setHiragana(newHiragana)
                break
            case 5:
                newHiragana = allHiragana[Math.floor(Math.random() * 69)]
                setHiragana(newHiragana)


        }
     }


     function validateSubmittedHiragana(e){
         //checks if enter key was pressed
        if(e.charCode === 13){            
            let input = e.target.value
            //checks if input is correct
            if(kana.get(input) === hiragana){

                //clears the input
                e.target.value = ''

                //increments the streak
                setStreak(streak+1)
                updateHiragana()
            }
            else{
            
                setIsIncorrect(true)
                //clears the input
                e.target.value = ''
                //resets the streak
                setStreak(0)
            }
        }
     }

    return(

        <div>
           
           <Navbar />
            
            <div className="kana-practice">
                <h2>Level {number}</h2>
                <h2 className="displayed-kana">{hiragana}</h2>
                <input onKeyPress={validateSubmittedHiragana} type="text" className={`kana-input ${isIncorrect ? 'animate__animated animate__shakeX kana-input-incorrect': ''}`}></input>
                <br></br>
                <p>{'Current Streak: ' + streak}</p>
            </div>
           
        </div>
    )
}

export default Level