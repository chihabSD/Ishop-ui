import {
  BookOutlined,
  CaretDownFilled,
  GiftOutlined,
  LoginOutlined,
  LogoutOutlined,
  MessageOutlined,
  PlusOutlined,
  SettingFilled,
  TagFilled,
  UserAddOutlined,
} from "@ant-design/icons";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../firebase";
import { _logout } from "../../redux/actions/auth";

import { useRedux } from "../../hooks/useRedux";
import ProfilePicContainer from "../ProfilePicContainer";
import { useClickOutSide } from "../../hooks/useClickOutside";
import LinkWrapper from "../LinkWrapper";
import { UserDropdownContainer } from "../../Styles/UserDropdownContainer";
import { Divider } from "../divider";
const UserDropdown = ({ setShowUserMenu }) => {
  const { dispatch, user } = useRedux();
  const menu = useRef(null);
  useClickOutSide(menu, () => {
    setShowUserMenu();
    // menu.current.style.display = 'none'
    // setShowUserMenu(false);
  });

  const logout = () => {
    auth.signOut();
    dispatch(_logout());
  };
  const fontSize = "25px";


  return (
    <UserDropdownContainer ref={menu}>
      <ListContainer>
        <LinkWrapper url="/account/settings">
          <Item
            profile
            style={{
              borderBottom: "0.5px solid #f1f1f1",
              marginBottom: "15px",
              backgroundColor: "green",
            }}
          >
            <ProfilePicContainer />

            <ViewProfile>
              <span>Chihab Ahmed</span>
              <p style={{ fontWeight: "400", fontSize: "12px" }}>
                View your profile{" "}
              </p>
            </ViewProfile>
          </Item>
        </LinkWrapper>
        <Item label={`Gift card baalance $${200}`}>
          <GiftOutlined className="icon" style={{ fontSize }} />
        </Item>

        <Item label="Messages">
          <MessageOutlined className="icon" style={{ fontSize }} />
        </Item>

        <Item label="Your offers">
          <TagFilled className="icon" style={{ fontSize }} />
        </Item>

        <Item label="Purchases and reviews">
          <BookOutlined className="icon" style={{ fontSize }} />
        </Item>

        <LinkWrapper url="/account/settings">
          <Item label="Account settings" isLink url="/account/settings">
            <SettingFilled className="icon" style={{ fontSize }} />
          </Item>
        </LinkWrapper>
        <Item label="Sell with us">
          <PlusOutlined className="icon" style={{ fontSize }} />
        </Item>

        
        <Divider />
        <Item label="Logout " >
          <LoginOutlined className="icon" style={{ fontSize }} />
        </Item>

      </ListContainer>
    </UserDropdownContainer>
  );
};

export default UserDropdown;

const Item = ({ children, isLink, label, style, profile , onClick}) => {
  if (profile) {
    return (
      <li
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "0.5px solid #f1f1f1",
          marginBottom: "15px",
        }}
      >
        {children}
      </li>
    );
  }
  return (
    <li >
      <div>{children}</div>
      {label && <p>{label}</p>}
    </li>
  );
};
const ListContainer = styled.ul`
  list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
  /* padding: 10px; */
  background-color: white;
  text-decoration: none;
  border-radius: inherit;
  &:nth-child(1) {
    /* margin-bottom: 20px; */
    /* padding-bottom: 10px; */
    padding-bottom: 20px;

    h1 {
      font-weight: 900;
      font-size: 17px;
      line-height: 20px;
    }

    p {
      /* font-weight: 590; */
      color: #222222;

      /* font-family: "Graphik Webfont", -apple-system, "Helvetica Neue", */
      /* "Droid Sans", Arial, sans-serif; */
      font-weight: 00;
      font-size: 14px;
      margin-left: 10;
      /* line-height: 18px; */
    }
  }
  li {
    color: #111;
    display: flex;
    align-items: center;
    padding: 10px;

    /* margin-top: 5px; */
    background-color: gray;
    background-color: white;

    p {
      margin-left: 10px;
      color: #222222;
      font-weight: 400;
      font-size: 14px;
    }
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

const ViewProfile = styled.div`
  /* background-color: white; */
  text-align: center;
  width: 100%;
  position: relative;
  /* padding: 10px; */
  /* padding-bottom: 20px; */
  line-height: 20px;
  span {
    font-weight: 900;
    font-size: 15px;
    background-color: inherit;
    margin-bottom: 3px;

  }
`;
