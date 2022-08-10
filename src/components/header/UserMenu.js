import {
  GiftFilled,
  LoginOutlined,
  SettingFilled,
  SettingOutlined,
} from "@ant-design/icons";
import React, { useRef } from "react";
import { auth } from "../../firebase";
import { useClickOutSide } from "../../hooks/useClickOutside";
import { useRedux } from "../../hooks/useRedux";
import { _logout } from "../../redux/actions/auth";
import { Divider } from "../divider";
import "./style/index.css";
import {
  Avatar,
  Container,
  ContentWrapper,
  ProfileMenuItem,
  ProfileMenuItemLeft,
  ProfileMenuItemRight,
} from "./style/UserMenu";

const UserMenu = ({ setShowUserMenu }) => {
  const { dispatch } = useRedux();
  const menu = useRef(null);
  useClickOutSide(menu, () => {
    // menu.current.style.display = 'none'
    setShowUserMenu(false);
  });

  const logout = () => {
    auth.signOut();
    dispatch(_logout());
  };
  const fontSize = "20px";
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
            <h4>Chihab adam</h4>
            <p>View your profile </p>
          </ProfileMenuItemRight>
        </ProfileMenuItem>

        <ProfileMenuItem>
          <GiftFilled className="icon" style={{ fontSize }} />
          <p>Gift card baalance $0.00</p>
        </ProfileMenuItem>
        <ProfileMenuItem>
          <SettingFilled className="icon" style={{ fontSize }} />
          <p>Account settings</p>
        </ProfileMenuItem>

        <Divider />
        <ProfileMenuItem onClick={() => logout()}>
          <LoginOutlined className="icon" style={{ fontSize }} />
          <p>Logout</p>
        </ProfileMenuItem>
      </ContentWrapper>
    </Container>
  );
};

export default UserMenu;
