import { 
  ChallengeBoxContainer, 
  ChallengeNotActive, 
  ChallengeActive,
  ChallengeButton 
} from "../styles/components/challengeBox";

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <ChallengeBoxContainer>
      {
        hasActiveChallenge ? (
          <ChallengeActive>
            <header> Ganhe 400 xp </header>

            <main>
              <img src="icons/body.svg" alt=""/>

              <strong> Exercite-se </strong>
              <p>
                É agora Nanda, bora lá minha parça. Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.
              </p>
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