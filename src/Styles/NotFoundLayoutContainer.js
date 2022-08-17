import styled from "styled-components";

export const NotFoundLayoutContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
  "header header header"
    "middleContents middleContents middleContents"

    ;
    /* grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 70px 1fr 300px;

  grid-template-columns: 1fr 4fr ; */
    grid-template-rows: 70px 1fr;
`;
