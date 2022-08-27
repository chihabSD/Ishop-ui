import React from 'react'
import styled from 'styled-components'

const SettingsContentsUI  = ({children, column}) => {
  return (
    <Container style={{flexDirection:column ? 'column':'row'}}>

      {children}
       </Container>
  )
}

export default  SettingsContentsUI


const Container = styled.div`
background-color: white;

margin: 20px;
display: flex;
/* align-items: center; */
/* justify-content: center; */

`