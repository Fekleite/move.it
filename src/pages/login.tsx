import { useState } from "react";
import Head from "next/head";
import { MdArrowForward } from "react-icons/md";

import { Container, Content, InputGroup } from "../styles/pages/login";

export default function Login() {
  const [isActive, setIsActive] = useState(false);

  function handleInputChange(e) {
    e.target.value.length !== 0 ? setIsActive(true) : setIsActive(false);
  }

  return (
    <Container>
      <Head>
        <title>Login | Move.it</title>
      </Head>

      <section></section>

      <Content>
        <img src="logo-fullwhite.svg" alt="Move it"/>

        <h2>Bem vindo</h2>

        <div>
          <img src="/icons/github.svg" alt="Github"/>

          <p>Faça login com seu Github para começar</p>
        </div>

        <form action="">
          <InputGroup isActive={isActive}>
            <input 
              type="text" 
              name="github_user" 
              placeholder="Digite seu username" 
              onChange={handleInputChange}
            />

            <button 
              type="submit" 
              disabled={!isActive}
            >
              <MdArrowForward size={28} color="#fff" />
            </button>
          </InputGroup>
        </form>
      </Content>
    </Container>
  )
}