import styled from "styled-components";

interface ProgressProps {
  width: string;
}

interface CurrentExperienceProps {
  left: string;
}

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
  }
`;

export const Progress = styled.div<ProgressProps>`
  width: ${props => props.width};
  height: 4px;
  border-radius: 4px;
  background: var(--green);
`;

export const CurrentExperience = styled.span<CurrentExperienceProps>`
  position: absolute;
  top: 12px;
  left: ${props => props.left};
  transform: translate(-50%)
`;