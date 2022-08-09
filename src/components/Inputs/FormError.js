import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/theme";
const FormError = ({ error, style }) => {
  return (
    <ErrorContainer style={{...style}}>
      <p>{error}</p>
    </ErrorContainer>
  );
};

export default FormError;

// import React from "react";
// import styled from "styled-components";

// const FormError= ({ isError }) => {
//   return  <Title isError={isError}>{isError}</Title>;
// };

// export default FormError;
const ErrorContainer = styled.div`
  margin: 10px 20px;
  /* font-weight: 700; */
  /* margin: 1px 20px; */
  /* padding-top: 10px; */
  p {
    color: ${({ error }) => !error && COLORS.red};
    font-size: 1rem;

    font-size: 0.9rem;
    /* font-weight: 600; */
  }
`;
