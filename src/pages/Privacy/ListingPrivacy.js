import { CiCircleFilled, IeCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import SecionBodyContainer from "../../components/Settings/SectionBodyContainer";
import SectionHeader from "../../components/Settings/SectionHeader";
import SectionsWraper from "../../components/Settings/SectionWrapper";
import Secondary from "../../components/Buttons/Secondary";

import Switch from 'react-js-switch';
import { Link } from "react-router-dom";
const ListingsPrivacy = () => {
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
      <SecionBodyContainer style={{ height: "90px", paddingBottom: "20px" }}>
        <SectionHeader title="Your recently view Listings" />
        <p
          style={{ marginTop: "20px", marginBottom: "20px", fontSize: "15px" }}
        >
          Clear your recently viewed listings and we'll no longer show them on
          the site. Listings that you view in the future will be recorded.
        </p>

        <Secondary title="Clear recently View listings" />
      </SecionBodyContainer>
      <SecionBodyContainer style={{ paddingBottom: "20px" }} height="100px">
        <SectionHeader title="Downloaded Data" />
        <p
          style={{ marginTop: "20px", marginBottom: "20px", fontSize: "15px" }}
        >
          Download a ZIP file of your Etsy personal information, provided in
          both CSV and JSON file formats.
        </p>

        <Secondary title="Request your data for download" />
      </SecionBodyContainer>

      <SecionBodyContainer style={{ paddingBottom: "20px" }} height="100px">
        <SectionHeader title="Permanently close and delete your Dukan account" />
        <p
          style={{ marginTop: "20px", marginBottom: "20px", fontSize: "15px" }}
        >
          Permanently close and delete your account. Once deleted, your account
          can't be restored. <Link to="/learnmore">Learn more.</Link>
        </p>

        <Secondary title="Request deletion of yoru data " />
      </SecionBodyContainer>

      <SecionBodyContainer style={{ paddingBottom: "20px" }} height="100px">
        <SectionHeader title="Privacy Settings" />

        <h1
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            fontSize: "17px",
            fontWeight: "700",
          }}
        >
          Findability
        </h1>

        <p
          style={{ marginTop: "20px", marginBottom: "20px", fontSize: "15px" }}
        >
          Do you want others to be able to find you by your email address? Your
          email address will not be publicly displayed.
        </p>

        {option.map((item) => (
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
            onClick={() => handleSelectedIem(item)}
          >
            <Circle
              style={{
                backgroundColor: `${
                  selectedItem === item.id ? "blue" : "white"
                }`,
              }}
            />
            <p>{item.name}</p>
          </div>
        ))}

        <h1
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            fontSize: "17px",
            fontWeight: "700",
          }}
        >
          Consent
        </h1>
        <List>
          <li>basic site functions</li>
          <li>
            ensuring secure, safe transactions secure account login remembering
          </li>
          <li>
            account, browser, and regional preferences remembering privacy and
          </li>
          <li>
            security settings analysing site traffic and usage personalised
          </li>
          <li>
            search, content, and recommendations helping sellers understand
            their
          </li>
          <li>
            audience showing relevant, targeted ads on and off Etsy Detailed
          </li>
          <li>
            information can be found in Etsy’s Cookies & Similar Technologies
            Policy and our Privacy Policy.
          </li>
        </List>
      </SecionBodyContainer>

      <SecionBodyContainer style={{ paddingBottom: "20px" }}>
        <SectionHeader title="Required Cookies & Technologies" />
        <p
          style={{
            marginTop: "20px",
            lineHeight: "18px",
            marginBottom: "20px",
            fontSize: "15px",
          }}
        >
          Some of the technologies we use are necessary for critical functions
          like security and site integrity, account authentication, security and
          privacy preferences, internal site usage and maintenance data, and to
          make the site work correctly for browsing and transactions.
        </p>

        <SecionBodyContainer style={{ paddingBottom: "20px", display: "flex" }}>
          <div style={{ flex: 1 }}>
            <SectionHeader title="Site Customisation" />
            <p
              style={{
                marginTop: "20px",
                lineHeight: "18px",
                marginBottom: "20px",
                fontSize: "15px",
              }}
            >
              Cookies and similar technologies are used to improve your
              experience, to do things like:
            </p>

            <List>
              <li>remember your login, general, and regional preferences</li>
              <li>
                personalise content, search, recommendations, and offers Without
                these technologies, things like personalised recommendations,
                your account preferences, or localisation may not work
                correctly. Find out more in our{" "}
                <Link to="/findemore">
                  Cookies & Similar Technologies Policy.
                </Link>
              </li>
            </List>
          </div>
          <SwitchContainer>
            <p> On </p>
          <Switch value={isSwitchOn} onChange={switch_onChange_handle}  color="blue"/>
          </SwitchContainer>
        </SecionBodyContainer>

        <SecionBodyContainer style={{ paddingBottom: "20px", display: "flex" }}>
          <div style={{ flex: 1 }}>
            <SectionHeader title="Personalised Advertising" />
            <p
              style={{
                marginTop: "20px",
                lineHeight: "18px",
                marginBottom: "20px",
                fontSize: "15px",
              }}
            >
              These are third party technologies used for things like:
            </p>

            <List>
              <li>third party personalised ads</li>
              <li>to limit how many times you see an ad</li>
              <li>to understand usage via Google Analytics</li>
              <li>
                to ensure that sellers understand their audience and can provide
                relevant ads
              </li>
            </List>

            <p
              style={{
                marginTop: "20px",
                lineHeight: "18px",
                marginBottom: "20px",
                fontSize: "15px",
              }}
            >
              We do this with social media, marketing, and analytics partners
              (who may have their own information they’ve collected). Saying no
              will not stop you from seeing Etsy ads or impact Etsy's own
              personalisation technologies, but it may make the ads you see less
              relevant or more repetitive. Find out more in our
              <Link to="/cookies">Cookies & Similar Technologies Policy.</Link>
            </p>

            <Secondary title="Update Settings " />
          </div>
          <SwitchContainer>
            <p> On </p>
          <Switch value={isSwitchOn} onChange={switch_onChange_handle}  color="blue"/>
          </SwitchContainer>
   
        </SecionBodyContainer>
      </SecionBodyContainer>
    </SectionsWraper>
  );
};

export default ListingsPrivacy;
const Circle = styled.div`
  width: 20px;
  margin-right: 5px;
  
  cursor: pointer;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #d1d1d1;
`;
const List = styled.ol`
  /* padding: 10px; */
  list-style: circle;
  line-height: 18px;
  li {
    margin-top: 10px;
  }
`;

const SwitchContainer = styled.div`
margin-left: 20px;
width: 200px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 50px;
`;

const ToggleFill = styled.div`
  
`;