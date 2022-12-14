import styled from "styled-components";
export const PrimaryButtonContainer = styled.div`
  background: ${({ color }) => (color ? color : "#fff")};
  display: flex;
  align-items: center;
  margin: 0 20px;
  border-radius: 15px;
  margin-top: 10px;
  /* border: 2px solid black; */
  justify-content: center;
  /* border: 0.5px solid lightgray; */
  border: 2px solid black;
  padding: 10px 30px;
  font-weight: 700;
  pointer-events: ${({disabled}) => (disabled ? 'none':'auto')};
  opacity: ${({disabled}) => (disabled ? '0.2':'1')};
    /* opacity: 0.4; */
  cursor: pointer;
  &:hover {
    border: 1px solid black;
    background-color: ${({ color }) => (color ? "#49475B " : "#fff")};
    /* border: ${({ color }) => (color ? "none " : "#fff")}; */
  }
  span {
    margin-left: 10px;
    font-size: 1rem;
    color: ${({ color }) => (color ? "#fff" : "")};
  }
`;
