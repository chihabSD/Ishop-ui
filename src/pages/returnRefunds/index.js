import {
  MessageOutlined,
  SettingFilled,
  CreditCardOutlined,
  StarFilled,
  LoginOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import SideMenu from "../../components/sidebar";
import { AccountSettingsContainer, RightContainer } from "../../styles/Containers";
import MenuItem from "./MenuItem";
;
const ReturnRefunds = () => {

 
  return (
    <>
      <Header />
      <AccountSettingsContainer>
        <SideMenu />
        <RightContainer>
         
        Return and refunds
        </RightContainer>
      
      </AccountSettingsContainer>
    </>
  );
};

export default ReturnRefunds;
