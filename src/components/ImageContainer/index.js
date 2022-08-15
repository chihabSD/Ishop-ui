import React from "react";
import styled from "styled-components";

const ImageCountainer = ({ img, style }) => {
  return (
    <Container style={{ ...style }}>
      <Image src={img} />
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
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
