import {
  BellFilled,
  BellOutlined,
  CaretDownFilled,
  HeartFilled,
  NotificationFilled,
  ProfileFilled,
  SearchOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { Link } from "react-router-dom";
import { useRedux } from "../../hooks/useRedux";
import HeaderMenu from "./HeaderMenu";
import LoginLabel from "./LoginLabel";
import {
  HeaderContainer,
  SearchContainer,
  LogoContainer,
  MenusContainer,
  SearchBar,
  SearchIconContainer,
  MenuItem,
  CategoriesContanier,
} from "./Style";

const HeaderUI = ({ type }) => {
  const { user, authenticated } = useRedux();
  const fontSize = "25px";
  const color = "#d3d3d3";
  return (
    <HeaderContainer>
      <LogoContainer>
        <h1>DUKAN</h1>
      </LogoContainer>

      {/* SEARCH SECTION  */}
      <SearchContainer>Search</SearchContainer>

      {/* MENUS  */}
      <MenusContainer>
        {!authenticated && (
          <HeaderMenu icon={<UserOutlined style={{ fontSize }} />}>
            <LoginLabel />
          </HeaderMenu>
        )}
        <HeaderMenu icon={<HeartFilled style={{ fontSize }} />} />
        {authenticated && (
          <HeaderMenu icon={<BellOutlined style={{ fontSize }} />}>
            <CaretDownFilled style={{ fontSize: "15px", color }} />
          </HeaderMenu>
        )}
        {authenticated && (
          <HeaderMenu icon={<UserOutlined style={{ fontSize }} />}>
            <CaretDownFilled style={{ fontSize: "15px", color }} />
          </HeaderMenu>
        )}
        <HeaderMenu icon={<ShoppingCartOutlined style={{ fontSize }} />} />
      </MenusContainer>
      <CategoriesContanier>Categories</CategoriesContanier>
      {/* <Link to="/">
      <LogoContainer>
        <h1>DUKAN</h1>
      </LogoContainer>
      </Link>
      <SearchContainer>
        <SearchBar>
            <input placeholder="Seach for everything..." type="search" />
            <SearchIconContainer>
              <SearchOutlined />
            </SearchIconContainer>
          </SearchBar>
      </SearchContainer>
      <MenusContainer>Menus</MenusContainer> */}
    </HeaderContainer>
  );
};

export default HeaderUI;
