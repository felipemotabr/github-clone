import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { WiMoonAltThirdQuarter } from "react-icons/wi";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const IconDark = styled(WiMoonAltThirdQuarter)`
  fill: var(--logo);
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;


export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;
  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 318px;
    color: var(--searchtext);
    &:focus {
      background: var(--primary);
      color: var(--gray);
    }

    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`;