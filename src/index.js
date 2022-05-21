import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import Levels from './routes/Levels.jsx'
import Level from './routes/Level.jsx'
import Learn from './routes/Learn.jsx'
import CustomPractice from './routes/CustomPractice.jsx';
import KatakanaPractice from './routes/KatakanaPractice';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />


          <Route path="learn" element={<Learn />} /> 
          <Route path="learn/level1" element={<Learn />} /> 
          <Route path="learn/level2" element={<Learn />} /> 
          <Route path="learn/level3" element={<Learn />} /> 
          <Route path="learn/level4" element={<Learn />} /> 
          <Route path="learn/level5" element={<Learn />} /> 


          <Route path="levels" element={<Levels />} /> 
          <Route path="/levels/1" element={<Level number={1}/>} />
          <Route path="/levels/2" element={<Level number={2}/>} />
          <Route path="/levels/3" element={<Level number={3}/>} />
          <Route path="/levels/4" element={<Level number={4}/>} />
          <Route path="/levels/5" element={<Level number={5}/>} />

          <Route path="custom" element={<CustomPractice/>} />

          <Route path="katakana" element={<KatakanaPractice/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
