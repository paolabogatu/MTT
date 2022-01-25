import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderNavigation = styled.div`
  width: calc(100% - 50px);
  height: 60px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
`;

export const StyledImage = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  left: 8px;
  position: absolute;
  object-fit: cover;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

export const StyledParagraph = styled.p`
  font-size: 15px;
  color: #000;
  margin: 0;
  font-weight: 500;
`;

export const StyledDate = styled.p`
  font-size: 15px;
  color: #949494;
  margin: 0;
`;

export const StyledDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px;
  left: 15px;
`;

export const StyledUserBox = styled.div`
  background: #f0f0f2;
  width: 110px;
  height: 40px;
  position: absolute;
  right: 80px;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const StyledUserInfo = styled.p`
  font-size: 10px;
  margin-left: 25px;
  font-weight: 500;
  margin-bottom: 0px;
`;

export const StyledUserPosition = styled.p`
  font-size: 8px;
  margin-left: 25px;
  margin-top: 0px;
`;

export const Div = styled.div`
  flex-direction: column;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 10px;
  right: 0;
`;
