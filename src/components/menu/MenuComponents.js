import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledMenu = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #201f41;
  color: #f0f0f2;
  // border-top-right-radius: 15px;
  // border-bottom-right-radius: 15px;
`;

export const MenuListUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const MenuListLi = styled.li`
  margin: 0 0 20px 0;
  &:hover {
    border-radius: 25%;
    background-color: #912e54;
  }
`;

export const MenuLogo = styled.a`
  position: absolute;
  top: 25px;
`;

export const MenuLogout = styled.div`
  position: absolute;
  bottom: 25px;
  font-size: 30px;
`;

export const Divider = styled.div`
  background-color: #fff;
  width: 40px;
  height: 1px;
  align-items: center;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 20px;
`;

export const MenuLogoIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  cursor: pointer;
`;
