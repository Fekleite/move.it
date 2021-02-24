import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import { Container } from "../styles/pages/home";

export default function Home() {
  return (
    <Container>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>

        <div>

        </div>
      </section>
    </Container>
  )
}
