import React from 'react'
import { SettingsMenu } from './style/AccountSettingStyle'

const Item = ({item, selected, onClick}) => {
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
  )
}

export default Item