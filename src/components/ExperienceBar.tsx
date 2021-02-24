import { useContext } from "react";

import { ChallengesContext } from "../contexts/ChallengesContext";

import { Header, Progress, CurrentExperience } from "../styles/components/experienceBar";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Header>
      <span>0 xp</span>
      <div>
        <Progress width={`${percentToNextLevel}%`}/>

        <CurrentExperience left={`${percentToNextLevel}%`}> 
          {
            currentExperience !== 0 && currentExperience !== experienceToNextLevel && (
              `${currentExperience} xp`
            )
          }
        </CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Header>
  );
}