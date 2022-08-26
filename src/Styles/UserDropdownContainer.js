import styled from "styled-components";

 export const UserDropdownContainer = styled.div`
  

  position: absolute;
  transition: opacity 180ms ease-out,
    box-shadow 180ms cubic-bezier(0.175, 0.885, 0.4, 1.1),
    transform 180ms cubic-bezier(0.175, 0.885, 0.4, 1.1),
    visibility 180ms linear;
  box-shadow: 0 4px 20px rgba(34, 34, 34, 0.15);
  transform: scaleX(1) scaleY(1) perspective(1px);
  visibility: visible;
  min-width: 250px;
  max-width: 300px;
  z-index: 999;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 12px;

  /* position: absolute;
  transition: opacity 180ms ease-out,
    box-shadow 180ms cubic-bezier(0.175, 0.885, 0.4, 1.1),
    transform 180ms cubic-bezier(0.175, 0.885, 0.4, 1.1),
    visibility 180ms linear;
  box-shadow: 0 4px 20px rgba(34, 34, 34, 0.15);
  transform: scaleX(1) scaleY(1) perspective(1px);
  visibility: visible;
  min-width: 250px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 12px; */

  /* background-color: #f1f1f1; */

  z-index: 999;
  top: 3.4em;
  right: -2rem;
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
    -webkit-transform: rotate(-136deg);
  }
`;