import React from 'react'
import { SettingsMenu } from './style/AccountSettingStyle'

const Item = ({item, selected, onClick}) => {
  return (
    <SettingsMenu selected={selected} id={item.id} onClick={onClick} >
    <li>
      {item.icon}
      <p>{item.name}</p>
    </li>
  </SettingsMenu>
  )
}

export default Item