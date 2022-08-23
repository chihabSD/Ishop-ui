import React from "react";
import styled from "styled-components";

const HeaderDropDownMenu = () => {
  const categories = [
    { id: 0, name: "Jewellery & Accessories" },
    { id: 0, name: "Clothing & Shoes" },
    { id: 0, name: "Home & Living" },
    { id: 0, name: "Wedding & Party" },
    { id: 0, name: "Toys & Entertainment" },
    { id: 0, name: "Art & Collectibles" },
    { id: 0, name: "Craft Supplies & Tools" },
    { id: 0, name: " Vinage" },
  ];
  return (
    <Container>
    {categories.map(item => (
      <li key={item.id}><p>{item.name}</p></li>
    ))}
    </Container>
  );
};

export default HeaderDropDownMenu;
const Container = styled.ul`
/* margin: 10px; */
  list-style-type: none; /*to remove bullets*/
  display: flex;
  justify-content: space-evenly;
  /* width: 90%; */
  /* overflow: hidden; */
  transition: all 0.5s;
  line-height: 18px;
  /* background-color: red; */
  li {
    display: inline-block;
    padding: 10px;
    padding-bottom: 20px;
    cursor: pointer;
    p {
      font-size: 15px;
      font-weight: 500;
    }
    &:hover {
    border-bottom: 1px solid blue;
    }
  }
`;
