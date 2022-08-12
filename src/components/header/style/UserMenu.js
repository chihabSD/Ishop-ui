import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  line-height: 3px;
  position: absolute;
  transition: opacity 180ms ease-out,
    box-shadow 180ms cubic-bezier(0.175, 0.885, 0.4, 1.1),
    transform 180ms cubic-bezier(0.175, 0.885, 0.4, 1.1),
    visibility 180ms linear;
  box-shadow: 0 4px 20px rgba(34, 34, 34, 0.15);
  opacity: 1;
  transform: scaleX(1) scaleY(1) perspective(1px);
  visibility: visible;
  min-width: 250px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: #fff;
  /* z-index: 999; */
  top: 4.3em;
  right: -2.7rem;
  &::after {
    content: "";
    display: block;
    position: absolute;

    right: 4.2em;
    width: 15px;
    height: 15px;
    top: -0.5em;
    background: #ffffff;
    border-right: 2px solid #f1f1f1;
    border-bottom: 2px solid #f1f1f1;
    /* -moz-transform:rotate(-180deg); */
    -webkit-transform: rotate(-136deg);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  /* border-radius: 12px; */
  margin: 10px 0px 0 0;
  background-color: #fff;
  margin-bottom: 20px;
  opacity: 1;
  transform: scaleX(1) scaleY(1) perspective(1px);
  visibility: visible;
  white-space: nowrap;
  overflow: hidden;
`;

/*------------- ITMES ------------ */
const ProfileMenuItem = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 7px;
  /* width: 220px; */
  background-color: inherit;
  /* margin: 0 20px 5px 15px; */
  margin-top: 1px;
  justify-items: center;
  font-weight: 400;
  /* padding: 10px; */
  h4 {
    /* font-size: 0.9rem; */
    font-weight: 900;
    font-size: 17px;
    line-height: 20px;
  }
  p {
    /* font-weight: 590; */
    color: #222222;

      /* font-family: "Graphik Webfont", -apple-system, "Helvetica Neue", */
      /* "Droid Sans", Arial, sans-serif; */
      font-weight: 00;
      font-size: 14px;
      margin-left: 10px;
      font-weight: 300;
    /* line-height: 18px; */
  }

  &:hover {
    background-color: #f1f1f1;
  }
  &:nth-child(1) {
    margin-bottom: 20px;
  }
`;

const ProfileMenuItemLeft = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
`;

const ProfileMenuItemRight = styled.div`
  flex: 1;
  /* margin-left: 10px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: blue; */
`;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  margin-left: 10px;
  /* width: 100%;
  height: 100%;
  border-radius: 50%;
  margin-left: 10px; */
`;

const UserMenuList = styled.ul`
  list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
  /* padding: 10px; */
  background-color: white;
  text-decoration: none;

  &:nth-child(1) {
    /* margin-bottom: 20px; */
    /* padding-bottom: 10px; */
    padding-bottom: 20px;

    h1 {
      font-weight: 900;
      font-size: 17px;
      line-height: 20px;
    }

    p {
      /* font-weight: 590; */
      color: #222222;

      /* font-family: "Graphik Webfont", -apple-system, "Helvetica Neue", */
      /* "Droid Sans", Arial, sans-serif; */
      font-weight: 00;
      font-size: 14px;
      margin-left: 0;
      /* line-height: 18px; */
    }
  }
  li {
    color: #111;
    display: flex;
    align-items: center;
    padding: 10px;

    /* margin-top: 5px; */
    background-color: gray;
    background-color: white;

    p {
      margin-left: 10px;
      color: #222222;
      font-weight: 400;
      font-size: 14px;
    }
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;
/*--------------------END OF ITEMS-----------*/
export {
  Avatar,
  Container,
  ContentWrapper,
  ProfileMenuItem,
  ProfileMenuItemLeft,
  ProfileMenuItemRight,
  UserMenuList,
};
