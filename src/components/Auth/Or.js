import React from 'react'
import styled from 'styled-components'

const Or = () => {
  return (
    
    <Container>
    <span>OR</span>
  </Container>
  )
}

export default Or

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  span {
    margin: 0 10px;
  }

  &::after,
  &::before {
    content: "";
    display: block;
    background: lightgray;
    width: 100%;
    height: 1px;
    /* margin: 0 1px; */
  }
`;