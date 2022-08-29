import React from "react";
import styled from "styled-components";
// import { AuthContainer } from "../../styles/Containers";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import FormInputs from "../../components/Inputs/FormInputs";
// import FormButton from "../../components/Inputs/FormButton";
import { Divider } from "antd";
import TextArea from "../../components/Form/TextArea";
import FormInputs from "../../components/Form/FormInput";
import Primary from "../../components/Buttons/Primary";
import { Link } from "react-router-dom";
// import TextArea from "../../components/Inputs/TextArea";

const RegisterSchema = yup.object().shape({
  city: yup.string().required("City is required"),
  birthdate: yup.date().required("Required"),
  description: yup.string()
  .min(50, "Must be more than 10 characters")
  .required("This field is requried")
});

const YourName = () => {
  const {
    register,
    formState: { errors, isValid, isDirty, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = async ({ city, birthdate, description }) => {
    // Submit data to server 
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      

       
      
      <Left>

      <h1>Your name </h1>
      <h3>Chihabeddine </h3>
      </Left>
      
      <Link to="/updatename"> 
        <h2> Chnage your name </h2>
      </Link>
    </Container>
  );
};

export default YourName;
const Container = styled.div`
  /* background-color: yellow; */
  width: 100%;
  /* height: 200px; */
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  h2 {
    font-weight: 300;
    font-weight: 400;
    font-size: 17px;
    margin-left: 50px;
    text-decoration: underline;

  }
  
 
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  h1  {
    font-weight: 300;
    font-weight: 700;
    margin-right: 30px;
    font-size: 15px;

  } ;
  h3 {

    font-size: 15px;
    font-weight: 300;
  }
 
`;
