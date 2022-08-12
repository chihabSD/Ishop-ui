import {
  MessageOutlined,
  SettingFilled,
  CreditCardOutlined,
  StarFilled,
  LoginOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
// import Header from "../../components/header/Header";
// import MenuItem from "./sidebar/MenuItem";
import {
  AccountSettingsContainer,
  SettingsLeft,
  SettingsRight,
  SettingsMenu,
} from "./style/AccountSettingStyle";


const SideMenu = () => {
  let navigate = useNavigate(); 
  const [selected, setSelected] = useState(0);
  const handleSelected = (item) => {
    const{id, route} = item
    navigate(route);
    setSelected(id);
  };
  const menus = [
    {
      id: 0,
      name: "Public Profile",
      children: [],
      route:'/account/profile', 
      icon: <MessageOutlined className="icon" style={{ fontSize: "20px" }} />,
    },
    {
      id: 33,
      name: "Settings",
      children: [],
      route:'/settings/settings', 
      icon: <SettingFilled className="icon" style={{ fontSize: "20px" }} />,
    },
    {
      id: 1,
      name: "Payments",
      children: [],
      route:'/settings/payments', 
      icon: (
        <CreditCardOutlined className="icon" style={{ fontSize: "20px" }} />
      ),
    },
    {
      id: 1190,
      name: "Purchases",
      route:'/account/security', 
      children: [],
      icon: <StarFilled className="icon" style={{ fontSize: "20px" }} />,
    },

    {
      id: 190,
      name: "Security",
      route:'/account/security', 
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
    <AccountSettingsContainer>
      <div
        style={{
          backgroundColor: "white",
          marginLeft: "30px",
          marginTop: "20px",
          margin: '20px'
        }}
      >
        <SettingsLeft>
          {menus.map((item) => (
            <Item
              key={item}
              item={item}
              selected={selected}
              onClick={() => handleSelected(item)}
            />
          ))}
        </SettingsLeft>
      </div>
     
    </AccountSettingsContainer>
  );
};

export default SideMenu;
