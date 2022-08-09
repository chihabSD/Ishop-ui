import React, { useEffect, useRef, useState } from "react";
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
  SearchContainer,
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
  LoginButton,
} from "./style/HeaderStyle";
const { SubMenu, Item } = Menu;

const Header = ({ history }) => {
  const useMenuRef = useRef(null);
  // console.log(location);
  const { user, dispatch, authenticated } = useRedux();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [current, setCurrent] = useState("home");
  const [modal, setModal] = useState(false);

  const toggleModal = (e) => {
    setModal((prev) => !prev);
  };
  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    auth.signOut();
    dispatch(_logout());
  };

  useEffect(() => {
    if (modal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [modal]);

  
  const fontSize = "20px";
  const color = "gray";
  return (
    <Container>
      {modal && <AuthModal toggleModal={toggleModal} />}
      <Wrapper>
        <Left> LOGO </Left>
        <Middle>Miiddle</Middle>
        <Right>

        {!authenticated && 
          <RightItem onClick={() => toggleModal()}>
            <p>Sign in</p>
          </RightItem>

        }
          <RightItem>
            <ShoppingCartOutlined style={{ fontSize }} />
          </RightItem>

                 {authenticated && (
           <RightItem onClick={() => setShowUserMenu((prev) => !prev)}>
             <Avatar
                 src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?cs=srgb&dl=pexels-lukas-296282.jpg&fm=jpg"
               alt=""
              />
             {/* <CaretDownFilled
                style={{ marginLeft: "2px", color,  fontSize: "17px" }}
             /> */}
             {showUserMenu && <UserMenu setShowUserMenu={setShowUserMenu} />}
           </RightItem>
        )}

          <RightItem>
            <HeartOutlined style={{ fontSize }} />
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
