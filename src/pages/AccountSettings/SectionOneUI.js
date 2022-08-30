import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/theme";
import SectionContainer from "./SectionContainer";
import SectionsWraper from "./SectionsWraper";
import { SectionOne } from "./Style";
import SectionHeader from "./SectionHeader";
import SecionBodyContainer from "./SecionBodyContainer";
import { Link } from "react-router-dom";
import { FacebookFilled, GoogleOutlined, TwitterOutlined } from "@ant-design/icons";

const SectionOneUI = () => {
  return (
    <SectionsWraper>
      <Container>
        <SectionContainer>
          <SectionHeader title=" About you " />
          <SecionBodyContainer>
            <h1 style={{fontSize:'14px', fontWeight:'700'}}> Name </h1>
            <AboutYou>
              <p> Chihabeddine ahmed </p>
              <Link to="/account/profile/edit">
                <p style={{textDecoration:'underline', marginLeft:'20px'}}> Edit profile </p>
              </Link>
            </AboutYou>
            <Member>

            <p>Member since </p>
            <p> 29 June 2020 </p>
            </Member>
          </SecionBodyContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader title="Connected Account " />

          <SecionBodyContainer>
            <Account Icon={<FacebookFilled />} title="Connect with Facebook " />
            <Account Icon={<GoogleOutlined />} title="Connect with Google " />
            <Account Icon={<TwitterOutlined />} title="Connect with Twitter " />
            <p style={{fontSize:'13px', marginTop:'20px'}}>
              Connecting to Facebook will allow your friends to find you on
              DUKAN
            </p>
          </SecionBodyContainer>
        </SectionContainer>
      </Container>
    </SectionsWraper>
  );
};

const Account = ({Icon, title}) => {
  return (
    <div>

    <AccountContainer>
      {Icon}

      <p>{title} </p>
    </AccountContainer>
    </div>
  );
};
export default SectionOneUI;
const Container = styled.div`
  width: 100%;
  padding:  15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
const AboutYou = styled.div`
line-height: 18px;
display: flex;
align-items: center;
  p, h1 {
    font-weight: 400;
    font-size: 14px;
  }
  
`;

const Member = styled.div`
line-height: 18px;

  /* margin-top: 1s0px; */
  p, h1 {
    font-weight: 300;
    font-size: 14px;
  }
  
`;


const AccountContainer = styled.div`
background-origin: red;
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  /* background-color: blue; */
  /* padding-top: 10px; */
  border-bottom: 1px solid #f1f1f1;
  /* margin-top: 10px; */
  p {
    margin-left: 20px;
    font-weight: 400;
    font-size: 14px;
  }
`;
