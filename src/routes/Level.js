import '../assets/kana'
import {kana} from '../assets/kana'
import {allHiragana} from '../assets/kanaArr'
import {useState} from 'react'
import '../styles.css'

function Level({number}){



    const [hiragana, setHiragana] = useState(allHiragana[Math.floor(Math.random() * 5)])
    const [streak, setStreak] = useState(0)


     function updateHiragana(){
        let newHiragana
        switch(number){
            case 1:
                newHiragana = allHiragana[Math.floor(Math.random() * 5)]
                setHiragana(newHiragana)
                break
            case 2:
                newHiragana = allHiragana[Math.floor(Math.random() * 10)]
                setHiragana(newHiragana)
                break
            case 3:
                newHiragana = allHiragana[Math.floor(Math.random() * 15)]
                setHiragana(newHiragana)
                break
            case 4:
                newHiragana = allHiragana[Math.floor(Math.random() * 20)]
                setHiragana(newHiragana)
                break
            case 5:
                newHiragana = allHiragana[Math.floor(Math.random() * 25)]
                setHiragana(newHiragana)
        }
     }


     function validateSubmittedHiragana(e){
         //checks if enter key was pressed
        if(e.charCode == 13){
            let input = e.target.value
            //checks if input is correct
            if(kana.get(input) == hiragana){

                //clears the input
                e.target.value = ''

                //increments the streak
                setStreak(streak+1)
                updateHiragana()
            }
            else{
                //clears the input
                e.target.value = ''
                //resets the streak
                setStreak(0)
            }
        }
     }


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
            <div className="kana-practice">
                <h2>Level {number}</h2>
                <h2 className="displayed-kana">{hiragana}</h2>
                <input onKeyPress={validateSubmittedHiragana} type="text" className="kana-input"></input>
                <br></br>
                <p>{'Current Streak: ' + streak}</p>
            </div>
           
        </div>
    )
}

export default Level