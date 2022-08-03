import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from 'react-router-dom'
import { useRedux } from "../../hooks/useRedux";

const { SubMenu, Item } = Menu;

const Header = () => {
 const {username} =  useRedux()
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
      <Link to='/'>Home</Link>
      </Item>

      <SubMenu icon={<SettingOutlined />} title={username}>
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
      </SubMenu>
      <Item key="register" icon={<UserAddOutlined />} className="float-end">
      <Link to='/register'>Register</Link>
      </Item>

      <Item key="login" icon={<UserOutlined />} className="float-end">
      <Link to='/login'>Login</Link>
      </Item>

      
    </Menu>
  );
};

export default Header;
