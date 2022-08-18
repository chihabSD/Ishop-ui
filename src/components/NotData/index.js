import React from 'react'
import styled from 'styled-components'

const NoData = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default NoData
const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`