import {
  GiftFilled,
  LoginOutlined,
  SettingFilled,
  SettingOutlined,
} from "@ant-design/icons";
import React, { useRef } from "react";
import { useClickOutSide } from "../../hooks/useClickOutside";
import {
  Avatar,
  Container,
  ContentWrapper,
  ProfileMenuItem,
  ProfileMenuItemLeft,
  ProfileMenuItemRight,
} from "./style/UserMenu";

const UserMenu = ({ setShowUserMenu }) => {
  const menu = useRef(null);
  useClickOutSide(menu, () => {
    // menu.current.style.display = 'none'
    setShowUserMenu(false);
  });
  return (
    <Container ref={menu}>
      <ContentWrapper>
        <ProfileMenuItem>
          <ProfileMenuItemLeft>
            <Avatar
              src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?cs=srgb&dl=pexels-lukas-296282.jpg&fm=jpg"
              alt=""
            />
          </ProfileMenuItemLeft>
          <ProfileMenuItemRight>
            <p>Chihbeddine ahmed</p>
            <h4>View yoru profile</h4>
          </ProfileMenuItemRight>
        </ProfileMenuItem>
        <ProfileMenuItem>
          <GiftFilled className="icon" />
          <p>Gift card baalance $0.00</p>
        </ProfileMenuItem>
        <ProfileMenuItem>
          <SettingFilled className="icon" />
          <p>Account settings</p>
        </ProfileMenuItem>
        <br />

        <br />

        <br />

        <ProfileMenuItem>
          <LoginOutlined className="icon" />
          <p>Logout</p>
        </ProfileMenuItem>
      </ContentWrapper>
    </Container>
  );
};

export default UserMenu;
