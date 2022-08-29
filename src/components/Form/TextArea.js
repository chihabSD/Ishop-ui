import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/theme";
import FormError from "./FormError";

const TextArea = ({error, name, register, title }) => {
  return (
    <OuterContainer error={error}>
      <h3>{title}</h3>
      <Container error={error}>
        <textarea
        {...register(name)}
          rows="5"
          cols="40"
          maxlength="100"
          name={name}
          
          placeholder="Write something here ...."
          style={{ width: "100%", maxHeight: "100%", padding: "10px", border:'2px solid #f1f1f1', lineHeight:'17px' }} 
        ></textarea>
      </Container>
              {error && <FormError error={error.message} style={{ margin: "1px 0" }} />}
    </OuterContainer>
  );
};

export default TextArea;

const Container = styled.div`
  height: 200px;
  background-color: white;
  display: flex;
  /* border: 1px solid blue; */
  border: ${({ error }) =>
   error ? `1.5px solid ${COLORS.red}` : `1px solid lightgray`};
    /* border: 1px solid ${({ error }) =>
      error ? COLORS.red : "lightgray"}; */
`;

const OuterContainer = styled.div`
  padding: 2px;
  h3 {
    font-size: 15px;
    font-weight: 700;
  }
`;
