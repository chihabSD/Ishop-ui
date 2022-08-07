import React, { useState } from "react";
import { Menu } from "antd";
import './style.scss'
// import { Language, Search, DarkModeOutlined , FullscreenExitOutlined, NotificationsOutlined, ListOutlined, ChatBubbleOutlined, Brightness1Outlined} from "@mui/icons-material";
// import { DarkModeContext } from "../../contexts/darkModeContext";
import {
  
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  GlobalOutlined
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useRedux } from "../../hooks/useRedux";
// import firebase  from "firebase";
import { auth } from "../../firebase";
import { _logout } from "../../redux/actions/auth";
const { SubMenu, Item } = Menu;
const Header = ({history}) => {
  const location   = useLocation()
  // console.log(location);
  const { user, dispatch, authenticated } = useRedux();
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    auth.signOut();
    dispatch(_logout());

  
  };
  return (
    <div className="headerContainer">
    <div className="wrapper">
      <div className="search">
        <input type="text" placeholder="Search..." />
        {/* <Search /> */}
      </div>
      <div className="items">
        <div className="item">
          <GlobalOutlined className="icon"/>
        English
        </div>
        <div className="item">
          
          {/* <DarkModeOutlined className="icon" /> */}
      
        </div>
        <div className="item">
          {/* <FullscreenExitOutlined className="icon"/> */}
        </div>
        <div className="item">
          {/* <NotificationsOutlined className="icon"/> */}
          <div className="counter">1</div>
        </div>
        <div className="item">
          {/* <ChatBubbleOutlined className="icon"/> */}
          <div className="counter">2</div>
        </div>
        <div className="item">
          {/* <ListOutlined className="icon"/> */}
        </div>
        <div className="item">
        <img src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?cs=srgb&dl=pexels-lukas-296282.jpg&fm=jpg" alt="" className="avatar"/>
        </div>
      </div>
    </div>
  </div>
    // <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
    //   <Item key="home" icon={<AppstoreOutlined />}>
    //     <Link to="/">Home</Link>
    //   </Item>
    //   {authenticated && (
    //     <SubMenu
    //     key="1"
    //       icon={<SettingOutlined />}
    //       title={user.email && user.email.split("@")[0]}
    //       className="float-right"
    //     >
    //       <Item key="setting:1">Option 1</Item>
    //       <Item key="setting:2">Option 2</Item>
    //       <Item key='setting:3' icon={<LogoutOutlined />} onClick={logout}>
    //         Logout{" "}
    //       </Item>
    //     </SubMenu>
    //   )}
    //   {!authenticated && (
    //     <>
    //       <Item key="register" icon={<UserAddOutlined />} className="float-end">
    //         <Link to="/register">Register</Link>
    //       </Item>

    //       <Item key="login" icon={<UserOutlined />} className="float-end">
    //         <Link to="/login">Login</Link>
    //       </Item>
    //     </>
    //   )}
    // </Menu>
  );
};

export default Header;
