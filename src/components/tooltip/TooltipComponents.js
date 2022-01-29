import styled from "styled-components";

export const TooltipBox = styled.div`
  visibility: hidden;
  position: absolute;
`;

export const TooltipCard = styled.div`
  & > *:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    width: 80px;
  }
`;

export const StyledTitle = styled.p`
  font-size: 12px;
  padding: 4px;
  text-align: center;
`;
