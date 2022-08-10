import {
  BellFilled,
  BookOutlined,
  GifOutlined,
  GiftFilled,
  GiftOutlined,
  LoginOutlined,
  MessageOutlined,
  PlusCircleFilled,
  PlusOutlined,
  SettingFilled,
  SettingOutlined,
  TagFilled,
  TagOutlined,
} from "@ant-design/icons";
import React, { useRef } from "react";
import { auth } from "../../firebase";
import { useClickOutSide } from "../../hooks/useClickOutside";
import { useRedux } from "../../hooks/useRedux";
import { _logout } from "../../redux/actions/auth";
import { Divider } from "../divider";
import NoUpdate from "./NoUpdate";
import "./style/index.css";
import { NotificationMenuItem } from "./style/NotificationMenuStyle";
import {
  Avatar,
  Container,
  ContentWrapper,
  ProfileMenuItem,
  ProfileMenuItemLeft,
  ProfileMenuItemRight,
} from "./style/UserMenu";

const NotificationMenu = ({ setShowNotificationMenu }) => {
  const { dispatch } = useRedux();
  const menu = useRef(null);
  useClickOutSide(menu, () => {
    // menu.current.style.display = 'none'
    setShowNotificationMenu(false)
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
          <ProfileMenuItemLeft></ProfileMenuItemLeft>
          <ProfileMenuItemRight>
            <h4>Notifications</h4>
            {/* <p>View your profile </p> */}
          </ProfileMenuItemRight>
        </ProfileMenuItem>

        <NoUpdate message="You have no notificatons at the moment, please keep an eye on here "/>
        {/* <NotificationMenuItem>
          <h3>Your first update!</h3>
          <div>

          <p>
            Look here for updates on items and shops you've favourited – sales,
            new products and more
          </p>
          </div>
        </NotificationMenuItem> */}
   
      </ContentWrapper>
    </Container>
  );
};

export default NotificationMenu;
