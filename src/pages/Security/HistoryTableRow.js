import React from "react";
import styled from "styled-components";
const items = [1, 2, 3, 4, 5];
const HistoryTableRow = () => {
  return (
    <Container>
      {items.map((item) => (
        <Item>
          <p>Just row</p>
        </Item>
      ))}
    </Container>
  );
};

export default HistoryTableRow;

const Container = styled.div`
line-height: 18px;
`
const Item = styled.div`
/* margin: 10px; */
padding: 15px;
border-bottom: 1px solid #f1f1f1;

  border-top: 1px solid #f1f1f1;
p {
    font-size: 14px;
    
}
`