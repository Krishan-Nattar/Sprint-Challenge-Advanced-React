import React, {useState} from 'react';
import './App.css';
import SoccerClassComponent from './components/SoccerClassComponent';
import {Button} from 'semantic-ui-react';
import useDarkMode from './hooks/useDarkMode';

function App() {

  
  const [darkMode, setDarkMode] = useDarkMode(); //Stretch Goal
  const [buttonState, setButtonState] = useState(darkMode);

  const handleClick = () =>{
    setButtonState(!buttonState)
    setDarkMode(!darkMode);
  }
  

  return (
    <div className="App">
      <Button toggle active={buttonState} onClick={()=>handleClick()} className="btn">
        Dark Mode
      </Button>
      <SoccerClassComponent />
    </div>
  );
}

export default App;
