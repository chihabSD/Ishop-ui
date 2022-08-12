import React from 'react'
import styled from "styled-components";


const FormButton = ({icon, label, onClick,  color,style, disabled , textColor,  error}) => {
    return (
      <Container onClick={onClick} error={error} textColor={textColor} color={color} style={{...style}} >
          {icon   && icon}
        <span>{label} </span>
      </Container>
    );
  };


export default FormButton


const Container = styled.div`


  background: ${({ color }) => (color ? color : "#fff")};
  display: flex;
  align-items: center;
  margin: 0 20px;
  border-radius: 15px;
  margin-top: 10px;
  /* border: 2px solid black; */
  justify-content: center;
  /* border: 0.5px solid lightgray; */
  border: 2px solid  ${({ color }) => (color ? color : "lightgray")};;
  padding: 10px 30px;
  font-weight: 700;
  pointer-events: ${({error}) => (error ? 'none':'auto')};
  opacity: ${({error}) => (error ? '0.2':'1')};
    /* opacity: 0.4; */
  cursor: pointer;
  &:hover {
    /* border: 1px solid black; */
    animation: zoom-in-zoom-out 1s ease infinite;
  transform: scale(1, 1.1);
   
  }
  span {
    margin-left: 10px;
    font-size: 1rem;
  color: ${({textColor}) => (textColor ? textColor:'#fff')};
   
  }
`;
