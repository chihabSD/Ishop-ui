import React from "react";
import styled from "styled-components";

const ImageCountainer = ({ img, style, children }) => {
  return (
    <Container style={{ ...style }}>
      <Image src={img} />
    {children}
    </Container>
  );
};

export default ImageCountainer;
export const Container = styled.div`
  /* background-color: blue; */

  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;


