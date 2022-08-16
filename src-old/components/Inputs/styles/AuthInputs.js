import styled from "styled-components";
export const AuthInputsTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
`;
export const AuthInputsContainer = styled.div`
  width: 100%;
  
  margin-top: 20px;
  padding: 0 20px;
  input {
    width: 100%;
    /* background-color: aliceblue; */
    outline: none;
    border: 1px solid lightgray;
    padding: 7px;
    border-radius: 7px;
  }
  input[type="text"] {
    padding: 10px;
    margin: 10px 0; // add top and bottom margin
  }
`;
