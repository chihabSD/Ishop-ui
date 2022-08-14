import React from "react";
import Header from "../../components/header/Header";
import SettingsContents from "../../components/SettingsContents";
import SettingsTabs from "../../components/SettingsTabs";
import SideMenu from "../../components/sidebar";
import { AccountSettingsContainer, RightContainer } from "../../styles/Containers";
const AccountSettings = () => {

  return (
    <>
      <Header />
      <AccountSettingsContainer>
        <SideMenu />

        {/* Right container  */}
        <RightContainer direction="column">
          <SettingsTabs />

          <SettingsContents>Account settings default  </SettingsContents>
        </RightContainer>
      </AccountSettingsContainer>
    </>
  );
};

export default AccountSettings;
