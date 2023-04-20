import React from "react";
import { Card } from "../Card";
import { RenderSvg } from "../RenderSvg";
import { svgIcon } from "../../../constants/svgIcon";
import "../AddFiles/addfiles.scss";
import { downloading, folders } from "../../../constants/data";
import ProgressBar from "../../common/ProgressBar";
import { CircleAvatar } from "../../common/CircleAvatar";

export const AddFiles = () => {
  return (
    <Card
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card className="firstCard" disabled={false}>
        <RenderSvg className={`image-cloud`} imgString={svgIcon.upload} />
        <h1>Add new files</h1>
      </Card>

      <Card className="secondCard" disabled={false}>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "10px",
              }}
              className="yourStorage"
            >
              <span>Your Storage</span>
              <span>{25}% Left</span>
            </div>
            <span style={{ fontSize: 15 }}>75 of 100 Gb are used</span>
            <ProgressBar bgcolor="#266fd5" progress={65} height={5} />
          </div>
        </div>
      </Card>

      <Card className="thirdCard" disabled={false}>
        <h2 className="title">Your Shared Folders</h2>
        {folders.map((obj) => {
          const { user1, user2 } = obj.img;
          return (
            <Card className={`innerThirdCard-${obj.id}`} disabled={false}>
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                    className="yourStorage"
                  >
                    <span>{obj.title}</span>
                    <div
                      style={{
                        flexDirection: "row",
                        display: "flex",
                      }}
                    >
                      <CircleAvatar className="avatar1" img={user1} />
                      <CircleAvatar className="avatar2" img={user2} />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}

        <button className="chooseBtn">
          <span>+ Add more</span>
        </button>
      </Card>
    </Card>
  );
};
