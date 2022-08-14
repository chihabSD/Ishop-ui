
import React from "react";
import Header from "../../components/header/Header";
import SettingsContents from "../../components/SettingsContents";
import SettingsTabs from "../../components/SettingsTabs";
import SideMenu from "../../components/sidebar";
import { AccountSettingsContainer, RightContainer } from "../../styles/Containers";
const Account = () => {

  return (
    <>
      <Header />
      <AccountSettingsContainer>
        <SideMenu />

        {/* Right container  */}
        <RightContainer direction="column">
          <SettingsTabs />

          <SettingsContents>The Privacy </SettingsContents>
        </RightContainer>
      </AccountSettingsContainer>
    </>
  );
};

export default Account;
