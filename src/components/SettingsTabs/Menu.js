import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/theme";

const Menu = ({ item, currentSettingTab, onClick }) => {
  return (
    <Item currentSettingTab={currentSettingTab} item={item} onClick={onClick}>
      <li  onClick={onClick}>{item.name}</li>
    </Item>
  );
};

export default Menu;

const Item = styled.ul`
  background-color: white;
  /* padding: 10px; */
  /* display: flex; */
  list-style-type: none;
  overflow: hidden;
  width: 100%;
  align-items: center;
  /* margin-top: 20px; */
  padding: 0;
  justify-content: center;

    font-weight: 400;
    font-size: 15px;
  cursor: pointer;
  /* border-bottom: 1px solid #f1f1f1; */
  /* padding-bottom: 10px; */
  li {
    text-align: center;
    border: 1px solid #f1f1f1;
    padding: 15px;

    /* border-top: 5px solid ${COLORS.darkgray}; */
    border-top: ${({ currentSettingTab, item }) =>
      currentSettingTab === item.id ? `5px solid #d3d3d3` : ``};
    border-bottom: ${({ currentSettingTab, item }) =>
      currentSettingTab !== item.id ? `` : `none`};
    transition: all 0.5s ;
    &:hover {
      /* background-color: blue; */
      /* color: white; */
      opacity: 0.5;
      border-bottom: none;
      border-top: ${({ currentSettingTab, item }) =>
        currentSettingTab === item.id ? `5px solid #d3d3d3` : ``};
    }
    /* background-color: blue; */
  }
`;
