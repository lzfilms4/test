import { useState } from "react";
import reactLogo from "./assets/react.svg";
import bg from "./assets/react.svg";

import Countdown from 'react-countdown';

import "./App.scss";

const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return "asd";
    } else {
        // Render a countdown
        return <span>0{hours}:{minutes}:{seconds}</span>
    }
};
function App() {
  return (
    <div className="App">
        <div className='bg'></div>
      <div className="text">
          {/*<Countdown*/}
          {/*    date={Date.now()+ 1671524170}*/}
          {/*    intervalDelay={0}*/}
          {/*    renderer={renderer}*/}
          {/*/>*/}

          <div id='day'>09</div>
          <div id='dh'>:</div>
          <div id='hour'>22</div>
          <div id='hm'>:</div>
          <div id='min'>22</div>

      </div>
    </div>
  );
}

export default App;
