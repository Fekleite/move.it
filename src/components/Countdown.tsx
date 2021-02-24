import { useState, useEffect } from "react";

import { CountdownContainer, CountdownButton } from "../styles/components/countdown";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if(isActive && time === 0) {
      console.log("Finalizou");
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {
        hasFinished ? (
          <CountdownButton 
            disabled
          >
            Ciclo encerrado
          </CountdownButton>
        ) : (
          <>
            {
              isActive ? (
                <CountdownButton 
                  type="button" 
                  onClick={resetCountdown}
                  buttonActive
                >
                  Abandonar ciclo
                </CountdownButton>
              ) : (
                <CountdownButton 
                  type="button" 
                  onClick={startCountdown}
                >
                  Iniciar um ciclo
                </CountdownButton>
              )
            }
          </>
        )
      }
    </div>
  );
}