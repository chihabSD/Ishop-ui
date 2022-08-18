import {
    BookOutlined,
    CaretDownFilled,
    GiftOutlined,
    MessageOutlined,
    PlusOutlined,
    SettingFilled,
    TagFilled,
    UserAddOutlined,
  } from "@ant-design/icons";
  import React, { useRef, useState } from "react";
  import { Link } from "react-router-dom";
  import styled from "styled-components";
  import { auth } from "../../firebase";
  import { _logout } from "../../redux/actions/auth";
  
  import { useRedux } from "../../hooks/useRedux";
  import ProfilePicContainer from "../ProfilePicContainer";
  import { useClickOutSide } from "../../hooks/useClickOutside";
  import LinkWrapper from "../LinkWrapper";
  import { UserDropdownContainer } from "../../Styles/UserDropdownContainer";
import NoData from "../NotData";
  const NotificationDropDown = ({  setShowNotificationMenu }) => {
    const { dispatch, user } = useRedux();
    const menu = useRef(null);
    useClickOutSide(menu, () => {
     setShowNotificationMenu ();
      // menu.current.style.display = 'none'
      // setShowUserMenu(false);
    });
  
    const logout = () => {
      auth.signOut();
      dispatch(_logout());
    };
    const fontSize = "25px";
  
    return (
      <UserDropdownContainer ref={menu} >
        <Contianer>
        

          
  
         <NoData>
            <h1>No updates</h1>
            <p>This is where you'll see updates on your favourite items and shops, like sales, new products and more</p>
         </NoData>
        </Contianer>
      
      </UserDropdownContainer>
    );
  };
  
  export default NotificationDropDown;
  

  
  const Contianer = styled.ul`
    
    height: 400px;
    background-color: white;
    border-radius: inherit;
    display: flex;
    line-height: 18px;
    text-align: center;
    h1{
        font-size: 20px;
        font-weight: 600;
    }
    p {
        font-weight: 300;
        font-size: 13px;
    }
  `;
  
 
  