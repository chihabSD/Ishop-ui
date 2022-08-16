import React from "react";
import { UserMenuList } from "./style/UserMenu";

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
import { Link } from "react-router-dom";

import './style/index.css'
const UserMenuItem = ({ children, label, onClick, isLink, url }) => {
  const fontSize = "20px";
  return (
    <UserMenuList onClick={onClick}>
      {isLink ? (
        <Link to={url} className="linkIcon">
          <li>
          {children}
            {/* <GiftOutlined className="icon" style={{ fontSize }} /> */}
            <p>{label}</p>
          </li>
        </Link>
      ) : (
        <li>
          {children}
          {/* <GiftOutlined className="icon" style={{ fontSize }} /> */}
          <p>{label}</p>
        </li>
      )}
    </UserMenuList>
  );
};

export default UserMenuItem;
