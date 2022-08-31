import React from 'react'
import styled from 'styled-components'

const AuthContainer = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default AuthContainer
const Container = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid #f1f1f1;
padding-top: 10px;
padding-bottom: 10px;
`