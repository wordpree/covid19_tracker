import React from "react";

interface ITPProps {
  index: number;
  value: number;
  children?: React.ReactNode;
}

const TabPanel = ({ index, value, children }: ITPProps) => {
  return value === index ? <div>{children}</div> : null;
};

export default TabPanel;
