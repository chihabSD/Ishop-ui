import { BellFilled } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const NoUpdate = ({ message, icon }) => {
  return (
    <Container >
    <BellFilled style={{fontSize:'30px', color:'grey'}}/>
      <p>{message}</p>
    </Container>
    // <Container>

    // <span>{message}</span>
    // </Container>
  );
};

export default NoUpdate;

const Container = styled.div`
  display: grid;
  /* height: 10vh; */
  position: relative;
  white-space: initial;
  background-color: white;
  padding-top: 20px;
  margin-top: -15px;
  border-top: 1p;
  border-top: 0.8px solid  #E5E5E5;
  /* ... is the same as ... */
  padding: 5px;

  p {
    /* display: inline-block; */
    /* width: max-content; */
    white-space: initial;
    color: grey;
    margin-top: 10px;
    font-weight: 400;
    line-height: 18px;
  }
`;
