import styled from "styled-components";

export const Spinner = styled.div`
  width: 100px;
  height: 100px;
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 100%;
  background-color: transparent;
  border: 10px solid transparent;
  border-top: 10px solid #ffe81f;
  border-bottom: 10px solid #ffe81f;
  -webkit-animation: 1s spin linear infinite;
  animation: 1s spin linear infinite;
  
  

  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
