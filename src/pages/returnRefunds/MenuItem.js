import { MessageOutlined } from "@ant-design/icons";
import React from "react";
import { SettingsMenu, Right, selected } from "./style/AccountSettingStyle";

const MenuItem = ({ item, selected, onClick }) => {
  return (
    
    <SettingsMenu selected={selected} id={item.id} onClick={onClick} >
      <li>
        {/* <MessageOutlined className="icon" style={{ fontSize: "20px" }} /> */}
        {item.icon}
        {/* <Right> */}
        <p>{item.name}</p>
        {/* <p>{item.desc}</p> */}
        {/* </Right> */}
      </li>
    </SettingsMenu>
  );
};

export default MenuItem;
