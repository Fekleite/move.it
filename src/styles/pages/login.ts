import styled from "styled-components";

interface InputGroupProps {
  isActive: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  background: var(--blue);

  section {
    &:first-of-type {
      background: url("background.svg") no-repeat;
      background-size: contain;
    }
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 5rem;

  > img {
    width: 22.5rem;
    margin-bottom: 6rem;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 1.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    max-width: 318px;
    margin-bottom: 2.5rem;

    img {
      margin-right: 1.5rem;
    }

    p {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.5;
      color: var(--text-highlight);
    }
  }
`;

export const InputGroup = styled.div<InputGroupProps>`
  height: 5rem;
  display: flex;

  input {
    width: 21.25rem;
    height: 100%;
    background: linear-gradient(90deg, #4953B8 0%, rgba(73, 83, 184, 0.2) 100%);
    color: var(--text-highlight);
    border: 0;
    border-radius: 5px 0 0 5px;
    padding: 0 1.875rem;
    font-size: 1.25rem;

    &::placeholder{
      color: var(--text-highlight);
    }

    &:hover {
      box-sizing: border-box;
      border: 1.5px solid #414AA3;
    }
  }

  button {
    width: 5rem;
    height: 5rem;
    background: ${props => props.isActive ? "var(--green)" : "var(--blue-dark)"};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 0 5px 5px 0;

    &:disabled {
      cursor: initial;
    }
  }
`;