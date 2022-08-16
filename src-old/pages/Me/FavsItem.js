import React from "react";
import styled from "styled-components";

const FavsItem = () => {
  return (
    <Container>
      <Item>
      <ItemTop>tOP</ItemTop>
        <h3>Favrout items</h3>
        <div># 3 items</div>
      </Item>
      <Item>
        <ItemTop>tOP</ItemTop>
        <h3>Favourite shops</h3>
        <div># shop found </div>
      </Item>
    </Container>
  );
};

export default FavsItem;
const Container = styled.div`
  width: 100%;
  padding-bottom: 30px;
  padding: 20px;
  display: flex;
`;

const Item = styled.div`
  /* width: 100%; */
  padding-bottom: 30px;
  /* padding: 20px; */
  /* background-color: red; */
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 10px; */

  h3 {
    font-size: 15px;

  }
  /* display: flex; */
`;
const ItemTop = styled.div`
  /* width: 100%; */
  padding-bottom: 30px;
  border-radius: 15px; 
  height: 70px;
  width: 200px;
  background-color: blue;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
