import styled from "styled-components";

const Container = styled.div`
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
  background-color: yellow;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: #fff;

  top: 3.4em;
  right: -1.8em;
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
  padding: 10px;
  /* width: 220px; */
  /* margin: 0 20px 5px 15px; */
  margin-top: 1px;
  justify-items: center;
  font-weight: 400;
  /* padding: 10px; */
  h4 {
    /* font-size: 0.9rem; */
    text-align: center;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
  }
  p {
    /* font-weight: 590; */
    color: #222222;

    font-family: "Graphik Webfont", -apple-system, "Helvetica Neue",
      "Droid Sans", Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  &:hover {
    background-color: #f1f1f1;
  }
  &:nth-child(1) {
    margin-bottom: 20px;
  }
`;

const ProfileMenuItemLeft = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
`;

const ProfileMenuItemRight = styled.div`
  flex: 1;
  margin-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: blue; */

  &:first-child {
    font-family: "Graphik Webfont", -apple-system, "Helvetica Neue",
      "Droid Sans", Arial, sans-serif;
    font-weight: 700;
    line-height: 20px;
  }

`;
const Avatar = styled.img`
width: 100%;
height: 100%;
border-radius: 50%;
`;

 /*--------------------END OF ITEMS-----------*/
export {
  Avatar,
  Container,
  ContentWrapper,
  ProfileMenuItem,
  ProfileMenuItemLeft,
  ProfileMenuItemRight,
};
