import React from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import SectionsWraper from "./SectionsWraper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import FormInput from "../../components/Form/FormInput";
import SecionBodyContainer from "./SecionBodyContainer";
import SectionContainer from "./SectionContainer";
import { Divider } from "antd";
import Primary from "../../components/Buttons/Primary";
const SectionTwoUI = () => {
  const RegisterSchema = yup.object().shape({
    city: yup.string().required("City is required"),
    birthdate: yup.date().required("Required"),
    description: yup
      .string()
      .min(50, "Must be more than 10 characters")
      .required("This field is requried"),
  });

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
    <SectionsWraper>
      <Container>
        <SectionContainer>
          <SectionHeader title=" Password " />
          <SecionBodyContainer>
            <FormInput
              type="text"
              register={register}
              name={"currentpassword"}
              width={"100%"}
              error={errors.city}
              label={"Current password"}
            />
            <FormInput
              type="text"
              register={register}
              name={"newpassword"}
              width={"100%"}
              error={errors.city}
              label={"New password"}
            />
            <FormInput
              type="text"
              register={register}
              name={"confirmpassword"}
              width={"100%"}
              error={errors.city}
              label={"Confirm new password"}
            />

            <Divider style={{ marginTop: "50px", border: "none" }} />

            <Primary
              onClick={handleSubmit(onSubmit)}
              color="#222"
              label={"Change password"}
              error={!isDirty && !isValid}
              style={{ width: "30%", borderRadius: "0px" }}
            />
          </SecionBodyContainer>
        </SectionContainer>
      </Container>
    </SectionsWraper>

    // <SectionsWraper>
    //   <Container>
    //     <Right>
    //       <SectionHeader title="Password" />
    //       <SectionBody>

    //          </SectionBody>
    //     </Right>
    //   </Container>
    // </SectionsWraper>
  );
};

export default SectionTwoUI;
const Container = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #f1f1f1;
  flex-direction: column;
  border-radius: 10px;
  height: 300px;
  padding-bottom: 10px;
`;

const SectionBody = styled.div`
  flex: 1;
  background-color: orange;
  padding: 10px;
`;
