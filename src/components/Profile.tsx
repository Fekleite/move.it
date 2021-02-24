import { ProfileContainer } from "../styles/components/profile";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/Fekleite.png" alt="Fernanda Leite"/>

      <div>
        <strong>Fernanda Leite</strong>

        <p>
          <img src="icons/level.svg" alt="Level"/>
          
          Level 1
        </p>
      </div>
    </ProfileContainer>
  );
}