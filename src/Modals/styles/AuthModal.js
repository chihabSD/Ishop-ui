import styled from "styled-components";
export const AuthModalContainer = styled.div`
  width: 500px;
  height: 90%;
  display: flex;
  border: none;
`;
// LEFT
export const AuthModalContainerLeft = styled.div`
  background-color: white;
  border-radius: 25px;
  padding: 20px;
  width: 80%;
  margin-right: 15px;
`;
export const AuthModalContainerLeftHeader = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const AuthModalContainerLeftHeaderTitle = styled.div`
  display: flex;
  align-items: center;
 span {
    font-size: 1.2rem;
  }
`;
export const AuthButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  /* border: 2px solid black; */
  border: 0.5px solid lightgray;
  padding: 5px 30px;
`;
// export const AuthModalContainerFormContainer = styled.div`
// background-color: blue;
// `;

export const AuthModalContainerForm = styled.form`
margin-top: 10px;
/* background-color: blue; */
`;



// RIGHT SIDE 
export const AuthModalContainerRight = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: burlywood;
  }
`;
