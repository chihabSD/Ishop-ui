import {
  CameraFilled,
  CameraOutlined,
  EditFilled,
  PhoneOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BodyLayout from "../../components/BodyLayout";
import Header from "../../components/header/Header";
import ImageCountainer from "../../components/ImageContainer";
import { useRedux } from "../../hooks/useRedux";
import DetailsContainer from "./DetailsContainer";
import Favs from "./Favs";
import FavSearch from "./FavSearch";
import FavsItem from "./FavsItem";
import {
  MeContainer,
  MeContainerRight,
  MeContainerRightTop,
  MeContainerRightBottom,
  MeContainerItems,
} from "./Style";

const Me = () => {
  const { user } = useRedux();
  return (
    <>
      {/* <Header /> */}

      {/* <BodyLayout>
        <MeContainer>
          <DetailsContainer />
        </MeContainer>
        <FavsItem />
        <Favs />
        <FavSearch />
      </BodyLayout> */}
    </>
  );
};

export default Me;
