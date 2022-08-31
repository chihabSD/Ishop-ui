import { CiCircleFilled, IeCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import SecionBodyContainer from "../../components/Settings/SectionBodyContainer";
import SectionHeader from "../../components/Settings/SectionHeader";
import SectionsWraper from "../../components/Settings/SectionWrapper";
import Secondary from "../../components/Buttons/Secondary";

import Switch from "react-js-switch";
import { Link } from "react-router-dom";
import AuthContainer from "./AuthContainer";
const Authentications = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [option, setOption] = React.useState([
    { id: 1, name: "Yes" },
    { id: 0, name: "No" },
  ]);
  const handleSelectedIem = (item) => {
    setSelectedItem(item.id);
  };

  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
    //...
  };
  return (
    <SectionsWraper>
      <SecionBodyContainer style={{ paddingBottom: "20px" }} height="100px">
        {/* <SecionBodyContainer style={{ height: "90px", paddingBottom: "20px" }}> */}
        <SectionHeader title="dNo changes to the PayPal account linked to your account can be confirmed without this verification code, even if you didn't submit this request." />
        <AuthContainer>
          <p
            style={{
              marginTop: "20px",
              lineHeight: "18px",
              marginBottom: "20px",
              fontSize: "15px",
            }}
          >
            Prevent unauthorised access to your account by requiring
            authentication codes when signing in.
            <Link to="/cookies"> Learn more</Link>
          </p>
        </AuthContainer>
        <AuthContainer>
          <AuthContainerLeftUI
            header="Authenticatior App"
            title="Set up your account to receive authentication codes via a mobile application."
          />
         <SwitchContainer>
          <Switch value={isSwitchOn} onChange={switch_onChange_handle}  color="blue"/>
          </SwitchContainer>
        </AuthContainer>
       
      

        <AuthContainer>
          <AuthContainerLeftUI
            header="Text Messages"
            title="Set up your account to receive authentication codes via a mobile application."
          />
         <SwitchContainer>
          <Switch value={isSwitchOn} onChange={switch_onChange_handle}  color="blue"/>
          </SwitchContainer>
        </AuthContainer>



        <AuthContainer>
          <AuthContainerLeftUI
            header="Phone"
            title="Set up your account to receive authentication codes via a mobile application."
          />
         <SwitchContainer>
          <Switch value={isSwitchOn} onChange={switch_onChange_handle}  color="blue"/>
          </SwitchContainer>
        </AuthContainer>


        
      </SecionBodyContainer>
    </SectionsWraper>
  );
};

const AuthContainerLeftUI = ({ header, title, toggle }) => {
  return (
    <AuthContainerLeft>
      <h1 style={{fontSize:'15px', fontWeight:700, marginBottom:'10px'}}>{header}</h1>
      <p style={{fontSize:'14px', fontWeight:400, }}>{title}</p>
    </AuthContainerLeft>
  );
};
export default Authentications;
const AuthContainerLeft = styled.div``;
const List = styled.ol`
  /* padding: 10px; */
  list-style: circle;
  line-height: 18px;
  li {
    margin-top: 10px;
  }
`;

const SwitchContainer = styled.div`
  margin-left: 20px;
  width: 200px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 50px;
`;
