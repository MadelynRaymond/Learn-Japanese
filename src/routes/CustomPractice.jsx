import Navbar from "./Navbar";
import '../styles.css'

export default function CustomPractice(){
    return(
        <div>
            <Navbar />
            
            <div className="custom-practice-container">
            <div className="custom-kana-practice">
                        <h1>Custom Practice</h1>
                        <h2 className="displayed-kana">に</h2>
                        <input type="text" className="kana-input"></input>
                        <p>Current Streak: 0</p>
                        
                            <a href="#kana-options" className="select-kana-btn">Select kana</a>
                
                    </div>
            
                <div className="custom-practice">
                    <div className="row-selection">
                        <div className="row-option" id="kana-options">
                            <input type="checkbox" id="aRow" name="aRow"></input>
                            <label for="aRow"> あ, い, う, え, お </label>
                        </div>
                        <div className="row-option">
                            <input type="checkbox" id="kaRow" name="kaRow"></input>
                            <label for="kaRow"> か, き, く,け, こ</label>
                        </div>
                        <div className="row-option">
            
                            <input type="checkbox" id="saRow" name="saRow"></input>
                            <label for="saRow"> さ, し, す, せ, そ</label>
                        </div>
                        <div className="row-option">
                            <input type="checkbox" id="taRow" name="taRow"></input>
                            <label for="taRow"> ta row</label>
                        </div>
                        <div className="row-option">
                        <input type="checkbox" id="naRow" name="naRow"></input>
                            <label for="naRow">na row</label>
                        </div>
                        <div className="row-option">
                            <label for="haRow"> ha row</label>
                            <input type="checkbox" id="haRow" name="haRow"></input>
                        </div>
                        <div className="row-option">
                            <label for="maRow">ma row</label>
                            <input type="checkbox" id="maRow" name="maRow"></input>
                        </div>
                        <div className="row-option">
                            <label for="yaRow">na row</label>
                            <input type="checkbox" id="yaRow" name="yaRow"></input>
                        </div>
            
                    </div>
                    <div className="row-selection">
                        <div className="row-option">
                            <input type="checkbox" id="waRow" name="waRow"></input>
                            <label for="waRow"></label>
                            <label for="waRow"> わ, を </label>
                        </div>
                        <div className="row-option">
                            <input type="checkbox" id="nRow" name="nRow"></input>
                            <label for="nRow"> ん</label>
                        </div>
                        <div className="row-option">
                            <input type="checkbox" id="gaRow" name="gaRow"></input>
                            <label for="gaRow"> が, ぎ, ぐ, げ, ご </label>
                        </div>
                        <div className="row-option">
                            <label for="taRow">ta row</label>
                            <input type="checkbox" id="taRow" name="taRow"></input>
                        </div>
                        <div className="row-option">
                            <label for="naRow">na row</label>
                            <input type="checkbox" id="naRow" name="naRow"></input>
                        </div>
                        <div className="row-option">
                            <label for="haRow">ha row</label>
                            <input type="checkbox" id="haRow" name="haRow"></input>
                        </div>
                        <div className="row-option">
                            <label for="maRow">ma row</label>
                            <input type="checkbox" id="maRow" name="maRow"></input>
                        </div>
                        <div className="row-option">
                            <label for="nhaRow">na row</label>
                            <input type="checkbox" id="naRow" name="naRow"></input>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}