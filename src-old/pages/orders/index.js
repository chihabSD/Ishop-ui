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
const Orders = () => {

 
  return (
    <>
      <Header />
      <AccountSettingsContainer>
        <SideMenu />
        <RightContainer>
         
         Orders
        </RightContainer>
      
      </AccountSettingsContainer>
    </>
  );
};

export default Orders;
