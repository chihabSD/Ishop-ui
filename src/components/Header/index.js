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
import HeaderTopIconContainerUI from "./ HeaderTopIconContainerUI";
// import HeaderMenu from "./HeaderMenu";
import LoginLabel from "./LoginLabel";
import MenuIcons from "./MenuIcons";
import NotificationDropDown from "./NotificationDropDown";
import SearchBarUI from "./SearchBarUI";
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
  Hamburger,
  HeaderTopIconContainer,
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
              <SearchBarUI />

              <MenusContainer>
                {/* <HeaderTopIconContainer>

                </HeaderTopIconContainer> */}
                {/* {authenticated && (
                  <HeaderMenu icon={<UserOutlined style={{ fontSize }} />}>
                    <LoginLabel />
                  </HeaderMenu>
                )} */}
                <HeaderTopIconContainerUI>
                  <div>
                    <HeartFilled style={{ fontSize }} />
                  </div>
                  <ToolTip text="Favourites" />
                </HeaderTopIconContainerUI>
                {!authenticated && (
                  <HeaderTopIconContainerUI
                    onClick={() => setShowNotificationMenu((prev) => !prev)}
                    ref={notificatinRef}
                  >
                    <div>
                      <BellOutlined style={{ fontSize }} />
                    </div>
                    <div>
                      <CaretDownFilled style={{ fontSize: "15px", color }} />
                    </div>

                    {showNotificationMenu && (
                      <NotificationDropDown
                        setShowNotificationMenu={() =>
                          setShowNotificationMenu(false)
                        }
                      />
                    )}

                    <ToolTip text="Notifications" />
                  </HeaderTopIconContainerUI>
                )}
                {!authenticated && (
                  <HeaderTopIconContainerUI
                    lockPointer={showUserMenu ? true : false}
                    onClick={() => setShowUserMenu((prev) => !prev)}
                    ref={useMenuRef}
                  >
                    <div>
                      <ProfilePicContainer
                        style={{ width: fontSize, height: fontSize }}
                      />
                    </div>
                    <CaretDownFilled
                      style={{ fontSize: "15px", color, marginLeft: "4px" }}
                    />
                    {showUserMenu && (
                      <UserDropdown
                        setShowUserMenu={() => setShowUserMenu(false)}
                      />
                    )}

                    <ToolTip text="Your account" />
                  </HeaderTopIconContainerUI>
                )}
                <HeaderTopIconContainerUI>
                  <div>
                    <ShoppingCartOutlined style={{ fontSize }} />
                  </div>
                  <ToolTip text="Basket" />
                </HeaderTopIconContainerUI>
              </MenusContainer>
            </>
          )}
        </HeaderTop>
        <HeaderBottom>
          <MenuIcons onClick={() => dispatch(toggleCategoriesModal(true))} />
          <CategoriesContanier>
            <HeaderDropDownMenu />
          </CategoriesContanier>
          <SearchBarUI hide />
        </HeaderBottom>
        <span id="slider"></span>
      </HeaderContainer>
      {categoriesModal && <CategoriesModal />}
    </>
  );
};

export default HeaderUI;

{
  /* <HeaderTopIconContainer>

                </HeaderTopIconContainer> */
}
{
  /* {authenticated && (
                  <HeaderMenu icon={<UserOutlined style={{ fontSize }} />}>
                    <LoginLabel />
                  </HeaderMenu>
                )} */
}
{
  /* <HeaderMenu icon={<HeartFilled style={{ fontSize }} />}>
                  <ToolTip text="Favourites" />
                </HeaderMenu> */
}
{
  /* {!authenticated && (
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
                )} */
}
{
  /* {!authenticated && (
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
                )} */
}
{
  /* <HeaderMenu
                  icon={<ShoppingCartOutlined style={{ fontSize }} />}
                >
                  <ToolTip text="Basket" />
                </HeaderMenu> */
}
