import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SettingsContentsUI from "../../components/SettingsContents";
import SettingsTabs from "../../components/SettingsTabs";
import SideBarUI from "../../components/Sidebar";
import { SettingsLayoutContainer } from "../../Styles/SettingsLayoutContainer";
import Notifications from "./Notifications";
import { SettingsUIContainer } from "./Style";

const EmailsUI = () => {
  return (
    <SettingsUIContainer>
      <SettingsLayoutContainer>
        <SideBarUI />
        <SettingsContentsUI column>
          <SettingsTabs />

          <Contents>
            <h1
              style={{
                fontWeight: "400",
                fontSize: "16px",
                margin: "15px",
                marginBottom: "5px",
                marginTop: "30px",
              }}
            >
              Email settings for adamchihab2012@hotmail.com
            </h1>

            <Notifications />
          </Contents>
        </SettingsContentsUI>
      </SettingsLayoutContainer>
    </SettingsUIContainer>
  );
};

export default EmailsUI;
const Contents = styled.div`
  /* background-color: blue; */
  overflow-y: scroll;
  height: 100vh;
`;
