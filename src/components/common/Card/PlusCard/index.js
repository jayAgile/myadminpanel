import React from "react";
import { Card } from "..";
import "./pluscard.scss";

export const AddCardBtn = (props) => {
  return (
    <Card keyvalue={"0"} className={`${props.className} plus-files`}>
      <button className="plus-imgStyle" />
    </Card>
  );
};
