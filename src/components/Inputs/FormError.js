import React from 'react'
import styled from "styled-components";
const FormError = ({error}) => {
    console.log(error);
  return (
    <ErrorContainer>
        <p>{error}</p>
    </ErrorContainer>

  )
}

export default FormError



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

  color: ${({ error }) => (!error ? "#F65A83" : "#222")}; 
  font-size: 1.1rem;

   font-size: 1rem;
   font-weight: 700;
  }

`;
