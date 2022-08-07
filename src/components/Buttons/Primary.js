import React from "react";
import { PrimaryButtonContainer } from "./styles/Container";

const Primary = ({icon, title, color }) => {
  return (
    <PrimaryButtonContainer color={color}>
        {icon}
      <span>{title} </span>
    </PrimaryButtonContainer>
  );
};

export default Primary;
