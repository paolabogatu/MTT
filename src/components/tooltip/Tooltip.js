import React from "react";

import { TooltipBox, TooltipCard, StyledTitle } from "./TooltipComponents";

const Tooltip = (props) => {
  const { title, children } = props;
  return (
    <TooltipCard>
      {children}
      <TooltipBox>
        <StyledTitle>{title}</StyledTitle>
      </TooltipBox>
    </TooltipCard>
  );
};

export default Tooltip;
