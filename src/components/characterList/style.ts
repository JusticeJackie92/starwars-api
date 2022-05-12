import styled from "styled-components";
import img from '../../assets/background.png';
type Props = {
  loading: boolean;
};

export const Container = styled.div<Props>`
  ${({ loading }) => loading && `opacity: 0.2`};
  background-color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  margin-bottom: 3em;

  @media (min-width: 760px) {
    width: 90vw;
  }
  @media (min-width: 1024px) {
    width: 60vw;
  }
`;


export const Button = styled.button`
  background-color: #ffe81f;
  border: 1.5px solid #f3f3f3;
  border-radius: 5px;
  padding: 16px 32px;
  &:hover {
    border-color: #ffe81f;
  }
  color: #2b2d2f;
  transition: 0.2s ease;
  margin: 1em 0;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0 2em 0;
`;

export const Input = styled.input`
  flex-grow: 1;
  border: 2px solid #ffe81f;
  margin-right: 1em;
  color: #ffe81f;
  border-radius: 5px;
  background-color: transparent;
  padding: 1.2em 1em;
  &:focus {
    border-color: #ffe81f;
    outline: none;
  }
  transition: 0.1s ease;
`;

export const FilterResetButton = styled.button`
  background-color: #ffe81f;
  border: 2px solid #ffe81f;
  border-radius: 5px;
  padding: 10px 10px;
  &:hover {
    border-color: #ffe81f;
  }
  color: #2b2d2f;
  transition: 0.2s ease;
  cursor: pointer;
  @media (min-width: 1024px) {
    padding: 8px 16px;
  }
`;
