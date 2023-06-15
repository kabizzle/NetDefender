import { useState } from "react";
import './intro.css';

const IntroScreen = () => {
  const [displayText, setDisplayText] = useState("Welcome to NetDefender.");
  const [count, setCount] = useState(0);

  const addText = () => {
    setCount(count+1);
    if (count == 1) { 
      setDisplayText("Your company has been hacked. <br /> IT has detected that the threat originated from your computer.");
    }
    if (count == 2) {
      setDisplayText("But you are innocent.");
    }
    if (count == 3) {
      setDisplayText("It is up to you to save the company from the attack and prove your innocence. Enter the world of NetDefender.");
    }
  }

  return (  
    <div className="intro_box">
      <p>{displayText}</p>

      <button onClick={addText}> next </button>

    </div>
  );
};

export default IntroScreen;
