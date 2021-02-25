import { useContext } from "react";

import { ChallengesContext } from "../contexts/ChallengesContext";

import { ProfileContainer } from "../styles/components/profile";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <ProfileContainer>
      <img src="https://github.com/Fekleite.png" alt="Fernanda Leite"/>

      <div>
        <strong>Fernanda Leite</strong>

        <p>
          <img src="icons/level.svg" alt="Level"/>
          
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
}