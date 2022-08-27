import React from "react";
import SettingsContentsUI from "../../components/SettingsContents";
import SideBarUI from "../../components/Sidebar";
import { SettingsLayoutContainer } from "../../Styles/SettingsLayoutContainer";
import { SettingsUIContainer } from "./Style";

const ProfileUI = () => {
  return (
    <SettingsUIContainer>
    <SettingsLayoutContainer>
      <SideBarUI />
      <SettingsContentsUI>
        Profile
      </SettingsContentsUI>
    </SettingsLayoutContainer>
  </SettingsUIContainer>
  );
};

export default ProfileUI;
