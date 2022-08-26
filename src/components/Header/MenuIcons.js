import { MenuOutlined } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'
import { useRedux } from '../../hooks/useRedux'
import { toggleCategoriesModal } from '../../redux/reducers/modals'

const MenuIcons = ({onClick}) => {
    const {dispatch} = useRedux()
  return (
    <Container id='menuIcons' onClick={()=>dispatch(toggleCategoriesModal())}>
    <MenuOutlined style={{ fontSize: "25px" }} />
    </Container>
  )
}

export default MenuIcons
const Container = styled.div`
display: none;
/* background-color: blue; */
grid-area: menuIcons;
/* background-color: yellow; */
cursor: pointer;
width: 40px;
height: 40px;
border-radius: 50%;
align-items: center;
justify-content: center;
/* display: flex; */
padding: 5px;
transition: all 0.5s;
&:hover {
    background-color: #f1f1f1;
}
`
