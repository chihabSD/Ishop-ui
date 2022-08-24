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
  /* display: flex; */
  /* justify-content: space-evenly; */
  /* width: 100%; */

  display: flex;
    align-items: stretch; /* Default */
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;


    transition: all 0.5s;
  /* overflow: hidden; */
 
  line-height: 18px;
  li {
    transition: all 0.5s;
    display: inline-block;
    padding: 5px ;
    padding-bottom: 20px;
    cursor: pointer;
    p {
      font-size: 14px;
      font-weight: 500;
    }
    &:hover {
    border-bottom: 1px solid blue;
    }
  }
`;
