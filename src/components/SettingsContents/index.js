import React from 'react'
import styled from 'styled-components'

const SettingsContents = ({children}) => {
  return (
    <Container>{children} </Container>
  )
}

export default SettingsContents
 const Container = styled.div`
  background-color: white;
  flex: 1;
  /* border: 1px solid gray; */
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%;
  padding: 10px;
  display: flex;
  flex: 1; */
`;
