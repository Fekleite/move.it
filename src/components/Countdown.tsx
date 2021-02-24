import { CountdownContainer, CountdownButton } from "../styles/components/countdown";

export function Countdown() {
  return (
    <div>
      <CountdownContainer>
        <div>
          <span>2</span>
          <span>5</span>
        </div>

        <span>:</span>

        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </CountdownContainer>

      <CountdownButton type="button">
        Iniciar um ciclo

        <img src="icons/play.svg" alt=""/>
      </CountdownButton>
    </div>
  );
}