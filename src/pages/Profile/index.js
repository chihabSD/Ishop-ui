import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SettingsContentsUI from "../../components/SettingsContents";
import SideBarUI from "../../components/Sidebar";
import { SettingsLayoutContainer } from "../../Styles/SettingsLayoutContainer";
import ImageUpload from "./ImageUpload";
import { SettingsUIContainer, ProfileHeader, Contents, Left } from "./Style";
// import Details from "./Details";
import PrimaryButton from "../../components/Buttons/Primary";
import Details from "./Details";
import YourName from "./YourName";
import GenderSection from "./GenderSection";
const ProfileUI = () => {
  return (
    <SettingsUIContainer>
      <SettingsLayoutContainer>
        <SideBarUI />

        {/* <RightContainer direction="column"> */}
        <SettingsContentsUI column>
          <ProfileHeader>
            <Left>
              <h1> Your Public Profile</h1>
              <p> Everything on this page can be seen by anyone</p>
            </Left>
            <Link to={`/account/profile/dlsjfsdlfjs`}>
              <PrimaryButton label={"View Profile "} />
            </Link>
          </ProfileHeader>
          <Contents>
            <ImageUpload />
            <YourName />
            <GenderSection />
            <Details />
          </Contents>
        </SettingsContentsUI>
      </SettingsLayoutContainer>
    </SettingsUIContainer>
  );
};

export default ProfileUI;

const Top = styled.div`
  background-color: blue;
`;
