import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  const emoji = '💎'
  return (
    
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        {emoji} Yoo!
        </div>

        <div className="bio">
        I'm Cavin and Im planning on transitioning into blockchain developemnt! Lets gooo baby!!!!!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
