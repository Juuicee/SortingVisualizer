import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <div className="ArrayBar">
        <input type="range" min="10" max="400" className="custom-range"/>
        <button className="button">Generate New Array</button>
        <button className="button">Quicksort</button>
        <button className="button">Bubblesort</button>
        <button className="button" onClick={toggleDarkMode}>Dark Mode</button>
        <button className="button2">Play</button>
        <button className="button2">Stop</button>
        </div>
      </header>
    </div>
    
  );
}

export default App;
// Hello World Test