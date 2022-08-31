import React from "react";
import styled from "styled-components";
import SettingsContentsUI from "../../components/SettingsContents";
import SettingsTabs from "../../components/SettingsTabs";
import SideBarUI from "../../components/Sidebar";
import { SettingsLayoutContainer } from "../../Styles/SettingsLayoutContainer";
import Authentications from "./Authentications";
import DeviceHistory from "./DeviceHisory";
import SignHistory from "./SignHistory";
import { SettingsUIContainer } from "./Style";

const SecurityUI = () => {
  return (
    <SettingsUIContainer>
      <SettingsLayoutContainer>
        <SideBarUI />
        <SettingsContentsUI column>
          <SettingsTabs />

          <Contents>
          <Authentications />
          <SignHistory />
          <DeviceHistory />
          </Contents>
        </SettingsContentsUI>
      </SettingsLayoutContainer>
    </SettingsUIContainer>
  );
};

export default SecurityUI;

const Contents = styled.div`
  /* background-color: blue; */
  overflow-y: scroll;
  height: 100vh;
`;
