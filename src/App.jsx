import {useState} from 'react'
import './styles.css'
import { Link } from "react-router-dom";
import Levels from './routes/Levels.jsx'



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
