import React from "react";
import styled from "styled-components";

const SecionBodyContainer = ({ children, style, height }) => {
  return <SectionBody  style={{...style}} height={ height}>{children}</SectionBody>;
};

export default SecionBodyContainer;

const SectionBody = styled.div`
  flex: 1;
  padding: 10px;
  min-height:   ${({ height }) => (height ? height : '200px')};
  /* min-height: 200px; */
  border-bottom: 1px solid #f1f1f1;
  /* margin-top: 50px; */
`;
