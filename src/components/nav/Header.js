import React, { useState } from "react";
import { Menu } from "antd";
import "./style.scss";
// import { Language, Search, DarkModeOutlined , FullscreenExitOutlined, NotificationsOutlined, ListOutlined, ChatBubbleOutlined, Brightness1Outlined} from "@mui/icons-material";
// import { DarkModeContext } from "../../contexts/darkModeContext";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  GlobalOutlined,
  SearchOutlined,
  BulbOutlined, 
MenuOutlined,
BellOutlined
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useRedux } from "../../hooks/useRedux";
// import firebase  from "firebase";
import { auth } from "../../firebase";
import { _logout } from "../../redux/actions/auth";
import {
  Items,
  SearchContainer,
  Wrapper,
  ItemsChild,
  Logo,
  HeaderContainer,
  HeaderWrapper,
  HeaderLeft,
  HeaderRight,
  HeaderRightItem,
  HeaderLeftItem,
  Icon,
  MainContainer,
  Icons,
  Avatar,
  Counter,
} from "./Style";
import AuthModal from "../../Modals/AuthModal";
const { SubMenu, Item } = Menu;

const Header = ({ history }) => {
  const location = useLocation();
  // console.log(location);
  const { user, dispatch, authenticated } = useRedux();
  const [current, setCurrent] = useState("home");
  const [modal, setModal] = useState(false);

  const toggleModal= (e) => {
  setModal(prev => !prev)
  };
  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    auth.signOut();
    dispatch(_logout());
  };

  const fontSize = '20px'
  return (
    <HeaderContainer>
      {modal &&
      
      <AuthModal toggleModal={toggleModal} />
      }
      <HeaderWrapper>
        <HeaderLeft>
          <Logo>
            <h1>Iship</h1>
          </Logo>
          <SearchContainer>
            <input type="text" placeholder="Search for everthing" />
            <SearchOutlined style={{ fontSize }} />
          </SearchContainer>
        </HeaderLeft>
        <HeaderRight>
          <HeaderRightItem onClick={()=>toggleModal()}>
            <span>Sign in</span>
          </HeaderRightItem>
          {/* <HeaderRightItem>
            <GlobalOutlined />
            <span>English</span>
          </HeaderRightItem> */}
          <HeaderRightItem>
            <BulbOutlined style={{ fontSize }} />
            <Counter>2</Counter>
          </HeaderRightItem>
          <HeaderRightItem>
            <BellOutlined style={{ fontSize }} />
          </HeaderRightItem>
          <HeaderRightItem>
            <SettingOutlined />
          </HeaderRightItem>

          <HeaderRightItem>
            <Avatar
              src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?cs=srgb&dl=pexels-lukas-296282.jpg&fm=jpg"
              alt=""
            />
          </HeaderRightItem>
        </HeaderRight>
      </HeaderWrapper>
    </HeaderContainer>
    // <MainContainer>
    //   <HeaderContainer>
    //     <Wrapper>
    //       <HeaderLeft>
    //         <Logo>
    //           <h1>Ishop</h1>
    //         </Logo>
    //         <Search>
    //           <input type="text" placeholder="Seach for anything" />
    //           <Icon>
    //             <Icons />
    //           </Icon>
    //         </Search>
    //       </HeaderLeft>

    //       <HeaderRight>
    //         <HeaderLeftItem>Sign in</HeaderLeftItem>
    //         <HeaderLeftItem>
    //             <Icons />
    //         </HeaderLeftItem>
    //         <HeaderLeftItem>
    //             <Icons />
    //         </HeaderLeftItem>
    //       </HeaderRight>
    //     </Wrapper>
    //   </HeaderContainer>
    // </MainContainer>
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
