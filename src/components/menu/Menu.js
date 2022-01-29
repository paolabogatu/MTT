import React from "react";
import { useNavigate } from "react-router-dom";

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

import Tooltip from "../tooltip/Tooltip";

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
              <Tooltip title={item.title}>
                <StyledIcon icon={item.icon} />
              </Tooltip>
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
