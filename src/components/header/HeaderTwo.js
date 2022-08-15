import React from 'react'
import styled from 'styled-components'

const HeaderTwo = ({children}) => {
  return (
    <Header>
    <h1>Iship</h1>
    {children}
    {/* <h1>Register</h1> */}
  </Header>
  )
}

export default HeaderTwo
const Header = styled.div`
  width: 100%;
  background-color: #fff;
  margin: 0;

  /* padding-bottom: 10px; */
justify-content: space-between;
  height: 50px;
  align-items: center;
  display: flex;
  /* box-shadow: 0px 10px 15px -20px  #111;   */
  /* box-shadow: 0px 15px 10px -15px #111;    */
  /* opacity: 1; */
  box-shadow: 0 -6px 5px 4px rgba(0, 0, 0, 0.4);
  transform: scaleX(1) scaleY(1) perspective(1px);
  padding: 2% 15%;
  margin-bottom: 30px;
  /* background-color: yellow; */
  /* background: #fff; */
  /* height: 100vh; */
  h1 {
    font-size: 15px;
  }
`;
