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
import { useRedux } from "../../hooks/useRedux";
import { useTabs } from "../../hooks/useTabs";
import { RightContainer } from "../../styles/Containers";
import MenuItem from "./MenuItem";
import SettingMenu from "./SettingMenu";
import {
  AccountSettingsContainer,
  SettingsLeft,
  SettingsRight,
  SettingsMenu,
} from "./style/AccountSettingStyle";
import { SettingsContents, SettingsMenuContainer } from "./style/SettingsTabs";
const AccountSettings = () => {
const {currentSettingTab, handleCurrentSettingTab} =   useTabs()
  const menus = [
    { id: 0, name: "Account" },
    { id: 1, name: "Preferences" },
    { id: 2, name: "Privacy" },
    { id: 3, name: "Security" },
    { id: 4, name: "Address" },
    { id: 5, name: "Credit cards" },
    { id: 6, name: "Email" },
  ];

  return (
    <>
      <Header />
      <AccountSettingsContainer >
        <SideMenu />

        {/* Right container  */}
        <RightContainer direction="column" >
          <SettingsMenuContainer>
           {menus.map(menu => (
            <SettingMenu  key={menu.id} item={menu} currentSettingTab={currentSettingTab}/>
           ))}
          </SettingsMenuContainer>
        <SettingsContents>
          
          h1
        </SettingsContents>
        </RightContainer>
      </AccountSettingsContainer>
    </>
  );
};

export default AccountSettings;
