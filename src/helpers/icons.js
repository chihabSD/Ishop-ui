import React from "react";

import {
  MessageOutlined,
  SettingFilled,
  CreditCardOutlined,
  StarFilled,
  LoginOutlined,
} from "@ant-design/icons";



export const RenderIcon = (icon, size, color) => {
  if (icon === "message") {
    return <MessageOutlined  size={size ? size : '20px'} color={color ? color:'black'} />;
  } else if (icon === "settings") {
    return <SettingFilled  size={size ? size : '20px'} color={color ? color:'black'} />;
  }
};
