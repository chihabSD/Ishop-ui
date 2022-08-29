import {
  MessageOutlined,
  SettingFilled,
  CreditCardOutlined,
  StarFilled,
  LoginOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider } from "../../components/divider";
import Header from "../../components/header/Header";
import FormButton from "../../components/Inputs/FormButton";
import SideMenu from "../../components/sidebar";
import {
  AccountSettingsContainer,
  RightContainer,
} from "../../styles/Containers";
// import Details from "./Details";
import ImageUpload from "./ImageUpload";
import { ProfileHeader, Left, Contents } from "./style/Style";

const AccountSettings = () => {
  return (
    <>
      <Header />
      <AccountSettingsContainer>
        <SideMenu />
        <RightContainer direction="column">
          <ProfileHeader>
            <Left>
              <h1> Your Public Profile</h1>
              <p> Everything on this page can be seen by anyone</p>
            </Left>
            <Link to={`/account/profile/dlsjfsdlfjs`}>
            
            {/* <FormButton label="View profile" textColor="#111" /> */}
            </Link>
          </ProfileHeader>
          <Contents>
            <ImageUpload />
            {/* <Details /> */}
            
          </Contents>
        </RightContainer>
      </AccountSettingsContainer>
    </>
  );
  
};

export default AccountSettings;
