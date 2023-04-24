import React from "react";
import "./circleavatar.scss";
import { toAbsoluteUrl } from "../../../utils";

export const CircleAvatar = (props) => {
  return (
    <div className={`paddingY circleAvatar ${props.className}`}>
      <img src={toAbsoluteUrl(`Images/${props.img}`)} />
    </div>
  );
};
