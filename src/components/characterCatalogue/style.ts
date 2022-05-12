import styled from "styled-components";
import img from '../../assets/background.png';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  max-width: 100%;
  background-image: url(${img});
`;


