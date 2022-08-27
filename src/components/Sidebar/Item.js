import React from "react";
import { auth } from "../../firebase";
import { useRedux } from "../../hooks/useRedux";
import { _logout } from "../../redux/actions/auth";
import { SettingsMenu } from "./Style";

const Item = ({ item, selected, onClick }) => {
  const { dispatch } = useRedux();
  const handleLogout = () => {
    auth.signOut();
    dispatch(_logout());
  };
  return (
    <SettingsMenu
      selected={selected}
      id={item.id}
      onClick={item.id === 4 ? handleLogout : onClick}
    >
      <li>
        {item.icon}
        <p>{item.name}</p>
      </li>
    </SettingsMenu>
  );
};

export default Item;
