import styled from "styled-components";

const UserMenuContainer = styled.div`
  /* background: #fae0bb; */
  border: 1px solid #f1f1f1;
  box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.07);
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.07);
  /* margin: 0; */
  border-radius: 5px;
  top: 2.8em;
  /* overflow: visible; */
  /* z-index: 99999; */

  background-color: white;
  min-height: 400px;
  max-height: 70vh;
  width: 250px;
  display: flex;
  left: -10em;
  gap: 6px;
  z-index: 1;
  /* background-color: blue; */
  position: absolute;

  bottom: 0;
  transition: all 0.2s;

  &::after {
    content: "";
    display: block;
    position: absolute;

    right: 6em;
    width: 15px;
    height: 15px;
    top: -0.5em;
    background: #ffffff;
    border-right: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    /* -moz-transform:rotate(-180deg); */
    -webkit-transform: rotate(-136deg);
  }
  /* Large Devices, Wide Screens */
  @media only screen and (min-width: 1200px) {
    padding: 10px 100px 30px 100px;
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width: 992px) {
    padding: 10px 10% 20px 10%;
  }
`;
export {UserMenuContainer}