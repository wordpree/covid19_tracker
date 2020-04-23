import React from "react";
import { LinearProgress } from "@material-ui/core";

type LdProps = {
  value: number;
};

const Loading = (props: LdProps) => (
  <div>
    <LinearProgress
      value={props.value}
      style={{ position: "absolute", width: "100%", top: "35%" }}
    />
  </div>
);

export default Loading;
