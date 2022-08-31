import {
  CiCircleFilled,
  DeleteFilled,
  EditFilled,
  IeCircleFilled,
} from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import SecionBodyContainer from "../../components/Settings/SectionBodyContainer";
import SectionHeader from "../../components/Settings/SectionHeader";
import SectionsWraper from "../../components/Settings/SectionWrapper";

import Switch from "react-js-switch";
import { Link } from "react-router-dom";
import Secondary from "../../components/Buttons/Secondary";
import Primary from "../../components/Buttons/Primary";
const Address = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [option, setOption] = React.useState([
    { id: 1, name: "Yes" },
    { id: 0, name: "No" },
  ]);
  const handleSelectedIem = (item) => {
    setSelectedItem(item.id);
  };

  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
    //...
  };
  return (
    <SectionsWraper>
      <SecionBodyContainer
        style={{ paddingBottom: "20px", borderBottom: "none" }}
      >
        <Top>
          <h1> Your delivery addresess </h1>

          <Secondary title="Add a new address" />
        </Top>
        <Bottom>
          <div
            style={{
              backgroundColor: "orange",
              padding: "10px",
              borderRadius: "24px",
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <p>Default</p>
          </div>
          <div style={{ width: "120px", lineHeight: "18px" }}>
            <p
              style={{
                lineHeight: "1.5rem",
                fontWeight: 300,
                marginTop: "15px",
              }}
            >
              49 crosbie place little barrack street carlow CARLOW Co. Carlow
              R93r853 Ireland
            </p>
          </div>
        </Bottom>

        <Bottom>
          <div
            style={{
              marginTop: "20px",
              width: "230px",
              lineHeight: "18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ActionButtons title="Edit">
              <EditFilled />
            </ActionButtons>
            {/* <div  style={{width:'100px'}}/> */}
            <ActionButtons title="Remove">
              <DeleteFilled />
            </ActionButtons>
          </div>
        </Bottom>
      </SecionBodyContainer>
    </SectionsWraper>
  );
};
const ActionButtons = ({ children, style, title }) => {
  return (
    <BTN>
      {children}
      <p style={{ fontSize: "15px", marginLeft: "5px" }}>{title}</p>
    </BTN>
  );
};

export default Address;
const Top = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;
  justify-content: space-between;
  h1 {
    font-size: 30px;
    font-weight: 300;
  }
`;
const Bottom = styled.div`
`;

const BTN = styled.div`
  display: flex;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
  cursor: pointer;
  width: 100px;
  &:hover {
    background-color: #d1d1d1;
  }
`;
