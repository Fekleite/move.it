import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: var(--shape);
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header {
    max-width: 150px;
    margin: 0 auto;
    font-size: 8.75rem;
    font-weight: 600;
    text-shadow: 0px 10px 16px rgba(89, 101, 224, 0.3);
    color: var(--blue);
    background: url("/icons/levelup.svg") no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 1.875rem;
    color: var(--title);
  }

  p {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
  }

  button[type="button"] {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
  }
`;

export const ShareButton = styled.button`
  width: 100%;
  height: 50px;
  background: var(--blue-twitter);
  border-radius: 5px;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  margin-top: 2rem;
  font-weight: 600;

  img {
    margin-left: 1rem;
  }
`;
