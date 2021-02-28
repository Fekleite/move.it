import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  > div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--title);
    }

    > div {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    p {
      font-size: 1rem;

      img {
        margin-right: 0.5rem;
      }
    }
  }
`;