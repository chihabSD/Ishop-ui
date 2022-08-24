import {
  BellFilled,
  BellOutlined,
  CaretDownFilled,
  CloseOutlined,
  EyeFilled,
  FileSearchOutlined,
  HeartFilled,
  MenuOutlined,
  NotificationFilled,
  ProfileFilled,
  SearchOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRedux } from "../../hooks/useRedux";
import { toggleCategoriesModal } from "../../redux/reducers/modals";
import HeaderDropDownMenu from "../HeaderDropDownMenu";
import LinkWrapper from "../LinkWrapper";
import OverLay from "../Modals";
import CategoriesModal from "../Modals/CategoriesModal";
import ProfilePicContainer from "../ProfilePicContainer";
import ToolTip from "../ToolTip";
import HeaderMenu from "./HeaderMenu";
import LoginLabel from "./LoginLabel";
import MenuIcons from "./MenuIcons";
import NotificationDropDown from "./NotificationDropDown";
import SearchResult from "./SearchResult";
import {
  HeaderContainer,
  SearchContainer,
  LogoContainer,
  MenusContainer,
  SearchBar,
  SearchBarIconsContainer,
  SearchIcon,
  CategoriesContanier,
  HeaderBottom,
  HeaderTop,
} from "./Style";
import { AvatarContainer } from "./Style/HeaderMenuStyle";
import UserDropdown from "./UserDropdown";

const HeaderUI = ({ notFound }) => {
  const useMenuRef = useRef(null);
  const notificatinRef = useRef(null);
  // console.log(location);
  const { user, dispatch, authenticated, categoriesModal } = useRedux();
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

  // useHoverOver(useMenuRef, () => {
  //   setHover1(false);
  // });

  const handleCategoriesToggle = () => {
    dispatch(toggleCategoriesModal());
  };
  useEffect(() => {
    if (modal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [modal]);

  const fontSize = "25px";
  const color = "#d3d3d3";
  return (
    <>
      <HeaderContainer>
        <HeaderTop>
          <LogoContainer>
            <LinkWrapper url="/">
              <h1>DUKAN</h1>
            </LinkWrapper>
          </LogoContainer>

          {!notFound && (
            <>
              <SearchContainer>
                <SearchBar>
                  <input
                    type="text"
                    name=""
                    placeholder="Search for everything..."
                  />
                  <SearchBarIconsContainer>
                    <SearchIcon>
                      <SearchOutlined style={{ fontSize: "25px" }} />
                    </SearchIcon>
                  </SearchBarIconsContainer>
                </SearchBar>

                {/* <SearchResult /> */}
              </SearchContainer>

              <MenusContainer>
                {authenticated && (
                  <HeaderMenu icon={<UserOutlined style={{ fontSize }} />}>
                    <LoginLabel />
                  </HeaderMenu>
                )}
                <HeaderMenu icon={<HeartFilled style={{ fontSize }} />}>
                  <ToolTip text="Favourites" />
                </HeaderMenu>
                {!authenticated && (
                  <HeaderMenu
                    icon={<BellOutlined style={{ fontSize }} />}
                    onClick={() => setShowNotificationMenu((prev) => !prev)}
                    ref={notificatinRef}
                  >
                    <CaretDownFilled style={{ fontSize: "15px", color }} />

                    {showNotificationMenu && (
                      <NotificationDropDown
                        setShowNotificationMenu={() =>
                          setShowNotificationMenu(false)
                        }
                      />
                    )}

                    <ToolTip text="Notifications" />
                  </HeaderMenu>
                )}
                {!authenticated && (
                  <HeaderMenu
                    lockPointer={showUserMenu ? true : false}
                    icon={
                      <ProfilePicContainer
                        style={{ width: fontSize, height: fontSize }}
                      />
                    }
                    onClick={() => setShowUserMenu((prev) => !prev)}
                    ref={useMenuRef}
                  >
                    <CaretDownFilled
                      style={{ fontSize: "15px", color, marginLeft: "4px" }}
                    />
                    {showUserMenu && (
                      <UserDropdown
                        setShowUserMenu={() => setShowUserMenu(false)}
                      />
                    )}

                    <ToolTip text="Your account" />
                  </HeaderMenu>
                )}
                <HeaderMenu
                  icon={<ShoppingCartOutlined style={{ fontSize }} />}
                >
                  <ToolTip text="Basket" />
                </HeaderMenu>
              </MenusContainer>
              <MenuIcons
                onClick={() => dispatch(toggleCategoriesModal(true))}
              />
            </>
          )}
        </HeaderTop>
        <HeaderBottom>
          <CategoriesContanier>
            <HeaderDropDownMenu />
          </CategoriesContanier>
        </HeaderBottom>
      </HeaderContainer>
      {categoriesModal && <CategoriesModal />}
    </>
  );
};

export default HeaderUI;
