import React from "react";
import styled from "styled-components";

const ProfilePicContainer = ({style}) => {
  return (
    <AvatarContainer style={{...style}}>
      <img
        // src={user.picture}
        src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?cs=srgb&dl=pexels-lukas-296282.jpg&fm=jpg"
        alt=""
      />
    </AvatarContainer>
  );
};

export default ProfilePicContainer;

const AvatarContainer = styled.div`
height: 30px;
width: 30px;
border-radius: 50%;
display: flex;
align-items: center;
img {
width: 100%;
border-radius: inherit;
height: 100%;
}
`;