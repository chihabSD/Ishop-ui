import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/imgs/logo.png";
import { Menu } from "antd";
// import { Language, Search, DarkModeOutlined , FullscreenExitOutlined, NotificationsOutlined, ListOutlined, ChatBubbleOutlined, Brightness1Outlined} from "@mui/icons-material";
// import { DarkModeContext } from "../../contexts/darkModeContext";
import "./style/index.css";
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
  BellOutlined,
  SettingFilled,
  DownOutlined,
  DownCircleFilled,
  CaretDownFilled,
  ShoppingCartOutlined,
  CarFilled,
  HeartOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useRedux } from "../../hooks/useRedux";
// import firebase  from "firebase";
import { auth } from "../../firebase";
import { _logout } from "../../redux/actions/auth";
import {
  Items,
  // SearchContainer,
  // Wrapper,
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
} from "./style/Style";
import AuthModal from "../../Modals/AuthModal";
import { useClickOutSide } from "../../hooks/useClickOutside";
import UserMenu from "./UserMenu";
import {
  Container,
  Wrapper,
  Left,
  Middle,
  Right,
  RightItem,
  SearchContainer,
  LoginButton,
  SearchBar,
  SearchIconContainer,
} from "./style/HeaderStyle";
import NotificationMenu from "./NotificationMenu";
import { useHoverOver } from "../../hooks/useHover";
const { SubMenu, Item } = Menu;

const Header = ({ history }) => {
  const useMenuRef = useRef(null);
  const notificatinRef = useRef(null);
  // console.log(location);
  const { user, dispatch, authenticated } = useRedux();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotificationMenu, setShowNotificationMenu] = useState(false);
  const [current, setCurrent] = useState("home");
  const [modal, setModal] = useState(false);

  const toggleModal = (e) => {
    setModal((prev) => !prev);
  };
  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  useHoverOver(notificatinRef, () => {
    setHover2(false);
  });
  useHoverOver(useMenuRef, () => {
    setHover1(false);
  });
  useEffect(() => {
    if (modal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [modal]);

  useEffect(() => {});
  const fontSize = "20px";
  const color = "#d3d3d3";
  return (
    <Container>
      {modal && <AuthModal toggleModal={toggleModal} />}
      <Wrapper>
        <Left>
          <img src={logo} />{" "}
        </Left>
        <SearchContainer>
          <SearchBar>
            <input placeholder="Seach for everything..." type="search" />
            <SearchIconContainer>
              <SearchOutlined />
            </SearchIconContainer>
          </SearchBar>
        </SearchContainer>
        <RightItem>
          <HeartOutlined style={{ fontSize }} />
        </RightItem>
        <Right>
          {!authenticated && (
            <RightItem onClick={() => toggleModal()}>
              <UserOutlined style={{ fontSize }} />
              <p style={{ marginLeft: "10px" }}>Hi! Log in or sign up</p>
            </RightItem>
          )}
          <RightItem
            onClick={() => setShowNotificationMenu((prev) => !prev)}
            ref={notificatinRef}
            onMouseOver={() => setHover2(true)}
          >
            <BellOutlined style={{ fontSize }} />
            <CaretDownFilled
              style={{ marginLeft: "5px", color, fontSize: "14px" }}
            />

            {hover2 && (
              <div className="hoverOver">
                <p> Updates</p>
              </div>
            )}
            {showNotificationMenu && (
              <NotificationMenu
                setShowNotificationMenu={setShowNotificationMenu}
              />
            )}
          </RightItem>

          {authenticated && (
            <RightItem
              onClick={() => setShowUserMenu((prev) => !prev)}
              ref={useMenuRef}
              onMouseOver={() => setHover1(true)}
            >
              <Avatar
                src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?cs=srgb&dl=pexels-lukas-296282.jpg&fm=jpg"
                alt=""
              />
              <CaretDownFilled
                style={{ marginLeft: "5px", color, fontSize: "14px" }}
              />
              {hover1 && (
                <div className="hoverOver">
                  <p>Your account </p>
                </div>
              )}
              {showUserMenu && <UserMenu setShowUserMenu={setShowUserMenu} />}
            </RightItem>
          )}

          <RightItem>
            <ShoppingCartOutlined style={{ fontSize }} />
          </RightItem>
        </Right>
      </Wrapper>
    </Container>
    // <HeaderContainer>
    //   {modal && <AuthModal toggleModal={toggleModal} />}
    //   <HeaderWrapper>
    //     <HeaderLeft>
    //       <Logo>
    //         <h1>Iship</h1>
    //       </Logo>
    //       <SearchContainer>
    //         <input type="text" placeholder="Search for everthing" />
    //         <SearchOutlined style={{ fontSize }} />
    //       </SearchContainer>
    //     </HeaderLeft>
    //     <HeaderRight>
    //       {!authenticated &&

    //       <HeaderRightItem onClick={() => toggleModal()}>
    //         <span>Sign in </span>
    //       </HeaderRightItem>
    //       }

    //       <HeaderRightItem>
    //          <Counter>2</Counter>
    //         <BellOutlined style={{ fontSize }} />
    //         <CaretDownFilled
    //           style={{  marginLeft: "1px", color, fontSize: "17px" }}
    //         />
    //       </HeaderRightItem>
    //       {authenticated && (
    //         <HeaderRightItem onClick={() => setShowUserMenu((prev) => !prev)}>
    //           <Avatar
    //             src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?cs=srgb&dl=pexels-lukas-296282.jpg&fm=jpg"
    //             alt=""
    //           />
    //           <CaretDownFilled
    //             style={{ marginLeft: "2px", color,  fontSize: "17px" }}
    //           />
    //           {showUserMenu && <UserMenu setShowUserMenu={setShowUserMenu} />}
    //         </HeaderRightItem>
    //       )}

    //       <HeaderRightItem>
    //         <ShoppingCartOutlined style={{ fontSize }} />
    //         <Counter>100</Counter>
    //       </HeaderRightItem>
    //     </HeaderRight>
    //   </HeaderWrapper>
    // </HeaderContainer>
  );
};

export default Header;
