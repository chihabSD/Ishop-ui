import styled from "styled-components";
export const ModalContainer = styled.div`
  position: fixed;
  top: 10;
  right: 0;
  bottom: 30;
  left: 0;
  z-index: 1000;
  /* background-color: black; */
  display: flex;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  background-color: rgba(0,0,0,0.5);
  
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;