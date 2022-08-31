import { CiCircleFilled, IeCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import SecionBodyContainer from "../../components/Settings/SectionBodyContainer";
import SectionHeader from "../../components/Settings/SectionHeader";
import SectionsWraper from "../../components/Settings/SectionWrapper";
import Secondary from "../../components/Buttons/Secondary";

import Switch from "react-js-switch";
import { Link } from "react-router-dom";
import AuthContainer from "./AuthContainer";
import { Table } from "antd";
import HistoryTableColumn from "./HistoryTableColumn";
import HistoryTableRow from "./HistoryTableRow";
const DeviceHistory = () => {
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

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Chinese Score",
      dataIndex: "chinese",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Math Score",
      dataIndex: "math",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "English Score",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: "2",
      name: "Jim Green",
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: "3",
      name: "Joe Black",
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: "4",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <SectionsWraper>
      <SecionBodyContainer style={{ paddingBottom: "20px" }}>
        {/* <SecionBodyContainer style={{ height: "90px", paddingBottom: "20px" }}> */}
        <SectionHeader title="Device History" />
        <p
          style={{
            marginTop: "20px",
            lineHeight: "18px",
            marginBottom: "20px",
            fontSize: "15px",
          }}
        >
          Review recent devices that were used to sign in to your account.
        </p>

        <SignHistoryTable />
      </SecionBodyContainer>
    </SectionsWraper>
  );
};

const SignHistoryTable = ({ header, title, toggle }) => {
  return (
    <SignHistoryTableContainer>
      <DeviceName>
        <HistoryTableColumn title="Device Name" />
        <HistoryTableRow />
      </DeviceName>

      <LastSign>
        <HistoryTableColumn title="Last Sign in" />
        <HistoryTableRow />
      </LastSign>

    
      <Location>
        <HistoryTableColumn title="Location" />
        <HistoryTableRow />
      </Location>
  
    </SignHistoryTableContainer>
  );
};
export default DeviceHistory;
const SignHistoryTableContainer = styled.div`
  display: grid;
  /* background-color: blue; */
  grid-template-areas: "devicename lastsign location ";
  grid-template-columns: 1fr 1fr 1fr ;
  /* grid-template-rows: auto 1fr 100px; */
`;
const DeviceName = styled.div`
  grid-area: devicename;

  border-bottom: 1px solid #f1f1f1;
`;

const LastSign = styled.div`
  grid-area: lastsign;
`;


const Location = styled.div`
  grid-area: location;
`;


