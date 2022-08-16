import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useMatch,
  UNSAFE_LocationContext,
} from "react-router-dom";

import "./Styles/globalStyle.css";

import "../src/fontAwesome";
import HomeUI from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import NotFoundLayout from "./layout/NotFoundLayout";
import NotFoundUI from "./pages/404";

const App = () => {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeUI />} />
      </Route>

      {/* IF NOT FOUND  */}
      <Route exact path="*" element={<NotFoundLayout />}>
        <Route index element={<NotFoundUI />} />
      </Route>
    </Routes>
  );
};

export default App;
