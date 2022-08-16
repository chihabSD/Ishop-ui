import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import {
  SearchBar,
  SearchIconContainer,
} from "../../components/header/style/HeaderStyle";
import FavouriteResult from "./FavouriteResult";

const items = [
    {id:1},
    {id:2},
    {id:3},
    {id:32},
    {id:990},
    {id:80},
]
const FavSearch = () => {
  return (
    <Container>
      <Top>
      <SearchBox>
        <SearchBar>
          <input placeholder="Seach for everything..." type="search" />
          <SearchIconContainer>
            <SearchOutlined />
          </SearchIconContainer>
        </SearchBar>
      </SearchBox>
      <Right>
        <Item>One</Item>
        <Item>Two</Item>
      </Right>
    
      </Top>
      <ResultContainer>
        {items.map(item => (
            <FavouriteResult key={item.id} item={item} />
        ))}
      </ResultContainer>
    </Container>
  );
};

export default FavSearch;

const Container = styled.div`
  margin-top: 20px;
  /* display: flex; */
  /* align-items: center; */
`;

const Top = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 100%;
`;
const SearchBox = styled.div`
  display: flex;
  /* border-radius: 12px; */
  /* margin: 1px 0px 0 0; */
  background-color: #fff;
  /* margin-bottom: 50px; */
  /* height: 100px; */
  /* opacity: 1; */
  transform: scaleX(1) scaleY(1) perspective(1px);
  visibility: visible;
  white-space: nowrap;
  /* overflow: hidden; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: green; */
  /* max-width: 1400px; */
  /* width: 100%; */
  /* margin: 0 auto; */
  box-sizing: inherit;
  font-size: 14px;
  line-height: 1.4;
  /* height: 30px; */
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 36px;
  padding-left: 36px;
  /* width: 100%; */
  flex: 1;
`;

const Right = styled.div`
  background-color: blue;
  margin-left: 20px;
`;
const Item = styled.div`
  background-color: blue;
  margin-left: 30px;
`;

const ResultContainer= styled.div`
/* margin-top: 10px; */
/* display: flex; */
margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
`;

