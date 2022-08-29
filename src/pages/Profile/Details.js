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
// import TextArea from "../../components/Inputs/TextArea";

const RegisterSchema = yup.object().shape({
  city: yup.string().required("City is required"),
  birthdate: yup.date().required("Required"),
  description: yup.string()
  .min(50, "Must be more than 10 characters")
  .required("This field is requried")
});

const Details = () => {
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
      ss
      {/* <AuthContainer> */}
        <FormInputs
          type="text"
          register={register}
          name={"city"}
          width={"100%"}
          error={errors.city}
          label={"City"}
        />

        <FormInputs
          type="date"
          register={register}
          name={"birthdate"}
          width={"100%"}
          error={errors.birthdate}
          label={"Birth Day"}
        />
        <Divider style={{ marginTop: "50px", border:'none' }} />
        <TextArea  register={register}  name={"description"} error={errors.description} title="Tell people a little about yourself"/>

        <Divider style={{ marginTop: "50px", border:'none' }} />

        
        <Primary 
           onClick={handleSubmit(onSubmit)}
           color="#222"
           label={"Save"}
           error={!isDirty && !isValid}
           style={{ width: "30%", borderRadius: "0px" }}
        />
        {/* <FormButton
          onClick={handleSubmit(onSubmit)}
          color="#222"
          label={"Save"}
          error={!isDirty && !isValid}
          style={{ width: "30%", borderRadius: "0px" }}
        /> */}
      {/* </AuthContainer> */}
    </Container>
  );
};

export default Details;
const Container = styled.div`
  /* background-color: yellow; */
  width: 100%;
  /* height: 200px; */
  padding: 20px;
  /* display: flex; */
  border-bottom: 1px solid #f1f1f1;
  p {
    margin-top: 15px;
    font-weight: 300;
  }
 
`;
