import styled from "styled-components";

export const MainLayoutContainer = styled.div`
  height: 100vh;
  display: grid;
  background-color: white;
  grid-template-areas:
    "header header header"
    "middleContents middleContents middleContents"
    "footer footer footer";

  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: auto 1fr 100px;
`;
