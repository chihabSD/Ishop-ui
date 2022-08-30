import React from "react";
import styled from "styled-components";

const SecionBodyContainer = ({ children }) => {
  return <SectionBody>{children}</SectionBody>;
};

export default SecionBodyContainer;

const SectionBody = styled.div`
  flex: 1;
  padding: 10px;
  min-height: 200px;
`;
