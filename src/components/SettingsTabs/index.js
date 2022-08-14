import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTabs } from "../../hooks/useTabs";
import Menu from "./Menu";

const SettingsTabs = () => {
  const { currentSettingTab, handleCurrentSettingTab } = useTabs();


const navigate = useNavigate()
  const menus = [
    { id: 0, name: "Account", route:'/account/settings/menu' },
    { id: 1, name: "Preferences", route:'/account/preferences' },
    { id: 2, name: "Privacy", route:'/account/privacy' },
    { id: 3, name: "Security", route:'/account/security' },
    { id: 4, name: "Address", route:'/account/address' },
    { id: 5, name: "Credit cards", route:'/account/cards' },
    { id: 6, name: "Emails", route:'/account/emails'  },
  ];

  

  const handleTab = (item) => {
    const{id, route} = item
    navigate(route);
    handleCurrentSettingTab(id)
  };

  return (
    <SettingsMenuContainer>
      {menus.map((menu) => (
        <Menu
          key={menu.id}
          item={menu}
          currentSettingTab={currentSettingTab}
          onClick={() => handleTab(menu)}
        />
      ))}
    </SettingsMenuContainer>
  );
};

export default SettingsTabs;
const SettingsMenuContainer = styled.div`
  width: 100%;
  display: flex;
  height: 40px;
  align-items: center;
  /* padding: 10px; */
  /* padding: 10px; */
  /* margin-top: 20px; */
  /* display: flex;
  height: 40px;
  align-items: center;
  padding: 10px; */
  /* padding: 10px;
  display: flex;
  align-items: center; */
`;
