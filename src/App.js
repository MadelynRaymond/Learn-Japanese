import {useState} from 'react'
import './styles.css'
import { Link } from "react-router-dom";
import Home from './routes/Home.js'
import Levels from './routes/Levels.js'



function App() {

  return (
    <main>
      <div>
        <Levels />
      </div>
    </main>
   
  );
}


export default App;
