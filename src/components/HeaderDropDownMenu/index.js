import React from "react";
import styled from "styled-components";

import { categories } from "../../constants/categories";
const HeaderDropDownMenu = () => {
  // const categories = [
  //   { id: 0, name: "Jewellery & Accessories" },
  //   { id: 0, name: "Clothing & Shoes" },
  //   { id: 0, name: "Home & Living" },
  //   { id: 0, name: "Wedding & Party" },
  //   { id: 0, name: "Toys & Entertainment" },
  //   { id: 0, name: "Art & Collectibles" },
  //   { id: 0, name: "Craft Supplies & Tools" },
  //   { id: 0, name: " Vinage" },
  // ];
  return (
    <Container>
      {categories.children.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
          {item.children && <SubMenu></SubMenu>}
        </li>
      ))}
    </Container>
  );
};
export default HeaderDropDownMenu;
const Container = styled.ul`
  list-style-type: none; /*to remove bullets*/

  z-index: -1;
  display: flex;
  align-items: stretch; /* Default */
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;

  transition: all 0.5s;

  line-height: 18px;
  li {
    position: relative;
    transition: all 0.5s;
    display: inline-block;
    /* padding: 5px ; */
    padding-top: 15px;
    /* padding-bottom: 20px; */

    &:hover :after {
      opacity: 1;
    }
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 4px;
      background: blue;
      opacity: 0;
      left: 0;
      right: 0;
      bottom: -11px;
    }
    cursor: pointer;
    p {
      font-size: 12px;
      font-weight: 400;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
      /* opacity: 1; */
      color: grey;
      /* border-bottom: 1px solid blue; */
    }
  }
`;

const SubMenu = styled.li`
  /* height: 300px; */
  background-color: blue;
  width: 400px;
  top: 10;
  left: 0;
  right: 0;
  height: 300px;
  position: absolute;
`;
