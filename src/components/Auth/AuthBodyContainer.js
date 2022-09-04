
import React from 'react'
import styled from 'styled-components'
const AuthBodyContainer = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default AuthBodyContainer
const Container = styled.div`
  flex: 1;
  padding: 15px;
`;
