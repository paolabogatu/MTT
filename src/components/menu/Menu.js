import React from "react";

import {
  StyledMenu,
  MenuListLi,
  MenuListUl,
  MenuLogo,
  MenuLogout,
  StyledIcon,
  MenuLogoIcon,
} from "./MenuComponents";

import { faMeteor, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import MENU_ITEMS from "../constants";

import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <StyledMenu>
      <MenuLogo onClick={() => navigate("/home")}>
        <MenuLogoIcon icon={faMeteor} />
      </MenuLogo>
      <MenuListUl>
        {MENU_ITEMS.map((item, index) => {
          return (
            <MenuListLi key={index} onClick={() => navigate(item.path)}>
              <StyledIcon icon={item.icon} />
            </MenuListLi>
          );
        })}
        <MenuLogout>
          <StyledIcon icon={faSignOutAlt} />
        </MenuLogout>
      </MenuListUl>
    </StyledMenu>
  );
};

export default Menu;
