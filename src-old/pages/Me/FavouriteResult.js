import { HeartFilled } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const FavouriteResult = ({ item }) => {
  return (
    <Container>
      <Top>
        <img src="https://cdn.dribbble.com/userupload/3269133/file/original-bb4a5ff283c8297d5e034c96b3c851b2.jpg?compress=1&resize=1024x768" />
      </Top>
      <Bottom>
        <h1>Some descript</h1>
        <p> User</p>
        <h3> $9.70</h3>
        <p>  Best seller </p>
      </Bottom>
      <Love>
        <HeartFilled sty />
      </Love>
    </Container>
  );
};

export default FavouriteResult;
const Container = styled.div`
  position: relative;
  margin: 10px;
  background-color: whtie;
  /* border: 1px solid #d3d3d3; */
  padding-bottom: 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  line-height: 17px;
  transition: transform .5s;
&:hover {
    transform: scale3d(1.006, 1.006, 1)
/* ; background-color: red; */
}
`;

const Top = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Love = styled.div`
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;

  right: 10px;
  top: 10px;
`;

const Bottom = styled.div`
  margin: 10px;
  h1 {
    font-size: 15px;
    font-weight: 300;
  }
  p {
    font-size: 13px;

  };
  h3 {
    font-size: 18px;
  }
`;
