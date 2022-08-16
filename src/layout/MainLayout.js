import React from "react";
import { Outlet } from "react-router-dom";
import FooterUI from "../components/Footer";
import Header from "../components/Header";
import { MainLayoutContainer } from "../Styles/Container";

const MainLayout = () => {
  return (
    <MainLayoutContainer>
      <Header />
      <Outlet />
      <FooterUI />
    </MainLayoutContainer>
  );
};

export default MainLayout;
