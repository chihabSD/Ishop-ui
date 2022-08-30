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
import { Link } from "react-router-dom";
const SectionThreeUI = () => {
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
          <SectionHeader title=" Close your account " />

          <SecionBodyContainer>
            <Contents>
              <h1 style={{fontSize:'16px', marginBottom:'10px',  fontWeight:'700'}}> What happens when you close your account ?</h1>

              <ol>
                <li>Your account will be inactive, until you reopen it.</li>
                <li>Your profile will no longer appear anywhere on Etsy.</li>
                <li>We'll close any non-delivery cases you opened. </li>
                <li>
                  Your account settings will remain intact, and no one will be
                  able to use your username.
                </li>
              </ol>
              <p>
              You can reopen your account anytime. Just sign back in to Etsy or
              contact Etsy support for help.
            </p>

            <p>
              Want to permanently delete your account instead? Go to your
             <Link to="/privacy/settings" style={{fontWeight:'inherit', fontSize:'inherit', marginLeft:5, marginRight:5}}>
             Privacy Settings
             </Link> 
             
              and click "Request deletion of your data."
            </p>
            </Contents>

           
            <Divider style={{ marginTop: "50px", border: "none" }} />

            <Primary
              onClick={handleSubmit(onSubmit)}
              color="#222"
              label={"Close account "}
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

const Container = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;



const Contents = styled.div`
  line-height: 25px;
  ol {
    li {
      list-style-type: none;
      font-weight: 400;
      font-weight: 14px;
      padding: 0 0 0px 23px;
      background: url(https://www.computerhope.com/cdn/arrow.png) no-repeat left;
      /* center; */
    }
  }
`;

export default SectionThreeUI;
