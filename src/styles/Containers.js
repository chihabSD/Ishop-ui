import { Link } from "react-router-dom";
import styled from "styled-components";
export const ParentContainer = styled.div`
  background-color: gray;

  min-height: 55vh;
  /* padding-top: 10px; */
`;
// LEFT

export const RightContainer = styled.div`
  background-color: white;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  margin: 20px;
  margin-left: 0;
  flex: 1;

  flex-direction: ${({ direction }) => (direction ? direction : "row")};
`;

// Account settings container
export const AccountSettingsContainer = styled.div`
  background-color: #f1f1f1;
  min-height: 80vh;

  /* width: 400px; */
  /* margin: 0 auto;
  margin-top: 0; */
  display: flex;
  /* padding: 10px; */
  justify-content: space-between;

  /* margin: 10px 0px 0 0; */

  /* background-color: green; */
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;

  padding-right: 36px;
  padding-left: 36px;
`;

export const AuthContainer = styled.div`
  background-color: white;

  border-radius: 25px;
  width: 80%;
  margin-right: 15px;
`;