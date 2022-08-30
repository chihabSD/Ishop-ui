import { CiCircleFilled, IeCircleFilled } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import SecionBodyContainer from "../../components/Settings/SectionBodyContainer";
import SectionHeader from "../../components/Settings/SectionHeader";
import SectionsWraper from "../../components/Settings/SectionWrapper";
import Secondary from '../../components/Buttons/Secondary'
import { Divider } from "antd";
import { Link } from "react-router-dom";

const ListingsPrivacy = () => {
  const [languages, setLngs] = React.useState([
    { id: 1, name: "Arabic" },
    { id: 0, name: "Deutsch" },
    { id: 1, name: "English (UK)" },
    { id: 19, name: "English (US)" },
    { id: 322, name: "Español" },
    { id: 422, name: "Français" },
    { id: 322, name: "Italiano" },
    { id: 30, name: "日本語" },
    { id: 33, name: "Nederlands" },
    { id: 333, name: "Polski" },
    { id: 233, name: "Português" },
  ]);
  return (
    <SectionsWraper>
      <SecionBodyContainer style={{height:'90px', paddingBottom:'20px'}}>
        <SectionHeader title="Your recently view Listings" />
        <p style={{ marginTop: "20px", marginBottom:'20px',  fontSize: "15px" }}>
          Clear your recently viewed listings and we'll no longer show them on
          the site. Listings that you view in the future will be recorded.
        </p>
       
       
       <Secondary title="Clear recently View listings" />
      </SecionBodyContainer>
      <SecionBodyContainer style={{ paddingBottom:'20px'}} height='100px'>
        <SectionHeader title="Downloaded Data" />
        <p style={{ marginTop: "20px", marginBottom:'20px',  fontSize: "15px" }}>
        Download a ZIP file of your Etsy personal information, provided in both CSV and JSON file formats.
        </p>
       
       
       <Secondary title="Request your data for download" />
      </SecionBodyContainer>

      <SecionBodyContainer style={{ paddingBottom:'20px'}} height='100px'>
        <SectionHeader title="Permanently close and delete your Dukan account" />
        <p style={{ marginTop: "20px", marginBottom:'20px',  fontSize: "15px" }}>
        Permanently close and delete your account. Once deleted, your account can't be restored. <Link to="/learnmore"> 
        
         Learn more.
        </Link>
        </p>
       
       
       <Secondary title="Request deletion of yoru data " />
      </SecionBodyContainer>

      <SecionBodyContainer style={{ paddingBottom:'20px'}} height='100px'>
        <SectionHeader title="Privacy Settings" />

        <h1 style={{ marginTop: "20px", marginBottom:'20px',  fontSize: "17px", fontWeight:'700' }}>
          Findability
  
          </h1>

        <p style={{ marginTop: "20px", marginBottom:'20px',  fontSize: "15px" }}>
  
Do you want others to be able to find you by your email address? Your email address will not be publicly displayed.
        </p>
       
       
       <Secondary title="Request deletion of yoru data " />
      </SecionBodyContainer>
    </SectionsWraper>
  );
};

export default ListingsPrivacy;
const LanguageContainer = styled.div`
  display: flex;
`;

const Left = styled.div`
  padding: 15px;
  line-height: 18px;
  border-right: 1px solid #f1f1f1;
`;
const Lang = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Circle = styled.div`
  width: 20px;
  margin-right: 5px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #d1d1d1;
`;
