import React from "react";
import { Outlet } from "react-router-dom";
import { MainLayoutContainer } from "../styles/Containers";

const MainLayout = () => {
  return (
    <MainLayoutContainer>
      Main Layout
      <Outlet />
    </MainLayoutContainer>
  );
};

export default MainLayout;
