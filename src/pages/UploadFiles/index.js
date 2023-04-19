import React, { useState } from "react";
import { Card } from "../../components/common/Card";
import "./uploadfiles.scss";
import { RenderSvg } from "../../components/common/RenderSvg";
import { svgIcon } from "../../constants/svgIcon";
import { downloading } from "../../constants/data";
import ProgressBar from "../../components/common/ProgressBar";

export const UploadFiles = () => {
  const [progress, setProgress] = useState("63");

  return (
    <div className="uploadwrapper">
      <div className="mainContainer">
        <Card className="cardContainer" disabled={false}>
          <h1 className="title">Upload files</h1>
          <Card className="innerCard" disabled={false}>
            <RenderSvg className={`image-cloud`} imgString={svgIcon.cloud} />
            <h1>Drag & drop your files here</h1>
            <h3>or</h3>
            <button className="chooseBtn">
              <span>Choose From Your Computer</span>
            </button>
          </Card>
        </Card>
        <Card className="downloadContainer" disabled={false}>
          <h2 className="progressContainer">Upload progress</h2>
          {downloading.map((obj) => {
            return (
              <Card className="innerCard-container" disabled={false}>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <button className={`img-${obj.colors}`}>
                      <div className="recent-imgStyle" />
                    </button>
                  </div>
                  <div
                    style={{
                      flexDirection: "column",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      width: "90%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "90%",
                      }}
                    >
                      <span>{obj.title}</span>
                      {obj.id == "1" && <span>{progress}%</span>}
                    </div>
                    {obj.id == "1" ? (
                      <>
                        <ProgressBar
                          bgcolor="skyblue"
                          progress={progress}
                          height={5}
                        />
                        {/* <span>63%</span> */}
                      </>
                    ) : (
                      <span
                        style={{ margin: "5px 0px 0px 0px" }}
                        className="size"
                      >
                        {obj.size}
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      flexDirection: "column",
                      display: "flex",
                      // alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    <RenderSvg className={"icons"} imgString={obj.icon} />
                  </div>
                </div>
              </Card>
            );
          })}
        </Card>
      </div>
    </div>
  );
};
