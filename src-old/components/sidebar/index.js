import {
  MessageOutlined,
  SettingFilled,
  CreditCardOutlined,
  StarFilled,
  LoginOutlined,
  InboxOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
import Icon, { HomeOutlined } from "@ant-design/icons";
// import Header from "../../components/header/Header";
// import MenuItem from "./sidebar/MenuItem";
import {
  AccountSettingsContainer,
  SettingsLeft,
  SettingsRight,
  SettingsMenu,
} from "./style/AccountSettingStyle";
import { useRedux } from "../../hooks/useRedux";
import { setCurrentSideMenu } from "../../redux/reducers/page";

const SideMenu = () => {
  let navigate = useNavigate();
  const { dispatch, currentSideBarMenu, sideBarMenu } = useRedux();

  const handleSelected = (item) => {
    const { id, route } = item;
    navigate(route);

    dispatch(setCurrentSideMenu(id));
  };

  return (
    <AccountSettingsContainer>
      <div
        style={{
          backgroundColor: "white",
          marginLeft: "30px",
          marginTop: "20px",
          margin: "20px",
        }}
      >
        <SettingsLeft>
          {sideBarMenu.map((item) => (
            <Item
              key={item}
              item={item}
              selected={currentSideBarMenu}
              onClick={() => handleSelected(item)}
            />
          ))}
        </SettingsLeft>
      </div>
    </AccountSettingsContainer>
  );
};

export default SideMenu;
