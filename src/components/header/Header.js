import React from "react";
import moment from "moment";

//custom imports
import {
  StyledImage,
  HeaderNavigation,
  StyledParagraph,
  StyledDate,
  StyledDiv,
  StyledUserBox,
  StyledUserInfo,
  StyledUserPosition,
  Div,
  StyledIcon,
} from "./HeaderComponents";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <HeaderNavigation>
      <StyledDiv>
        <StyledParagraph>'Insert something here...'</StyledParagraph>
        <StyledDate>{moment().format("MMMM Do YYYY")}</StyledDate>
      </StyledDiv>

      <StyledUserBox>
        <StyledImage
          src={"https://cdn.mos.cms.futurecdn.net/YYH9o4wmSXJfvbzRTq5BTY.jpg"}
        />
        <Div>
          <StyledUserInfo>surname</StyledUserInfo>
          <StyledUserPosition>position</StyledUserPosition>
        </Div>
        {/* <StyledIcon icon={faChevronDown} /> */}
      </StyledUserBox>
    </HeaderNavigation>
  );
};

export default Header;
