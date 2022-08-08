import React from "react";
import { PrimaryButtonContainer } from "./styles/Container";

const Primary = ({icon, title, onClick,  color,style, disabled }) => {
  return (
    <PrimaryButtonContainer onClick={onClick} disabled={disabled} color={color} style={{...style}} >
        {icon}
      <span>{title} </span>
    </PrimaryButtonContainer>
  );
};

export default Primary;
