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
        </div>

        <div>

        </div>
      </section>
    </Container>
  )
}