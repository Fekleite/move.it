import { useContext } from "react";
import { MdPlayArrow, MdClose, MdCheckCircle } from "react-icons/md";

import { CountdownContext } from "../contexts/CountdownContext";

import { CountdownContainer, CountdownButton } from "../styles/components/countdown";


export function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown 
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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

            <MdCheckCircle size={24} color="#4cd62b"/>
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

                  <MdClose size={24} />
                </CountdownButton>
              ) : (
                <CountdownButton 
                  type="button" 
                  onClick={startCountdown}
                >
                  Iniciar um ciclo

                  <MdPlayArrow size={24} color="#fff" />
                </CountdownButton>
              )
            }
          </>
        )
      }
    </div>
  );
}