import styled from "styled-components";

export const StyledMobileInput = styled.input`
  display: none;
  &:checked ~ .label .icon {
    background: transparent;
  }
  &:checked ~ .label .icon::before {
    transform: rotate(45deg);
    top: 0;
  }
  &:checked ~ .label .icon::after {
    transform: rotate(-45deg);
    top: 0;
  }
  &:checked ~ .wrapper {
    max-height: 420px;
    background: rgb(58, 171, 166);
    color: #ccc;
  }
`;

export const StyledMobileSpan = styled.span`
  position: relative;
  display: block;
  background: #333;
  height: 2px;
  &:before {
    top: 5px;
  }
  &:after {
    top: -5px;
  }
  &::before,
  &::after {
    display: block;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #333;
    transition: background 0.2s ease-out;
  }
  transition: background 0.2s ease-out;
  width: 18px;
`;

export const StyledMobileLabel = styled.label`
  @media screen and (min-width: 768px) {
    display: none;
  }
  cursor: pointer;
  padding: 28px 20px;
  position: relative;
  user-select: none;
  float: right;
`;
