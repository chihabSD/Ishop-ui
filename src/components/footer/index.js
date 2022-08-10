import { BookOutlined, FacebookFilled, InstagramFilled, TwitterCircleFilled, TwitterOutlined, YoutubeFilled } from "@ant-design/icons";
import React from "react";
import {
  FooterContainer,
  FooterTop,
  FooterBottom,
  Left,
  Right,
  FooterItem,
  LeftItem,
  FooterWrapper,
  FooterItemTitle,
  SocialContainer,
  DownloadAppButton,
  SocialIcons,
  SocialIconsContainer
} from "./Footer";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <FooterItem>
            <h1>Shop</h1>
            <ul>
              <li>Gift cards</li>
              <li>Sitemap</li>
              <li>Ishop blog</li>
              <li>Ishop United Kindom</li>
              <li>Ishop Ireland </li>
              <li>Ishop USA </li>
            </ul>
          </FooterItem>

          <FooterItem>
            <h1>Sell</h1>
            <ul>
              <li>Sell on Ishop</li>
              <li>Teams</li>
              <li>Forums</li>
              <li>Affiliates</li>
            </ul>
          </FooterItem>

          <FooterItem>
            <h1>About</h1>
            <ul>
              <li>Isho, inc.</li>
              <li>Policies</li>
              <li>Ivestors</li>
              <li>Press</li>
              <li>Legal imprint</li>
            </ul>
          </FooterItem>

          <FooterItem>
            <h1>Help</h1>
            <ul>
              <li>Help Centre</li>
              <li>Trust and safety</li>
              <li>Privacy settings</li>
            </ul>
            <SocialContainer>
              <DownloadAppButton>
                <BookOutlined />
                <p>Download the app </p>
              </DownloadAppButton>
              <SocialIconsContainer>
              
                <SocialIcons>  <InstagramFilled/></SocialIcons>
                <SocialIcons>  <FacebookFilled/></SocialIcons>
                <SocialIcons>  <TwitterCircleFilled/></SocialIcons>
                <SocialIcons>  <YoutubeFilled /></SocialIcons>
             
              </SocialIconsContainer>
            </SocialContainer>
          </FooterItem>
        </FooterTop>
        <FooterBottom>
          <Left>
            <LeftItem>Ireland</LeftItem>
            <LeftItem>English(UK)</LeftItem>
            <LeftItem>$ (EUR)</LeftItem>
          </Left>
          <Right>
            <span>@ 2022 Ishop, Inc.</span>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Interest-basedd ads</li>
            </ul>
          </Right>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
