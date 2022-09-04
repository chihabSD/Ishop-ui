import React from 'react'

import styled from "styled-components";
const AuthPageContainer = ({children}) => {
  return (
    <AuthContainer>{children}</AuthContainer>
  )
}

export default AuthPageContainer

export const AuthContainer = styled.div`

background-color: #f1f1f1;
flex: 1;
width: 100%;
grid-area: middleContents;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

