import React from 'react'
import styled from 'styled-components'

const OverLay = () => {
  return (
    <OverLayContainer></OverLayContainer>
  )
}

export default OverLay
const OverLayContainer = styled.div`
width: 100vw;
height: 100vh;


position: absolute;
  /* top: 10;
  right: 0;
  over
  bottom: 100;
  left: 0; */
  z-index: 1000;
  /* background-color: black; */
  display: flex;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  background-color: rgba(0, 0, 0, 0.5);

 
  display: flex;
  justify-content: center;
  align-items: center;
`