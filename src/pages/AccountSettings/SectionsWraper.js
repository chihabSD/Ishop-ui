import React from 'react'
import styled from 'styled-components'

const SectionsWraper = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default SectionsWraper
const Container =  styled.div`
border-bottom: 1px solid #f1f1f1;
/* background-color: red; */
padding-bottom: 50px;
margin-top:10px; overflow: hidden;
`