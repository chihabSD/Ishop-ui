import {
  BookOutlined,
  CaretDownFilled,
  GiftOutlined,
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
    <Container ref={menu}>
      <ListContainer>
        <LinkWrapper url='/account/settings'>
          <Item
            style={{
              borderBottom: "0.5px solid #f1f1f1",
              marginBottom: "15px",
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

        <Item label="Account settings" isLink url="/account/settings/menu">
          <SettingFilled className="icon" style={{ fontSize }} />
        </Item>

        <Item label="Sell with us">
          <PlusOutlined className="icon" style={{ fontSize }} />
        </Item>
      </ListContainer>
      {/* <Link to="/account/settings/menu">
    </Link> */}
    </Container>
  );
};

export default UserDropdown;

const Item = ({ children, isLink, label, style }) => {
  return (
    <li style={{ ...style }}>
      {children} {label && <p>{label}</p>}
    </li>
  );
};

const Container = styled.div`
  position: absolute;
  transition: opacity 180ms ease-out,
    box-shadow 180ms cubic-bezier(0.175, 0.885, 0.4, 1.1),
    transform 180ms cubic-bezier(0.175, 0.885, 0.4, 1.1),
    visibility 180ms linear;
  box-shadow: 0 4px 20px rgba(34, 34, 34, 0.15);
  transform: scaleX(1) scaleY(1) perspective(1px);
  visibility: visible;
  min-width: 250px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;

  background-color: #f1f1f1;

  z-index: 1;
  top: 3.5em;
  right: -2.7rem;
  &::after {
    content: "";
    display: block;
    position: absolute;

    right: 4.2em;
    width: 15px;
    height: 15px;
    top: -0.5em;
    background: #ffffff;
    border-right: 2px solid #f1f1f1;
    border-bottom: 2px solid #f1f1f1;
    -webkit-transform: rotate(-136deg);
  }
`;

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
  text-align: center;
  width: 100%;
  position: relative;
  /* padding: 10px; */
  /* padding-bottom: 20px; */
  line-height: 20px;
  span {
    font-weight: 900;
    font-size: 15px;
    margin-bottom: 3px;
  }
`;
