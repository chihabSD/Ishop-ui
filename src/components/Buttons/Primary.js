import React from "react";
import styled from "styled-components";

// const Primary = ({ label, onClick, style,  icon,
  

//   color,
//   disabled,
//   textColor,
//   error, }) => {
//   return <Container  onClick={onClick}
//   error={error}
//   textColor={textColor}
//   color={color}
//   style={{ ...style }}
//     > {label}</Container>;
// };

// export default Primary;

// const Container = styled.button`
//   display: inline-block;
//   padding: 12px 24px;
//   /* border: 1px solid #4f4f4f; */
//   border: 1px solid ${({ color }) => (color ? color : "#4f4f4f")};
//   border-radius: 4px;
//   transition: all 0.2s ease-in;
//   position: relative;
//   overflow: hidden;
//   font-size: 19px;
//   color: black;
//   z-index: 1;
//   background: ${({ color }) => (color ? color : "#111")};
//   /* background-color: #111; */
//   color: white;
//   /* cursor: pointer; */
//   pointer-events: ${({ error }) => (error ? "none" : "auto")};
//   opacity: ${({ error }) => (error ? "0.2" : "1")};

//   &:before {
//     content: "";
//     position: absolute;
//     left: 50%;
//     transform: translateX(-50%) scaleY(1) scaleX(1.25);
//     top: 100%;
//     width: 140%;
//     height: 180%;
//     background-color: rgba(0, 0, 0, 0.05);
//     border-radius: 50%;
//     display: block;
//     transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
//     z-index: -1;
//   }

//   &:after {
//     content: "";
//     position: absolute;
//     left: 55%;
//     transform: translateX(-50%) scaleY(1) scaleX(1.45);
//     top: 180%;
//     width: 160%;
//     height: 190%;
//     background-color: #39bda7;
//     border-radius: 50%;
//     display: block;
//     transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
//     z-index: -1;
//   }

//   &:hover {
//     color: #ffffff;
//     border: 1px solid #39bda7;
//   }

//   &:hover:before {
//     top: -35%;
//     background-color: #39bda7;
//     transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
//   }

//   &:hover:after {
//     top: -45%;
//     background-color: #39bda7;
//     transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
//   }
// `;



const Primary = ({
  icon,
  label,
  onClick,
  color,
  style,
  disabled,
  textColor,
  error,
}) => {
  return (
    <Container
      onClick={onClick}
      error={error}
      textColor={textColor}
      color={color}
      style={{ ...style }}
    >
      {icon && icon}
      <span>{label} </span>
    </Container>
  );
};

export default Primary;

// const Container = styled.div`
//   border: 2px solid;
//   padding: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all  0.3s;
//   cursor: pointer;
//   p {
//     font-size: 17px;
//     font-weight: 700;
//   }
//   &:hover {
//     background-color: #f1f1f1;
//     border-color: #d1d1d1;
//   }
// `;



const Container = styled.div`
  background: ${({ color }) => (color ? color : "#fff")};
  display: flex;
  align-items: center;
  margin: 0 2px;
  border-radius: 15px;
  margin-top: 10px;
  /* border: 2px solid black; */
  justify-content: center;
  /* border: 0.5px solid lightgray; */
  border: 1px solid ${({ color }) => (color ? color : "lightgray")};
  padding: 8px 30px;
  font-weight: 300;
  font-size: 13px;
  pointer-events: ${({ error }) => (error ? "none" : "auto")};
  opacity: ${({ error }) => (error ? "0.2" : "1")};
  /* opacity: 0.4; */
  cursor: pointer;
  animation: zoom-in-zoom-out 1s ease infinite;
  transform: scale(1, 1.2);
  transition: all 0.5s;
  &:hover {
    background-color: #f1f1f1;
    /* border: 1px solid black; */
    /* animation: zoom-in-zoom-out 1s ease infinite;
    transform: scale(1, 1.1); */
  }
  span {
    margin-left: 10px;
    font-size: 1rem;
    color: ${({ textColor }) => (textColor ? textColor : "#fff")};
    /* color: ${({ color }) => (color ? "#fff" : "")}; */
  }
`;
