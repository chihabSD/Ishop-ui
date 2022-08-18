import React from 'react'
import styled from 'styled-components';

export const Divider = ({style}) => {
  return (
    <Container style={{...style}} />
  )
}

const Container = styled.div`
  margin-top: 30px;
  
`;