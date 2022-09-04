import React from 'react'
import styled from 'styled-components'

const AuthWrapper = ({children}) => {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default AuthWrapper

const Wrapper = styled.div`
  background-color: white;
  /* height: 70%; */
  /* min-height: 50%; */
  border-radius: 3px;
  width: 20%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-bottom: 20px;
  /* bottom: 0; */
`;