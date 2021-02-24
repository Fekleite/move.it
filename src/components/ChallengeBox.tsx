import { useContext } from "react";

import { ChallengesContext } from "../contexts/ChallengesContext";

import { 
  ChallengeBoxContainer, 
  ChallengeNotActive, 
  ChallengeActive,
  ChallengeButton 
} from "../styles/components/challengeBox";

export function ChallengeBox() {
  const { activeChallenge } = useContext(ChallengesContext);

  return (
    <ChallengeBoxContainer>
      {
        activeChallenge ? (
          <ChallengeActive>
            <header> Ganhe {activeChallenge.amount} xp </header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt=""/>

              <strong> Novo desafio </strong>
              <p> {activeChallenge.description}</p>
            </main>

            <footer>
              <ChallengeButton
                type="button"
                failed
              >
                Falhei
              </ChallengeButton>

              <ChallengeButton
                type="button"
              >
                Completei
              </ChallengeButton>
            </footer>
          </ChallengeActive>
        ) : (
          <ChallengeNotActive>
            <strong>Finalize um ciclo para receber desafios a serem completados</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up"/>

              Complete-os, ganhe experiência e avance de level.
            </p>
          </ChallengeNotActive>
        )
      }
    </ChallengeBoxContainer>
  );
}