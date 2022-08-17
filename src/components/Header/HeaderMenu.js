import { ArrowDownOutlined, CaretDownFilled } from "@ant-design/icons";
import React from "react";
import { HeaderMenuContainer } from "./Style/HeaderMenuStyle";

const HeaderMenu = ({ icon, children, isDown, onClick }) => {
  return (
    <HeaderMenuContainer onClick={onClick}>
      {icon}
      {/* <CaretDownFilled /> */}

      {/* <UserOutlined style={{ fontSize }} /> */}
      {/* <p style={{ marginLeft: "10px" }}>Hi! Log in or sign up</p> */}
      {children}
    </HeaderMenuContainer>
  );
};

export default HeaderMenu;

const Item = () => {
  return <div>Item</div>;
};
