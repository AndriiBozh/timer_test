import { React, useState, useEffect } from "react";

import "./index.css";
import Display from "./Display";
import ControlButton from "./ControlButton";

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    // when component unmounted, used for cleaning memory
    return () => {
      clearInterval(interval);
    };
    // run useEffect each time the timerOn value changes
  }, [timerOn]);

  function twoFunctionsForStartButton() {
    setTimerOn(false);
    setTime(0);
  }

  return (
    <div className="App">
      <div className="timer-container">
        <Display
          hours={Math.floor((time / 3600) % 60)}
          minutes={Math.floor((time / 60) % 60)}
          seconds={time % 60}
        />
        <div className="buttons">
          <ControlButton
            name={timerOn ? "Stop" : "Start"}
            class="control-button start-stop"
            handleTimer={() => {
              timerOn ? twoFunctionsForStartButton() : setTimerOn(true);
            }}
          />
          <ControlButton
            name="Wait"
            class="wait-button control-button"
            handleTimerOnDoubleClick={() => setTimerOn(false)}
          />
          <ControlButton
            name="Reset"
            class="reset-button control-button"
            handleTimer={() => setTime(0)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
