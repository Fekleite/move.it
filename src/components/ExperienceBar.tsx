import { Header, Progress, CurrentExperience } from "../styles/components/experienceBar";

export function ExperienceBar() {
  return (
    <Header>
      <span>0 xp</span>
      <div>
        <Progress width="50%"/>

        <CurrentExperience left="50%"> 
          300 xp
        </CurrentExperience>
      </div>
      <span>600 xp</span>
    </Header>
  );
}