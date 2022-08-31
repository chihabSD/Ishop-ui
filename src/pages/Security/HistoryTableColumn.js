import React from "react";
import styled from "styled-components";

const HistoryTableColumn = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};

export default HistoryTableColumn;
const Container = styled.div`

  /* text-align: center; */
  h1 {
    font-size: 15px;
    font-weight: 500;
    margin-left: 15px;
  }
`;
