import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRedux } from "../../hooks/useRedux";
import { setCurrentSettingMenu } from "../../redux/reducers/page";
import Menu from "./Menu";

const SettingsTabs = () => {
  const { settingsMenus, dispatch, currentSettingMenu } = useRedux();

  const navigate = useNavigate();

  const handleTab = (item) => {
    const { id, route } = item;

    dispatch(setCurrentSettingMenu(id));
    navigate(route);
  };

  return (
    <SettingsMenuContainer>
      {settingsMenus.map((menu) => (
        <Menu
          key={menu.id}
          item={menu}
          currentSettingTab={currentSettingMenu}
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
