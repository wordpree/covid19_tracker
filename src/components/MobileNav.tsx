import React from "react";
import {
  StyledMobileInput,
  StyledMobileSpan,
  StyledMobileLabel,
} from "./styled";

const MobileNav = () => {
  return (
    <>
      <StyledMobileInput className="input" type="checkbox" id="input" />
      <StyledMobileLabel className="label" htmlFor="input">
        <StyledMobileSpan className="icon"></StyledMobileSpan>
      </StyledMobileLabel>
    </>
  );
};

export default MobileNav;
