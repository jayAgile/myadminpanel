import React from "react";
import "./index.scss";
export const Card = (props) => {
  const { disabled = true, lineEnable = false, lineClassName } = props;
  return (
    <button
      key={props.keyvalue}
      style={{
        ...props.style,
      }}
      {...props}
      disabled={disabled}
      className={`${props.className} cardBtnStyle`}
    >
      {props.children}
      <div className={lineEnable ? `${lineClassName} line` : ""} />
    </button>
  );
};
