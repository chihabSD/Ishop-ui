import React from "react";
import styled from "styled-components";
import SettingsContentsUI from "../../components/SettingsContents";
import SettingsTabs from "../../components/SettingsTabs";
import SideBarUI from "../../components/Sidebar";
import { SettingsLayoutContainer } from "../../Styles/SettingsLayoutContainer";
import Address from "./Address";
import { SettingsUIContainer } from "./Style";

const AddressesUI = () => {
  return (
    <SettingsUIContainer>
      <SettingsLayoutContainer>
        <SideBarUI />
        <SettingsContentsUI column>
          <SettingsTabs />

          <Contents>
          <Address />
          </Contents>
        </SettingsContentsUI>
      </SettingsLayoutContainer>
    </SettingsUIContainer>
  );
};

export default AddressesUI;
const Contents = styled.div`
  /* background-color: blue; */
  overflow-y: scroll;
  height: 100vh;
`;


