import React from 'react'
import styled from 'styled-components';

const AuthTitle = ({title}) => {
  return (
    <Title>{title}</Title>
  
  )
}

export default AuthTitle
const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;