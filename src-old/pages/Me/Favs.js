import { EditOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const Favs = () => {
  return (
    <Container>
      <Top>
        <h1> Favourit items </h1>
        <EditOutlined style={{marginTop:'10px', fontSize:'20px'}}/>
      </Top>
      <Bottom>
        <p># Public</p>
        <p>3 Item </p>
      </Bottom>
    </Container>
  );
};

export default Favs;

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
`;
const Top = styled.div`
  /* align-items: center; */

  display: flex;
  /* height: 40px; */
  /* background-color: red; */
  h1 {
    margin-right: 30px;
    font-size: 2rem;
  }
`;

const Bottom = styled.div`
  display: flex;
  line-height: 30px;
  
`;