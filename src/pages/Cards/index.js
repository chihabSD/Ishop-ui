import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SettingsContentsUI from "../../components/SettingsContents";
import SettingsTabs from "../../components/SettingsTabs";
import SideBarUI from "../../components/Sidebar";
import { SettingsLayoutContainer } from "../../Styles/SettingsLayoutContainer";
import { SettingsUIContainer } from "./Style";

const CardsUI = () => {
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
        It's only possible to add a new credit card during checkout.
        
        learn how
         <Link to="/cardss" style={{marginLeft:'5px'}}>
          here.
         </Link>
            </h1>
          </Contents>
        </SettingsContentsUI>
      </SettingsLayoutContainer>
    </SettingsUIContainer>
  );
};

export default CardsUI;
const Contents = styled.div`
  /* background-color: blue; */
  overflow-y: scroll;
  height: 100vh;
`;


