import React from "react";
import styled from "styled-components";
import SettingsContentsUI from "../../components/SettingsContents";
import SettingsTabs from "../../components/SettingsTabs";
import SideBarUI from "../../components/Sidebar";
import { SettingsLayoutContainer } from "../../Styles/SettingsLayoutContainer";
import Currency from "./Currency";
import Language from "./Language";
import PostMail from "./Subscriptions";
import Region from "./Region";
import { SettingsUIContainer } from "./Style";

const PreferencesUI = () => {
  return (
    <SettingsUIContainer>
      <SettingsLayoutContainer>
        <SideBarUI />
        <SettingsContentsUI column>
          <SettingsTabs />

          <Contents>
            <h1
              style={{
                fontWeight: "700",
                fontSize: "16px",
                margin: "15px",
                marginBottom: "5px",
                marginTop: "30px",
              }}
            >
              Account Preferences
            </h1>
            <Language />
            <Currency />
            <Region />
            <PostMail />
          </Contents>
        </SettingsContentsUI>
      </SettingsLayoutContainer>
    </SettingsUIContainer>
  );
};

export default PreferencesUI;

const Contents = styled.div`
  /* background-color: blue; */
  overflow-y: scroll;
  height: 100vh;
`;
