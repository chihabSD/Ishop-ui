
import React from "react";
import Header from "../components/Header";
import NotFoundUI from "../pages/NotFound";
import { NotFoundLayoutContainer } from "../Styles/NotFoundLayoutContainer";

const NotFoundLayout = () => {
  return (
    <NotFoundLayoutContainer>
      <Header notFound/>
      <NotFoundUI />
    </NotFoundLayoutContainer>
  );
};
// 
export default NotFoundLayout;
