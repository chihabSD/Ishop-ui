import {
  MessageOutlined,
  SettingFilled,
  CreditCardOutlined,
  StarFilled,
  LoginOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import SideMenu from "../../components/sidebar";
import { RightContainer } from "../../styles/Containers";
import MenuItem from "./MenuItem";
import {
  AccountSettingsContainer,
  SettingsLeft,
  SettingsRight,
  SettingsMenu,
  Contents,
} from "./style/AccountSettingStyle";
const AccountSettings = () => {
  const [selected, setSelected] = useState(0);
  const handleSelected = (id) => {
    setSelected(id);
  };
  const menus = [
    {
      id: 0,
      name: "Public Profile",
      children: [],
      icon: <MessageOutlined className="icon" style={{ fontSize: "20px" }} />,
    },
    {
      id: 33,
      name: "Settings",
      children: [],
      icon: <SettingFilled className="icon" style={{ fontSize: "20px" }} />,
    },
    {
      id: 1,
      name: "Payments",
      children: [],
      icon: (
        <CreditCardOutlined className="icon" style={{ fontSize: "20px" }} />
      ),
    },
    {
      id: 10,
      name: "Purchases & Reviews",
      children: [],
      icon: <StarFilled className="icon" style={{ fontSize: "20px" }} />,
    },

    {
      id: 4,
      name: "Sign Out",
      children: [],
      icon: <LoginOutlined className="icon" style={{ fontSize: "20px" }} />,
    },
  ];
  return (
    <>
      <Header />
      <AccountSettingsContainer>
        <SideMenu />
        <RightContainer>
          Rigght side
        </RightContainer>
        {/* <div style={{backgroundColor:'white', marginLeft:'30px', marginTop:'20px'}}>

        <SettingsLeft>
          {menus.map((item) => (
            <MenuItem key={item} item={item} selected={selected} onClick={()=>handleSelected(item.id)}/>
           
          ))}
        </SettingsLeft>
      </div>
        <SettingsRight>Right</SettingsRight> */}
      </AccountSettingsContainer>
    </>
  );
};

export default AccountSettings;
