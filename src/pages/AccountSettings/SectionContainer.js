import React from "react";
import styled from "styled-components";

const SectionContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SectionContainer;
const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  border: 1px solid #f1f1f1;
  flex-direction: column;
  border-radius: 10px;
  /* height: 300px; */
  padding-bottom: 10px;
`;
