import styled from "styled-components";

interface ButtonCountdownProps {
  buttonActive?: boolean;
}

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: var(--shape);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid var(--border);
      }

      &:last-child {
        border-left: 1px solid var(--border);
      }
    }
  }

  > span {
    font-size: 6.5rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button<ButtonCountdownProps>`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background: ${props => props.buttonActive ? "var(--shape)" : "var(--blue)" };
  color: ${props => props.buttonActive ? "var(--text)" : "var(--white)" };
  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.2s;

  &:disabled {
    background: var(--shape);
    color: var(--text);
    border-bottom: 4px solid var(--green);
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${props => props.buttonActive ? "var(--red)" : "var(--blue-dark)" };
    color: var(--white);

    svg {
      color: var(--white);
    }
  }

  svg {
    margin-left: 8px;
    color: ${props => props.buttonActive ? "var(--text)" : "var(--white)" };
  }
`;