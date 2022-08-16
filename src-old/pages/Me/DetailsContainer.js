import { CameraOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ImageCountainer from '../../components/ImageContainer'
import { useRedux } from '../../hooks/useRedux'

const DetailsContainer = () => {
  const {user} = useRedux()
  return (
    <>
          <ImageCountainer
            img={user.picture}
            style={{ height: "100px", width: "100px" }}
          >
              <Icon>

              <CameraOutlined style={{ fontSize: "20px" }} />
              </Icon>
          </ImageCountainer>
          <MeContainerRight>
            <h3> Chihab adam </h3>
            <MeContainerItems>
              <p>0 Followering</p>
              <p>0 Followers</p>
            </MeContainerItems>
            <MeContainerItems>
              <Link to="/account/eddit"> Edit profile</Link>
              <Link to="/account/eddit"> About chihab </Link>
            </MeContainerItems>
          </MeContainerRight>
    </>
  )
}

export default DetailsContainer

 const MeContainerRight = styled.div`
display: flex;
/* align-items: center; */
flex-direction: column;
margin-left: 20px;

/* width: 00px; */
`

const MeContainerItems = styled.div`
display: flex;
justify-content: space-between;
width: 200px;
/* padding-top: 20px; */
line-height: 28px;
&:first-child() {
    margin-top: 30px;
}
`
const Icon = styled.div`
  width: 50px;
  height: 50px;
  border: 1.4px solid #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: -1;
  right: 0;
  bottom: 0;
  left: 1;
`;
