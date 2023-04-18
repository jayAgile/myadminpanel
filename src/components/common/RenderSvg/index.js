import React from "react";

export const RenderSvg = ({ className, imgString }) => {
  return (
    <svg
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(" - (50 % ", ") - (50 % ")"),
        opacity: 1,
      }}
      className={className}
      viewBox="0 0 512 512"
    >
      <path d={imgString}></path>
    </svg>
  );
};
