import React, { useRef } from "react";
import styled from "styled-components";
import { useClickOutSide } from "../../hooks/useClickOutside";
import { UserMenuContainer } from "./style/UserMenu";

const UserMenu = ({ setShowUserMenu }) => {
  const menu = useRef(null);
  useClickOutSide(menu, () => {
    // menu.current.style.display = 'none'
    setShowUserMenu(false);
  });
  return <UserMenuContainer ref={menu}>UserMenu</UserMenuContainer>;
};

export default UserMenu;

