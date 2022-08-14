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
import { Link } from "react-router-dom";
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
  UserMenuList,
} from "./style/UserMenu";
import UserMenuItem from "./UserMenuItem";

const UserMenu = ({ setShowUserMenu }) => {
  const { dispatch, user } = useRedux();
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
        <UserMenuList>
          <li>
            <Avatar src={user.picture} alt="" />

            <ProfileMenuItemRight>
              <h4>{user.name}</h4>
              <p>View your profile </p>
            </ProfileMenuItemRight>
          </li>
        </UserMenuList>

        <UserMenuItem label={`Gift card baalance $${200}`}>
          <GiftOutlined className="icon" style={{ fontSize }} />
        </UserMenuItem>

        <UserMenuItem label="Messages">
          <MessageOutlined className="icon" style={{ fontSize }} />
        </UserMenuItem>

        <UserMenuItem label="Your offers">
          <TagFilled className="icon" style={{ fontSize }} />
        </UserMenuItem>

        <UserMenuItem label="Purchases and reviews">
          <BookOutlined className="icon" style={{ fontSize }} />
        </UserMenuItem>

        <UserMenuItem label="Account settings" isLink url="/account/settings/menu">
          <SettingFilled className="icon" style={{ fontSize }} />
        </UserMenuItem>

        <UserMenuItem label="Sell with us">
          <PlusOutlined className="icon" style={{ fontSize }} />
        </UserMenuItem>

        <Divider />

        <UserMenuItem label="Logout" onClick={() => logout()}>
          <LoginOutlined className="icon" style={{ fontSize }} />
        </UserMenuItem>

        {/* <UserMenuList onClick={() => logout()}>
          <li>
            <LoginOutlined className="icon" style={{ fontSize }} />
            <p>Logout</p>
          </li>
        </UserMenuList> */}
        {/* <ProfileMenuItem>
          <ProfileMenuItemLeft>
            <Avatar
              src={user.picture}
              alt=""
            />
          </ProfileMenuItemLeft>
          <ProfileMenuItemRight>
            <h4>{user.name}</h4>
            <p>View your profile </p>
          </ProfileMenuItemRight>
        </ProfileMenuItem>

        <ProfileMenuItem>
          <GiftOutlined className="icon" style={{ fontSize }} />
          <p>Gift card baalance $0.00</p>
        </ProfileMenuItem>
        <ProfileMenuItem>
          <MessageOutlined className="icon" style={{ fontSize }} />
          <p>Messages</p>
        </ProfileMenuItem>
        <ProfileMenuItem>
          <TagOutlined className="icon" style={{ fontSize }} />
          <p>Your offers</p>
        </ProfileMenuItem>
        <ProfileMenuItem>
          <BookOutlined className="icon" style={{ fontSize }} />
          <p>Purchases and reviews</p>
        </ProfileMenuItem>
          <Link to='/account/settings' className="menuLink">
       
          <SettingOutlined className="icon" style={{ fontSize }} />
          <p>Account settings</p>
    
          </Link>

          
        <ProfileMenuItem>
          <PlusOutlined className="icon" style={{ fontSize }} />
          <p>Sell with us</p>
        </ProfileMenuItem>
        <Divider />
        <ProfileMenuItem onClick={() => logout()}>
          <LoginOutlined className="icon" style={{ fontSize }} />
          <p>Logout</p>
        </ProfileMenuItem> */}
      </ContentWrapper>
    </Container>
  );
};

export default UserMenu;
