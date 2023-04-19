import React from "react";

const Progress_bar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "90%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: "10px 0px 0px 0px",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <>
      {/* <span style={{ alignSelf: "flex-end", margin:"0px 0px 10px 0px" }}>{`${progress}%`}</span> */}
      <div style={Parentdiv}>
        <div style={Childdiv}></div>
      </div>
    </>
  );
};

export default Progress_bar;
