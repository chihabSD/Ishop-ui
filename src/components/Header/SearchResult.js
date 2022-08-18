import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchResult = () => {
  const searches = [
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
  ];

  return (
    <Container>
      <Searches>
        {/* {searches.length > 10 ? searches.splice(0, 11).map(item => <p>item</p>):searches.map(item => <p>Uncut</p>)} */}
        {searches.length > 10
          ? searches
              .slice(0, 9)
              .map((item) => <Search key={item.id} item={item} />)
          : searches.map((item) => <Search key={item.id} item={item} />)}
      </Searches>
    </Container>
  );
};

const Search = ({ item }) => {
  return (
    <SearchResultContainer>
      <SearchOutlined />
      <p>Search</p>
    </SearchResultContainer>
  );
};
export default SearchResult;
const Container = styled.div`
  position: absolute;
  transition: opacity 180ms ease-out,
    box-shadow 180ms cubic-bezier(0.175, 0.885, 0.4, 1.1),
    transform 180ms cubic-bezier(0.175, 0.885, 0.4, 1.1),
    visibility 180ms linear;
  box-shadow: 0 4px 20px rgba(34, 34, 34, 0.15);
  transform: scaleX(1) scaleY(1) perspective(1px);
  visibility: visible;
  display: flex;
  flex-direction: column;
  border-radius: 12px;

  background-color: #f1f1f1;

  z-index: 1;

  background-color: #fff;

  z-index: 1;

  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  height: 400px;
  /* width: 100%; */
`;

const Searches = styled.div`
  padding: 15px;
  line-height: 18px;
  height: auto;
  overflow: hidden;

  p {
    margin: 10px;
  }
`;

const SearchResultContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 5px;
  transition: all 0.5s  ease-in;
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;
