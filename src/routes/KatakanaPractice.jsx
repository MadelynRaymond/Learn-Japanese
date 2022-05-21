import {kk} from '../assets/katakana'
import * as y from '../assets/katakanaArr'
import {useState} from 'react'
import '../styles.css'
import Navbar from './Navbar'

import 'animate.css'

function KatakanaPractice({number}){
    const allKatakana = y.allKatakana

    const [katakana, setKatakana] = useState(allKatakana[Math.floor(Math.random() * 5)])
    const [streak, setStreak] = useState(0)
    const [isIncorrect, setIsIncorrect] = useState(false)


     function updateKatakana(){
         setIsIncorrect(false)
        let newKatakana
        newKatakana = allKatakana[Math.floor(Math.random() * allKatakana.length)]
        setKatakana(newKatakana)
     }


     function validateSubmittedKatakana(e){
         //checks if enter key was pressed
        if(e.charCode === 13){            
            let input = e.target.value
            //checks if input is correct
            if(kk.get(input) === katakana){

                //clears the input
                e.target.value = ''

                //increments the streak
                setStreak(streak+1)
                updateKatakana()
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
                <h2 className="displayed-kana">{katakana}</h2>
                <input onKeyPress={validateSubmittedKatakana} type="text" className={`kana-input ${isIncorrect ? 'animate__animated animate__shakeX kana-input-incorrect': ''}`}></input>
                <br></br>
                <p>{'Current Streak: ' + streak}</p>
            </div>
           
        </div>
    )
}

export default KatakanaPractice