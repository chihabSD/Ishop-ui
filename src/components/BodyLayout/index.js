import React  from 'react'
import styled from 'styled-components';

const BodyLayout = ({children, style}) => {
  return (
    <Container style={{...style}}>{children}</Container>
  )
}

export default BodyLayout

export const Container = styled.div`
  background-color: #fbfbfc  ;
  min-height: 70vh;
  margin: 10px 0px 0 0;
  margin-bottom: 50px;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: inherit;
  padding: 12px 36px ;
  width: 100%;

`;