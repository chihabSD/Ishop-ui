import React from "react";
import { SideBarUIContainer,  AccountSettingsContainer,
  SettingsLeft, } from "./Style";
import { useRedux } from "../../hooks/useRedux";
import { useNavigate } from "react-router-dom";
import { setCurrentSideMenu } from "../../redux/reducers/page";
import Item from "./Item";
const SideBarUI = () => {
  let navigate = useNavigate();
  const { dispatch, currentSideBarMenu, sideBarMenu } = useRedux();

  
  const handleSelected = (item) => {
    console.log(item);
    const { id, route } = item;
    navigate(route);

    dispatch(setCurrentSideMenu(id));
  };

  return (
      <AccountSettingsContainer>
        <div
          style={{
            backgroundColor: "white",
            marginLeft: "30px",
            marginTop: "20px",
            margin: "20px",
          }}
        >
          <SettingsLeft>
            {sideBarMenu.map((item) => (
              <Item
                key={item}
                item={item}
                selected={currentSideBarMenu}
                onClick={() => handleSelected(item)}
              />
            ))}
          </SettingsLeft>
        </div>
      </AccountSettingsContainer>
  );
};

export default SideBarUI;
