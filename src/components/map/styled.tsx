import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: 380px;
  @media only screen and (min-width: 768px) {
    height: 460px;
  }
  @media only screen and (min-width: 960px) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 500px;
  }
`;
