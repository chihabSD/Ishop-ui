import React from "react";
import {
  FooterContainer,
  FooterTop,
  FooterBottom,
  Left,
  Right,
  FooterItem,
  FooterItemTitle,
} from "./Footer";
const Footer = () => {
  return (
    <FooterContainer>
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
        </FooterItem>
      </FooterTop>
      <FooterBottom>
        <Left>Left</Left>
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
    </FooterContainer>
  );
};

export default Footer;
