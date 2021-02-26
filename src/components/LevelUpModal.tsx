import { useContext } from "react";
import { FaTwitter } from "react-icons/fa";

import { ChallengesContext } from "../contexts/ChallengesContext";

import { Overlay, Container, ShareButton } from "../styles/components/levelUpModal";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <button 
          type="button"
          onClick={closeLevelUpModal}
        >
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>

        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <ShareButton>
          Compartilhar no twitter

          <FaTwitter size={18} color="#fff" />
        </ShareButton>
      </Container>
    </Overlay>
  )
}