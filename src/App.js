import React from 'react';
import './App.css';
import Home from './components/Home';
import Question1 from './components/Question1';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (

      <div className="App">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Vraag1" element={<Question1/>}/>
  </Routes>
         

      </div>

  );
}

export default App;
