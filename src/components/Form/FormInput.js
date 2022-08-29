import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/theme";
import FormError from "./FormError";
const FormInputs = ({
  type,
  register,
  name,
  width,
  label,
  children,
  error,
}) => {
  return (
    <Container width={width} error={error}>
      <Title>{label}</Title>

      <input type={type} {...register(name)} />
      {/* If there is an error */}
      {error && <FormError error={error.message} style={{ margin: "1px 0" }} />}
    </Container>
  );
};

export default FormInputs;

export const Container = styled.div`
  line-height: 30px;
  background-color: white;
  width: ${({ width }) => (width ? width : "70%")};
  /* margin-top: 1px; */
  padding: 5px 0px;
  input {
    width: 100%;
    /* background-color: aliceblue; */
    outline: none;
    border: ${({ error }) =>
      error ? `1.5px solid ${COLORS.red}` : `1px solid lightgray`};
    /* border: 1px solid ${({ error }) =>
      error ? COLORS.red : "lightgray"}; */
    /* border: 1px solid lightgray; */
    padding: 7px;
    border-radius: 7px;
  }
  input[type="text"] {
    padding: 10px;
    margin: 5px 0; // add top and bottom margin
  }
`;
export const Title = styled.div`
  font-size: 0.9rem;
  font-weight: 700;

`;
