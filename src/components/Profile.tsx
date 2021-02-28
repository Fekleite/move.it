import { useContext } from "react";
import Switch from "react-switch";

import { ChallengesContext } from "../contexts/ChallengesContext";
import { ThemesContext } from "../contexts/ThemesContext";

import { ProfileContainer } from "../styles/components/profile";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { toggleTheme, theme } = useContext(ThemesContext);

  return (
    <ProfileContainer>
      <img src="https://github.com/Fekleite.png" alt="Fernanda Leite"/>

      <div>
        <strong>Fernanda Leite</strong>

        <div>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            
            Level {level}
          </p>

          <Switch 
            onChange={toggleTheme}
            checked={theme.title === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={40}
            handleDiameter={20}
            offColor="#272832"
            onColor="#5965e0"
          />
        </div>
      </div>
    </ProfileContainer>
  );
}